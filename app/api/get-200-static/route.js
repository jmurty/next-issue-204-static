export async function GET() {
  console.log("GET 200 invoked server-side");
  return new Response(null, { status: 200 });
}
