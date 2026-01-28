// GST Return Guide - High-Contrast Editorial Layout
export default function HowToFileGSTReturnIndia() {
  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      {/* WEB CRAWLER OPTIMIZATION: 
          Strict H1-H2-H3 hierarchy for Googlebot 
      */}

      <article className="mx-auto max-w-187.5 px-4 py-2 md:py-16">
        {/* Header Section */}
        <header className="border-b-2 border-black pb-8 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-widest">
              Compliance 2026
            </span>
            <span className="text-gray-500 text-sm">8 Min Read</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] mb-6">
            How to File GST Return in India: The Definitive Guide.
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            A comprehensive breakdown of GST filing procedures, updated for the
            2026 fiscal year regulations.
          </p>
        </header>

        {/* Ad Placement: Top of Page */}
        <div className="my-8 w-full py-4 border-y border-gray-100 flex justify-center">
          <span className="text-[10px] text-gray-400 uppercase tracking-widest">
            Sponsored Content
          </span>
        </div>

        <div className="space-y-16">
          {/* Section 1: Introduction */}
          <section id="introduction">
            <p className="text-lg leading-relaxed mb-6">
              GST (Goods and Services Tax) return filing is the process by which
              a registered taxpayer reports their income to the authorities.
              Under the 2026 guidelines, compliance has become automated, making
              timely filing more critical than ever to maintain a high{" "}
              <strong>Compliance Rating</strong>.
            </p>
          </section>

          {/* Section 2: Eligibility */}
          <section id="eligibility">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              01. Who Must File?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-black p-6">
                <h3 className="font-bold text-lg mb-2">Standard Taxpayers</h3>
                <p className="text-sm text-gray-600">
                  Businesses exceeding the threshold limit of ₹40 Lakhs (Goods)
                  or ₹20 Lakhs (Services).
                </p>
              </div>
              <div className="border border-black p-6">
                <h3 className="font-bold text-lg mb-2">Compulsory Filers</h3>
                <p className="text-sm text-gray-600">
                  E-commerce sellers, Non-resident taxpayers, and Casual taxable
                  persons regardless of turnover.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: The Forms */}
          <section id="forms">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              02. GSTR Forms & Deadlines
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse border border-black">
                <thead>
                  <tr className="bg-black text-white">
                    <th className="p-4 border border-black text-xs uppercase">
                      Form
                    </th>
                    <th className="p-4 border border-black text-xs uppercase">
                      Purpose
                    </th>
                    <th className="p-4 border border-black text-xs uppercase">
                      Due Date
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="p-4 border border-black font-bold text-lg">
                      GSTR-1
                    </td>
                    <td className="p-4 border border-black">
                      Report of Outward Supplies
                    </td>
                    <td className="p-4 border border-black font-medium">
                      11th / Month
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 border border-black font-bold text-lg">
                      GSTR-3B
                    </td>
                    <td className="p-4 border border-black">
                      Self-Assessed Summary Return
                    </td>
                    <td className="p-4 border border-black font-medium">
                      20th / Month
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-black font-bold text-lg">
                      GSTR-4
                    </td>
                    <td className="p-4 border border-black">
                      Composition Scheme Return
                    </td>
                    <td className="p-4 border border-black font-medium">
                      Annual
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Ad Placement: Mid-Article */}
          <div className="my-12 w-full h-62.5 bg-gray-50 flex items-center justify-center border border-gray-200">
            <span className="text-[10px] text-gray-400 uppercase tracking-widest">
              Advertisement
            </span>
          </div>

          {/* Section 4: Process Flow */}
          <section id="process">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-l-4 border-black pl-4 mb-8">
              03. Step-by-Step Filing Process
            </h2>
            <div className="space-y-4">
              {[
                {
                  step: "Authentication",
                  detail:
                    "Login to the GST Portal (gst.gov.in) using your 15-digit GSTIN.",
                },
                {
                  step: "Return Dashboard",
                  detail: "Navigate to Services > Returns > Returns Dashboard.",
                },
                {
                  step: "Data Entry",
                  detail:
                    "Add B2B and B2C invoices. Ensure your data matches GSTR-2B for ITC.",
                },
                {
                  step: "Tax Settlement",
                  detail:
                    "Check balance in Electronic Cash & Credit Ledgers. Pay via Net Banking/UPI if needed.",
                },
                {
                  step: "Final Verification",
                  detail:
                    "Submit using DSC (for companies) or EVC-OTP (for individuals).",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 border-b border-gray-100"
                >
                  <span className="font-mono text-gray-400">0{index + 1}</span>
                  <div>
                    <h4 className="font-bold uppercase text-sm">{item.step}</h4>
                    <p className="text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: Penalties */}
          <section id="penalties" className="bg-black text-white p-8">
            <h2 className="text-2xl font-bold mb-6">The Cost of Delay</h2>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Standard Late Fee</span>
                <span>₹50 / Day</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>NIL Return Late Fee</span>
                <span>₹20 / Day</span>
              </li>
              <li className="flex justify-between">
                <span>Interest Rate</span>
                <span>18% Per Annum</span>
              </li>
            </ul>
            <p className="mt-8 text-xs text-gray-400 leading-tight">
              *Penalties are capped at a maximum of ₹5,000 per return under
              specific conditions.
            </p>
          </section>

          {/* Section 6: FAQs (AdSense/GSC Value Add) */}
          <section id="faq">
            <h2 className="text-2xl font-bold uppercase mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-t border-black pt-4">
                <h4 className="font-bold mb-2 uppercase text-xs tracking-wider">
                  Can I file if I have zero sales?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes. A &quot;NIL Return&quot; is mandatory to keep your GSTIN
                  active. Failure to file for 6 consecutive months results in
                  registration cancellation.
                </p>
              </div>
              <div className="border-t border-black pt-4">
                <h4 className="font-bold mb-2 uppercase text-xs tracking-wider">
                  How do I claim ITC?
                </h4>
                <p className="text-gray-600 text-sm">
                  Input Tax Credit (ITC) can only be claimed if your supplier
                  has uploaded the invoices in their GSTR-1 and it reflects in
                  your GSTR-2B.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Content */}
        <footer className="mt-20 pt-8 border-t-4 border-black">
          <p className="text-xs text-gray-500 mb-8 uppercase tracking-widest font-bold">
            End of Guide — GST Compliance Series
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="flex-1 bg-black text-white py-4 px-6 font-bold uppercase text-xs hover:bg-gray-800 transition-colors">
              Download Filing Checklist
            </button>
            <button className="flex-1 border-2 border-black py-4 px-6 font-bold uppercase text-xs hover:bg-gray-100 transition-colors">
              Contact Tax Expert
            </button>
          </div>
        </footer>
      </article>
    </div>
  );
}
