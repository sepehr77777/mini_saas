import { Router } from "express";
import pool from "../config/db"; // فایل اتصال به PostgreSQL

const router = Router();

// GET /api/projects
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projects ORDER BY id ASC");
    res.json(result.rows); // دیتا از دیتابیس برمی‌گرده
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
