import GuideToolLinks from "@/components/layouts/GuideToolLink";
import LatestNews from "@/components/layouts/LatestNews";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Complete Income Tax & ITR Filing Guide (2026) – Slabs, Forms, Due Dates | EssentialCalc",
  description:
    "Comprehensive guide to Income Tax in India. Learn ITR filing process, tax slabs (Old vs New Regime), freelancer taxation, 44ADA, due dates, and compliance rules.",
  alternates: {
    canonical: "https://essentialcalc.com/income-tax-guide",
  },
};

export default function IncomeTaxGuide() {
  return (
    <main>
      <article className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">
          Complete Income Tax & ITR Filing Guide in India (2026)
        </h1>

        <p className="mb-6 text-lg text-gray-700">
          This guide explains everything about Income Tax in India — who needs
          to file ITR, tax slabs under Old vs New Regime, freelancer taxation
          under Section 44ADA, due dates, penalties, and compliance rules.
        </p>

        {/* WHAT IS INCOME TAX */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What is Income Tax?</h2>
          <p className="mb-4">
            Income Tax is a direct tax levied by the Government of India on
            income earned by individuals and businesses. The tax amount depends
            on your total annual income and applicable tax slab.
          </p>
          <p>
            Income can include salary, business income, freelance income, rental
            income, capital gains, and other sources.
          </p>
        </section>

        {/* WHO MUST FILE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Who Must File ITR?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Individuals whose income exceeds basic exemption limit.</li>
            <li>Freelancers and self-employed professionals.</li>
            <li>Businesses and LLPs.</li>
            <li>Individuals claiming tax refunds.</li>
            <li>People with foreign assets or income.</li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Documents Required for ITR Filing
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>PAN & Aadhaar</li>
            <li>Form 16 (for salaried)</li>
            <li>Bank statements</li>
            <li>Investment proofs</li>
            <li>Business income records (for freelancers)</li>
          </ul>
        </section>

        {/* TAX SLABS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Income Tax Slabs – Old vs New Regime
          </h2>

          <p className="mb-4">
            Taxpayers can choose between the Old Regime (with deductions) and
            New Regime (lower rates but fewer deductions).
          </p>

          <div className="bg-gray-50 p-6 rounded-xl border">
            <h3 className="font-semibold mb-2">New Regime (FY 2025-26)</h3>
            <ul className="space-y-1 text-sm">
              <li>Up to ₹3,00,000 – Nil</li>
              <li>₹3L – ₹6L – 5%</li>
              <li>₹6L – ₹9L – 10%</li>
              <li>₹9L – ₹12L – 15%</li>
              <li>₹12L – ₹15L – 20%</li>
              <li>Above ₹15L – 30%</li>
            </ul>
          </div>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Should You Choose Old or New Tax Regime?
          </h2>

          <p className="mb-4">
            The Old Regime is beneficial if you claim deductions such as:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Section 80C (LIC, ELSS, PPF)</li>
            <li>Home Loan Interest (Section 24)</li>
            <li>Medical Insurance (80D)</li>
          </ul>

          <p className="mt-4">
            If you do not claim many deductions, the New Regime often results in
            lower tax.
          </p>
        </section>

        {/* ITR FOR FREELANCERS */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            ITR Filing for Freelancers (Section 44ADA)
          </h2>

          <p className="mb-4">
            Freelancers such as designers, developers, consultants can opt for
            presumptive taxation under Section 44ADA if annual receipts are
            within prescribed limits.
          </p>

          <p className="mb-4">
            Under 44ADA, 50% of gross receipts are considered taxable income,
            simplifying compliance.
          </p>

          <p>
            Detailed explanation:{" "}
            <Link
              href="/blog/itr-for-freelancers"
              className="text-blue-600 font-semibold"
            >
              ITR for Freelancers Guide
            </Link>
          </p>
        </section>

        {/* NIL RETURN */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            What is a Nil ITR Return?
          </h2>
          <p>
            A Nil return is filed when your income is below taxable limits but
            you want to maintain compliance or claim refund.
          </p>

          <p>
            Learn more:{" "}
            <Link
              href="/blog/nil-itr-return"
              className="text-blue-600 font-semibold"
            >
              Nil ITR Explained
            </Link>
          </p>
        </section>

        {/* DUE DATES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            ITR Due Dates in India
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Individuals (non-audit): 31 July</li>
            <li>Businesses requiring audit: 31 October</li>
            <li>Revised return: 31 December</li>
          </ul>
        </section>

        {/* PENALTIES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Penalty for Late Filing
          </h2>
          <p>
            Late filing may attract penalty up to ₹5,000 under Section 234F
            depending on income level.
          </p>
        </section>

        {/* TOOLS SECTION */}
        <section className="mb-12 border-t pt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Useful Tax & Salary Tools
          </h2>
          <ul className="space-y-3">
            <li>
              <Link
                href="/salary-calculator/salary-breakup"
                className="text-blue-600 font-semibold"
              >
                Salary Break-up Calculator
              </Link>
            </li>
            <li>
              <Link
                href="/salary-calculator/salary-based"
                className="text-blue-600 font-semibold"
              >
                Salary-Based Loan Calculator
              </Link>
            </li>
          </ul>
        </section>
        {/* TAX CALCULATION EXAMPLE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Income Tax Calculation Example (Practical Breakdown)
          </h2>

          <p className="mb-4">
            Let’s understand how tax is calculated under the New Regime with a
            real example.
          </p>

          <div className="bg-gray-50 border rounded-xl p-6 mb-6">
            <h3 className="font-semibold mb-2">Example:</h3>
            <p>Annual Salary: ₹10,00,000</p>
            <ul className="list-disc pl-6 text-sm mt-3 space-y-1">
              <li>₹0 – ₹3,00,000 → Nil</li>
              <li>₹3L – ₹6L (₹3L) → 5% = ₹15,000</li>
              <li>₹6L – ₹9L (₹3L) → 10% = ₹30,000</li>
              <li>₹9L – ₹10L (₹1L) → 15% = ₹15,000</li>
            </ul>
            <p className="mt-4 font-semibold">
              Total Tax = ₹60,000 (before cess)
            </p>
          </div>

          <p>
            You can estimate your salary structure using our{" "}
            <Link
              href="/salary-calculator/salary-breakup"
              className="text-blue-600 font-semibold"
            >
              Salary Break-up Calculator
            </Link>
            .
          </p>
        </section>

        {/* FAQ */}
        <section className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">
                Is ITR mandatory if income is below ₹2.5 lakh?
              </h3>
              <p>
                Not mandatory unless specific conditions apply, but filing helps
                in visa processing, loans, and refunds.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can freelancers file ITR without CA?
              </h3>
              <p>
                Yes. Freelancers can file using ITR-3 or opt for presumptive
                taxation under 44ADA.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                What happens if I miss the deadline?
              </h3>
              <p>
                You may pay late fee and interest. Filing as soon as possible
                reduces penalties.
              </p>
            </div>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Who must file Income Tax Return in India?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Individuals whose income exceeds exemption limit, freelancers, businesses, and those claiming refunds must file ITR.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is Section 44ADA for freelancers?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Section 44ADA allows freelancers to declare 50% of gross receipts as taxable income under presumptive taxation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is the last date to file ITR?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For individuals not requiring audit, the due date is generally 31 July of the assessment year.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What happens if I file ITR late?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Late filing may attract penalty up to ₹5,000 under Section 234F along with interest.",
                  },
                },
              ],
            }),
          }}
        />
      </article>
      <GuideToolLinks />
      <LatestNews />
    </main>
  );
}
