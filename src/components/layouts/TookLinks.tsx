import Link from "next/link";

const toolCards = [
  {
    title: "Home Loan EMI Calculator",
    desc: "Calculate your home loan EMIs with precise monthly payment breakdowns.",
    href: "/emi-calculator/home-loan",
    icon: "🏠",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Car Loan Calculator",
    desc: "Estimate affordable monthly payments for car, bike, or any vehicle loan.",
    href: "/emi-calculator/car-loan",
    icon: "🚗",
    color: "bg-orange-50 text-orange-600",
  },
  {
    title: "Product EMI Calculator",
    desc: "Plan purchases with monthly installment calculations for any consumer product.",
    href: "/emi-calculator/product",
    icon: "🛒",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Salary-Based Loan",
    desc: "Estimate loan affordability based on your monthly income for manageable payments.",
    href: "/loan-calculator/salary-based",
    icon: "💼",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Salary Break-up",
    desc: "Calculate your in-hand salary, deductions, and detailed CTC components.",
    href: "/salary-calculator",
    icon: "💸",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function ToolLinks() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
          Financial & Planning Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCards.map((tool) => (
            <Link key={tool.title} href={tool.href} className="group">
              <article className="p-6 border border-gray-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all bg-white h-full flex flex-col">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${tool.color}`}
                >
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-500 mb-6 flex-grow">
                  {tool.desc}
                </p>
                <div className="inline-flex items-center text-sm font-semibold text-blue-600">
                  Calculate Now
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </section>
  );
}
