import { prisma } from "@/lib/prisma";
import { uploadFile } from "@/lib/storage";
export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const clientId = String(formData.get("clientId") || "");
  if (!file || !clientId) return Response.json({ error: "Missing file or clientId" }, { status: 400 });
  const uploaded = await uploadFile(file.name, file, file.type || "application/octet-stream");
  const document = await prisma.document.create({ data: { clientId, fileName: file.name, mimeType: file.type || "application/octet-stream", storageKey: uploaded.storageKey, storageUrl: uploaded.storageUrl } });
  return Response.json(document);
}
