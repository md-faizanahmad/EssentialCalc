import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export default function HomeStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
              About EssentialCalc
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Simple, Accurate & Transparent Online Calculators
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
          </header>

          {/* Main Content */}
          <div className="grid grid-cols-1 font-serif md:grid-cols-2 gap-12 items-center mb-20">
            <div className="prose prose-slate prose-lg">
              <p>
                <strong>EssentialCalc</strong> is a free online platform
                designed to help users make informed financial and practical
                decisions using reliable calculators and utility tools.
              </p>

              <p>
                Our most-used tools include an <strong>EMI calculator</strong>{" "}
                for home, car, and personal loans, a{" "}
                <strong>salary calculator</strong> to estimate monthly in-hand
                pay from CTC, and a growing collection of{" "}
                <strong>PDF and image tools</strong> for everyday productivity.
              </p>

              <p>
                Unlike many platforms that focus on selling financial products,
                EssentialCalc focuses on clarity. Our tools are built to explain
                numbers in a simple way so users can understand costs, interest,
                and outcomes before making decisions.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                How Our Calculations Work
              </h3>
              <p className="text-blue-800 text-sm leading-relaxed">
                Financial calculators on EssentialCalc use commonly accepted
                formulas such as the <strong>reducing balance method</strong>,
                which is widely used by banks and financial institutions.
                Results are intended to be practical estimates to help with
                planning and comparison.
              </p>
            </div>
          </div>

          {/* Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Privacy Focused
              </h3>
              <p className="text-sm text-gray-600">
                Calculator inputs and file operations are processed directly in
                your browser. We do not require account creation or store
                personal financial data.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fast & Lightweight
              </h3>
              <p className="text-sm text-gray-600">
                The website is optimized for performance and mobile usage,
                allowing tools to load quickly even on slower connections.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-blue-600">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Free to Use
              </h3>
              <p className="text-sm text-gray-600">
                EssentialCalc is free for users. The platform is supported by
                limited, non-intrusive advertising to help maintain and improve
                the service.
              </p>
            </div>
          </div>

          {/* Trust Footer */}
          <footer className="mt-20 text-center border-t border-gray-100 pt-12">
            <p className="text-sm text-gray-500">
              EssentialCalc is an independent online utility platform built for
              everyday calculation and productivity needs.
            </p>
          </footer>
        </article>
      </div>
    </section>
  );
}
