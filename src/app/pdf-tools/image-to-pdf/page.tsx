import { ImageIcon, ShieldCheck, Zap } from "lucide-react";
import AdSlot from "@/components/layouts/AdSlot";
import ImageToPdf from "@/components/pdf/ImgToPdf";

export const metadata = {
  title: "Image to PDF Converter - 100% Private & Fast | EssentialCalc",
  description:
    "Convert JPG, PNG, and HEIC images into a single high-quality PDF document instantly. No cloud uploads, 100% secure processing in your browser.",
};

export default function ImageToPdfPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-1 md:py-2 flex flex-col items-center">
      {/* Tool Header Section */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase tracking-widest mb-6 text-blue-600">
          <Zap size={12} fill="currentColor" />
          Zero-Server Conversion
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6 leading-tight uppercase">
          IMAGE TO <span className="text-blue-600">PDF.</span>
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto font-medium text-lg leading-relaxed">
          Instantly transform your photos and gallery images into a single,
          high-quality PDF. Everything happens locally on your device.
        </p>
      </section>

      {/* Main Workspace Component */}
      <section className="w-full">
        <ImageToPdf />
      </section>

      <AdSlot id="image-pdf-bottom" className="mt-12" />

      {/* Security Footer Note */}
      <footer className="mt-16 flex items-center gap-6 opacity-40">
        <div className="flex items-center gap-2">
          <ShieldCheck size={14} className="text-green-600" />
          <span className="text-[9px] font-black uppercase tracking-widest text-gray-900">
            End-to-End Private
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ImageIcon size={14} className="text-blue-600" />
          <span className="text-[9px] font-black uppercase tracking-widest text-gray-900">
            No Cloud Upload
          </span>
        </div>
      </footer>
    </main>
  );
}
