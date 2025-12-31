import { Router } from "express";
import pool from "../config/db";

const router = Router();

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST new task
router.post("/", async (req, res) => {
  const { project_id, title, description, status } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tasks (project_id, title, description, status) VALUES ($1, $2, $3, $4) RETURNING *",
      [project_id, title, description, status]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
