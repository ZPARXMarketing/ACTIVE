import { users, contactSubmissions, leadCaptureSubmissions, consultationBookings, type User, type InsertUser, type ContactSubmission, type InsertContact, type LeadCaptureSubmission, type InsertLeadCapture, type ConsultationBooking, type InsertConsultation } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createLeadCaptureSubmission(leadCapture: InsertLeadCapture): Promise<LeadCaptureSubmission>;
  getLeadCaptureSubmissions(): Promise<LeadCaptureSubmission[]>;
  createConsultationBooking(booking: InsertConsultation): Promise<ConsultationBooking>;
  getConsultationBookings(): Promise<ConsultationBooking[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private leadCaptureSubmissions: Map<number, LeadCaptureSubmission>;
  private consultationBookings: Map<number, ConsultationBooking>;
  private currentUserId: number;
  private currentContactId: number;
  private currentLeadCaptureId: number;
  private currentConsultationId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.leadCaptureSubmissions = new Map();
    this.consultationBookings = new Map();
    this.currentUserId = 1;
    this.currentContactId = 1;
    this.currentLeadCaptureId = 1;
    this.currentConsultationId = 1;
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

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = this.currentContactId++;
    const contact: ContactSubmission = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contactSubmissions.set(id, contact);
    return contact;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createLeadCaptureSubmission(insertLeadCapture: InsertLeadCapture): Promise<LeadCaptureSubmission> {
    const id = this.currentLeadCaptureId++;
    const leadCapture: LeadCaptureSubmission = { 
      ...insertLeadCapture, 
      id,
      createdAt: new Date()
    };
    this.leadCaptureSubmissions.set(id, leadCapture);
    return leadCapture;
  }

  async getLeadCaptureSubmissions(): Promise<LeadCaptureSubmission[]> {
    return Array.from(this.leadCaptureSubmissions.values());
  }

  async createConsultationBooking(insertBooking: InsertConsultation): Promise<ConsultationBooking> {
    const id = this.currentConsultationId++;
    const booking: ConsultationBooking = { 
      ...insertBooking, 
      id,
      createdAt: new Date()
    };
    this.consultationBookings.set(id, booking);
    return booking;
  }

  async getConsultationBookings(): Promise<ConsultationBooking[]> {
    return Array.from(this.consultationBookings.values());
  }
}

export const storage = new MemStorage();
