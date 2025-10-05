import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/drizzle/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "",
  },
  tablesFilter: ["laernapp_*"],
} satisfies Config;
