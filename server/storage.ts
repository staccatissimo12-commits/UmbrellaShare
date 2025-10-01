import { 
  users, 
  rentalApplications,
  advertiserApplications,
  type User, 
  type InsertUser,
  type RentalApplication,
  type InsertRentalApplication,
  type AdvertiserApplication,
  type InsertAdvertiserApplication
} from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // 우산 대여 신청 관련
  createRentalApplication(application: InsertRentalApplication): Promise<RentalApplication>;
  getAllRentalApplications(): Promise<RentalApplication[]>;
  
  // 광고주 신청 관련
  createAdvertiserApplication(application: InsertAdvertiserApplication): Promise<AdvertiserApplication>;
  getAllAdvertiserApplications(): Promise<AdvertiserApplication[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
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

  async createRentalApplication(application: InsertRentalApplication): Promise<RentalApplication> {
    const [rental] = await db
      .insert(rentalApplications)
      .values(application)
      .returning();
    return rental;
  }

  async getAllRentalApplications(): Promise<RentalApplication[]> {
    return await db
      .select()
      .from(rentalApplications)
      .orderBy(desc(rentalApplications.createdAt));
  }

  async createAdvertiserApplication(application: InsertAdvertiserApplication): Promise<AdvertiserApplication> {
    const [advertiser] = await db
      .insert(advertiserApplications)
      .values(application)
      .returning();
    return advertiser;
  }

  async getAllAdvertiserApplications(): Promise<AdvertiserApplication[]> {
    return await db
      .select()
      .from(advertiserApplications)
      .orderBy(desc(advertiserApplications.createdAt));
  }
}

export const storage = new DatabaseStorage();
