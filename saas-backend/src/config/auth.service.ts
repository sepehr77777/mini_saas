import { pool } from "./db";
import bcrypt from "bcrypt";

// پیدا کردن یوزر بر اساس ایمیل
export const findUserByEmail = async (email: string) => {
  const res = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  return res.rows[0];
};

// ایجاد یوزر جدید
export const createUser = async (email: string, password: string, name?: string) => {
  const hashed = await bcrypt.hash(password, 10);
  const res = await pool.query(
    "INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING *",
    [email, hashed, name || null]
  );
  return res.rows[0];
};

// بررسی پسورد برای Login
export const verifyPassword = async (plain: string, hashed: string) => {
  return bcrypt.compare(plain, hashed);
};
