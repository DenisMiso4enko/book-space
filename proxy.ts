import { authConfig } from "@/auth/config";
import { safeCallbackPath } from "@/auth/callback-path";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname, searchParams } = req.nextUrl;
  const isSettings =
    pathname === "/settings" || pathname.startsWith("/settings/");

  if (isSettings && !isLoggedIn) {
    const loginUrl = new URL("/login", req.nextUrl);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname === "/login" && isLoggedIn) {
    const nextPath = safeCallbackPath(searchParams.get("callbackUrl"));
    return NextResponse.redirect(new URL(nextPath, req.nextUrl));
  }
});

export const config = {
  matcher: ["/login", "/settings", "/settings/:path*"],
};
