import AdSlot from "@/components/layouts/AdSlot";
import { TrendingUp, Info } from "lucide-react";
import SalaryCalc from "@/components/tools/SalaryCalc";
import EligibilityCalc from "@/components/tools/EligibilityCalc";

export const metadata = {
  title: "Salary Calculator & Loan Eligibility by Income | EssentialCalc",
  description:
    "Calculate in-hand salary, understand CTC and salary breakup, and check loan eligibility based on monthly income. Free, accurate salary and income-based tools.",
  alternates: {
    canonical: "https://essentialcalc.com/salary-calculator",
  },
};

export default function SalaryHubPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header Section */}
      <header className="mb-12">
        <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
          <TrendingUp size={16} />
          <span>Income Planning</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
          Salary & Affordability{" "}
          <span className="text-blue-600">Calculators.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Understanding your true take-home pay is the first step in financial
          planning. Use our tools to decode your CTC and discover exactly how
          much loan your current salary can safely support.
        </p>
      </header>

      {/* Tool Cards */}

      <SalaryCalc />

      <div className="mt-30">
        <EligibilityCalc />
      </div>
      <AdSlot id="salary-hub-middle" />

      {/* Educational Content Section - For AdSense Approval */}
      <article className="mt-20 prose prose-slate max-w-none border-t border-gray-100 pt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-gray-900 mb-8">
            Why Salary Planning Matters?
          </h2>

          <div className="flex gap-4 p-6 bg-blue-50 rounded-2xl mb-8">
            <Info className="text-blue-600 shrink-0" />
            <p className="text-sm text-blue-800 m-0">
              Did you know that most banks in India allow only 40-50% of your
              net monthly income to go towards EMIs? This is called the FOIR
              (Fixed Obligation to Income Ratio).
            </p>
          </div>

          <h3 className="text-xl font-bold text-gray-900">
            Decoding your CTC (Cost to Company)
          </h3>
          <p>
            Your CTC is often very different from your &quot;In-Hand&quot;
            salary. It includes components like Employee Provident Fund (EPF),
            Gratuity, and sometimes even non-cash benefits. Our{" "}
            <strong>Salary Break-Up</strong> tool helps you strip away these
            layers to see the actual cash you will receive on the 1st of every
            month.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-10">
            Safe Borrowing Limits
          </h3>
          <p>
            Before applying for a Home or Car loan, it is vital to check your
            <strong>Salary-Based Loan</strong> eligibility. Over-leveraging your
            income can lead to financial stress. We recommend keeping your total
            EMIs below 35% of your take-home pay for a comfortable lifestyle.
          </p>
        </div>
      </article>

      <AdSlot id="salary-hub-footer" className="mt-16" />
    </div>
  );
}
