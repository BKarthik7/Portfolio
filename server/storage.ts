import { contactMessages, type ContactMessage, type InsertContactMessage } from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  getAllContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private contactMessages: Map<number, ContactMessage>;
  private contactMessageCurrentId: number;

  constructor() {
    this.contactMessages = new Map();
    this.contactMessageCurrentId = 1;
  }

  async getAllContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageCurrentId++;
    const createdAt = new Date();
    
    const newMessage: ContactMessage = {
      id,
      ...message,
      createdAt,
    };
    
    this.contactMessages.set(id, newMessage);
    return newMessage;
  }
}

// Export a singleton instance of the storage
export const storage = new MemStorage();
