import { users, type User, type InsertUser, leads, type Lead, type InsertLead, chatLogs, type ChatLog, type InsertChatLog } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Lead related methods
  createLead(lead: InsertLead): Promise<Lead>;
  getLeadById(id: number): Promise<Lead | undefined>;
  getAllLeads(): Promise<Lead[]>;
  
  // Chat log related methods
  createChatLog(chatLog: InsertChatLog): Promise<ChatLog>;
  getChatLogsByLeadId(leadId: number): Promise<ChatLog[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Lead related methods
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const [lead] = await db
      .insert(leads)
      .values({
        fullName: insertLead.fullName,
        email: insertLead.email,
        phone: insertLead.phone,
        investmentType: insertLead.investmentType,
        service: insertLead.service || null,
        propertyAddress: insertLead.propertyAddress || null,
        loanAmount: insertLead.loanAmount || null,
        message: insertLead.message || null
      })
      .returning();
    return lead;
  }
  
  async getLeadById(id: number): Promise<Lead | undefined> {
    const [lead] = await db.select().from(leads).where(eq(leads.id, id));
    return lead || undefined;
  }
  
  async getAllLeads(): Promise<Lead[]> {
    return await db.select().from(leads).orderBy(leads.createdAt);
  }
  
  // Chat log related methods
  async createChatLog(insertChatLog: InsertChatLog): Promise<ChatLog> {
    const [chatLog] = await db
      .insert(chatLogs)
      .values({
        leadId: insertChatLog.leadId || null,
        message: insertChatLog.message,
        isUser: insertChatLog.isUser
      })
      .returning();
    return chatLog;
  }
  
  async getChatLogsByLeadId(leadId: number): Promise<ChatLog[]> {
    return await db
      .select()
      .from(chatLogs)
      .where(eq(chatLogs.leadId, leadId))
      .orderBy(chatLogs.timestamp);
  }
}

// Using the DatabaseStorage implementation instead of MemStorage
export const storage = new DatabaseStorage();
