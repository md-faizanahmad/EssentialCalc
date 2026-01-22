import { Zap, ShieldCheck, BrainCircuit } from "lucide-react";
import AdSlot from "@/components/layouts/AdSlot";
import OCRWork from "@/components/pdf/OCRWork";

export const metadata = {
  title: "OCR - Extract Text from Images & PDFs Locally | EssentialCalc",
  description:
    "Extract text from scanned documents and images instantly using local AI. No cloud uploads, 100% secure processing directly in your browser.",
};

export default function OCRPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-1 md:py-2 flex flex-col items-center">
      {/* Tool Header Section */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-black uppercase tracking-widest mb-6 text-blue-600">
          <Zap size={12} fill="currentColor" />
          Neural Text Extraction
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-gray-900 tracking-tighter mb-6 leading-tight uppercase">
          QUICK <span className="text-blue-600">OCR.</span>
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto font-medium text-lg leading-relaxed">
          Extract text from images and PDF documents instantly. No data leaves
          your device—everything is processed by local AI in your browser.
        </p>
      </section>

      {/* Main Workspace Component */}
      <section className="w-full">
        <OCRWork />
      </section>

      <AdSlot id="ocr-bottom" className="mt-12" />

      {/* Security Footer Note */}
      <footer className="mt-16 flex flex-col md:flex-row items-center gap-6 opacity-40">
        <div className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-green-600" />
          <span className="text-[9px] font-black uppercase tracking-widest text-gray-900">
            100% On-Device AI
          </span>
        </div>
        <div className="flex items-center gap-2">
          <BrainCircuit size={16} className="text-blue-600" />
          <span className="text-[9px] font-black uppercase tracking-widest text-gray-900">
            No External API Calls
          </span>
        </div>
      </footer>
    </main>
  );
}
