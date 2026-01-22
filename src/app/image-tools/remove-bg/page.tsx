import { ShieldCheck, Cpu } from "lucide-react";
import AdSlot from "@/components/layouts/AdSlot";
import BgRemove from "@/components/tools/RemoveBg";

// Client-side only import for AI engine

export const metadata = {
  title: "AI Background Remover - 100% Private & Free | EssentialCalc",
  description:
    "Remove image backgrounds instantly in your browser. No uploads, no server storage. Secure AI processing for professional photos.",
};

export default function BgRemovePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <section className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-[10px] font-black uppercase tracking-widest mb-4">
          <Cpu size={12} /> Edge AI Neural Engine
        </div>
        <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-3 tracking-tighter uppercase">
          BG <span className="text-rose-600">REMOVER.</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
          Professional-grade background removal powered by local machine
          learning. Your photos never leave your device.
        </p>
      </section>

      <BgRemove />

      <AdSlot id="bg-remove-footer" className="mt-12" />

      <section className="mt-16 p-6 md:p-10 bg-gray-50 rounded-4xl border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <ShieldCheck className="text-green-600" size={24} />
          <h2 className="text-lg font-bold text-gray-900 uppercase tracking-tight">
            Privacy First Architecture
          </h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">
          Unlike other tools that upload your photos to a server,{" "}
          <strong>EssentialCalc</strong>
          downloads the AI model directly to your browser. This ensures that
          sensitive photos (like ID cards or personal portraits) are processed
          with 100% privacy.
        </p>
      </section>
    </main>
  );
}
