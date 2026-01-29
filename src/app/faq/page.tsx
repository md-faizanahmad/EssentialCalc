import {
  HelpCircle,
  ShieldCheck,
  Cpu,
  Lock,
  Calculator,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";
import AdSlot from "@/components/layouts/AdSlot";

export const metadata = {
  title: "Frequently Asked Questions | EssentialCalc",
  description:
    "Get answers about EssentialCalc's private on-device tools. Learn how we process your data securely without server uploads.",
};

const FAQS = [
  {
    category: "Privacy & Security",
    icon: <Lock size={20} className="text-rose-600" />,
    items: [
      {
        q: "Does EssentialCalc save my files or data?",
        a: "No. Unlike other websites, EssentialCalc uses 'On-Device Computing'. All processing for PDF, Images, and Financial calculations happens in your browser's memory. Your data never touches our servers.",
      },
      {
        q: "Can I use these tools offline?",
        a: "Yes. Because our tools are built using WebAssembly and local JavaScript, once the page is loaded (or installed as a PWA), you can process files without an internet connection.",
      },
    ],
  },
  {
    category: "Tools & Usage",
    icon: <Calculator size={20} className="text-blue-600" />,
    items: [
      {
        q: "Are the EMI calculations accurate?",
        a: "Our calculators use the standard Reducing Balance Method, which is the same formula used by major Indian banks like SBI, HDFC, and ICICI. However, always verify with your bank for exact processing fees.",
      },
      {
        q: "What is the 50KB compression limit for?",
        a: "Many Indian government portals (like SSC, UPSC, and State PSCs) require documents to be under 50KB or 20KB. Our optimizer is specifically calibrated to hit these targets while maintaining legibility.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-2 md:py-2">
      {/* Header */}
      <header className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-500 text-[10px] font-black uppercase tracking-widest mb-4">
          <HelpCircle size={14} /> Knowledge Base
        </div>
        <h1 className="text-4xl md:text-7xl font-black text-gray-900 mb-6 tracking-tighter uppercase">
          Common <span className="text-blue-600">Questions.</span>
        </h1>
        <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
          Everything you need to know about our privacy-first utility engine.
        </p>
      </header>

      <AdSlot id="faq-top" />

      {/* FAQ Grid */}
      <div className="space-y-12">
        {FAQS.map((section, idx) => (
          <section key={idx} className="space-y-6">
            <div className="flex items-center gap-3 px-2">
              <div className="p-2 bg-white shadow-sm border border-gray-100 rounded-xl">
                {section.icon}
              </div>
              <h2 className="text-lg font-black uppercase tracking-tight text-gray-900">
                {section.category}
              </h2>
            </div>

            <div className="grid gap-4">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 p-6 rounded-4xl hover:border-blue-200 transition-all group"
                >
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.q}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-medium">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* AdSense Trust Block */}
      <section className="mt-20 p-8 md:p-12 bg-gray-900 rounded-[3rem] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
          <ShieldCheck size={180} />
        </div>

        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-2">
            <Cpu className="text-blue-400" /> Transparent Tech
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed mb-8 font-medium">
            EssentialCalc is built using <strong>TensorFlow.js</strong> and{" "}
            <strong>WebAssembly</strong>. We believe that your data is your
            property. By moving the logic to your browser, we remove the risk of
            data breaches. This platform is a service to the nation, providing
            free, pro-grade tools for every citizen.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase rounded-xl transition-all"
          >
            <MessageSquare size={16} /> Still have questions?
          </Link>
        </div>
      </section>

      <AdSlot id="faq-footer" className="mt-10" />
    </main>
  );
}
