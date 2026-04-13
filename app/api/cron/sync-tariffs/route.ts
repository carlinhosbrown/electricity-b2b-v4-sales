import { prisma } from "@/lib/prisma";
import { syncEsiosBusinessTariffs } from "@/lib/connectors/esios-business";
import { syncCnmcBusinessTariffs } from "@/lib/connectors/cnmc-business";
export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) return new Response("Unauthorized", { status: 401 });
  try {
    const [esios, cnmc] = await Promise.all([syncEsiosBusinessTariffs(), syncCnmcBusinessTariffs()]);
    await prisma.syncLog.create({ data: { source: "daily-sync", status: "success", message: JSON.stringify({ esios, cnmc }) } });
    return Response.json({ ok: true, esios, cnmc });
  } catch (error) {
    await prisma.syncLog.create({ data: { source: "daily-sync", status: "error", message: String(error) } });
    return Response.json({ ok: false }, { status: 500 });
  }
}
