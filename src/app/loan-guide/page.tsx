import GuideToolLinks from "@/components/layouts/GuideToolLink";
import LatestNews from "@/components/layouts/LatestNews";
import ToolLinks from "@/components/layouts/TookLinks";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Complete Loan & EMI Guide (2026) – EMI Calculation, Safe Loan Limits & Repayment Strategy | EssentialCalc",
  description:
    "Comprehensive guide to loans and EMI calculation in India. Learn EMI formula, safe EMI percentage, loan affordability, lump sum vs EMI comparison, and smart repayment strategies.",
  alternates: {
    canonical: "https://essentialcalc.com/loan-guide",
  },
};

export default function LoanGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Complete Loan & EMI Guide in India (2026)
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        This guide explains everything about loans and EMI in India — how EMI is
        calculated, what percentage of salary is safe, common loan mistakes, and
        strategies to reduce total interest burden.
      </p>

      {/* WHAT IS EMI */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What is EMI?</h2>
        <p className="mb-4">
          EMI (Equated Monthly Installment) is the fixed monthly amount a
          borrower pays to repay a loan over a specified tenure. It includes
          both principal and interest.
        </p>
      </section>

      {/* EMI FORMULA */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">EMI Calculation Formula</h2>

        <p className="mb-4">EMI is calculated using the formula:</p>

        <div className="bg-gray-50 border rounded-xl p-6 mb-4 text-sm">
          EMI = P × r × (1+r)^n / ((1+r)^n – 1)
        </div>

        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li>P = Loan Amount</li>
          <li>r = Monthly Interest Rate</li>
          <li>n = Loan Tenure (months)</li>
        </ul>
      </section>

      {/* PRACTICAL EMI EXAMPLE */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          EMI Calculation Example (Home Loan)
        </h2>

        <div className="bg-gray-50 border rounded-xl p-6">
          <p>Loan Amount: ₹20,00,000</p>
          <p>Interest Rate: 8% per annum</p>
          <p>Tenure: 20 years</p>

          <p className="mt-4 font-semibold">Approx EMI: ₹16,700 per month</p>
        </div>

        <p className="mt-4">
          Calculate precisely using our{" "}
          <Link
            href="/emi-calculator/home-loan"
            className="text-sky-400-600 font-semibold"
          >
            Home Loan EMI Calculator
          </Link>
          .
        </p>
      </section>

      {/* SAFE EMI */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">How Much EMI Is Safe?</h2>

        <p className="mb-4">
          Financial experts suggest total EMI obligations should not exceed
          35%–40% of your monthly income.
        </p>

        <div className="bg-gray-50 border rounded-xl p-6">
          <p>Monthly Salary: ₹60,000</p>
          <p className="mt-2">Safe EMI Range: ₹21,000 – ₹24,000</p>
        </div>

        <p className="mt-4">
          Read detailed explanation:{" "}
          <Link
            href="/blog/how-much-emi-is-safe"
            className="text-sky-400-600 font-semibold"
          >
            How Much EMI Is Safe?
          </Link>
        </p>
      </section>

      {/* LUMP SUM VS EMI */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">EMI vs Lump Sum Payment</h2>

        <p className="mb-4">
          Choosing between paying lump sum or EMI depends on liquidity and
          interest cost.
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Lump sum avoids long-term interest.</li>
          <li>EMI preserves cash flow.</li>
          <li>EMI may increase total interest paid.</li>
        </ul>

        <p className="mt-4">
          Detailed comparison:{" "}
          <Link
            href="/blog/emi-vs-lump-sum-payment"
            className="text-sky-400-600 font-semibold"
          >
            EMI vs Lump Sum Guide
          </Link>
        </p>
      </section>

      {/* COMMON MISTAKES */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Common Loan Mistakes to Avoid
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>Taking maximum eligible loan without affordability analysis</li>
          <li>Ignoring processing fees and hidden charges</li>
          <li>Choosing longer tenure without evaluating total interest</li>
          <li>Not comparing interest rates</li>
        </ul>

        <p className="mt-4">
          Full article:{" "}
          <Link
            href="/blog/personal-loan-mistakes"
            className="text-sky-400-600 font-semibold"
          >
            Personal Loan Mistakes
          </Link>
        </p>
      </section>

      {/* SALARY BASED TOOL */}
      <section className="mb-10 border-t pt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Loan Affordability Based on Salary
        </h2>

        <p className="mb-4">
          Before taking a loan, calculate how much you can safely borrow based
          on income and existing obligations.
        </p>

        <Link
          href="/salary-calculator/salary-based"
          className="text-sky-400-600 font-semibold"
        >
          Check Loan Eligibility
        </Link>
      </section>

      {/* FAQ */}
      <section className="border-t pt-10 mt-10">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions (Loan & EMI)
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">How is EMI calculated?</h3>
            <p>
              EMI is calculated using loan amount, interest rate, and tenure
              using a compound interest formula.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              What percentage of salary should go to EMI?
            </h3>
            <p>Ideally not more than 35–40% of monthly income.</p>
          </div>

          <div>
            <h3 className="font-semibold">Does prepayment reduce EMI?</h3>
            <p>
              Yes. Prepayment reduces principal, which lowers interest burden.
            </p>
          </div>
        </div>
      </section>
      <ToolLinks />
      <GuideToolLinks />
      <LatestNews />
      {/* FAQ JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How is EMI calculated?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EMI is calculated using loan amount, interest rate, and tenure through a compound interest formula.",
                },
              },
              {
                "@type": "Question",
                name: "What percentage of salary is safe for EMI?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Financial experts suggest EMI should not exceed 35–40% of monthly income.",
                },
              },
              {
                "@type": "Question",
                name: "Does loan prepayment reduce interest?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, prepayment reduces outstanding principal, lowering total interest paid.",
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
