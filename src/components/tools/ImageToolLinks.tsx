import Link from "next/link";
import {
  ScanFace,
  PenTool,
  Layers,
  ShieldCheck,
  ArrowRight,
  Zap,
} from "lucide-react";

const imageTools = [
  {
    title: "BG Remover",
    desc: "Remove backgrounds locally using on-device AI.",
    href: "/image-tools/remove-bg",
    icon: <ScanFace size={24} />,
    color: "bg-rose-50 text-rose-600",
    badge: "AI",
  },
  {
    title: "Attestation",
    desc: "Digitally sign photos for portal requirements.",
    href: "/image-tools/self-attest",
    icon: <PenTool size={24} />,
    color: "bg-indigo-50 text-indigo-600",
    badge: "Popular",
  },
  // {
  //   title: "Image Cropper",
  //   desc: "Exact Passport & ID size cropping ratios.",
  //   href: "/image-tools/crop",
  //   icon: <Crop size={24} />,
  //   color: "bg-amber-50 text-amber-600",
  // },
  {
    title: "Optimizer",
    desc: "Compress & convert formats without data loss.",
    href: "/image-tools/image-optimize",
    icon: <Layers size={24} />,
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function ImageToolLinks() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase">
              Image <span className="text-rose-600">AI</span> Utilities{" "}
            </h2>
            <p className="text-xs text-gray-500 font-medium mt-1 uppercase tracking-widest">
              100% Client-Side &middot; No Uploads
            </p>
          </div>
          <Link
            href="/image-tools"
            className="hidden md:flex items-center gap-1 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] hover:underline"
          >
            View All <ArrowRight size={12} />
          </Link>
        </div>

        {/* Mobile-First Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {imageTools.map((tool) => (
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

                <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 group-hover:text-rose-600 transition-colors tracking-tight">
                  {tool.title}
                </h3>

                <p className="text-[10px] md:text-sm text-gray-500 leading-snug mb-4 grow line-clamp-2">
                  {tool.desc}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                  <div className="flex items-center gap-1">
                    <ShieldCheck size={12} className="text-green-500" />
                    <span className="text-[8px] font-bold uppercase tracking-tighter text-gray-400">
                      Private
                    </span>
                  </div>
                  <div className="text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Zap size={14} fill="currentColor" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile View All */}
        <Link
          href="/image-tools"
          className="md:hidden block text-center mt-6 text-[10px] font-black text-blue-600 uppercase tracking-widest py-3 bg-blue-50 rounded-xl"
        >
          Explore All Image Tools &rarr;
        </Link>
      </div>
    </section>
  );
}
