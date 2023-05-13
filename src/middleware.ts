import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoute = ["/", "/users"];
const authRoute = ["/login"];

export function middleware(request: NextRequest) {
  const stringUser = request.cookies.get("user")?.value;

  const user = stringUser ? JSON.parse(stringUser) : null;
  const expiredAt = Number(new Date(user?.data?.expiredAt));

  if (protectedRoute.includes(request.nextUrl.pathname)) {
    if (!user || Date.now() > expiredAt) {
      request.cookies.delete("user");
      const response = NextResponse.redirect(new URL("/login", request.url));
      return response;
    }
  }

  if (authRoute.includes(request.nextUrl.pathname)) {
    if (user && Date.now() < expiredAt) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
