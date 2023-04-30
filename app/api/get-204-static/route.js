export async function GET() {
  console.log("GET 204 invoked server-side");
  return new Response(null, { status: 204 });
}
