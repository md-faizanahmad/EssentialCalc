import ImageProcessor from "@/components/tools/ImageProcessor";
import ImageToolLinks from "@/components/tools/ImageToolLinks";
import { Cpu } from "lucide-react";

export const metadata = {
  title: "Image Compressor & Converter - To 20KB, 50KB, 100KB | EssentialCalc",
  description:
    "Convert and compress images locally. PNG to JPG, WebP to JPG. Target specific KB sizes for Indian government portals with 100% privacy.",
};

export default function ImageOptimizePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <header className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-[10px] font-black uppercase tracking-widest mb-4">
          <Cpu size={12} /> Edge Processing
        </div>
        <h1 className="text-3xl font-black text-gray-900 tracking-tighter uppercase">
          Compress <span className="text-cyan-600">&</span> Convert
        </h1>
        <p className="text-gray-500 text-xs font-medium max-w-sm mx-auto mt-2">
          Adjust file size and format in one click. No server uploads.
        </p>
      </header>

      <ImageProcessor />
      <ImageToolLinks />
    </main>
  );
}
