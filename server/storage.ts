import { users, type User, type InsertUser, leads, type Lead, type InsertLead, chatLogs, type ChatLog, type InsertChatLog } from "@shared/schema";

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

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private leadsData: Map<number, Lead>;
  private chatLogsData: Map<number, ChatLog>;
  private currentUserId: number;
  private currentLeadId: number;
  private currentChatLogId: number;

  constructor() {
    this.users = new Map();
    this.leadsData = new Map();
    this.chatLogsData = new Map();
    this.currentUserId = 1;
    this.currentLeadId = 1;
    this.currentChatLogId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Lead related methods
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = this.currentLeadId++;
    const now = new Date();
    const lead: Lead = { 
      ...insertLead, 
      id,
      propertyAddress: insertLead.propertyAddress || null,
      loanAmount: insertLead.loanAmount || null,
      message: insertLead.message || null,
      createdAt: now
    };
    this.leadsData.set(id, lead);
    return lead;
  }
  
  async getLeadById(id: number): Promise<Lead | undefined> {
    return this.leadsData.get(id);
  }
  
  async getAllLeads(): Promise<Lead[]> {
    return Array.from(this.leadsData.values());
  }
  
  // Chat log related methods
  async createChatLog(insertChatLog: InsertChatLog): Promise<ChatLog> {
    const id = this.currentChatLogId++;
    const now = new Date();
    const chatLog: ChatLog = {
      ...insertChatLog,
      id,
      timestamp: now
    };
    this.chatLogsData.set(id, chatLog);
    return chatLog;
  }
  
  async getChatLogsByLeadId(leadId: number): Promise<ChatLog[]> {
    return Array.from(this.chatLogsData.values())
      .filter(chatLog => chatLog.leadId === leadId)
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }
}

export const storage = new MemStorage();
