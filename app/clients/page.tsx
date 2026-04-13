import { prisma } from "@/lib/prisma";
export default async function ClientsPage() {
  const clients = await prisma.client.findMany({ include: { sites: true, proposals: true } });
  return <main style={{ padding: 24, fontFamily: "Arial" }}><h1>Clientes</h1>{clients.map((client) => <div key={client.id} style={{ border: "1px solid #ddd", padding: 16, marginBottom: 12 }}><strong>{client.legalName}</strong><div>Sedes: {client.sites.length}</div><div>Propuestas: {client.proposals.length}</div></div>)}</main>;
}
