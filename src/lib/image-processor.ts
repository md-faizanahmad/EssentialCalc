export async function processImage(
  file: File,
  targetFormat: string,
  targetKB: number,
): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Canvas context failed");

  canvas.width = bitmap.width;
  canvas.height = bitmap.height;

  // Fill white background (crucial for PNG to JPG conversion)
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(bitmap, 0, 0);

  let quality = 0.9;
  let resultBlob: Blob | null = null;

  // Binary-like search to hit target KB
  for (let i = 0; i < 6; i++) {
    resultBlob = await new Promise((resolve) =>
      canvas.toBlob((b) => resolve(b), targetFormat, quality),
    );

    if (resultBlob && resultBlob.size / 1024 <= targetKB) break;
    quality -= 0.15;
  }

  return resultBlob || file;
}
