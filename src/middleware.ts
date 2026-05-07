import { NextResponse, type NextRequest } from "next/server";

const GONE_PATHS = new Set([
  "/auto-detailing",
  "/interior-detailing",
  "/ceramic-wheel-protection",
  "/ceramic-glass-coatings",
]);

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname.replace(/\/$/, "");
  if (GONE_PATHS.has(path)) {
    return new NextResponse("Gone", { status: 410 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/auto-detailing/:path*",
    "/interior-detailing/:path*",
    "/ceramic-wheel-protection/:path*",
    "/ceramic-glass-coatings/:path*",
  ],
};
