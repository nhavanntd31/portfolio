import createIntlMiddleware from "next-intl/middleware";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verify } from 'jsonwebtoken';
import { routing } from "./i18n/routing";

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const intlMiddleware = createIntlMiddleware(routing);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2,3}/, '');

  // Skip authentication for login page and API routes
  if (pathname.startsWith('/api') || pathnameWithoutLocale === '/admin/login') {
    return intlMiddleware(request);
  }

  // Handle admin authentication
  if (pathnameWithoutLocale.startsWith('/admin')) {
    const token = request.cookies.get('accessToken')?.value;

    if (!token) {
      const locale = pathname.split('/')[1];
      return NextResponse.redirect(new URL(`/${locale}/admin/login`, request.url));
    }

    try {
      verify(token, JWT_SECRET);
      return intlMiddleware(request);
    } catch (error) {
      const locale = pathname.split('/')[1];
      return NextResponse.redirect(new URL(`/${locale}/admin/login`, request.url));
    }
  }

  // Handle internationalization for non-admin routes
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all paths except api, _next, _vercel, and files with extensions
    '/((?!api|_next|_vercel|.*\\.[^/]*$).*)',
  ]
};
