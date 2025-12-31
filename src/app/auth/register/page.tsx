"use client";

import { useState } from "react";
import { registerUser } from "@/lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await registerUser({ name, email, password });
      router.push("/auth/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-100">
      <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
        <h1 className="mb-2 text-3xl font-bold">Create account</h1>
        <p className="mb-6 text-sm text-zinc-400">
          Start using your dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Name"
            value={name}
            onChange={setName}
            placeholder="Sepehr Rahimi"
          />

          <Input
            label="Email"
            value={email}
            onChange={setEmail}
            placeholder="you@example.com"
          />

          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="••••••••"
          />

          {error && (
            <p className="rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-white py-3 font-medium text-black hover:bg-zinc-200 transition disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-white hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}

/* ---------------- Input Component ---------------- */

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-zinc-400">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required
        className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-white transition"
      />
    </div>
  );
}
