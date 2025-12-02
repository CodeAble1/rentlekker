import { testConnection } from "$lib/db";
import { json } from "@sveltejs/kit";

export async function GET() {
  const isConnected = await testConnection();
  return json({ connected: isConnected });
}
