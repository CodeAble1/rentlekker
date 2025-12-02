import { query, command } from '$app/server';
import { db } from '$lib/db';
import { properties } from '$lib/db/schemas/properties';
import { eq } from 'drizzle-orm';
import type { Property } from './types';
import {
    createPropertySchema,
    updatePropertySchema,
    getPropertySchema,
    getPropertiesByLandlordIdSchema,
    deletePropertySchema
} from './types';

// Get all properties
export const getProperties = query(async () => {
    const props = await db.select().from(properties);
    return props as Property[];
});

// Get property by ID
export const getPropertyById = query(getPropertySchema, async ({ id }) => {
    const prop = await db
        .select()
        .from(properties)
        .where(eq(properties.id, id))
        .limit(1);
    return prop[0] ?? undefined;
});

// Get properties by landlord ID
export const getPropertiesByLandlordId = query(getPropertiesByLandlordIdSchema, async ({ landlordId }) => {
    const props = await db
        .select()
        .from(properties)
        .where(eq(properties.landlordId, landlordId));
    return props as Property[];
});

// // Create a new property
// export const createProperty = command(createPropertySchema, async (data) => {
//     const newProp = await db
//         .insert(properties)
//         .values(data)
//         .returning();
//     return newProp[0] as Property;
// });

// // Update a property by ID
// export const updatePropertyById = command(updatePropertySchema, async ({ id, ...data }) => {
//     const updatedProp = await db
//         .update(properties)
//         .set(data)
//         .where(eq(properties.id, id))
//         .returning();
//     return updatedProp[0] as Property;
// });

// Delete a property by ID
export const deletePropertyById = command(deletePropertySchema, async ({ id }) => {
    await db.delete(properties).where(eq(properties.id, id));
    return true;
});
