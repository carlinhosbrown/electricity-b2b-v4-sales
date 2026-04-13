import { prisma } from "@/lib/prisma";
import { Shell, Header, Card } from "@/components/ui";
export default async function DashboardPage() {
  const [clients, opportunities, proposals] = await Promise.all([prisma.client.count(), prisma.opportunity.count(), prisma.proposal.count()]);
  return <Shell><Header /><main style={{ maxWidth: 1080, margin: "24px auto", padding: 16, display: "grid", gap: 16 }}><h1>Dashboard comercial</h1><div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}><Card><strong>{clients}</strong><div>Clientes</div></Card><Card><strong>{opportunities}</strong><div>Oportunidades</div></Card><Card><strong>{proposals}</strong><div>Propuestas</div></Card></div></main></Shell>;
}
