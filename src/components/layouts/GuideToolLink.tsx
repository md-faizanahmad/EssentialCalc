import Link from "next/link";

const guideCards = [
  {
    title: "Income Tax Guide",
    desc: "Complete guide to ITR filing, tax slabs, freelancer tax, and compliance rules in India.",
    href: "/income-tax-guide",
    icon: "📑",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "GST Guide",
    desc: "Understand GST registration, returns, due dates, and compliance in India.",
    href: "/gst-guide",
    icon: "🧾",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "Loan & EMI Guide",
    desc: "Learn EMI calculations, safe loan limits, mistakes to avoid, and smart repayment strategies.",
    href: "/loan-guide",
    icon: "🏦",
    color: "bg-blue-50 text-blue-600",
  },
];

export default function GuideToolLinks() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
          Financial Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guideCards.map((tool) => (
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
                <p className="text-sm text-gray-500 mb-6 grow font-serif">
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
