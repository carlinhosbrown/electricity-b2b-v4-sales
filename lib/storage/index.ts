import { put } from "@vercel/blob";
export async function uploadFile(fileName: string, content: Blob | Buffer, mimeType: string) {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(`documents/${Date.now()}-${fileName}`, content as Blob, { access: "private", contentType: mimeType });
    return { storageKey: blob.pathname, storageUrl: blob.url, provider: "vercel-blob" };
  }
  if (process.env.S3_BUCKET && process.env.S3_ACCESS_KEY_ID) {
    return { storageKey: `documents/${Date.now()}-${fileName}`, storageUrl: `s3://${process.env.S3_BUCKET}/${fileName}`, provider: "s3-placeholder" };
  }
  throw new Error("No storage provider configured");
}
