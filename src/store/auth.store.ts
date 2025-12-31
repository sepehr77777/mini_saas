"use client";

import { create } from "zustand";
import { setToken, removeToken } from "@/lib/auth";

type AuthState = {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  login: (token) => {
    if (typeof window !== "undefined") setToken(token);
    set({ token });
  },
  logout: () => {
    if (typeof window !== "undefined") removeToken();
    set({ token: null });
  },
}));
