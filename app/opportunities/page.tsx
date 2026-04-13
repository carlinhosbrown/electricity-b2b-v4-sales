import { prisma } from "@/lib/prisma";
import { OpportunityStage } from "@prisma/client";
import { stageLabels } from "@/lib/crm/kanban";
export default async function OpportunitiesPage() {
  const opportunities = await prisma.opportunity.findMany({ include: { client: true } });
  const stages = Object.values(OpportunityStage);
  return <main style={{ padding: 24, fontFamily: "Arial" }}><h1>Pipeline comercial</h1><div style={{ display: "grid", gridTemplateColumns: `repeat(${stages.length}, minmax(180px, 1fr))`, gap: 12, alignItems: "start" }}>{stages.map((stage) => <div key={stage} style={{ background: "#f8fafc", padding: 12, borderRadius: 12 }}><strong>{stageLabels[stage]}</strong><div style={{ display: "grid", gap: 8, marginTop: 8 }}>{opportunities.filter((o) => o.stage === stage).map((o) => <div key={o.id} style={{ background: "white", padding: 10, borderRadius: 10, border: "1px solid #e2e8f0" }}><div>{o.title}</div><small>{o.client.legalName}</small></div>)}</div></div>)}</div></main>;
}
