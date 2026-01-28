// EMI Safety Guide - Editorial Layout
export default function HowMuchEMIIsSafe() {
  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      <article className="mx-auto max-w-187.5 px-4 py-8 md:py-16">
        {/* Header Section */}
        <header className="border-b-4 border-black pb-8 mb-12">
          <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="bg-black text-white px-2 py-1">
              Financial Health
            </span>
            <span className="text-gray-400">Guide 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            How Much EMI is Actually Safe for You?
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl italic">
            Bank eligibility and financial safety are two different things. Just
            because a bank approves your loan doesn&apos;t mean you can afford
            the lifestyle it leaves behind.
          </p>
        </header>

        {/* Ad Placement: Top of Page */}
        <div className="my-8 w-full py-4 border-y border-gray-100 flex justify-center bg-gray-50/50">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            Advertisement
          </span>
        </div>

        <div className="space-y-16">
          {/* Section 1: The Golden Rule */}
          <section id="golden-rule">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black inline-block mb-8">
              01. The 40% Golden Rule
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              In 2026, the benchmark for financial stability remains the{" "}
              <strong>40% Rule</strong>. This states that your total monthly EMI
              obligations—including home, car, and personal loans—should never
              exceed 40% of your net (take-home) income.
            </p>
            <div className="bg-black text-white p-6 md:p-10 text-center">
              <p className="text-sm uppercase tracking-widest mb-2 opacity-60">
                Safe EMI Formula
              </p>
              <p className="text-2xl md:text-3xl font-mono tracking-tighter">
                Monthly Take-home Pay × 0.40 = Max Safe EMI
              </p>
            </div>
          </section>

          {/* Section 2: Safety Tiers Table */}
          <section id="safety-tiers">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black inline-block mb-8">
              02. EMI Safety Tiers
            </h2>
            <div className="overflow-x-auto border border-black">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-black">
                    <th className="p-4 text-xs uppercase font-bold border-r border-black">
                      Tier
                    </th>
                    <th className="p-4 text-xs uppercase font-bold border-r border-black">
                      EMI % of Salary
                    </th>
                    <th className="p-4 text-xs uppercase font-bold">Verdict</th>
                  </tr>
                </thead>
                <tbody className="text-sm md:text-base">
                  <tr className="border-b border-black">
                    <td className="p-4 border-r border-black font-bold text-green-700">
                      Ultra Safe
                    </td>
                    <td className="p-4 border-r border-black font-mono">
                      Below 25%
                    </td>
                    <td className="p-4">
                      High savings capacity. Ideal for wealth building.
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-4 border-r border-black font-bold">
                      Comfortable
                    </td>
                    <td className="p-4 border-r border-black font-mono">
                      25% – 35%
                    </td>
                    <td className="p-4">
                      The sweet spot for balanced lifestyle and debt.
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-4 border-r border-black font-bold text-orange-600">
                      Stretched
                    </td>
                    <td className="p-4 border-r border-black font-mono">
                      35% – 45%
                    </td>
                    <td className="p-4">
                      Manageable, but requires strict budgeting.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-black font-bold text-red-600 uppercase">
                      Danger
                    </td>
                    <td className="p-4 border-r border-black font-mono">
                      Above 50%
                    </td>
                    <td className="p-4 font-semibold text-red-600 italic">
                      High risk of debt-trap.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Ad Placement: Mid-Article */}
          <div className="my-12 w-full h-62.5 bg-white flex items-center justify-center border-2 border-dashed border-gray-200">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              In-Article Ad
            </span>
          </div>

          {/* Section 3: Factors to Consider */}
          <section id="considerations">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black inline-block mb-8">
              03. Why &quot;Safety&quot; Varies
            </h2>
            <div className="space-y-6">
              <div className="p-6 border border-gray-200 hover:border-black transition-all">
                <h3 className="font-bold text-lg mb-2 uppercase">
                  Your Salary Level
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  High earners (₹3L+ per month) can safely handle a 50% EMI
                  because their remaining 50% still covers luxury living. Lower
                  income brackets must stay below 30% as essentials consume more
                  of their percentage.
                </p>
              </div>
              <div className="p-6 border border-gray-200 hover:border-black transition-all">
                <h3 className="font-bold text-lg mb-2 uppercase">
                  Interest Rate Fluctuations
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Most home loans are floating rate. If repo rates rise in 2026,
                  your EMI or tenure will increase. Always keep a 5%
                  &quot;buffer&quot; in your calculations for safety.
                </p>
              </div>
              <div className="p-6 border border-gray-200 hover:border-black transition-all">
                <h3 className="font-bold text-lg mb-2 uppercase">
                  Job Stability
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If you are in a volatile industry (e.g., Tech or Freelancing),
                  aim for a lower EMI. Government employees can safely stretch
                  closer to the 45% mark.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Bank FOIR vs Safety */}
          <section id="foir" className="bg-black text-white p-8">
            <h2 className="text-2xl font-bold mb-4">
              Bank Eligibility ≠ Personal Safety
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Lenders use{" "}
              <strong>FOIR (Fixed Obligation to Income Ratio)</strong> to
              approve loans. They may offer you a loan where EMIs take up 60% of
              your income. Remember: Banks prioritize their interest collection;
              you must prioritize your survival.
            </p>
            <div className="border-l-4 border-white pl-4 italic text-sm">
              &quot;A safe loan is one that allows you to continue your SIPs,
              buy insurance, and keep an emergency fund of 6 months.&quot;
            </div>
          </section>

          {/* Section 5: FAQs */}
          <section id="faq" className="border-t border-black pt-10">
            <h2 className="text-2xl font-bold uppercase mb-8">
              Common Questions
            </h2>
            <div className="space-y-4">
              <details className="group border border-black">
                <summary className="p-5 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                  Should I choose a longer tenure to lower EMI?
                  <span className="text-xl">+</span>
                </summary>
                <div className="p-5 text-gray-600 text-sm border-t border-black">
                  While it makes the monthly EMI &quot;safe,&quot; you end up
                  paying double the loan amount in interest. Aim for the
                  shortest tenure where your EMI stays under 40% of your income.
                </div>
              </details>
              <details className="group border border-black">
                <summary className="p-5 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                  Can I take a second loan if my first EMI is 20%?
                  <span className="text-xl">+</span>
                </summary>
                <div className="p-5 text-gray-600 text-sm border-t border-black">
                  Yes, as long as the <strong>combined</strong> total of all
                  EMIs remains below 40%. Always prioritize clearing
                  high-interest debt (like credit cards) first.
                </div>
              </details>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t-8 border-black">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-8">
            Financial education for the modern Indian borrower.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="bg-black text-white p-4 font-bold uppercase text-xs hover:invert transition-all">
              EMI Calculator 2026
            </button>
            <button className="border-2 border-black p-4 font-bold uppercase text-xs hover:bg-gray-100 transition-all">
              Check Credit Score
            </button>
          </div>
        </footer>
      </article>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 w-full bg-black text-white py-3 px-6 flex justify-between items-center z-50">
        <span className="text-[10px] font-bold uppercase tracking-widest leading-none">
          Calculate <br />
          Your Safety
        </span>
        <div className="h-8 w-px bg-gray-700 mx-2"></div>
        <button className="bg-white text-black px-4 py-1 text-xs font-black uppercase">
          Open Tool
        </button>
      </div>
    </div>
  );
}
