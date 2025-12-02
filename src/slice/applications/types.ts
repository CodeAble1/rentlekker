import { z } from "zod";
import {
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";

import { applications } from "$lib/db/schemas/applications";
import { findByIdSchema } from "$lib/utils";

export const applicationDataSchema = z.object({
  personal: z.object({
    fullName: z.string().min(1),
    phone: z.string().min(7),
    email: z.email(),
    idNumber: z.string().min(5),        // SA ID/passport works
  }),

  employment: z.object({
    employmentStatus: z.enum([
      "EMPLOYED",
      "SELF_EMPLOYED",
      "UNEMPLOYED",
      "STUDENT",
    ]),
    employerName: z.string().optional(),
    jobTitle: z.string().optional(),
    monthlyIncome: z.number().optional(),
  }),

  rentalHistory: z.object({
    currentAddress: z.string().optional(),
    reasonForMoving: z.string().optional(),
    previousLandlordName: z.string().optional(),
    previousLandlordPhone: z.string().optional(),
  }).optional(),

  references: z.array(
    z.object({
      name: z.string(),
      phone: z.string(),
      relation: z.string().optional(),
    })
  ).optional(),

  extra: z.object({
    pets: z.boolean().optional(),
    smokers: z.boolean().optional(),
    occupants: z.number().optional(),
    messageToLandlord: z.string().optional(),
  }).optional(),

  attachments: z.object({
    idDocument: z.url().optional(),
    payslip: z.url().optional(),
    bankStatements: z.url().optional(),
  }).optional(),
});


// Schemas
const ApplicationSchema = createSelectSchema(applications);
export const createApplicationSchema = z.object({
  tenantId: z.number(),
  listingId: z.number(),
  landlordId: z.number(),
  status: z.enum(["SUBMITTED", "PENDING", "CREATED", "APPROVED", "REJECTED"]).default("CREATED"),
})
export const getApplicationSchema = findByIdSchema('id');
export const getApplicationsByListingIdSchema = findByIdSchema('listingId');
export const getApplicationByTenantIdSchema = findByIdSchema('tenantId');
export const updateApplicationSchema = findByIdSchema('id').extend(createUpdateSchema(applications));
export const deleteApplicationSchema = findByIdSchema('id');
// Types
export type Application = z.infer<typeof ApplicationSchema>;