import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import projectRoutes from "./routes/projects";
import pool from "./config/db";
import taskRoutes from "./routes/tasks.routes";


const app = express();


/* -------------------- CORS -------------------- */
app.use(
  cors({
    origin: "http://localhost:3000", // Next.js
    credentials: true,
  })
);

/* -------------------- Body Parser -------------------- */
app.use(express.json());

/* -------------------- Routes -------------------- */
app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes);

/* -------------------- DB Test -------------------- */
(async () => {
  try {
    await pool.query("SELECT 1");
  
  } catch (err) {
    console.error("❌ PostgreSQL connection failed:", err);
  }
})();

/* -------------------- Server -------------------- */
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
