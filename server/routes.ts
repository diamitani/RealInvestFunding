import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertLeadSchema, insertChatLogSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";
import { sendLeadNotificationEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for lead submissions from the contact form or chatbot
  app.post("/api/leads", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = insertLeadSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const validationError = fromZodError(validatedData.error);
        return res.status(400).json({ 
          message: "Invalid lead data", 
          errors: validationError.details 
        });
      }
      
      // Create the lead in storage
      const lead = await storage.createLead(validatedData.data);
      
      // Send email notification (asynchronously - we don't need to wait for the email to be sent)
      sendLeadNotificationEmail(lead)
        .then(emailSent => {
          if (emailSent) {
            console.log(`Email notification sent for lead ${lead.id}`);
          } else {
            console.warn(`Failed to send email notification for lead ${lead.id}`);
          }
        })
        .catch(error => {
          console.error(`Error sending email notification for lead ${lead.id}:`, error);
        });
      
      return res.status(201).json({ 
        message: "Lead created successfully",
        leadId: lead.id
      });
    } catch (error) {
      console.error("Error creating lead:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // API route to save chat logs
  app.post("/api/chat-logs", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const validatedData = insertChatLogSchema.safeParse(req.body);
      
      if (!validatedData.success) {
        const validationError = fromZodError(validatedData.error);
        return res.status(400).json({ 
          message: "Invalid chat log data", 
          errors: validationError.details 
        });
      }
      
      // Create the chat log in storage
      const chatLog = await storage.createChatLog(validatedData.data);
      
      return res.status(201).json({ 
        message: "Chat log created successfully",
        chatLogId: chatLog.id
      });
    } catch (error) {
      console.error("Error saving chat log:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // API route to get chat logs for a specific lead
  app.get("/api/leads/:leadId/chat-logs", async (req: Request, res: Response) => {
    try {
      const leadIdParam = z.string().transform(val => parseInt(val, 10)).safeParse(req.params.leadId);
      
      if (!leadIdParam.success) {
        return res.status(400).json({ message: "Invalid lead ID" });
      }
      
      const leadId = leadIdParam.data;
      
      // Check if the lead exists
      const lead = await storage.getLeadById(leadId);
      
      if (!lead) {
        return res.status(404).json({ message: "Lead not found" });
      }
      
      // Get chat logs for the lead
      const chatLogs = await storage.getChatLogsByLeadId(leadId);
      
      return res.status(200).json(chatLogs);
    } catch (error) {
      console.error("Error retrieving chat logs:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // API route to get all leads (for admin purposes)
  app.get("/api/leads", async (req: Request, res: Response) => {
    try {
      const leads = await storage.getAllLeads();
      return res.status(200).json(leads);
    } catch (error) {
      console.error("Error retrieving leads:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
