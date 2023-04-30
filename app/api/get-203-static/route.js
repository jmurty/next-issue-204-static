export async function GET() {
  console.log("GET 203 invoked server-side");
  return new Response(null, { status: 203 });
}
