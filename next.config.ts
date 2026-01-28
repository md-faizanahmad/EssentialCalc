import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Standard config options here */
  // Increase body size limit for the API route if necessary
  // Note: For App Router, size limits are often handled via middleware
  // or simply by the server's default capacity.
  // We REMOVE the async headers() block that contained:
  // Cross-Origin-Opener-Policy and Cross-Origin-Embedder-Policy
};

export default nextConfig;
