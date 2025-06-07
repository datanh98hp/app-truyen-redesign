import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
const protectedRoutes = ["/dashboard", "/settings", "/profile"];

export default async function middleware(
  request: NextRequest,
  response: NextResponse
) {
  // console.log("middleware running");
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const { pathname } = request.nextUrl;
  // console.log("Triggered middleware for session: ",token);
  /// check if the pathname is in the protected routes
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  // console.log("isProtected : ", isProtected);
  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }

  return NextResponse.next();
}
