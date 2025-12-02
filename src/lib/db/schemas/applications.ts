import {
  integer,
  json,
  pgEnum,
  pgTable,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";
import { users } from "./users";
import { listings } from "./listings";
import { relations } from "drizzle-orm";

export const applicationStatusEnum = pgEnum("application_status", [
  "SUBMITTED",
  "PENDING",
  "CREATED",
  "APPROVED",
  "REJECTED",
]);

export const applications = pgTable("applications", {
  id: serial("id").primaryKey(),
  tenantId: integer("tenant_id").notNull().references(() => users.id),
  listingId: integer("listing_id").notNull().references(() => listings.id),
  landlordId: integer("landlord_id").notNull().references(() => users.id),
  status: applicationStatusEnum("status").notNull().default("CREATED"),
  info: json("info"),
  submittedAt: timestamp("submitted_at"),
  reviewedAt: timestamp("reviewed_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const applicationRelations = relations(applications, ({ one }) => ({
  tenant: one(users, {
    fields: [applications.tenantId],
    references: [users.id],
  }),
  landlord: one(users, {
    fields: [applications.landlordId],
    references: [users.id],
  }),
  listing: one(listings, {
    fields: [applications.listingId],
    references: [listings.id],
  }),
}));
