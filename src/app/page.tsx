import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-zinc-100">
      <div className="text-center space-y-6 p-6 rounded shadow-lg bg-zinc-800">
        <h1 className="text-4xl font-bold">Mini SaaS Dashboard</h1>
        <p className="text-zinc-400">
          Manage projects and tasks efficiently
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/auth/login"
            className="inline-block rounded-xl bg-white px-6 py-3 text-black font-medium hover:bg-zinc-200 transition"
          >
            Login
          </Link>
          <Link
            href="/auth/register"
            className="inline-block rounded-xl bg-white px-6 py-3 text-black font-medium hover:bg-zinc-200 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
