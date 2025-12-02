import {
  integer,
  pgEnum,
  pgTable,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { users } from "./users";

export const propertyTypeEnum = pgEnum("property_type", [
  "APARTMENT",
  "HOUSE",
  "STUDIO",
]);

export const amenitiesEnum = pgEnum("amenities", [
  "POOL",
  "GYM",
  "PARKING",
  "WIFI",
  "AIR_CONDITIONING",
]);

export const properties = pgTable("properties", {
  id: serial("id").primaryKey(),
  landlordId: integer("landlord_id").notNull().references(() => users.id),
  address: varchar("address", { length: 512 }).notNull(),
  city: varchar("city", { length: 256 }).notNull(),
  province: varchar("province", { length: 256 }).notNull(),
  size: integer("size").notNull(),
  type: propertyTypeEnum("type").notNull(),
  bedrooms: integer("bedrooms").notNull(),
  bathrooms: integer("bathrooms").notNull(),
  amenities: amenitiesEnum("amenities").array(),
  isFurnished: integer("is_furnished").notNull().default(0),
  isPetfriendly: integer("is_petfriendly").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
