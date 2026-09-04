import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export default function HomeStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto">
          {/* Section Header */}
          <header className="text-center mb-16">
            <span className="text-sky-400-600 font-bold uppercase tracking-widest text-xs">
              About EssentialCalc
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              Free Financial Calculators, Budget Updates & Finance Blogs
            </h2>
            <div className="relative mx-auto h-1.5 w-20 overflow-hidden rounded-full bg-neutral-200">
              <div
                className="
      absolute inset-y-0 left-0 w-full
      rounded-full
      bg-linear-to-r from-green-500 via-red-500 to-sky-500
      animate-[waveFill_2s_ease-in-out_infinite]
    "
              />
            </div>
          </header>

          {/* Main Content */}
          <div className="grid grid-cols-1 font-serif md:grid-cols-2 gap-12 items-center mb-20">
            <div className="prose prose-slate prose-lg">
              <p>
                <strong>EssentialCalc</strong> is a free online platform that
                helps users calculate, understand, and plan their finances using
                simple financial calculators, budget updates, and practical
                finance blogs.
              </p>

              <p>
                Popular tools on EssentialCalc include an{" "}
                <strong>EMI calculator</strong> for home loan, car loan, and
                personal loan calculations, a <strong>salary calculator</strong>{" "}
                to estimate monthly in-hand salary from CTC, and easy-to-use{" "}
                <strong>PDF and image tools</strong> for everyday tasks.
              </p>

              <p>
                In addition to calculators, EssentialCalc publishes{" "}
                <strong>finance blogs and budget guides</strong> that explain
                topics like income tax changes, budget highlights, and salary
                planning in simple language — without sales pressure or hidden
                promotions.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h3 className="text-2xl font-semibold text-sky-400-900 mb-4">
                How Our Financial Calculators Work
              </h3>
              <p className="text-sky-400-800 text-sm leading-relaxed">
                Financial calculators on EssentialCalc use standard methods such
                as the <strong>reducing balance method</strong>, which is
                commonly used by banks and financial institutions. Results are
                designed to give clear estimates for comparison and planning,
                not financial advice.
              </p>
            </div>
          </div>

          {/* Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-sky-400-600">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Privacy-First Tools
              </h3>
              <p className="text-sm text-gray-600">
                All calculations and file processing happen directly in your
                browser. No account is required and no personal financial data
                is stored.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-sky-400-600">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Fast & Mobile Friendly
              </h3>
              <p className="text-sm text-gray-600">
                EssentialCalc is optimized for speed and works smoothly on
                mobile devices, even with slow internet connections.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm text-sky-400-600">
                <HeartHandshake size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Free & Independent
              </h3>
              <p className="text-sm text-gray-600">
                All calculators, blogs, and tools on EssentialCalc are free to
                use. The platform remains independent and focused on clarity and
                usefulness.
              </p>
            </div>
          </div>

          {/* Trust Footer */}
          <footer className="mt-20 text-center border-t border-gray-100 pt-12">
            <p className="text-sm text-gray-500">
              EssentialCalc is an independent platform offering financial
              calculators, budget updates, and finance guides for everyday use
              in India.
            </p>
          </footer>
        </article>
      </div>
    </section>
  );
}
