import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactEmails } from "./email-service";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(1, "Message is required"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      const result = await sendContactEmails(validatedData);
      
      if (result.success) {
        res.json({ 
          success: true, 
          message: "Your message has been sent successfully! We'll get back to you within 24 hours." 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          error: result.error || "Failed to send email. Please try again or contact us directly." 
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          error: error.errors[0].message 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          error: "An unexpected error occurred. Please try again later." 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
