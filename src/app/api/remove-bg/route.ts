import { NextResponse } from "next/server";
import axios from "axios";

// This is safe on the server side
const EXTERNAL_API = process.env.AI_API_URL || "https://api.myazstore.shop";

export async function POST(req: Request) {
  try {
    const { imageBase64 } = await req.json();

    if (!imageBase64) {
      return NextResponse.json(
        { error: "Missing image data" },
        { status: 400 },
      );
    }

    // Forward the request to the real API
    const response = await axios.post(`${EXTERNAL_API}/v1/ai/remove-bg`, {
      imageBase64,
    });

    return NextResponse.json(response.data);
  } catch (error: any) {
    console.error("Relay Error:", error.message);
    return NextResponse.json(
      { error: "AI Processing Failed" },
      { status: 500 },
    );
  }
}
