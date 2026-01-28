// Indian Salary Calculator Guide - Editorial Layout
export default function SalaryCalculationIndia() {
  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      <article className="mx-auto max-w-187.5 px-4 py-2 md:py-16">
        {/* Header Section */}
        <header className="border-b-4 border-black pb-8 mb-12">
          <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="bg-black text-white px-2 py-1">Payroll Guide</span>
            <span className="text-gray-400">AY 2026-27</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            Salary Calculation in India: Gross vs. Take-Home.
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl font-medium">
            Your CTC isn&apos;t what arrives in your bank account. Understanding
            the gap between your offer letter and your monthly credit is
            essential for financial planning.
          </p>
        </header>

        {/* Ad Placement: Top of Page */}
        <div className="my-8 w-full py-4 border-y border-gray-100 flex justify-center">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            Advertisement
          </span>
        </div>

        <div className="space-y-16">
          {/* Section 1: The Basic Formula */}
          <section id="formula">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              01. The Take-Home Formula
            </h2>
            <div className="bg-black text-white p-8 font-mono text-sm md:text-base leading-loose">
              <p>Gross Salary = Basic + HRA + Allowances</p>
              <p className="text-gray-500 underline decoration-gray-700">
                Minus Deductions:
              </p>
              <p>- Employee PF Contribution (12% of Basic)</p>
              <p>- Professional Tax (State Dependent)</p>
              <p>- Income Tax (TDS)</p>
              <div className="mt-4 pt-4 border-t border-gray-700 text-xl font-bold">
                = Net Take-Home Pay
              </div>
            </div>
          </section>

          {/* Section 2: Component Breakdown */}
          <section id="components">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              02. Key Salary Components
            </h2>
            <div className="space-y-6">
              <div className="border border-black p-6">
                <h3 className="font-bold text-lg mb-2">Basic Pay</h3>
                <p className="text-sm text-gray-600">
                  Usually 40-50% of your CTC. It&apos;s the fully taxable core
                  of your salary and determines your PF and Gratuity amounts.
                </p>
              </div>
              <div className="border border-black p-6">
                <h3 className="font-bold text-lg mb-2">
                  HRA (House Rent Allowance)
                </h3>
                <p className="text-sm text-gray-600">
                  Calculated as 50% of basic (Metro) or 40% (Non-metro). You can
                  claim tax exemptions on this if you pay rent.
                </p>
              </div>
              <div className="border border-black p-6">
                <h3 className="font-bold text-lg mb-2">EPF (Provident Fund)</h3>
                <p className="text-sm text-gray-600">
                  A mandatory 12% deduction from your basic pay toward your
                  retirement fund. Your employer matches this amount.
                </p>
              </div>
            </div>
          </section>

          {/* Ad Placement: Mid Content */}
          <div className="my-12 w-full min-h-62.5 bg-gray-50 flex items-center justify-center border border-gray-200">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              In-Article Ad
            </span>
          </div>

          {/* Section 3: Professional Tax & TDS */}
          <section id="taxes">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              03. Statutory Deductions
            </h2>
            <div className="overflow-x-auto border border-black">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-black text-xs uppercase font-bold">
                    <th className="p-4 border-r border-black">Deduction</th>
                    <th className="p-4">Average Amount (Monthly)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-black">
                    <td className="p-4 border-r border-black font-bold text-gray-800">
                      Professional Tax
                    </td>
                    <td className="p-4 font-mono">
                      ₹200 – ₹250 (Varies by State)
                    </td>
                  </tr>
                  <tr className="border-b border-black">
                    <td className="p-4 border-r border-black font-bold text-gray-800">
                      Income Tax (TDS)
                    </td>
                    <td className="p-4 font-mono">Based on your Tax Slab</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-black font-bold text-gray-800">
                      Health/Group Insurance
                    </td>
                    <td className="p-4 font-mono text-gray-600">
                      Employer specific (Optional)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: 2026 Strategy Tip */}
          <section id="strategy" className="bg-black text-white p-8">
            <h2 className="text-2xl font-bold mb-4 uppercase tracking-tighter">
              The 2026 CTC Trap
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Be careful with &apos;Flexible Benefit Plans&apos; (FBP). Many
              companies include Employer PF and Gratuity in the CTC. While this
              looks good on paper, it significantly reduces the cash-in-hand.
              Always ask for a &quot;Take-home sheet&quot; before signing an
              offer letter.
            </p>
            <div className="border-l-4 border-white pl-4 text-xs italic text-gray-400">
              Note: Gratuity is only payable after 5 years of continuous
              service.
            </div>
          </section>

          {/* Section 5: FAQs */}
          <section id="faq" className="border-t border-black pt-10">
            <h2 className="text-2xl font-bold uppercase mb-8">
              Filing & Salary FAQs
            </h2>
            <div className="space-y-4">
              <details className="group border border-black">
                <summary className="p-5 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                  Is it better to have a higher Basic Pay?
                  <span className="text-xl">+</span>
                </summary>
                <div className="p-5 text-gray-600 text-sm border-t border-black">
                  A higher Basic Pay increases your retirement benefits (PF and
                  Gratuity) but also increases your immediate tax liability.
                  Most people prefer a balanced structure to maximize take-home
                  pay.
                </div>
              </details>
              <details className="group border border-black">
                <summary className="p-5 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                  Can I opt out of EPF?
                  <span className="text-xl">+</span>
                </summary>
                <div className="p-5 text-gray-600 text-sm border-t border-black">
                  If your basic salary is above ₹15,000 at your first job, you
                  can opt out of EPF by filing Form 11. However, this is
                  generally not recommended due to the loss of the
                  employer&apos;s matching contribution.
                </div>
              </details>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t-8 border-black">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-8">
            Helping Indian professionals decode their paychecks since 2026.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="bg-black text-white p-4 font-bold uppercase text-xs hover:invert transition-all">
              In-Hand Salary Calculator
            </button>
            <button className="border-2 border-black p-4 font-bold uppercase text-xs hover:bg-gray-100 transition-all">
              Download Salary Template
            </button>
          </div>
        </footer>
      </article>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden sticky bottom-16 w-full bg-black text-white p-4 text-center z-50">
        <p className="text-[10px] font-bold uppercase tracking-widest leading-none underline underline-offset-4 decoration-white/30">
          Check Your Net Take-Home Now
        </p>
      </div>
    </div>
  );
}
