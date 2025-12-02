import { query, command } from '$app/server';
import { db } from '$lib/db';
import { applications } from '$lib/db/schemas/applications';
import { eq } from 'drizzle-orm';
import type { Application } from './types';
import {
  createApplicationSchema,
  updateApplicationSchema,
  getApplicationSchema,
  deleteApplicationSchema,
  getApplicationsByListingIdSchema,
  getApplicationByTenantIdSchema
} from './types'

// Get all applications
export const getApplications = query(async () => {
  const apps = await db
    .select()
    .from(applications);
  return apps as Application[];
});


// Get application by ID
export const getApplicationById = query(getApplicationSchema, async ({ id }) => {
  const app = await db
    .select()
    .from(applications)
    .where(eq(applications.id, id))
    .limit(1)
  return app[0] ?? undefined;
});


// Get applications by listing ID
export const getApplicationsByListingId = query(getApplicationsByListingIdSchema, async ({ listingId }) => {
  const apps = await db
    .select()
    .from(applications)
    .where(eq(applications.listingId, listingId));
  return apps as Application[];
});


// Get application by tenant ID
export const getApplicationByTenantId = query(getApplicationByTenantIdSchema, async ({ tenantId }) => {
  const app = await db
    .select()
    .from(applications)
    .where(eq(applications.tenantId, tenantId))
    .limit(1);
  return app[0] ?? undefined;
});



// Delete an application by ID
export const deleteApplicationById = command(deleteApplicationSchema, async ({ id }) => {
  await db
    .delete(applications)
    .where(eq(applications.id, id));
  return true;
});



// Update application by ID 
export const updateApplicationById = command(updateApplicationSchema, async ({ id, ...data }) => {
  const updatedApp = await db
    .update(applications)
    .set(data)
    .where(eq(applications.id, id))
    .returning();
  return updatedApp[0] as Application;
});

// Create a new application
export const createApplication = command(createApplicationSchema, async (data) => {
  const newApp = await db
    .insert(applications)
    .values(data)
    .returning();
  return newApp[0] as Application;
});
