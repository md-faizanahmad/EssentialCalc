import Link from "next/link";
import { FileStack, Maximize, ImageIcon, ScanLine, Zap } from "lucide-react";

const pdfToolCards = [
  {
    title: "QuickMerge PDF",
    desc: "Combine multiple PDF documents into a single professional file instantly.",
    href: "/pdf-tools/pdf-merge",
    icon: <FileStack size={24} />,
    color: "bg-blue-50 text-blue-600",
    badge: "Most Popular",
  },
  {
    title: "Compress Img",
    desc: "Reduce  and Img size to 100KB or 50KB for government portal uploads.",
    href: "/compress-file",
    icon: <Maximize size={24} />,
    color: "bg-purple-50 text-purple-600",
    badge: "Under 100KB",
  },
  {
    title: "Image to PDF",
    desc: "Transform your JPG, PNG, or photos into high-quality PDF documents.",
    href: "/pdf-tools/image-to-pdf",
    icon: <ImageIcon size={24} />,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "OCR Text Scanner",
    desc: "Extract editable text from images and scans using on-device neural AI.",
    href: "/pdf-tools/ocr",
    icon: <ScanLine size={24} />,
    color: "bg-orange-50 text-orange-600",
    badge: "AI Powered",
  },
];

export default function PdfToolLinks() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Secure PDF & Media Tools
          </h2>
          <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-green-600 uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full border border-green-100">
            <Zap size={12} fill="currentColor" /> 100% Private
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pdfToolCards.map((tool) => (
            <Link key={tool.title} href={tool.href} className="group">
              <article className="p-6 border border-gray-100 rounded-4xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 transition-all bg-white h-full flex flex-col relative overflow-hidden">
                {tool.badge && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-[8px] font-black px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                    {tool.badge}
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${tool.color}`}
                >
                  {tool.icon}
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {tool.title}
                </h3>

                <p className="text-sm text-gray-500 mb-6 grow leading-relaxed font-serif">
                  {tool.desc}
                </p>

                <div className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-blue-600">
                  Open Tool
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
