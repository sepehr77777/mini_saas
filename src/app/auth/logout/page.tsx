"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // پاک کردن توکن
    document.cookie =
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";

    // انتقال به لاگین
   router.replace("/auth");
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-zinc-400">Logging out...</p>
    </div>
  );
}
