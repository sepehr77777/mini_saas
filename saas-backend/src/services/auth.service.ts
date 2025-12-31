import  pool  from "../config/db";
import bcrypt from "bcrypt";

export const findUserByEmail = async (email: string) => {
  const res = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
  return res.rows[0];
};

export const createUser = async (name: string, email: string, password: string) => {
  const hashed = await bcrypt.hash(password, 10);
  const res = await pool.query(
    "INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING id,name,email",
    [name, email, hashed]
  );
  return res.rows[0];
};

export const checkPassword = async (password: string, hashed: string) => {
  return bcrypt.compare(password, hashed);
};
