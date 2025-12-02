import {
  pgEnum,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["ADMIN", "LANDLORD", "TENANT"]);

export const isVerifiedEnum = pgEnum("is_verified", ["TRUE", "FALSE"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  auth_id: varchar("auth_id", { length: 256 }).notNull().unique(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  role: roleEnum("role").notNull().default("TENANT"),
  isVerified: isVerifiedEnum("is_verified").notNull().default("FALSE"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
