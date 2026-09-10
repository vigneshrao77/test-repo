require("dotenv").config();

const path = require("path");
const express = require("express");

// ==============================================================================
// 1. DATABASE CLIENT SETUP
// ==============================================================================

// --- PRESERVED POSTGRESQL CODE (DO NOT REMOVE) ---
// const { Pool } = require("pg");
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: process.env.NODE_ENV === "production"
//     ? { rejectUnauthorized: false }
//     : false
// });

// --- SUPABASE CLIENT SETUP ---
const { createClient } = require("@supabase/supabase-js");

let rawSupabaseUrl = process.env.SUPABASE_URL || "";
// Normalize URL in case /rest/v1 or trailing slash was included
const supabaseUrl = rawSupabaseUrl.replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");
const supabaseKey = (process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || "").trim();

if (!supabaseUrl || !supabaseKey) {
  console.warn("⚠️  WARNING: SUPABASE_URL or SUPABASE_KEY is missing in your .env file.");
  console.warn("   Please set them up in your .env file to enable Supabase database operations.");
}

const supabase = createClient(
  supabaseUrl || "https://placeholder-url.supabase.co",
  supabaseKey || "placeholder-key"
);

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// ==============================================================================
// 2. DATABASE INITIALIZATION / CHECKS
// ==============================================================================

// --- PRESERVED POSTGRESQL CODE (DO NOT REMOVE) ---
// async function initializeDatabase() {
//   await pool.query(`
//     CREATE TABLE IF NOT EXISTS users (
//       id SERIAL PRIMARY KEY,
//       name VARCHAR(100) NOT NULL,
//       email VARCHAR(255) NOT NULL UNIQUE,
//       created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
//     )
//   `);
// }

// --- SUPABASE CONNECTION CHECK ---
async function checkDatabaseConnection() {
  if (!supabaseUrl || !supabaseKey) {
    console.log("ℹ️  Supabase credentials not configured yet. Server will start, but database queries will require .env setup.");
    return;
  }

  try {
    const { error } = await supabase.from("users").select("id").limit(1);
    if (error) {
      console.warn("⚠️  Could not query 'users' table in Supabase:", error.message);
      console.warn("   Make sure you created the 'users' table in Supabase SQL Editor (see supabase_setup.sql).");
    } else {
      console.log("✅ Connected to Supabase successfully.");
    }
  } catch (err) {
    console.warn("⚠️  Supabase connection error:", err.message);
  }
}

// ==============================================================================
// 3. API ROUTES
// ==============================================================================

// Health check endpoint
app.get("/api/health", async (request, response, next) => {
  /* --- PRESERVED POSTGRESQL CODE (DO NOT REMOVE) ---
  try {
    await pool.query("SELECT 1");
    response.json({ connected: true });
  } catch (error) {
    next(error);
  }
  -------------------------------------------------- */

  // --- SUPABASE IMPLEMENTATION ---
  try {
    if (!supabaseUrl || !supabaseKey) {
      return response.status(503).json({
        connected: false,
        provider: "supabase",
        error: "Supabase credentials are not configured in .env"
      });
    }

    const { error } = await supabase.from("users").select("id").limit(1);
    if (error) {
      return response.status(503).json({
        connected: false,
        provider: "supabase",
        error: error.message
      });
    }

    response.json({ connected: true, provider: "supabase" });
  } catch (error) {
    next(error);
  }
});

// Get all users ordered by creation date descending
app.get("/api/users", async (request, response, next) => {
  /* --- PRESERVED POSTGRESQL CODE (DO NOT REMOVE) ---
  try {
    const result = await pool.query(
      "SELECT id, name, email, created_at FROM users ORDER BY created_at DESC"
    );
    response.json(result.rows);
  } catch (error) {
    next(error);
  }
  -------------------------------------------------- */

  // --- SUPABASE IMPLEMENTATION ---
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id, name, email, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    response.json(data || []);
  } catch (error) {
    next(error);
  }
});

// Insert a new user
app.post("/api/users", async (request, response, next) => {
  const name = typeof request.body.name === "string" ? request.body.name.trim() : "";
  const email = typeof request.body.email === "string"
    ? request.body.email.trim().toLowerCase()
    : "";

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    response.status(400).json({ error: "Enter a valid name and email address." });
    return;
  }

  /* --- PRESERVED POSTGRESQL CODE (DO NOT REMOVE) ---
  try {
    const result = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id, name, email, created_at",
      [name, email]
    );
    response.status(201).json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      response.status(409).json({ error: "That email address is already registered." });
      return;
    }
    next(error);
  }
  -------------------------------------------------- */

  // --- SUPABASE IMPLEMENTATION ---
  try {
    const { data, error } = await supabase
      .from("users")
      .insert([{ name, email }])
      .select("id, name, email, created_at")
      .single();

    if (error) {
      // Postgres unique constraint error code 23505 or duplicate key message
      if (
        error.code === "23505" ||
        (error.message && error.message.toLowerCase().includes("duplicate key")) ||
        (error.message && error.message.toLowerCase().includes("unique constraint"))
      ) {
        response.status(409).json({ error: "That email address is already registered." });
        return;
      }
      throw error;
    }

    response.status(201).json(data);
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use((error, request, response, next) => {
  console.error(error);
  response.status(500).json({ error: "Something went wrong. Please try again." });
});

// ==============================================================================
// 4. SERVER STARTUP & CLEANUP
// ==============================================================================

/* --- PRESERVED POSTGRESQL CODE (DO NOT REMOVE) ---
initializeDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`User form running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Could not initialize PostgreSQL:", error.message);
    process.exit(1);
  });

process.on("SIGINT", async () => {
  await pool.end();
  process.exit(0);
});
-------------------------------------------------- */

// --- SUPABASE SERVER STARTUP ---
checkDatabaseConnection().finally(() => {
  app.listen(port, () => {
    console.log(`User form running at http://localhost:${port}`);
  });
});

process.on("SIGINT", () => {
  console.log("Shutting down server...");
  process.exit(0);
});
