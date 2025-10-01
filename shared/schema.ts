import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// 우산 대여 신청 테이블
export const rentalApplications = pgTable("rental_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  rentalDate: text("rental_date").notNull(),
  returnDate: text("return_date").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  department: text("department").notNull(),
  studentId: text("student_id").notNull(),
  phone: text("phone").notNull(),
  status: text("status").notNull().default("대여중"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertRentalApplicationSchema = createInsertSchema(rentalApplications).omit({
  id: true,
  createdAt: true,
});

export type InsertRentalApplication = z.infer<typeof insertRentalApplicationSchema>;
export type RentalApplication = typeof rentalApplications.$inferSelect;

// 광고주 신청 테이블
export const advertiserApplications = pgTable("advertiser_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  ceoName: text("ceo_name").notNull(),
  phone: text("phone").notNull(),
  email: text("email").notNull(),
  status: text("status").notNull().default("검토중"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertAdvertiserApplicationSchema = createInsertSchema(advertiserApplications).omit({
  id: true,
  createdAt: true,
});

export type InsertAdvertiserApplication = z.infer<typeof insertAdvertiserApplicationSchema>;
export type AdvertiserApplication = typeof advertiserApplications.$inferSelect;
