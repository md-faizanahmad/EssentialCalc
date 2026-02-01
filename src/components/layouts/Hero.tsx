import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 border-b border-gray-100">
      {/* Subtle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-50 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 text-center">
        {/* H1 */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
          Financial Calculators,{" "}
          <span className="text-blue-900 fasthand-regular">Budget Updates</span>
          <br className="hidden md:block" /> & Practical Finance Guides
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl font-serif text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          <strong>EssentialCalc</strong> helps you calculate EMI, loan, salary,
          and income tax while staying updated with budget highlights and
          easy-to-understand finance blogs — all in one place, free and
          privacy-first.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/emi-calculator"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95"
          >
            Use EMI Calculator
          </Link>

          <Link
            href="/blog"
            className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:bg-gray-50 transition-all active:scale-95"
          >
            Read Finance Blogs
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex items-center justify-center space-x-8 text-xs font-medium text-gray-400 uppercase tracking-widest">
          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Privacy-First
          </span>

          <span className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Free Tools & Guides
          </span>
        </div>
      </div>
    </section>
  );
}