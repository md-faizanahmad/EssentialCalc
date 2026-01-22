import Link from "next/link";
import AdSlot from "@/components/layouts/AdSlot";

export const metadata = {
  title: "How EssentialCalc Works - FAQ & Methodology | EssentialCalc",
  description:
    "Learn about the math and methodology behind our financial and utility tools. Frequently asked questions about privacy, accuracy, and usage.",
};

const faqs = [
  {
    question: "How accurate are the EMI calculations?",
    answer:
      "Our calculators use standard banking formulas (Equated Monthly Installment). While they are highly accurate for planning, actual bank figures may vary slightly due to rounding, processing fees, or daily reducing balance methods.",
  },
  {
    question: "Do you store my financial data?",
    answer:
      "No. EssentialCalc is built with privacy in mind. All calculations happen on the client-side (in your browser). We do not save your salary, loan amounts, or personal financial inputs on our servers.",
  },
  {
    question: "Is EssentialCalc free to use?",
    answer:
      "Yes, all our tools are 100% free. We sustain the platform through non-intrusive advertisements to ensure we can keep updating our tools for everyone.",
  },
  {
    question: "Can I use these results for official bank applications?",
    answer:
      "These tools are for estimation and planning purposes. We recommend verifying the final figures with your financial institution before signing any loan agreements.",
  },
];

export default function HowItWorks() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-black text-gray-900 mb-4">
          How EssentialCalc Works
        </h1>
        <p className="text-gray-600 text-lg">
          Transparency in methodology, privacy, and technology.
        </p>
      </header>

      {/* Methodology Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">
            01
          </span>
          Our Methodology
        </h2>
        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm leading-relaxed text-gray-700 space-y-4">
          <p>
            At <strong>EssentialCalc</strong>, we utilize industry-standard
            mathematical algorithms to ensure precision. For our financial
            tools, we employ the <strong>reducing balance method</strong>, which
            is the standard used by most global banks and financial
            institutions.
          </p>

          <p>
            For our utility tools like the PDF and Image processors, we leverage
            modern WebAssembly and browser-based processing, meaning your files
            stay on your device and are never uploaded to a cloud, ensuring
            maximum security.
          </p>
        </div>
      </section>

      <AdSlot id="how-works-mid" />

      {/* FAQ Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">
            02
          </span>
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50"
            >
              <h3 className="font-bold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* App Structure / Technology Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <span className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 text-sm">
            03
          </span>
          Built for Performance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-100 rounded-2xl">
            <h4 className="font-bold mb-2">Next.js 15+</h4>
            <p className="text-sm text-gray-500">
              Optimized for Core Web Vitals to ensure the fastest possible
              loading times on mobile devices.
            </p>
          </div>
          <div className="p-6 border border-gray-100 rounded-2xl">
            <h4 className="font-bold mb-2">Offline-Ready</h4>
            <p className="text-sm text-gray-500">
              Once loaded, many of our tools work without an active internet
              connection to save you data.
            </p>
          </div>
        </div>
      </section>

      <div className="bg-blue-600 rounded-3xl p-10 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Ready to start calculating?</h2>
        <p className="mb-8 opacity-90">
          Choose from our wide range of professional financial tools.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
        >
          Explore All Tools
        </Link>
      </div>

      <AdSlot id="how-works-footer" />
    </article>
  );
}
