"use client";
import { Zap, ShieldCheck } from "lucide-react";
import AdSlot from "@/components/layouts/AdSlot";
import dynamic from "next/dynamic";

const CompressPdf = dynamic(() => import("@/components/pdf/CompressPdf"), {
  ssr: false,
});
export default function CompressPdfPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-1 md:py-1">
      <section className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6">
          <Zap size={12} fill="currentColor" /> Guaranteed Privacy
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-tight uppercase">
          COMPRESS <span className="text-blue-600">PDF.</span>
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto font-medium text-lg leading-relaxed">
          Shrink your documents to strict limits like 50KB or 100KB without
          uploading a single byte to our servers.
        </p>
      </section>

      <section className="w-full">
        <CompressPdf />
      </section>

      <AdSlot id="compress-bottom" className="mt-12" />

      {/* Trust Content for AdSense */}
      <section className="mt-20 prose prose-slate max-w-none bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-green-50 text-green-600 rounded-xl">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 m-0">
              Why use local compression?
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Most online compressors store your files on their servers.{" "}
              <strong>EssentialCalc</strong> uses on-device browser logic to
              rasterize and optimize your PDF, meaning your sensitive ID proofs
              or certificates never leave your computer.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
