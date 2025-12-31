import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";
import { generateToken } from "../utils/token.util";

export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const existingUser = await AuthService.findUserByEmail(email);
  if (existingUser) return res.status(400).json({ success: false, message: "User exists" });

  const user = await AuthService.createUser(name, email, password);
  res.json({ success: true, user });
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await AuthService.findUserByEmail(email);

  if (!user) return res.status(401).json({ success: false, message: "User not found" });

  const valid = await AuthService.checkPassword(password, user.password);
  if (!valid) return res.status(401).json({ success: false, message: "Wrong password" });

  const token = generateToken({ id: user.id, email: user.email });
  res.json({ success: true, token, user: { id: user.id, name: user.name } });
};
