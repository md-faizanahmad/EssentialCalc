import AdSlot from "@/components/layouts/AdSlot";
import Link from "next/link";

export const metadata = {
  title: "EMI Calculators — Plan Your Loans with Precision | EssentialCalc",
  description:
    "Explore our suite of EMI calculators for Home, Car, and Personal loans. Learn how EMI is calculated and plan your finances effectively.",
};

const emiTools = [
  {
    title: "Home Loan EMI Calculator",
    desc: "Calculate monthly payments for your dream home with interest breakdowns.",
    href: "/emi-calculator/home-loan",
    icon: "🏠",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Car Loan Calculator",
    desc: "Estimate affordable installments for your next car or bike purchase.",
    href: "/emi-calculator/car-loan",
    icon: "🚗",
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Product EMI Calculator",
    desc: "Zero-cost or regular EMI planning for electronics and appliances.",
    href: "/emi-calculator/product-emi",
    icon: "🛒",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Salary Break-Up",
    desc: "Calculate your in-hand salary your CTC, deductions, and others detailed breakup .",
    href: "/emi-calculator/salary-calculator",
    icon: "🏠",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Salary-Based Loan",
    desc: "See how much loan you can afford based on your monthly take-home pay.",
    href: "/emi-calculator/salary-based",
    icon: "💼",
    color: "bg-purple-50 text-purple-600",
  },
];

export default function EMICategoryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Financial EMI Calculators
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Plan your financial future with precision. Whether you are buying a
          home, a new car, or planning a major purchase, our calculators help
          you understand your monthly commitments.
        </p>
      </header>

      {/* Grid of Tools (Direct Links) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {emiTools.map((tool) => (
          <Link key={tool.title} href={tool.href} className="group">
            <article className="h-full p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:border-blue-200 transition-all">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 ${tool.color}`}
              >
                {tool.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                {tool.title}
              </h2>
              <p className="text-sm text-gray-500 mb-6">{tool.desc}</p>
              <div className="text-sm font-bold text-blue-600 flex items-center group-hover:gap-2 transition-all">
                Open Calculator
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </article>
          </Link>
        ))}
      </section>

      <AdSlot id="emi-category-mid" />

      {/* Blog-Style Informational Content */}
      <article className="prose prose-slate max-w-none border-t border-gray-100 pt-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Understanding EMI: How It Works
          </h2>
          <p className="text-gray-600 leading-8 text-lg">
            Equated Monthly Installment (EMI) is a fixed payment amount made by
            a borrower to a lender at a specified date each month. It consists
            of both the <strong>principal amount</strong> and the{" "}
            <strong>accrued interest</strong>.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            The Mathematical Formula
          </h3>
          <p className="mb-6">
            Most financial institutions use the following standard formula to
            calculate EMIs:
          </p>

          <div className="bg-blue-600 text-white p-8 rounded-3xl font-mono text-center shadow-lg my-8">
            <span className="text-xl md:text-2xl font-bold">
              EMI = [P x R x (1+R)^N] / [(1+R)^N-1]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-blue-600 mb-2">P (Principal)</h4>
              <p className="text-sm text-gray-500 font-medium italic">
                The base amount you borrow from the bank.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-blue-600 mb-2">
                R (Interest Rate)
              </h4>
              <p className="text-sm text-gray-500 font-medium italic">
                The monthly interest rate (Annual rate / 12 / 100).
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-blue-600 mb-2">N (Tenure)</h4>
              <p className="text-sm text-gray-500 font-medium italic">
                The total number of monthly installments.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Why Use an Online Calculator?
          </h3>
          <ul className="space-y-4 text-gray-600 list-disc pl-5">
            <li>
              <strong>Accuracy:</strong> Manual calculations are prone to human
              error, especially with compounding interest.
            </li>
            <li>
              <strong>Time-Saving:</strong> Get results instantly without
              messing with complex spreadsheets.
            </li>
            <li>
              <strong>Amortization View:</strong> See how much interest you pay
              in the first year vs the last year.
            </li>
          </ul>
        </div>
      </article>

      <AdSlot id="emi-category-footer" />
    </div>
  );
}
