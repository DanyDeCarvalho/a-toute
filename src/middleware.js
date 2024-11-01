import { NextResponse } from "next/server";
import { verifySession } from "./app/lib/session";

export default async function middleware(req) {
  const protectedRoutes = [
    /^\/backoffice$/,
  ];
  const currentPath = req.nextUrl.pathname;
  const isProtected = protectedRoutes.some((regex) => regex.test(currentPath));
  const access = await verifySession();

  if (isProtected) {
    if (!access) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image).*)"],
};
