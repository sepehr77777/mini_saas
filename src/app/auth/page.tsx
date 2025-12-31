"use client";
import { useState } from "react";
import LoginForm from "./login/page";
import RegisterForm from "./register/page";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow">
      <div className="flex justify-between mb-4">
        <button
          className={`px-4 py-2 ${isLogin ? "font-bold" : ""}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 ${!isLogin ? "font-bold" : ""}`}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

      {isLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
}
