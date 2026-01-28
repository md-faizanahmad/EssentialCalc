import { PenTool } from "lucide-react";
import AdSlot from "@/components/layouts/AdSlot";
import SelfAttest from "@/components/tools/SelfAttest";
import ImageToolLinks from "@/components/tools/ImageToolLinks";

export const metadata = {
  title:
    "Digital Self-Attestation Tool - Sign Documents Online | EssentialCalc",
  description:
    "Sign your documents and photos digitally. Overlay your signature on any image securely. 100% private, no server uploads.",
};

export default function SelfAttestPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 md:py-2">
      {/* --- HEADER SECTION --- */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1 bg-red-600 border-2 border-black text-white text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <PenTool size={12} strokeWidth={3} /> Digital Signature Engine
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-black mb-4 tracking-tighter uppercase leading-none">
          Self <span className="text-red-600">Attest.</span>
        </h1>

        <p className="text-gray-500 text-sm md:text-xl max-w-2xl mx-auto font-bold uppercase tracking-tight leading-snug">
          The safest way to sign your documents. Add your signature to any photo
          instantly without printing or scanning.
        </p>
      </header>

      {/* --- TOOL COMPONENT --- */}
      <div className="relative">
        <SelfAttest />
      </div>

      <AdSlot id="self-attest-footer" className="mt-16" />

      {/* --- HOW TO SECTION --- */}
      <section className="mt-20 p-8 md:p-12 bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(239,68,68,1)]">
        <h2 className="text-2xl font-black text-black uppercase tracking-tighter mb-6 border-b-4 border-red-600 inline-block">
          How to Self-Attest?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-4">
            {[
              "Upload the document or photo you need to sign.",
              "Upload a clear photo of your signature on white paper.",
              "Our AI will remove the background from your signature automatically.",
              "Position your signature on the document and download.",
            ].map((step, index) => (
              <li key={index} className="flex gap-4 items-start">
                <span className="shrink-0 w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-black">
                  {index + 1}
                </span>
                <span className="text-sm font-bold uppercase tracking-tight text-gray-700">
                  {step}
                </span>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center justify-center border-2 border-dashed border-gray-200 p-4">
            <p className="text-[10px] text-gray-400 font-black uppercase text-center rotate-12">
              Compliance Standards <br /> Verified 2026
            </p>
          </div>
        </div>
      </section>

      {/* --- PRIVACY DISCLAIMER --- */}
      <footer className="mt-12 text-center">
        <p className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
          100% Private — No files are ever stored on our servers.
        </p>
      </footer>
      <ImageToolLinks />
    </main>
  );
}
