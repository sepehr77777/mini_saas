// src/types/api.ts

// ---------- AUTH ----------
export type AuthResponse = {
  token: string;
};

// ---------- USER ----------
export type User = {
  id: string;
  email: string;
  createdAt: string;
};

// ---------- PROJECT ----------
export type Project = {
  id: string;
  name: string;
  createdAt: string;
};

// ---------- TASK ----------
export type Task = {
  id: string;
  title: string;
  status: "todo" | "doing" | "done";
  createdAt: string;
};

// ---------- API WRAPPER ----------
export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  token: string;
};
