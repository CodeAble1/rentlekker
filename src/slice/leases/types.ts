import { z } from "zod";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { leases } from "$lib/db/schemas/leases";

// Base Zod schemas derived from Drizzle
const createLeaseSchema = createInsertSchema(leases);
const updateLeaseSchema = createUpdateSchema(leases);
const selectLeaseSchema = createSelectSchema(leases);

// TypeScript DTOs + Domain Types
export type Lease = z.infer<typeof selectLeaseSchema>;
export type createlLeaseDTO = z.infer<typeof createLeaseSchema>;
export type updatelLeaseDTO = z.infer<typeof updateLeaseSchema>;
