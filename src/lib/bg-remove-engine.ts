import { Config, removeBackground } from "@imgly/background-removal";

export async function removeImageBackground(
  image: File | string,
  onProgress: (step: string) => void,
): Promise<Blob> {
  const config: Config = {
    progress: (state, progress) => {
      onProgress(`${state} (${Math.round(progress * 100)}%)`);
    },
    output: {
      format: "image/png", // Must be PNG for transparency
      quality: 0.8,
    },
  };

  try {
    // This runs the neural network locally in a web worker
    const resultBlob = await removeBackground(image, config);
    return resultBlob;
  } catch (error) {
    console.error("BG Removal Error:", error);
    throw error;
  }
}
