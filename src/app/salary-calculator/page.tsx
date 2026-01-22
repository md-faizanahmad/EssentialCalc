import Link from "next/link";
import AdSlot from "@/components/layouts/AdSlot";
import { IndianRupee, Briefcase, TrendingUp, Info } from "lucide-react";

export const metadata = {
  title: "Salary & Income Planning Tools | EssentialCalc",
  description:
    "Calculate your in-hand salary, understand CTC breakups, and check your loan eligibility based on your monthly income.",
};

const salaryTools = [
  {
    title: "Salary Break-Up",
    desc: "Calculate your in-hand salary, your CTC, deductions, and others detailed breakup.",
    href: "/salary-calculator/salary-breakup", // Direct link to the tool
    icon: <IndianRupee size={28} />,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Salary-Based Loan",
    desc: "See how much loan you can afford based on your monthly take-home pay.",
    href: "/salary-calculator/salary-based", // Direct link to the tool
    icon: <Briefcase size={28} />,
    color: "bg-purple-50 text-purple-600",
  },
];

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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {salaryTools.map((tool) => (
          <Link key={tool.title} href={tool.href} className="group">
            <article className="h-full p-8 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-300">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${tool.color}`}
              >
                {tool.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600">
                {tool.title}
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">{tool.desc}</p>
              <div className="flex items-center text-sm font-black uppercase tracking-widest text-blue-600 group-hover:gap-2 transition-all">
                Launch Tool
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </article>
          </Link>
        ))}
      </section>

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
