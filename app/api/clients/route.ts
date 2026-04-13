import { prisma } from "@/lib/prisma";
export async function GET() { return Response.json(await prisma.client.findMany({ include: { sites: true } })); }
export async function POST(request: Request) { const body = await request.json(); const created = await prisma.client.create({ data: body }); return Response.json(created, { status: 201 }); }
