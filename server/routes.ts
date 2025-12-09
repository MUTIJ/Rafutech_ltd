import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Email notification (logged for MVP - integrate with email service in production)
      console.log("\n--- New Contact Inquiry ---");
      console.log(`From: ${inquiry.name} (${inquiry.email})`);
      console.log(`Service Interest: ${inquiry.serviceInterest}`);
      console.log(`Message: ${inquiry.message}`);
      console.log(`Submitted: ${inquiry.submittedAt}`);
      console.log("--- End of Inquiry ---\n");
      
      // TODO: Integrate with email service (e.g., SendGrid, AWS SES, Nodemailer with SMTP)
      // await sendEmailNotification({
      //   to: process.env.CONTACT_EMAIL || "contact@rafutech.com",
      //   subject: `New Contact Inquiry: ${inquiry.serviceInterest}`,
      //   text: `Name: ${inquiry.name}\nEmail: ${inquiry.email}\nService: ${inquiry.serviceInterest}\nMessage: ${inquiry.message}`,
      // });
      
      res.json({
        success: true,
        message: "Contact inquiry submitted successfully",
        data: inquiry,
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: "Failed to submit inquiry",
        error: error.message,
      });
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      res.json({
        success: true,
        data: inquiries,
      });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        message: "Failed to fetch inquiries",
        error: error.message,
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
