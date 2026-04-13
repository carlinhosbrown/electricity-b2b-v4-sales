import Link from "next/link";
import { prisma } from "@/lib/prisma";
export default async function ProposalsPage() {
  const proposals = await prisma.proposal.findMany({ include: { client: true } });
  return <main style={{ padding: 24, fontFamily: "Arial" }}><h1>Propuestas</h1>{proposals.map((proposal) => <div key={proposal.id} style={{ border: "1px solid #ddd", padding: 16, marginBottom: 12 }}><strong>{proposal.title}</strong><div>Cliente: {proposal.client.legalName}</div><div>Ahorro anual: {proposal.annualSavings.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}</div><Link href={`/api/proposals/${proposal.id}/pdf`}>Descargar PDF</Link></div>)}</main>;
}
