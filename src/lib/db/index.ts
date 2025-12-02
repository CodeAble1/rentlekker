import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schemas";
import { env } from "$env/dynamic/private";

if (!env.DATABASE_URL) throw new Error("DATABASE_URL is not set");

const client = neon(env.DATABASE_URL);

export const db = drizzle(client, { schema });

// Test connection function
export async function testConnection() {
  try {
    const result = await db.execute(/* raw SQL */ `SELECT 1`);
    console.log("Connection successful:", result);
    return true;
  } catch (error) {
    console.error("Connection failed:", error);
    return false;
  }
}
