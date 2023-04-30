export async function GET() {
  console.log("GET 202 invoked server-side");
  return new Response(null, { status: 202 });
}
