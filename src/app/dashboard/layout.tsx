"use client";

import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/auth");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-black-400">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-black-100">
      <aside className="w-64 bg-zinc-900 text-black-100 p-6 flex flex-col">
        <h2 className="text-2xl font-bold mb-6">Mini SaaS</h2>
        <nav className="flex flex-col gap-3">
          <Link href="/dashboard" className="hover:bg-black-700 px-3 py-2 rounded">Home</Link>
          <Link href="/dashboard/projects" className="hover:bg-black-700 px-3 py-2 rounded">Projects</Link>
          <Link href="/dashboard/tasks" className="hover:bg-black-700 px-3 py-2 rounded">Tasks</Link>
          <Link href="/auth/logout" className="hover:bg-red-600 px-3 py-2 rounded">Logout</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-black-50">{children}</main>
    </div>
  );
}
