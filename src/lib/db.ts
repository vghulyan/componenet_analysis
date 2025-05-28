// lib/db.ts

import { readFileSync, writeFileSync, existsSync } from "fs";
import initSqlJs, { Database } from "sql.js";
import { PrismaClient } from "@prisma/client";
import path from "path";

const DB_PROVIDER = process.env.DB_PROVIDER || "prisma";
console.log("\n\n\n*********DB_PROVIDER", DB_PROVIDER);

let prisma: PrismaClient | null = null;
let sqljsDb: Database | null = null;

export async function getDb() {
  if (DB_PROVIDER === "sqljs") {
    if (!sqljsDb) {
      const WASM_PATH = path.resolve("node_modules/sql.js/dist/sql-wasm.wasm");
      const SQL = await initSqlJs({ locateFile: () => WASM_PATH });
      const dbPath = "sqljs.db";
      const buffer = existsSync(dbPath) ? readFileSync(dbPath) : undefined;
      sqljsDb = buffer ? new SQL.Database(buffer) : new SQL.Database();

      // optional: create tables if fresh
      sqljsDb.run(`
        CREATE TABLE IF NOT EXISTS Project (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT UNIQUE,
          repoUrl TEXT,
          createdAt TEXT DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS ComponentUsage (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          component TEXT, file TEXT, count INT, total INT, projectId INT
        );

        CREATE TABLE IF NOT EXISTS PropUsage (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          component TEXT, file TEXT, prop TEXT, projectId INT
        );

        CREATE TABLE IF NOT EXISTS UnusedComponent (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT, projectId INT
        );
      `);
    }
    return { type: "sqljs", db: sqljsDb };
  }

  // Prisma
  if (!prisma) {
    prisma = new PrismaClient();
  }
  return { type: "prisma", db: prisma };
}

export async function saveSqljsDb() {
  if (sqljsDb) {
    const data = sqljsDb.export();
    writeFileSync("sqljs.db", Buffer.from(data));
  }
}
