import AdSlot from "@/components/layouts/AdSlot";
import Link from "next/link";

export const metadata = {
  title: "EMI Calculator for Home, Car & Product Loans | EssentialCalc",
  description:
    "Use EMI calculators for home loans, car loans, and product purchases. Learn how EMI is calculated and plan your monthly repayments responsibly.",
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
    title: "Car Loan EMI Calculator",
    desc: "Estimate affordable installments for your next car or bike purchase.",
    href: "/emi-calculator/car-loan",
    icon: "🚗",
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Product EMI Calculator",
    desc: "Plan zero-cost or regular EMIs for electronics and appliances.",
    href: "/emi-calculator/product-emi",
    icon: "🛒",
    color: "bg-green-50 text-green-600",
  },
];

export default function EMICategoryPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Header */}
      <header>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
          EMI Calculator for Home, Car & Product Loans
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          EssentialCalc helps you estimate your monthly EMI payments so you can
          plan loans responsibly. Use our calculators to understand interest,
          tenure, and repayment impact before making financial decisions.
        </p>
      </header>

      {/* Tool Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emiTools.map((tool) => (
          <Link key={tool.title} href={tool.href} className="group">
            <article className="h-full p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 ${tool.color}`}
              >
                {tool.icon}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                {tool.title}
              </h2>
              <p className="text-sm text-gray-500 mb-6">{tool.desc}</p>
              <span className="text-sm font-bold text-blue-600">
                Open Calculator →
              </span>
            </article>
          </Link>
        ))}
      </section>

      {/* Ad after real content (SAFE) */}
      <AdSlot id="emi-category-mid" />

      {/* Informational Content */}
      <article className="prose prose-slate max-w-none border-t border-gray-100 pt-16">
        <div className="max-w-3xl mx-auto">
          <h2>Understanding EMI: How It Works</h2>
          <p>
            An <strong>Equated Monthly Installment (EMI)</strong> is a fixed
            payment made every month to repay a loan. Each EMI includes a
            portion of the principal amount and interest charged by the lender.
          </p>

          <h3>The Standard EMI Formula</h3>
          <p>
            Most banks and financial institutions calculate EMI using the
            reducing balance method:
          </p>

          <div className="bg-blue-600 text-white p-8 rounded-3xl font-mono text-center shadow-lg my-8">
            <strong>
              EMI = [P × R × (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup> − 1]
            </strong>
          </div>

          <ul>
            <li>
              <strong>P (Principal):</strong> Loan amount borrowed
            </li>
            <li>
              <strong>R (Rate):</strong> Monthly interest rate
            </li>
            <li>
              <strong>N (Tenure):</strong> Number of monthly installments
            </li>
          </ul>

          <h3>Why Use an EMI Calculator?</h3>
          <ul>
            <li>Instant and accurate EMI estimation</li>
            <li>Easy comparison of tenure and interest impact</li>
            <li>Better budgeting and financial planning</li>
          </ul>

          {/* Mandatory Finance Disclaimer */}
          <section className="mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Important Disclaimer
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              EMI calculations provided on EssentialCalc are for informational
              and planning purposes only. Actual EMI amounts may vary depending
              on lender policies, interest rate changes, fees, and individual
              eligibility. Always confirm final loan details with your bank or
              financial institution.
            </p>
          </section>
        </div>
      </article>

      {/* Footer Ad (SAFE) */}
      <AdSlot id="emi-category-footer" />
    </main>
  );
}
