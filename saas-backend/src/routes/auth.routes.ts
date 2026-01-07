import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../config/db";

const router = express.Router();

/**
 * POST /api/auth/register
 * ثبت‌نام کاربر جدید
 */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Name, email, and password are required" });
    }

    // بررسی اینکه کاربر با این ایمیل قبلاً وجود دارد
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // هش کردن پسورد
    const hashedPassword = await bcrypt.hash(password, 10);

    // ذخیره کاربر در دیتابیس
    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email",
      [name, email, hashedPassword]
    );

    const newUser = result.rows[0];

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (err: any) {
    return res.status(500).json({
      message: err.message || "Server error",
    });
  }
});

/**
 * POST /api/auth/login
 * ورود کاربر
 */
router.post("/login", async (req, res) => {
  try {
    console.log("📦 req.body =>", req.body);

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // پیدا کردن کاربر بر اساس ایمیل
    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // بررسی پسورد
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("✅ Password match result:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // ایجاد JWT
    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    return res.json({
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err: any) {
    return res.status(500).json({
      error: err.message || "Server error",
    });
  }
});

export default router;
