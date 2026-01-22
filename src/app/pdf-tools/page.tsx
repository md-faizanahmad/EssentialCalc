import Link from "next/link";
import {
  FileText,
  Shrink,
  Zap,
  FileOutput,
  ShieldCheck,
  Cpu,
  ArrowRight,
  ScanText,
} from "lucide-react";
import AdSlot from "@/components/layouts/AdSlot";

export const metadata = {
  title: "Secure PDF Utilities - Merge, Compress & OCR Locally | EssentialCalc",
  description:
    "Professional PDF tools including local compression, merging, and image conversion. 100% private browser-based processing.",
};

const PDF_TOOLS = [
  {
    title: "Compress",
    fullTitle: "Compress PDF & Image",
    desc: "Shrink files to 50KB for portals.",
    href: "/compress-file",
    icon: <Shrink size={24} />,
    color: "bg-blue-50 text-blue-600",
    badge: "50KB",
  },
  {
    title: "PDF Merge",
    fullTitle: "PDF Merger",
    desc: "Combine multiple PDFs securely.",
    href: "/pdf-tools/pdf-merge",
    icon: <FileText size={24} />,
    color: "bg-indigo-50 text-indigo-600",
    badge: "Popular",
  },
  {
    title: "Img to PDF",
    fullTitle: "Image to PDF Converter",
    desc: "Turn photos into documents.",
    href: "/pdf-tools/image-to-pdf",
    icon: <FileOutput size={24} />,
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "OCR Scan",
    fullTitle: "Optical Character Recognition",
    desc: "Extract text from scans locally.",
    href: "/pdf-tools/ocr",
    icon: <ScanText size={24} />,
    color: "bg-amber-50 text-amber-600",
    badge: "AI",
  },
];

export default function PdfToolsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-1 md:py-1">
      {/* Compact Header */}
      <header className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[9px] font-black uppercase tracking-widest mb-4">
          <Cpu size={12} /> Privacy-Engine Enabled
        </div>
        <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-3 tracking-tighter uppercase">
          SECURE <span className="text-blue-600">PDF</span> TOOLS.
        </h1>
        <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Professional document processing that runs entirely on your device.
        </p>
      </header>

      {/* Compact Mobile-First Grid */}
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16">
        {PDF_TOOLS.map((tool) => (
          <Link key={tool.title} href={tool.href} className="group">
            <article className="p-4 md:p-6 bg-white border border-gray-100 rounded-3xl md:rounded-4xl shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              {tool.badge && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[7px] md:text-[8px] font-black px-2 md:px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                  {tool.badge}
                </div>
              )}

              <div
                className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${tool.color}`}
              >
                {tool.icon}
              </div>

              <h2 className="text-sm md:text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors tracking-tight">
                {tool.title}
              </h2>
              <p className="text-[10px] md:text-sm text-gray-500 leading-snug mb-4 grow line-clamp-2 md:line-clamp-none">
                {tool.desc}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <div className="flex items-center gap-1">
                  <ShieldCheck size={12} className="text-green-500" />
                  <span className="text-[8px] font-bold uppercase tracking-tighter text-gray-400">
                    Private
                  </span>
                </div>
                <ArrowRight
                  size={14}
                  className="text-gray-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                />
              </div>
            </article>
          </Link>
        ))}
      </section>

      <AdSlot id="pdf-hub-mid" />

      {/* Clean SEO Story Section */}
      <article className="mt-16 max-w-3xl mx-auto">
        <div className="bg-gray-50 p-6 md:p-10 rounded-4xl border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={18} className="text-blue-600" fill="currentColor" />
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight">
              Why Secure PDF Processing?
            </h2>
          </div>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Traditional PDF editors upload your sensitive data—like bank
              statements and ID proofs—to remote servers.
              <strong> EssentialCalc</strong> eliminates this risk by using{" "}
              <strong>WebAssembly (WASM)</strong> technology to process every
              file directly in your browser.
            </p>
            <p>
              Whether you are merging documents for a job application or
              compressing a PDF to meet strict 50KB limits for a government
              portal, your files never leave your device. We provide
              high-performance tools with 100% data sovereignty.
            </p>
          </div>
        </div>
      </article>

      <AdSlot id="pdf-hub-footer" className="mt-10" />
    </div>
  );
}
