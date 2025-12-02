import { z } from "zod";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

import { listings } from "$lib/db/schemas/listings";

// Base Zod schemas derived from Drizzle
export const createListingSchema = createInsertSchema(listings);
export const updateListingSchema = createUpdateSchema(listings);
export const selectListingSchema = createSelectSchema(listings);

// TypeScript DTOs + Domain Types
export type Listing = z.infer<typeof selectListingSchema>;
export type CreateListingDTO = z.infer<typeof createListingSchema>;
export type UpdateListingDTO = z.infer<typeof updateListingSchema>;
