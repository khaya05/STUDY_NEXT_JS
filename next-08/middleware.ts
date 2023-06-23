import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  console.log('hello from the middleware');

  console.log('method', request.method);
  console.log('url', request.url);
  console.log('headers', request.headers);
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
