export async function GET() {
  console.log("GET 201 invoked server-side");
  return new Response(null, { status: 201 });
}
