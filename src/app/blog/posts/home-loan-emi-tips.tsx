// Home Loan EMI Tips - Editorial Layout
export default function HomeLoanEmiTips() {
  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      <article className="mx-auto max-w-187.5 px-4 py-2 md:py-16">
        {/* Header Section */}
        <header className="border-b-4 border-black pb-8 mb-12">
          <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="bg-black text-white px-2 py-1">
              Debt Optimization
            </span>
            <span className="text-gray-400">Strategy 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            Home Loan EMI Tips: Save Lakhs in Interest.
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl font-medium">
            A home loan is usually the biggest liability of a lifetime. Small
            adjustments to your repayment strategy can save you years of EMI
            payments.
          </p>
        </header>

        {/* Ad Placement: Top of Page */}
        <div className="my-8 w-full py-4 border-y border-gray-100 flex justify-center bg-gray-50/50">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            Advertisement
          </span>
        </div>

        <div className="space-y-16">
          {/* Section 1: The Power of Prepayment */}
          <section id="prepayment">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              01. The Power of Early Prepayment
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              In the early years of a home loan, your EMI goes almost entirely
              toward interest. By prepaying just 1 extra EMI every year, you can
              reduce a 20-year loan by nearly 3-4 years.
            </p>

            <div className="bg-black text-white p-6 mt-6">
              <h4 className="font-bold uppercase text-xs tracking-widest mb-2 opacity-60 text-center">
                The 1-Month Rule
              </h4>
              <p className="text-xl text-center font-mono tracking-tight underline underline-offset-8">
                Prepay 1 Extra EMI Annually = Save 48 Months of Interest
              </p>
            </div>
          </section>

          {/* Section 2: Step-Up EMIs */}
          <section id="step-up">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              02. Opt for Step-Up Repayments
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              As your salary grows each year, your EMI should too. Increasing
              your EMI by just 5% every year can slash your tenure by almost
              40%. This is the most efficient way to become debt-free without
              feeling a sudden financial crunch.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 border border-black">
                <span className="text-xs font-bold uppercase">Year 1</span>
                <p className="font-mono text-xl">₹50,000</p>
              </div>
              <div className="p-4 border border-black bg-gray-50">
                <span className="text-xs font-bold uppercase">
                  Year 2 (+5%)
                </span>
                <p className="font-mono text-xl">₹52,500</p>
              </div>
            </div>
          </section>

          {/* Ad Placement: Mid Content */}
          <div className="my-12 w-full h-62.5 bg-white flex items-center justify-center border-2 border-dashed border-gray-200">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              In-Article Ad
            </span>
          </div>

          {/* Section 3: Interest Rate Negotiation */}
          <section id="refinance">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              03. Negotiate or Refinance
            </h2>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed">
                Banks often offer better rates to new customers while keeping
                existing customers on higher older rates. Monitor the current
                2026 Repo Rate linked lending rates (RLLR).
              </p>
              <ul className="space-y-2 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  Request your current bank to match market rates (Conversion
                  Fee applies).
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  Consider a Home Loan Balance Transfer (HLBT) if the rate
                  difference is {`>`} 0.50%.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: Tenure Management */}
          <section id="tenure" className="bg-black text-white p-8">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
              Shorten Tenure, Don&apos;t Lower EMI
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Whenever interest rates drop, banks usually decrease your tenure
              automatically. However, if rates rise, they increase the tenure.
              Always insist on keeping your tenure short. Paying a slightly
              higher EMI today will save you from the &apos;Tenure Trap&apos;
              where you end up paying for 30 years instead of 20.
            </p>
          </section>

          {/* Section 5: FAQs */}
          <section id="faq" className="border-t border-black pt-10">
            <h2 className="text-2xl font-bold uppercase mb-8">Home Loan Q&A</h2>
            <div className="space-y-4">
              <details className="group border border-black">
                <summary className="p-5 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                  Are there charges for prepaying a Home Loan?
                  <span className="text-xl">+</span>
                </summary>
                <div className="p-5 text-gray-600 text-sm border-t border-black">
                  For floating-rate home loans, RBI has mandated that banks
                  cannot charge any prepayment penalties. You can pay back any
                  amount at any time for free.
                </div>
              </details>
              <details className="group border border-black">
                <summary className="p-5 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                  Should I use my PF to pay off my Home Loan?
                  <span className="text-xl">+</span>
                </summary>
                <div className="p-5 text-gray-600 text-sm border-t border-black">
                  Only if your loan interest rate is significantly higher than
                  the EPF interest rate (currently 8.25%). Generally, it&apos;s
                  better to keep retirement funds untouched unless it&apos;s an
                  emergency.
                </div>
              </details>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t-8 border-black">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-8">
            Empowering homeowners with data-driven debt strategies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="bg-black text-white p-4 font-bold uppercase text-xs hover:invert transition-all">
              Calculate Interest Savings
            </button>
            <button className="border-2 border-black p-4 font-bold uppercase text-xs hover:bg-gray-100 transition-all">
              Compare Bank Rates
            </button>
          </div>
        </footer>
      </article>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden sticky bottom-16 w-full bg-white border-t-2 border-black p-4 flex justify-between items-center z-50">
        <span className="text-xs font-black uppercase">
          Interest Saver Tool
        </span>
        <button className="bg-black text-white px-6 py-2 text-xs font-bold uppercase">
          Open
        </button>
      </div>
    </div>
  );
}
