import { prisma } from "@/lib/prisma";
import { buildProposalPdf } from "@/lib/pdf/proposal";
export async function GET(_: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  const proposal = await prisma.proposal.findUnique({ where: { id }, include: { client: true } });
  if (!proposal) return new Response("Not found", { status: 404 });
  const pdf = await buildProposalPdf({ title: proposal.title, clientName: proposal.client.legalName, annualCurrent: proposal.annualCurrent, annualProjected: proposal.annualProjected, annualSavings: proposal.annualSavings });
  return new Response(pdf, { headers: { "Content-Type": "application/pdf", "Content-Disposition": `attachment; filename="${proposal.title}.pdf"` } });
}
