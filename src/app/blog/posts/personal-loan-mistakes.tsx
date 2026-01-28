// Personal Loan Mistakes & Compliance Guide
export default function PersonalLoanEmiMistakes() {
  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      <article className="mx-auto max-w-187.5 px-4 py-2 md:py-16">
        {/* Header Section */}
        <header className="border-b-4 border-black pb-8 mb-12">
          <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="bg-black text-white px-2 py-1">
              Risk Management
            </span>
            <span className="text-gray-400">Borrower Alert</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            Personal Loan Mistakes: <br /> The Price of Ignorance.
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl font-medium">
            Personal loans are the most expensive form of formal credit. One
            wrong box checked in your agreement can cost you thousands in hidden
            fees.
          </p>
        </header>

        {/* Section 1: Common Mistakes */}
        <section id="mistakes" className="space-y-12">
          <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
            01. 5 Costly EMI Mistakes
          </h2>

          <div className="space-y-8">
            <div className="flex gap-4 group">
              <span className="text-2xl font-black opacity-20 group-hover:opacity-100 transition-opacity">
                01
              </span>
              <div>
                <h4 className="font-bold uppercase text-sm">
                  Ignoring the APR
                </h4>
                <p className="text-gray-600 text-sm">
                  Don&apos;t just look at the interest rate. Look at the{" "}
                  <strong>Annual Percentage Rate (APR)</strong>, which includes
                  processing fees and insurance costs.
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <span className="text-2xl font-black opacity-20 group-hover:opacity-100 transition-opacity">
                02
              </span>
              <div>
                <h4 className="font-bold uppercase text-sm">
                  The &quot;Flat Rate&quot; Trap
                </h4>
                <p className="text-gray-600 text-sm">
                  A 10% flat rate is almost always more expensive than a 12%
                  reducing balance rate. Always ask for the{" "}
                  <strong>Effective Interest Rate</strong>.
                </p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <span className="text-2xl font-black opacity-20 group-hover:opacity-100 transition-opacity">
                03
              </span>
              <div>
                <h4 className="font-bold uppercase text-sm">
                  Opting for Longest Tenure
                </h4>
                <p className="text-gray-600 text-sm">
                  Longer tenures make EMIs look &quot;affordable&quot; but can
                  lead to you paying back 2x the principal in interest alone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Questions to Ask */}
        <section
          id="questions"
          className="mt-16 p-8 bg-gray-50 border border-black"
        >
          <h2 className="text-2xl font-bold uppercase mb-8">
            Questions to Ask Before Signing
          </h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {[
              "Is there a prepayment or foreclosure penalty?",
              "Are there any hidden &apos;Administrative Fees&apos;?",
              "Is the interest rate fixed or floating?",
              "Is loan insurance mandatory or optional?",
              "What is the penalty for a single missed EMI?",
              "How long does it take to get the NOC after closure?",
            ].map((q, i) => (
              <li
                key={i}
                className="text-sm font-medium border-l-2 border-black pl-4 italic"
              >
                &quot;{q}&quot;
              </li>
            ))}
          </ul>
        </section>

        {/* Ad Placement */}
        <div className="my-12 w-full h-62.5 bg-white border-2 border-dashed border-gray-200 flex items-center justify-center">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            In-Article Ad
          </span>
        </div>

        {/* Section 3: The Agreement Disclaimer */}
        <section id="disclaimer" className="mt-16">
          <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
            03. Decoding the Disclaimer
          </h2>
          <div className="bg-black text-white p-8 font-mono text-xs leading-relaxed uppercase tracking-wider">
            <h4 className="mb-4 text-red-500 font-black underline underline-offset-4">
              Mandatory Agreement Disclaimer
            </h4>
            <p className="mb-4">
              Loan approval is at the sole discretion of the lender. Interest
              rates and processing fees are subject to change based on the
              borrower&apos;s credit profile and bank policy.
            </p>
            <p className="mb-4">
              Failure to pay EMIs on time will result in late payment charges, a
              significant drop in your credit score (CIBIL), and potential legal
              action.
            </p>
            <p>
              Borrowers are advised to read the &quot;Most Important Terms and
              Conditions&quot; (MITC) document carefully before signing the
              final loan agreement.
            </p>
          </div>
        </section>

        {/* Section 4: FAQs */}
        <section id="faq" className="mt-16 border-t border-gray-200 pt-10">
          <h2 className="text-2xl font-bold uppercase mb-8">
            EMI Security FAQs
          </h2>
          <div className="space-y-4">
            <details className="group border border-black">
              <summary className="p-5 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                Should I take a loan to invest in the stock market?
                <span className="text-xl">+</span>
              </summary>
              <div className="p-5 text-gray-600 text-sm border-t border-black">
                Never. Personal loan interest rates (12-24%) are almost always
                higher than average market returns. This is a recipe for
                financial disaster.
              </div>
            </details>
            <details className="group border border-black">
              <summary className="p-5 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                Can I cancel a loan after it is disbursed?
                <span className="text-xl">+</span>
              </summary>
              <div className="p-5 text-gray-600 text-sm border-t border-black">
                Most banks have a &quot;look-up period&quot; or cancellation
                window (usually 3-7 days), but you may still have to pay
                processing fees and interest for those few days.
              </div>
            </details>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t-8 border-black text-center sm:text-left">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-8">
            Financial Literacy Initiative — 2026
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-black text-white p-4 font-bold uppercase text-xs hover:invert transition-all">
              Check Personal Loan Rates
            </button>
            <button className="flex-1 border-2 border-black p-4 font-bold uppercase text-xs hover:bg-gray-100 transition-all">
              Calculate Debt-to-Income
            </button>
          </div>
        </footer>
      </article>

      {/* Mobile Sticky Tip */}
      <div className="md:hidden fixed bottom-0 w-full bg-red-600 text-white p-3 text-center text-[10px] font-black uppercase tracking-widest z-50">
        Warning: Missed EMIs can drop your Credit Score by 50+ points
      </div>
    </div>
  );
}
