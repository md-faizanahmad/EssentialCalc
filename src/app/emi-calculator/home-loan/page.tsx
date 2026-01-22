import AdSlot from "@/components/layouts/AdSlot";
import HomeLoanCalc from "@/components/tools/HomeLoanCalc";

export const metadata = {
  title: "Home Loan EMI Calculator - EssentialCalc",
  description:
    "Calculate your monthly home loan EMI with detailed principal and interest breakdowns.",
};

export default function HomeLoanPage() {
  return (
    <article className="max-w-6xl mx-auto px-4 py-10">
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Home Loan EMI Calculator
        </h1>
        <p className="text-gray-600">
          Estimate your monthly installments precisely for your dream house
          purchase.
        </p>
      </header>

      {/* The Actual Calculator */}
      <HomeLoanCalc />

      <AdSlot id="below-calc-home-loan" />

      {/* SEO/Blog Content Section */}
      <section className="mt-16 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold">Understanding Your Home Loan EMI</h2>
        <p>
          A home loan is a long-term commitment, often spanning up to 30 years.
          Using an EMI calculator helps you understand the impact of interest
          rates and tenure on your monthly budget.
        </p>

        <h3 className="text-xl font-bold mt-8">Why Use Our Home Loan Tool?</h3>
        <ul>
          <li>
            <strong>Instant Results:</strong> Adjust sliders to see real-time
            payment changes.
          </li>
          <li>
            <strong>Accurate Math:</strong> Uses standard bank formulas for
            Indian and Global banks.
          </li>
          <li>
            <strong>Visual Breakdown:</strong> See exactly how much interest you
            pay versus the principal amount.
          </li>
        </ul>
      </section>
    </article>
  );
}
