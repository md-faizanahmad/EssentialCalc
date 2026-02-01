import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Budget 2026 Live Updates | Highlights, Income Tax & Key Announcements",
  description:
    "Budget 2026 live updates with key highlights, income tax changes, new tax slabs, budget timing, and major announcements from the Union Budget 2026.",
  alternates: {
    canonical: "https://essentialcalc.com/blog/budget-2026-live",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When was Budget 2026 presented?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Union Budget 2026 was presented on February 1, 2026, at 11:00 AM IST in the Lok Sabha.",
      },
    },
    {
      "@type": "Question",
      name: "What are the major income tax changes in Budget 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Budget 2026 increased the standard deduction for salaried taxpayers and revised income tax slabs under the new tax regime. Changes apply from Assessment Year 2026–27.",
      },
    },
    {
      "@type": "Question",
      name: "Do Budget 2026 tax changes apply immediately?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Income tax changes announced in Budget 2026 apply from Assessment Year 2026–27.",
      },
    },
    {
      "@type": "Question",
      name: "Where can I find official Budget 2026 documents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Official Budget 2026 documents and the budget speech are published by the Ministry of Finance and PIB.",
      },
    },
  ],
};

export default function Budget2026LivePage() {
  const lastUpdated = "Feb 1, 2026, 12:10 PM IST";

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight">
          Budget 2026 Live Updates
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Union Budget 2026 • Last updated: {lastUpdated}
        </p>
      </header>

      {/* Intro */}
      <section className="mb-10 text-gray-700 leading-relaxed">
        <p>
          This page provides live updates and a structured overview of Budget
          2026, including key highlights, income tax changes, revised tax slabs,
          and major announcements from the Union Budget.
        </p>
      </section>

      {/* Live Update Log */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Budget 2026 Live Update Log
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>
            <strong>11:00 AM IST:</strong> Union Budget 2026 presented in Lok
            Sabha
          </li>
          <li>
            <strong>11:25 AM IST:</strong> Income tax changes announced under
            the new tax regime
          </li>
          <li>
            <strong>11:45 AM IST:</strong> Standard deduction increased for
            salaried taxpayers
          </li>
        </ul>
      </section>

      {/* Highlights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Budget 2026 Highlights
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Revised income tax slabs under the new tax regime</li>
          <li>Higher standard deduction for salaried individuals</li>
          <li>Continued rebate under Section 87A for eligible taxpayers</li>
          <li>Focus on fiscal discipline and capital expenditure</li>
        </ul>
      </section>

      {/* Income Tax */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Income Tax Changes in Budget 2026
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Budget 2026 introduced adjustments to income tax slabs under the new
          tax regime to simplify compliance and improve take-home income. The
          standard deduction for salaried taxpayers was increased to ₹75,000,
          reducing taxable income without requiring investment-based deductions.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Deductions such as Section 80C, House Rent Allowance (HRA), and home
          loan interest under Section 24(b) remain unavailable under the new
          regime. Taxpayers should compare both regimes before opting in.
        </p>
      </section>

      {/* Timing */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Budget 2026 Date and Time
        </h2>
        <p className="text-gray-700">
          The Union Budget 2026 was presented on February 1, 2026, at 11:00 AM
          IST in the Lok Sabha.
        </p>
      </section>

      {/* Summary */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Budget 2026 Summary
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Budget 2026 focused on predictable taxation, simplified structures
          under the new tax regime, and targeted relief for salaried and
          middle-income groups. This page will continue to reflect official
          updates and clarifications as they are released.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t pt-6 text-sm text-gray-500">
        This page is updated to reflect Budget 2026 announcements, summaries,
        and income tax changes based on official information.
      </footer>
    </main>
  );
}
