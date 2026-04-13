import { prisma } from "@/lib/prisma";
export async function GET() { return Response.json(await prisma.proposal.findMany({ include: { client: true, opportunity: true } })); }
export async function POST(request: Request) { const body = await request.json(); const created = await prisma.proposal.create({ data: body }); return Response.json(created, { status: 201 }); }
