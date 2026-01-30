import Link from "next/link";
import {
  ScanFace,
  PenTool,
  Layers,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Zap,
} from "lucide-react";
import AdSlot from "@/components/layouts/AdSlot";

export const metadata = {
  title:
    "Image Tools Online – Background Remover, Attestation & Compression | EssentialCalc",
  description:
    "Free image tools for background removal, self-attestation, and image compression. 100% browser-based, private, and no file uploads required.",
  alternates: {
    canonical: "https://essentialcalc.com/image-tools",
  },
};

const IMAGE_TOOLS = [
  {
    title: "BG Remover",
    fullTitle: "AI Background Remover",
    desc: "Remove backgrounds locally using AI.",
    href: "/image-tools/remove-bg",
    icon: <ScanFace size={24} />,
    color: "bg-rose-50 text-rose-600",
    badge: "AI",
  },
  {
    title: "Attestation",
    fullTitle: "Self-Attestation Tool",
    desc: "Digitally sign photos & documents.",
    href: "/image-tools/self-attest",
    icon: <PenTool size={24} />,
    color: "bg-indigo-50 text-indigo-600",
    badge: "Popular",
  },
  // {
  //   title: "Cropper",
  //   fullTitle: "Smart Image Cropper",
  //   desc: "Passport & ID size cropping.",
  //   href: "/image-tools/crop",
  //   icon: <Crop size={24} />,
  //   color: "bg-amber-50 text-amber-600",
  // },
  {
    title: "Optimizer",
    fullTitle: "Image Optimizer",
    desc: "Compress & convert formats.",
    href: "/image-tools/image-optimize",
    icon: <Layers size={24} />,
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function ImageToolsHub() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-1 md:py-1">
      {/* Compact Header */}
      <header className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-600 text-[9px] font-black uppercase tracking-widest mb-4">
          <Cpu size={12} /> Local AI Processing
        </div>
        <h1 className="text-3xl md:text-6xl font-black text-gray-900 mb-3 tracking-tighter uppercase">
          Image <span className="text-rose-600">AI</span> Tools.
        </h1>
        <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Secure, browser-based image processing for Indian government portals.
        </p>
      </header>

      {/* Compact Mobile-First Grid */}
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-16">
        {IMAGE_TOOLS.map((tool) => (
          <Link key={tool.title} href={tool.href} className="group">
            <article className="p-4 md:p-6 bg-white border border-gray-100 rounded-3xl md:rounded-4xl shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 flex flex-col h-full relative overflow-hidden">
              {tool.badge && (
                <div className="absolute top-0 right-0 bg-rose-600 text-white text-[7px] md:text-[8px] font-black px-2 md:px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                  {tool.badge}
                </div>
              )}

              <div
                className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${tool.color}`}
              >
                {tool.icon}
              </div>

              <h2 className="text-sm md:text-xl font-bold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors tracking-tight">
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
                  className="text-gray-300 group-hover:text-rose-600 group-hover:translate-x-1 transition-all"
                />
              </div>
            </article>
          </Link>
        ))}
      </section>

      <AdSlot id="image-hub-mid" />

      {/* Clean SEO Story Section */}
      <article className="mt-16 max-w-3xl mx-auto">
        <div className="bg-gray-50 p-6 md:p-10 rounded-4xl border border-gray-100">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={18} className="text-rose-600" fill="currentColor" />
            <h2 className="text-xl font-bold text-gray-900 uppercase tracking-tight">
              Why Choose EssentialCalc?
            </h2>
          </div>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Most online image editors upload your personal photos to their
              servers.
              <strong> EssentialCalc</strong> changes that. Using{" "}
              <strong>TensorFlow.js</strong>, we bring the AI to your browser.
              Your photos never leave your phone.
            </p>
            <p>
              Whether you need to <strong>Self-Attest</strong> a document for a
              Bihar state portal or crop a passport photo for a central job
              application, our tools ensure compliance and 100% data
              sovereignty.
            </p>
          </div>
        </div>
      </article>

      <AdSlot id="image-hub-footer" className="mt-10" />
    </div>
  );
}
