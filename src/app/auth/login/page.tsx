"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      console.log("LOGIN RESPONSE 👉", res.data);

      // ذخیره توکن در cookie (برای middleware)
      document.cookie = `token=${res.data.token}; path=/`;

      // رفتن به داشبورد
      router.push("/dashboard");
    } catch (err: any) {
      console.error(err.response?.data || err.message);
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 text-zinc-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-xl bg-zinc-900 p-6 shadow-lg"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {error && (
          <p className="rounded bg-red-500/10 p-2 text-sm text-red-400">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full rounded bg-zinc-800 p-3 outline-none focus:ring-2 focus:ring-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full rounded bg-zinc-800 p-3 outline-none focus:ring-2 focus:ring-white"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-white py-3 font-medium text-black hover:bg-zinc-200 disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
