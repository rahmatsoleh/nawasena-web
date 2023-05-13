import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoute = ["/"];
const authRoute = ["/login"];

export function middleware(request: NextRequest) {
  const stringUser = request.cookies.get("user")?.value;

  const user = stringUser ? JSON.parse(stringUser) : null;

  if (
    protectedRoute.includes(request.nextUrl.pathname) &&
    (!user || Date.now() > Number(user.expireAt))
  ) {
    request.cookies.delete("user");
    const response = NextResponse.redirect(new URL("/login", request.url));
    return response;
  }

  if (
    authRoute.includes(request.nextUrl.pathname) &&
    user &&
    Date.now() < Number(user.expireAt)
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
