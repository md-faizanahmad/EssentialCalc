export async function performOCR(
  file: File,
  onProgress?: (progress: number) => void,
): Promise<string> {
  // ⬇️ Dynamic imports (CRITICAL)
  const { createWorker } = await import("tesseract.js");
  const pdfjs = await import("pdfjs-dist");

  // ⬇️ Configure worker ONLY in browser
  pdfjs.GlobalWorkerOptions.workerSrc = "/workers/pdf.worker.min.mjs";

  let fullText = "";

  if (file.type === "application/pdf") {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
    const totalPages = pdf.numPages;

    const worker = await createWorker("eng", 1);

    for (let i = 1; i <= totalPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1.5 });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");

      if (!context) continue;

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({
        canvasContext: context,
        viewport,
        canvas,
      }).promise;

      const {
        data: { text },
      } = await worker.recognize(canvas);

      fullText += `--- Page ${i} ---\n${text}\n\n`;

      if (onProgress) {
        onProgress(Math.round((i / totalPages) * 100));
      }
    }

    await worker.terminate();
  } else {
    const worker = await createWorker("eng", 1, {
      logger: (m) => {
        if (m.status === "recognizing text" && onProgress) {
          onProgress(Math.round(m.progress * 100));
        }
      },
    });

    const imageUrl = URL.createObjectURL(file);
    const {
      data: { text },
    } = await worker.recognize(imageUrl);

    fullText = text;

    URL.revokeObjectURL(imageUrl);
    await worker.terminate();
  }

  return fullText;
}
