// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

let _prisma: PrismaClient | null = null;

export function getPrisma(): PrismaClient {
  if (_prisma) return _prisma;

  try {
    _prisma = new PrismaClient();
    return _prisma;
  } catch (e: unknown) {
    // Wrap the underlying error in a friendlier message
    throw new Error(
      '@prisma/client did not initialize yet. Please run "npx prisma generate" ' +
        "and ensure your database is migrated (`npx prisma migrate dev`). " +
        (e instanceof Error ? `\n\n${e.message}` : "")
    );
  }
}
