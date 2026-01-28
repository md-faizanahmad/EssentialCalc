// EMI vs Lump Sum - Editorial Layout
export default function EmiVsLumpSum() {
  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      <article className="mx-auto max-w-187.5 px-4 py-8 md:py-16">
        {/* Header Section */}
        <header className="border-b-4 border-black pb-8 mb-12">
          <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="bg-black text-white px-2 py-1">Debt Strategy</span>
            <span className="text-gray-400">Analysis 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            EMI vs. Lump Sum: <br className="hidden md:block" />
            The Wealth Builder&apos;s Dilemma.
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl font-medium">
            Should you pay in full and be debt-free, or keep your cash and pay
            in installments? The answer lies in the math of &quot;Opportunity
            Cost.&quot;
          </p>
        </header>

        {/* Ad Placement: Top of Page */}
        <div className="my-8 w-full py-4 border-y border-gray-100 flex justify-center bg-gray-50/50">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            Advertisement
          </span>
        </div>

        <div className="space-y-16">
          {/* Section 1: The Core Comparison */}
          <section id="comparison">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              01. The Basic Difference
            </h2>
            <div className="grid md:grid-cols-2 gap-0 border border-black">
              <div className="p-6 border-b md:border-b-0 md:border-r border-black">
                <h3 className="font-bold text-lg mb-4 uppercase">Lump Sum</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Paying the entire amount upfront. You own the asset
                  immediately, pay zero interest, but experience a sudden drop
                  in your liquid cash reserves.
                </p>
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="font-bold text-lg mb-4 uppercase">EMI</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Breaking the cost into monthly bites. This preserves your
                  liquidity for investments but adds &quot;Interest Cost&quot;
                  to the final price of the asset.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: When to Choose What (Table) */}
          <section id="decision-matrix">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              02. Decision Matrix
            </h2>
            <div className="overflow-x-auto border border-black">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-4 text-xs uppercase font-bold border-r border-gray-700">
                      Scenario
                    </th>
                    <th className="p-4 text-xs uppercase font-bold">
                      Recommended
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-black">
                    <td className="p-4 border-r border-black font-medium">
                      Loan Interest {`>`} Investment Returns
                    </td>
                    <td className="p-4 font-bold uppercase text-red-600 italic">
                      Lump Sum
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-4 border-r border-black font-medium">
                      Loan Interest {`<`} Investment Returns
                    </td>
                    <td className="p-4 font-bold uppercase text-green-700 italic">
                      EMI + Invest
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-4 border-r border-black font-medium">
                      Zero-Cost EMI Available
                    </td>
                    <td className="p-4 font-bold uppercase">EMI</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-black font-medium">
                      Buying a Depreciating Asset (Phone/TV)
                    </td>
                    <td className="p-4 font-bold uppercase">Lump Sum</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Ad Placement: Mid Content */}
          <div className="my-12 w-full h-62.5 bg-white flex items-center justify-center border-2 border-dashed border-gray-200">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              In-Article Ad
            </span>
          </div>

          {/* Section 3: The 2026 Strategy */}
          <section id="strategy">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              03. The &quot;Smart Money&quot; Strategy
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="text-4xl font-black text-gray-200">A</span>
                <div>
                  <h4 className="font-bold mb-2 uppercase">
                    The Arbitrage Play
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    If your Home Loan interest is 8.5% and you can earn 12% in
                    an Index Fund, paying the bare minimum EMI and investing the
                    &quot;Lump Sum&quot; surplus is mathematically superior.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="text-4xl font-black text-gray-200">B</span>
                <div>
                  <h4 className="font-bold mb-2 uppercase">
                    Psychological Debt-Freedom
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Math isn&apos;t everything. For many, the &quot;peace of
                    mind&quot; of having zero EMIs outweighs a 2-3% investment
                    spread. If debt causes you stress, choose Lump Sum.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Inflation Impact */}
          <section id="inflation" className="bg-black text-white p-8">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tighter text-white">
              How Inflation Favors EMI
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-mono">
              In an inflationary environment like 2026, the value of money
              decreases over time. A ₹50,000 EMI today feels &quot;heavy,&quot;
              but in 5 years, due to salary hikes and inflation, that same
              ₹50,000 will feel much &quot;lighter.&quot; By paying a Lump Sum
              today, you are using your &quot;most valuable&quot; rupees.
            </p>
          </section>

          {/* Section 5: FAQs */}
          <section id="faq" className="border-t border-black pt-10">
            <h2 className="text-2xl font-bold uppercase mb-8">Expert Q&A</h2>
            <div className="space-y-4">
              <details className="group border border-black">
                <summary className="p-5 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                  Is No-Cost EMI really &quot;Free&quot;?
                  <span className="text-xl">+</span>
                </summary>
                <div className="p-5 text-gray-600 text-sm border-t border-black">
                  No. Usually, the &quot;discount&quot; you would have received
                  on a Lump Sum payment is adjusted as interest to the bank.
                  Additionally, you pay GST on the interest component.
                </div>
              </details>
              <details className="group border border-black">
                <summary className="p-5 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                  Should I use my bonus to prepay my Home Loan?
                  <span className="text-xl">+</span>
                </summary>
                <div className="p-5 text-gray-600 text-sm border-t border-black">
                  Yes, if your loan is in its early stages (first 5 years),
                  prepaying a lump sum significantly reduces your total interest
                  burden.
                </div>
              </details>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t-8 border-black">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-8">
            Calculated decisions build generational wealth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-black text-white p-4 font-bold uppercase text-xs hover:invert transition-all">
              Prepayment Calculator
            </button>
            <button className="flex-1 border-2 border-black p-4 font-bold uppercase text-xs hover:bg-gray-100 transition-all">
              EMI vs SIP Comparison
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
}
