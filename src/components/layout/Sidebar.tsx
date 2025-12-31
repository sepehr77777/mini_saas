import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 p-4">
      <nav className="space-y-3">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/projects">Projects</Link>
      </nav>
    </aside>
  );
}
