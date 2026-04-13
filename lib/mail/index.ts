import { Resend } from "resend";
import { ProposalEmail } from "@/emails/proposal-email";
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
export async function sendProposalEmail(params: { to: string; clientName: string; proposalTitle: string; savings: number; proposalUrl: string; }) {
  if (!resend) return { mocked: true };
  return resend.emails.send({
    from: process.env.MAIL_FROM || "Broker Pro <noreply@example.com>",
    to: params.to,
    subject: `Tu propuesta energética: ${params.proposalTitle}`,
    react: ProposalEmail(params)
  });
}
