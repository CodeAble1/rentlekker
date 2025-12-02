import {
  integer,
  pgEnum,
  pgTable,
  serial,
  timestamp,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { properties } from "./properties";
import { users } from "./users";

export const leaseStatusEnum = pgEnum("listing_status", [
  "ACTIVE",
  "TERMINATED",
  "EXPIRED",
]);

export const leases = pgTable("listings", {
  id: serial("id").primaryKey(),
  propertyId: integer("property_id").notNull().references(() => properties.id),
  tenantId: integer("tenant_id").notNull().references(() => users.id),
  landlordId: integer("landlord_id").notNull().references(() => users.id),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  rent: integer("rent").notNull(),
  signedByTenant: integer("signed_by_tenant").notNull().default(0),
  signedByLandlord: integer("signed_by_landlord").notNull().default(0),
  status: leaseStatusEnum("status").notNull().default("ACTIVE"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const leaseRelations = relations(leases, ({ one }) => ({
  property: one(properties, {
    fields: [leases.propertyId],
    references: [properties.id],
  }),
  tenant: one(users, {
    fields: [leases.tenantId],
    references: [users.id],
  }),
  landlord: one(users, {
    fields: [leases.landlordId],
    references: [users.id],
  }),
}));
