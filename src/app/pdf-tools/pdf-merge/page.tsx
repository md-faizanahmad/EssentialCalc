import MergePdf from "@/components/pdf/MergePdf";
import { Zap } from "lucide-react";

export default function PdfMergePage() {
  return (
    <main className="pt-32 pb-20 px-6 min-h-screen flex flex-col items-center">
      <section className="max-w-4xl mx-auto text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest mb-6 text-primary">
          <Zap size={12} fill="currentColor" /> 100% Client-Side
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9] uppercase">
          QUICK<span className="text-primary italic">PDF MERGE.</span>
        </h1>

        <p className="text-foreground/60 max-w-xl mx-auto font-medium text-lg">
          Reorder and combine your PDF documents in seconds. The processing
          happens entirely in your browser.
        </p>
      </section>

      <section className="w-full">
        <MergePdf />
      </section>
    </main>
  );
}
