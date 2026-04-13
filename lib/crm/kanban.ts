import { OpportunityStage } from "@prisma/client";
export const stageLabels: Record<OpportunityStage, string> = { LEAD: "Lead", QUALIFIED: "Cualificada", AUDIT_REQUESTED: "Auditoría", PRICED: "Tarificada", PROPOSAL_SENT: "Propuesta enviada", NEGOTIATION: "Negociación", WON: "Ganada", LOST: "Perdida" };
