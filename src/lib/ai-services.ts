import axios from "axios";

/**
 * Sends base64 image to OUR local API proxy
 */
export async function removeBgExternal(base64Image: string): Promise<string> {
  try {
    const response = await axios.post("/api/remove-bg", {
      imageBase64: base64Image,
    });

    return response.data.image;
  } catch (error) {
    console.error(error);
    throw new Error("Local Proxy Error: Failed to process image.");
  }
}

export const toBase64 = (file: File | Blob): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () =>
      resolve(
        (reader.result as string).replace(/^data:image\/\w+;base64,/, ""),
      );
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
