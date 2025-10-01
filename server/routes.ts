import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertRentalApplicationSchema, insertAdvertiserApplicationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // 우산 대여 신청 생성
  app.post("/api/rental-applications", async (req, res) => {
    try {
      const validatedData = insertRentalApplicationSchema.parse(req.body);
      const rental = await storage.createRentalApplication(validatedData);
      res.json(rental);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // 우산 대여 신청 목록 조회
  app.get("/api/rental-applications", async (req, res) => {
    try {
      const rentals = await storage.getAllRentalApplications();
      res.json(rentals);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  // 광고주 신청 생성
  app.post("/api/advertiser-applications", async (req, res) => {
    try {
      const validatedData = insertAdvertiserApplicationSchema.parse(req.body);
      const advertiser = await storage.createAdvertiserApplication(validatedData);
      res.json(advertiser);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  });

  // 광고주 신청 목록 조회
  app.get("/api/advertiser-applications", async (req, res) => {
    try {
      const advertisers = await storage.getAllAdvertiserApplications();
      res.json(advertisers);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
