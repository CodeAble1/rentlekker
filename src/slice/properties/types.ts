import { z } from "zod";
import {
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

import { properties } from "$lib/db/schemas/properties";

import { findByIdSchema } from "$lib/utils";


// Schemas
export const getPropertySchema = findByIdSchema('id');
export const getPropertiesByLandlordIdSchema = findByIdSchema('landlordId');
export const updatePropertySchema = createUpdateSchema(properties);
export const selectPropertySchema = createSelectSchema(properties);
export const createPropertySchema = z.object({ landlordId: z.number(), });
export const deletePropertySchema = findByIdSchema('id');

// TypeScript DTOs + Domain Types
export type Property = z.infer<typeof selectPropertySchema>;
export type CreatePropertyDTO = z.infer<typeof createPropertySchema>;
export type UpdatePropertyDTO = z.infer<typeof updatePropertySchema>;
