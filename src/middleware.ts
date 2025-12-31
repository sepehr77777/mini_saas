import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  // مسیرهای آزاد
  if (
    pathname.startsWith("/auth/login") ||
    pathname.startsWith("/auth/register")
  ) {
    return NextResponse.next();
  }

  // اگر لاگین نیست
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/logout"],
};
