import { PrismaClient, OpportunityStage, ProposalStatus, Role } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.proposal.deleteMany();
  await prisma.opportunity.deleteMany();
  await prisma.site.deleteMany();
  await prisma.document.deleteMany();
  await prisma.client.deleteMany();
  await prisma.user.deleteMany();
  await prisma.broker.deleteMany();
  await prisma.tariffBusiness.deleteMany();
  const broker = await prisma.broker.create({ data: { name: "Broker Pro Energy", slug: "broker-pro-energy", brandName: "Broker Pro", primaryColor: "#0F766E" } });
  await prisma.user.create({ data: { name: "Admin Broker", email: "admin@brokerpro.es", passwordHash: "demo-broker1234", role: Role.SUPERADMIN, brokerId: broker.id } });
  const client = await prisma.client.create({ data: { brokerId: broker.id, legalName: "Metalúrgica Levante SL", taxId: "B12345678", email: "compras@metalurgica-levante.es", sector: "Industrial", annualSpend: 182000 } });
  await prisma.site.create({ data: { clientId: client.id, name: "Planta Valencia", cups: "ES0021000000000000AA", address: "Polígono Industrial Norte, Valencia", tariffAccess: "6.1TD", annualKwh: 940000 } });
  const opp = await prisma.opportunity.create({ data: { brokerId: broker.id, clientId: client.id, title: "Renovación suministro 2026", stage: OpportunityStage.PROPOSAL_SENT, estimatedValue: 15000, notes: "Cliente sensible a precio fijo 12 meses" } });
  await prisma.proposal.create({ data: { brokerId: broker.id, clientId: client.id, opportunityId: opp.id, title: "Propuesta anual 6.1TD", status: ProposalStatus.SENT, annualCurrent: 182000, annualProjected: 165400, annualSavings: 16600 } });
  await prisma.tariffBusiness.createMany({ data: [
    { company: "Comercializadora A", name: "Indexada Empresa 6.1TD", segment: "B2B", accessTariff: "6.1TD", energyTerms: { P1: 0.162, P2: 0.141, P3: 0.124, P4: 0.112, P5: 0.102, P6: 0.095 }, powerTerms: { P1: 38, P2: 28, P3: 18, P4: 16, P5: 14, P6: 11 }, source: "seed" },
    { company: "Comercializadora B", name: "Fija Empresa 3.0TD", segment: "B2B", accessTariff: "3.0TD", energyTerms: { P1: 0.179, P2: 0.148, P3: 0.119 }, powerTerms: { P1: 31, P2: 21, P3: 14 }, source: "seed" }
  ]});
}
main().finally(async()=> prisma.$disconnect());
