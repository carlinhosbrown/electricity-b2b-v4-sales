import { prisma } from "@/lib/prisma";
export default async function BrokersPage() {
  const brokers = await prisma.broker.findMany({ include: { users: true, clients: true } });
  return <main style={{ padding: 24, fontFamily: "Arial" }}><h1>Brokers</h1>{brokers.map((broker) => <div key={broker.id} style={{ border: "1px solid #ddd", padding: 16, marginBottom: 12 }}><strong>{broker.name}</strong><div>Usuarios: {broker.users.length}</div><div>Clientes: {broker.clients.length}</div></div>)}</main>;
}
