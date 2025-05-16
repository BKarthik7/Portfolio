import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body against schema
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.createContactMessage(validatedData);
      
      // Return success response
      res.status(201).json({
        success: true,
        message: "Message received successfully",
        data: message
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Format validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: validationError.message
        });
      }
      
      // General error
      console.error("Error processing contact message:", error);
      res.status(500).json({
        success: false,
        message: "An error occurred while processing your message"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
