import {
  integer,
  pgEnum,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { properties } from "./properties";
import { relations } from "drizzle-orm";

export const listingStatusEnum = pgEnum("listing_status", [
  "ACTIVE",
  "INACTIVE",
  "RENTED",
]);

export const listings = pgTable("listings", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id").notNull().references(() => properties.id),
  rent: integer("rent").notNull(),
  status: listingStatusEnum("status").notNull().default("ACTIVE"),
  availableFrom: timestamp("available_from").notNull(),
  description: varchar("description", { length: 1024 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const listingRelations = relations(listings, ({ one }) => ({
  property: one(properties, {
    fields: [listings.propertyId],
    references: [properties.id],
  }),
}));
