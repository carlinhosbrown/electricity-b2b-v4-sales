import { prisma } from "@/lib/prisma";
export async function GET() { return Response.json(await prisma.opportunity.findMany({ include: { client: true } })); }
export async function POST(request: Request) { const body = await request.json(); const created = await prisma.opportunity.create({ data: body }); return Response.json(created, { status: 201 }); }
