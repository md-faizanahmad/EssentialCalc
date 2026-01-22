import ToolCard from "@/components/tools/PdfToolCard";
import {
  FileText,
  Shrink,
  Zap,
  FileOutput,
  Info,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import AdSlot from "@/components/layouts/AdSlot";

export default function PdfToolsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 md:py-1">
      {/* Hero Section */}
      <section className="text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
          <Zap size={14} fill="currentColor" /> 100% On-Device Processing
        </div>

        <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter leading-tight">
          PDF TOOLS THAT <br />
          <span className="text-blue-600">PROTECT PRIVACY.</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop uploading sensitive documents to random servers. Our tools run
          locally in your browser, ensuring your files never leave your device.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#tools"
            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
          >
            Start Processing
          </Link>
          <Link
            href="/how-it-works"
            className="px-8 py-4 bg-gray-50 text-gray-600 font-bold rounded-2xl border border-gray-100 hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
          >
            <Info size={18} /> Learn the Tech
          </Link>
        </div>
      </section>

      {/* Tools Grid */}
      <section
        id="tools"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <ToolCard
          title="Compress Pdf"
          desc="Shrink PDFs to 25KB/50KB using local optimization. Perfect for Indian government portals."
          icon={<Shrink size={24} />}
          href="/pdf-tools/compress-pdf"
          accent="blue"
        />
        <ToolCard
          title="Pdf Merge"
          desc="Combine multiple PDF files into one single document instantly and securely."
          icon={<FileText size={24} />}
          href="/pdf-tools/pdf-merge"
          accent="blue"
        />
        <ToolCard
          title="Image to PDF"
          desc="Turn your JPG/PNG photos into professional PDF documents without any data loss."
          icon={<FileOutput size={24} />}
          href="/pdf-tools/image-to-pdf"
          accent="blue"
        />
      </section>

      <AdSlot id="pdf-tools-footer" className="mt-20" />

      {/* Security Disclaimer - For AdSense Trust */}
      <div className="mt-20 p-8 bg-green-50 rounded-[2.5rem] border border-green-100 flex flex-col md:flex-row items-center gap-6">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-green-600 shadow-sm shrink-0">
          <ShieldCheck size={32} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-green-900 mb-1">
            Your Data is Safe
          </h3>
          <p className="text-sm text-green-800 leading-relaxed">
            EssentialCalc uses WebAssembly (WASM) to process files. This means
            your private documents never touch our servers. Processing happens
            entirely on your CPU/RAM, keeping you 100% compliant with Indian
            data laws.
          </p>
        </div>
      </div>
    </main>
  );
}
