import AdSlot from "@/components/layouts/AdSlot";
import HomeLoanCalc from "@/components/tools/HomeLoanCalc";
import homeLoanFaqs from "@/data/homeLoanFaqs";

export const metadata = {
  title: "Home Loan EMI Calculator (2026) – Monthly EMI, Interest & Cost | EssentialCalc",
  description:
    "Free Home Loan EMI Calculator for India. Calculate monthly EMI, total interest, and repayment amount instantly. Suitable for all major banks.",
};

export default function HomeLoanPage() {
  return (
    <article className="max-w-6xl mx-auto px-4 py-10">

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Home Loan EMI Calculator
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Calculate your monthly home loan EMI, total interest payable, and overall
          repayment cost based on loan amount, interest rate, and tenure.
        </p>
      </header>

      {/* Calculator */}
      <HomeLoanCalc />

      {/* Push ads AFTER value */}
      <AdSlot id="below-home-loan-content" />

      {/* SEO Content */}
      <section className="mt-16 prose prose-slate max-w-none">
        <h2>Understanding Home Loan EMI</h2>
        <p>
          A home loan is a long-term financial commitment, often lasting up to
          30 years. EMI calculators help borrowers plan their finances by showing
          how interest rate and tenure affect monthly payments.
        </p>

        <h2>Home Loan EMI Formula</h2>
        <pre>
EMI = P × r × (1+r)^n / ((1+r)^n − 1)
        </pre>
        <p>
          Where P is loan amount, r is monthly interest rate, and n is tenure in months.
        </p>

        <h2>Example Home Loan EMI Calculation</h2>
        <p>
          For a ₹50 lakh home loan at 8.5% interest for 20 years, the monthly EMI
          is approximately ₹43,391.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-4">
          {homeLoanFaqs.map((faq, index) => (
            <details
              key={index}
              className="rounded-xl border border-gray-200 p-4 open:bg-gray-50"
            >
              <summary className="cursor-pointer font-semibold text-gray-900">
                {faq.q}
              </summary>
              <p className="mt-3 text-gray-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homeLoanFaqs.map(faq => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </article>
  );
}