import { NextResponse } from "next/server";

export async function GET() {
  console.log("GET 204 invoked server-side");
  // Test work-around using NextResponse(undefined)
  return new NextResponse(undefined, { status: 204 });
}
