import { PenTool } from "lucide-react";
import AdSlot from "@/components/layouts/AdSlot";
// import SelfAttest from "@/components/tools/SelfAttest";

export const metadata = {
  title:
    "Digital Self-Attestation Tool - Sign Documents Online | EssentialCalc",
  description:
    "Sign your documents and photos digitally. Overlay your signature on any image securely. 100% private, no server uploads.",
};

export default function SelfAttestPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[10px] font-black uppercase tracking-widest mb-4">
          <PenTool size={12} /> Digital Signature Engine
        </div>
        <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-3 tracking-tighter uppercase">
          SELF <span className="text-indigo-600">ATTEST.</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-lg max-w-xl mx-auto font-medium leading-relaxed">
          The safest way to sign your documents. Add your signature to any photo
          instantly without printing or scanning.
        </p>
      </header>

      {/* <SelfAttest /> */}

      <AdSlot id="self-attest-footer" className="mt-12" />

      <section className="mt-16 p-6 md:p-10 bg-indigo-50/30 rounded-4xl border border-indigo-100">
        <h2 className="text-lg font-bold text-indigo-900 uppercase tracking-tight mb-2">
          How to Self-Attest?
        </h2>
        <ul className="text-sm text-indigo-800 space-y-2 list-disc ml-5">
          <li>Upload the document or photo you need to sign.</li>
          <li>Upload a clear photo of your signature on white paper.</li>
          <li>
            Our AI will remove the background from your signature automatically.
          </li>
          <li>Position your signature on the document and download.</li>
        </ul>
      </section>
    </main>
  );
}
