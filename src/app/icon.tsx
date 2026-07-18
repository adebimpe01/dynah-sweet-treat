import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const data = await readFile(join(process.cwd(), "public", "logo.png"));
  return new Response(new Uint8Array(data), {
    headers: { "Content-Type": "image/png" },
  });
}