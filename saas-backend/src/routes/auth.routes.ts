import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import pool from "../config/db";

const router = express.Router();

/**
 * POST /api/auth/login
 */
router.post("/login", async (req, res) => {
  

  try {
    console.log("📦 req.body =>", req.body);

    const { email, password } = req.body;

    if (!email || !password) {
   
      return res.status(400).json({ error: "Email and password required" });
    }

   

    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

   

    const user = result.rows[0];

    if (!user) {

      return res.status(401).json({ error: "Invalid credentials" });
    }

    

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("✅ Password match result:", isMatch);

    if (!isMatch) {
     
      return res.status(401).json({ error: "Invalid credentials" });
    }

   
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
      },
    });
  } catch (err: any) {
    
    return res.status(500).json({
      error: err.message || "Server error",
    });
  }
});

export default router;
