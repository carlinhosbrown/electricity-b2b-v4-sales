import { sendProposalEmail } from "@/lib/mail";
export async function POST(request: Request) {
  const body = await request.json();
  const result = await sendProposalEmail({ to: body.to, clientName: body.clientName || "Cliente demo", proposalTitle: body.proposalTitle || "Propuesta demo", savings: body.savings || 12000, proposalUrl: body.proposalUrl || "http://localhost:3000/proposals" });
  return Response.json(result);
}
