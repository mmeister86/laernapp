import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL ist nicht gesetzt");
}

// Single connection for server runtime (Next.js RSC)
const client = postgres(databaseUrl, {
  prepare: false,
  max: 1,
  idle_timeout: 20,
});

export const db = drizzle(client, { schema });
