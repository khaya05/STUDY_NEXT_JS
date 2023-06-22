import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  // const name = searchParams.get('name');
  // const hobby = searchParams.get('hobby');
  // return NextResponse.json({ name, hobby });

  const obj = Object.fromEntries(searchParams.entries());

  return NextResponse.json(obj);
}
