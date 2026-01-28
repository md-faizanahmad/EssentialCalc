// ITR Filing Guide - Editorial White/Black Layout
export default function HowToFileITRIndia() {
  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      <article className="mx-auto max-w-187.5 px-4 py-2 md:py-16">
        {/* Header Section */}
        <header className="border-b-4 border-black pb-8 mb-12">
          <div className="flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="bg-black text-white px-2 py-1">Finance Guide</span>
            <span className="text-gray-400">AY 2026-27</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6">
            How to File ITR in India: <br className="hidden md:block" />
            The 2026 Step-by-Step Guide.
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl italic">
            Filing your Income Tax Return is not just a legal obligation; it is
            a financial identity document required for loans, visas, and
            refunds.
          </p>
        </header>

        {/* Ad Placement: Top Banner */}
        <div className="my-8 w-full py-4 border-y border-gray-100 flex justify-center bg-gray-50/50">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
            Promotion / Advertisement
          </span>
        </div>

        <div className="space-y-16">
          {/* Section 1: Eligibility */}
          <section id="eligibility">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black inline-block mb-8">
              01. Filing Eligibility
            </h2>
            <p className="mb-6 text-gray-600 leading-relaxed">
              In 2026, the threshold for mandatory filing remains consistent,
              but reporting requirements for foreign assets and high-value
              transactions have tightened.
            </p>
            <ul className="grid gap-4 md:grid-cols-2">
              {[
                "Salaried individuals above basic exemption",
                "Freelancers & Professionals",
                "Individuals with Capital Gains",
                "Anyone claiming a Tax Refund",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center p-4 border border-black font-medium"
                >
                  <span className="mr-3 text-lg">→</span> {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Section 2: Checklist */}
          <section
            id="documents"
            className="bg-gray-50 p-8 border border-black"
          >
            <h2 className="text-2xl font-bold uppercase mb-6">
              02. Documents Checklist
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-bold">Identity</span>
                <span className="text-sm">PAN & Aadhaar</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-bold">Salaried</span>
                <span className="text-sm">Form 16 / Form 16A</span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-bold">Summary</span>
                <span className="text-sm">
                  Annual Information Statement (AIS)
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-300 pb-2">
                <span className="font-bold">Investments</span>
                <span className="text-sm">80C, 80D, 80G Proofs</span>
              </div>
            </div>
          </section>

          {/* Ad Placement: Mid Content */}
          <div className="my-12 w-full h-62.5 bg-white flex items-center justify-center border-2 border-dashed border-gray-200">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">
              In-Article Ad Unit
            </span>
          </div>

          {/* Section 3: Filing Process */}
          <section id="process">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black inline-block mb-8">
              03. Online Filing Process
            </h2>
            <div className="space-y-12">
              {[
                {
                  step: "Portal Access",
                  detail:
                    "Log in to the Income Tax e-Filing portal using your PAN as the User ID.",
                },
                {
                  step: "Form Selection",
                  detail:
                    "Choose ITR-1 (Sahaj) for salary, or ITR-3/4 for business and professional income.",
                },
                {
                  step: "Data Validation",
                  detail:
                    "Pre-fill data from AIS/TIS. Verify that TDS matches your Form 26AS.",
                },
                {
                  step: "Review Deductions",
                  detail:
                    "Claim exemptions under the New or Old tax regime based on your 2026 preference.",
                },
                {
                  step: "E-Verification",
                  detail:
                    "The most vital step. Verify within 30 days via Aadhaar OTP to avoid your ITR being marked 'Invalid'.",
                },
              ].map((item, index) => (
                <div key={index} className="relative pl-12">
                  <span className="absolute left-0 top-0 text-4xl font-black text-gray-100 -z-10">
                    0{index + 1}
                  </span>
                  <h4 className="font-extrabold text-lg uppercase mb-1">
                    {item.step}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Key Terms (Glossary) */}
          <section id="terms">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black inline-block mb-8">
              04. Key Terms Explained
            </h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-bold text-lg underline decoration-2 underline-offset-4 mb-2">
                  Assessment Year (AY)
                </dt>
                <dd className="text-gray-600 text-sm">
                  The year in which the income of the previous Financial Year
                  (FY) is evaluated. For FY 2025-26, the AY is 2026-27.
                </dd>
              </div>
              <div>
                <dt className="font-bold text-lg underline decoration-2 underline-offset-4 mb-2">
                  E-Verification
                </dt>
                <dd className="text-gray-600 text-sm">
                  Digital confirmation that the return was filed by you. Without
                  this, the ITR is not legally considered &apos;filed&apos;.
                </dd>
              </div>
            </dl>
          </section>

          {/* Section 5: Common Mistakes */}
          <section id="mistakes" className="bg-black text-white p-8">
            <h2 className="text-2xl font-bold uppercase mb-6 tracking-tighter">
              Common Mistakes to Avoid
            </h2>
            <ul className="space-y-4 text-sm font-mono uppercase">
              <li className="flex gap-3">
                <span className="text-red-500 font-black">×</span> Incorrect
                Bank Account (Fails Refund)
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-black">×</span> Not
                disclosing Interest from Savings/FD
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-black">×</span> Selecting the
                wrong ITR Form
              </li>
              <li className="flex gap-3 text-gray-400">
                <span className="text-red-500 font-black">×</span> Missing the
                30-day verification window
              </li>
            </ul>
          </section>

          {/* Section 6: FAQs */}
          <section id="faq" className="border-t border-gray-200 pt-10">
            <h2 className="text-2xl font-bold uppercase mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is ITR mandatory below taxable limit?",
                  a: "Generally no, but mandatory if you have foreign assets, high electricity bills (>₹1L), or travel expenses (>₹2L).",
                },
                {
                  q: "What is the penalty for late filing?",
                  a: "Late fee under Section 234F can go up to ₹5,000 depending on the delay and income level.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group border border-black rounded-none"
                >
                  <summary className="p-4 font-bold cursor-pointer list-none flex justify-between items-center group-open:bg-black group-open:text-white transition-all">
                    {faq.q}
                    <span className="text-xl font-light">{`+`}</span>
                  </summary>
                  <div className="p-4 bg-white text-gray-600 text-sm border-t border-black">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t-8 border-black">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-8">
            Published for 2026 Financial Literacy Program
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="bg-black text-white p-4 font-bold uppercase text-xs hover:invert transition-all">
              ITR Forms Download
            </button>
            <button className="border-2 border-black p-4 font-bold uppercase text-xs hover:bg-gray-100 transition-all">
              Tax Calculator 2026
            </button>
          </div>
        </footer>
      </article>

      {/* Mobile Sticky Bar */}
      <div className="md:hidden sticky bottom-16 mt-10 w-full bg-black text-white p-4 flex justify-between items-center z-50">
        <span className="text-xs font-bold uppercase tracking-tighter">
          File Your ITR Now
        </span>
        <a
          href="https://www.incometax.gov.in"
          className="bg-white text-black px-4 py-2 text-xs font-black uppercase"
        >
          Official Portal
        </a>
      </div>
    </div>
  );
}
