// Tax Regime 2026 - Editorial White/Black Layout
export default function TaxRegime2026() {
  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      <article className="mx-auto max-w-187.5 px-4 py-2 md:py-16">
        {/* Header Section */}
        <header className="border-b-4 border-black pb-8 mb-12">
          <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="bg-black text-white px-2 py-1">Tax Strategy</span>
            <span className="text-gray-400">FY 2025-26</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            New Tax Regime 2026: <br className="hidden md:block" />
            Slabs, Benefits & Comparison.
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl font-medium">
            The 2026 fiscal landscape prioritizes simplicity. Understanding the
            trade-off between lower rates and lost deductions is key to
            maximizing your take-home pay.
          </p>
        </header>

        {/* Ad Placement: Top of Page */}
        <div className="my-8 w-full py-4 border-y border-gray-100 flex justify-center">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            Advertisement
          </span>
        </div>

        <div className="space-y-16">
          {/* Section 1: Definition */}
          <section id="overview">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              What Is the New Tax Regime?
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Introduced to simplify the Indian tax structure, the New Tax
              Regime offers <strong>concessional tax rates</strong>. However,
              this comes at a cost: taxpayers must forfeit most popular
              exemptions like HRA, LTA, and Section 80C investments.
            </p>
          </section>

          {/* Section 2: Tax Slabs Table - HIGH SEO VALUE */}
          <section id="slabs">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              New Tax Slabs (FY 2025–26)
            </h2>
            <div className="overflow-x-auto border border-black">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-4 text-xs uppercase font-bold border-r border-gray-700">
                      Income Range
                    </th>
                    <th className="p-4 text-xs uppercase font-bold">
                      Tax Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  <tr className="border-b border-black hover:bg-gray-50">
                    <td className="p-4 border-r border-black font-medium">
                      Up to ₹3,00,000
                    </td>
                    <td className="p-4">Nil</td>
                  </tr>
                  <tr className="border-b border-black hover:bg-gray-50">
                    <td className="p-4 border-r border-black font-medium">
                      ₹3,00,001 – ₹6,00,000
                    </td>
                    <td className="p-4 font-bold">5%</td>
                  </tr>
                  <tr className="border-b border-black hover:bg-gray-50">
                    <td className="p-4 border-r border-black font-medium">
                      ₹6,00,001 – ₹9,00,000
                    </td>
                    <td className="p-4 font-bold">10%</td>
                  </tr>
                  <tr className="border-b border-black hover:bg-gray-50">
                    <td className="p-4 border-r border-black font-medium">
                      ₹9,00,001 – ₹12,00,000
                    </td>
                    <td className="p-4 font-bold">15%</td>
                  </tr>
                  <tr className="border-b border-black hover:bg-gray-50">
                    <td className="p-4 border-r border-black font-medium">
                      ₹12,00,001 – ₹15,00,000
                    </td>
                    <td className="p-4 font-bold">20%</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4 border-r border-black font-medium text-red-600">
                      Above ₹15,00,000
                    </td>
                    <td className="p-4 font-bold text-red-600">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-gray-500 font-mono italic">
              *Full tax rebate is available for income up to ₹7,00,000 under
              Section 87A.
            </p>
          </section>

          {/* Ad Placement: Mid Content */}
          <div className="my-12 w-full min-h-62.5 bg-gray-50 flex items-center justify-center border border-gray-200">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              In-Article Ad
            </span>
          </div>

          {/* Section 3: Prohibited Deductions */}
          <section id="deductions">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              Deductions Not Allowed
            </h2>
            <div className="bg-black text-white p-8 space-y-4">
              <p className="text-sm text-gray-400 mb-4">
                Under the New Regime, you cannot claim:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 font-mono text-sm">
                <li className="border-l border-gray-700 pl-3">
                  Section 80C (LIC, PPF)
                </li>
                <li className="border-l border-gray-700 pl-3">
                  HRA (Rent Allowance)
                </li>
                <li className="border-l border-gray-700 pl-3">
                  Professional Tax
                </li>
                <li className="border-l border-gray-700 pl-3">
                  80D (Health Insurance)
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-800 text-xs italic">
                <strong>Note:</strong> Standard Deduction of ₹50,000 is still
                applicable for salaried employees in the New Regime (2026).
              </div>
            </div>
          </section>

          {/* Section 4: Choosing the Regime */}
          <section id="choice">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              Who Should Switch?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "The Minimalist Investor",
                  desc: "If your total deductions (80C, 80D, HRA) are less than ₹2.5 Lakhs, the new regime is usually better.",
                },
                {
                  title: "New Job Entrants",
                  desc: "Young professionals with low financial commitments benefit from the higher immediate take-home pay.",
                },
                {
                  title: "Senior Citizens",
                  desc: "Those who no longer have home loans or insurance commitments often find the lower rates more beneficial.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="group p-6 border border-gray-200 hover:border-black transition-colors"
                >
                  <h3 className="font-bold text-lg mb-2 group-hover:underline uppercase tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: FAQs */}
          <section id="faq" className="border-t border-black pt-10">
            <h2 className="text-2xl font-bold uppercase mb-8 tracking-tighter">
              Regime FAQs
            </h2>
            <div className="space-y-4">
              <details className="group border border-black overflow-hidden">
                <summary className="p-5 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                  Can I switch between regimes every year?
                  <span className="text-xl">+</span>
                </summary>
                <div className="p-5 text-gray-600 text-sm border-t border-black leading-relaxed">
                  Salaried individuals can choose the better regime every year
                  at the time of filing ITR. However, those with
                  business/professional income get only one chance to switch
                  back to the old regime in their lifetime.
                </div>
              </details>
              <details className="group border border-black overflow-hidden">
                <summary className="p-5 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                  Is the New Tax Regime the default one?
                  <span className="text-xl">+</span>
                </summary>
                <div className="p-5 text-gray-600 text-sm border-t border-black leading-relaxed">
                  Yes, starting from last year, the New Tax Regime is the
                  default option in the e-filing portal. If you wish to use the
                  Old Regime, you must explicitly opt for it.
                </div>
              </details>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t-8 border-black">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-8">
            Disclaimer: Tax laws are subject to change. Verify with a CA before
            filing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-black text-white p-4 font-bold uppercase text-xs hover:invert transition-all">
              Calculate Your Tax Liability
            </button>
            <button className="flex-1 border-2 border-black p-4 font-bold uppercase text-xs hover:bg-gray-100 transition-all">
              View Old vs New Table
            </button>
          </div>
        </footer>
      </article>

      {/* GSC Mobile Conversion Bar */}
      <div className="md:hidden sticky bottom-16 w-full bg-black text-white p-4 text-center z-50">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
          Save more on taxes this year
        </p>
      </div>
    </div>
  );
}
