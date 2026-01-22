import EligibilityCalc from "@/components/tools/EligibilityCalc";
import AdSlot from "@/components/layouts/AdSlot";

export const metadata = {
  title:
    "Loan Eligibility Calculator - How Much Loan Can I Get? | EssentialCalc",
  description:
    "Calculate your loan eligibility based on your monthly salary. Use the FOIR method to see your maximum borrowing capacity instantly.",
};

export default function EligibilityPage() {
  return (
    <article className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Salary-Based Loan Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Wondering how much a bank will lend you? Our calculator uses
          industry-standard formulae to estimate your loan capacity based on
          your income and existing debts.
        </p>
      </header>

      <EligibilityCalc />

      <AdSlot id="eligibility-mid" className="my-12" />

      <section className="mt-16 bg-white p-8 rounded-3xl border border-gray-100 prose prose-slate max-w-none shadow-sm">
        <h2 className="text-2xl font-bold">
          How is Loan Eligibility Calculated?
        </h2>
        <p>
          Banks don&apos;t just look at your salary; they look at your{" "}
          <strong>disposable income</strong>. The primary metric used is the{" "}
          <strong>Fixed Obligation to Income Ratio (FOIR)</strong>.
        </p>

        <h3 className="text-xl font-bold mt-8">The 50% Rule (FOIR)</h3>
        <p>
          Most financial institutions believe that a person should not spend
          more than 50% of their monthly net income on loan repayments (EMIs).
        </p>
        <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-purple-500 my-6">
          <p className="font-mono text-sm">
            <strong>FOIR Calculation:</strong> (Total Monthly EMIs / Total
            Monthly Income) x 100
          </p>
        </div>

        <h3 className="text-xl font-bold mt-8">
          Factors That Increase Your Eligibility:
        </h3>
        <ul className="space-y-3">
          <li>
            <strong>Longer Tenure:</strong> Spreading the loan over 30 years
            instead of 20 lowers the EMI, which increases the total amount you
            can borrow.
          </li>
          <li>
            <strong>Co-Applicant:</strong> Adding a spouse or parent with a
            steady income combines your borrowing power.
          </li>
          <li>
            <strong>Clearing Old Debts:</strong> Closing small credit card or
            personal loans increases your surplus income.
          </li>
        </ul>
      </section>

      <AdSlot id="eligibility-footer" />
    </article>
  );
}
