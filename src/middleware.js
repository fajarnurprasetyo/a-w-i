import { NextRequest, NextResponse } from "next/server";

/**
 * @param {NextRequest} req
 */
export default (req) => {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/api')) {
    if (req.method !== 'GET') {
      return new NextResponse(null, { status: 405 });
    }
  }
}