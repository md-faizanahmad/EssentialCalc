import SalaryCalc from "@/components/tools/SalaryCalc";
import AdSlot from "@/components/layouts/AdSlot";

export const metadata = {
  title: "Salary Calculator - CTC to In-Hand Breakup | EssentialCalc",
  description:
    "Calculate your monthly take-home salary from your annual CTC. Understand PF, Professional Tax, and Income Tax deductions accurately.",
};

export default function SalaryPage() {
  return (
    <article className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Salary Breakup Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Wondering how much salary you will actually receive in your bank
          account? Use our tool to see your monthly in-hand pay.
        </p>
      </header>

      <SalaryCalc />

      <AdSlot id="salary-mid-content" />

      <section className="mt-16 bg-white p-8 rounded-3xl border border-gray-100 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold">What is CTC vs In-Hand Salary?</h2>
        <p>
          <strong>CTC (Cost to Company)</strong> is the total amount an employer
          spends on an employee per year. However, your{" "}
          <strong>In-Hand Salary</strong> is the actual amount you receive after
          various statutory and tax deductions.
        </p>

        <h3 className="text-xl font-bold mt-8">Common Salary Deductions:</h3>
        <ul className="space-y-4">
          <li>
            <strong>Employee Provident Fund (EPF):</strong> Usually 12% of your
            basic salary, contributed toward your retirement savings.
          </li>
          <li>
            <strong>Professional Tax (PT):</strong> A small tax levied by state
            governments (usually around ₹200).
          </li>
          <li>
            <strong>Income Tax (TDS):</strong> Tax deducted at source based on
            your income slab and chosen tax regime.
          </li>
        </ul>

        <div className="bg-blue-50 p-6 rounded-2xl mt-8">
          <h4 className="font-bold text-blue-900 mb-2 underline">
            Quick Pro-Tip:
          </h4>
          <p className="text-blue-800 text-sm italic">
            &quot;To maximize your in-hand salary, ensure you utilize all
            available tax-saving instruments like 80C (PPF, ELSS, Insurance) and
            80D (Health Insurance).&quot;
          </p>
        </div>
      </section>

      <AdSlot id="salary-footer" />
    </article>
  );
}
