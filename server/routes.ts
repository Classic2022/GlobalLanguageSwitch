import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendContactNotification } from "./mailjet";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, message, services } = req.body;
      
      // Validate input
      if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: "Name, email and message are required" });
      }
      
      // Send email notification using Mailjet
      const emailSent = await sendContactNotification({
        name,
        email,
        phone,
        message,
        services
      });

      if (emailSent) {
        return res.status(200).json({ 
          success: true,
          message: "Message received successfully. You will be contacted shortly."
        });
      } else {
        // Even if the email fails, acknowledge receipt to user
        console.warn("Contact form received but email notification failed");
        return res.status(200).json({ 
          success: true,
          message: "Message received successfully. You will be contacted shortly."
        });
      }
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ success: false, message: "An error occurred. Please try again later." });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
