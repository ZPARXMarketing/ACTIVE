import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertConsultationSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Create email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER || 'your-email@gmail.com',
      pass: process.env.EMAIL_PASSWORD || 'your-app-password'
    }
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store contact submission
      const contact = await storage.createContactSubmission(validatedData);
      
      // Send email notification
      const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: 'Zparxmarketing@gmail.com',
        subject: `New Contact Form Submission - ${validatedData.firstName} ${validatedData.lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${validatedData.company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${validatedData.service || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message}</p>
          <hr>
          <p><small>Submitted on: ${new Date().toLocaleString()}</small></p>
        `
      };

      await transporter.sendMail(mailOptions);
      
      res.json({ message: "Contact form submitted successfully", id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        console.error("Error processing contact form:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get contact submissions endpoint (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContactSubmissions();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Track offer page interactions
  app.post("/api/track-offer", async (req, res) => {
    try {
      const { offerType, planName, price, action } = req.body;
      
      // Send email notification to track which offers are getting engagement
      const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: 'Zparxmarketing@gmail.com',
        subject: `🎯 Offer Page Activity - ${offerType}`,
        html: `
          <h2>New Offer Page Activity</h2>
          <p><strong>Offer Type:</strong> ${offerType}</p>
          <p><strong>Action:</strong> ${action}</p>
          ${planName ? `<p><strong>Plan Selected:</strong> ${planName}</p>` : ''}
          ${price ? `<p><strong>Price:</strong> ${price}</p>` : ''}
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
          <hr>
          <p><small>This prospect showed interest in your ${offerType} service</small></p>
        `
      };

      await transporter.sendMail(mailOptions);
      
      res.json({ message: "Offer interaction tracked successfully" });
    } catch (error) {
      console.error("Error tracking offer interaction:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Consultation booking endpoint
  app.post("/api/book-consultation", async (req, res) => {
    try {
      // Validate request body
      const validatedData = insertConsultationSchema.parse(req.body);
      
      // Store consultation booking
      const booking = await storage.createConsultationBooking(validatedData);
      
      // Send email notification for consultation booking
      const mailOptions = {
        from: process.env.EMAIL_USER || 'your-email@gmail.com',
        to: 'Zparxmarketing@gmail.com',
        subject: `New Consultation Booking - ${validatedData.firstName} ${validatedData.lastName}`,
        html: `
          <h2>New Consultation Booking for Lead Generation Service</h2>
          <p><strong>Name:</strong> ${validatedData.firstName} ${validatedData.lastName}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone}</p>
          <p><strong>Company:</strong> ${validatedData.company}</p>
          <p><strong>Industry:</strong> ${validatedData.industry}</p>
          <p><strong>Current Lead Volume:</strong> ${validatedData.currentLeads}</p>
          <p><strong>Preferred Meeting Time:</strong> ${validatedData.preferredTime}</p>
          <hr>
          <p><strong>Service:</strong> Lead Generation with Calendar Filling</p>
          <p><strong>Guarantee:</strong> 10+ leads per month or money back</p>
          <p><small>Booked on: ${new Date().toLocaleString()}</small></p>
        `
      };

      await transporter.sendMail(mailOptions);
      
      res.json({ message: "Consultation booked successfully", id: booking.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Validation error", errors: error.errors });
      } else {
        console.error("Error processing consultation booking:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Get consultation bookings endpoint (for admin purposes)
  app.get("/api/consultations", async (req, res) => {
    try {
      const bookings = await storage.getConsultationBookings();
      res.json(bookings);
    } catch (error) {
      console.error("Error fetching consultation bookings:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
