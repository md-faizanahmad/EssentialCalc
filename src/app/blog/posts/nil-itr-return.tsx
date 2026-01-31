// NIL ITR Return Guide
// Audience: Students, job seekers, homemakers, first-time taxpayers, zero income users

export const metadata = {
  title: "Nil ITR Return in India: Who Should File & How (2026 Guide)",
  description:
    "Learn what a Nil ITR Return is, who should file it, and how to file Nil Income Tax Return in India step by step. Simple guide for zero income taxpayers.",
};

export default function NilITRReturn() {
  return (
    <div className="min-h-screen bg-white text-black">
      <article className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* ================= HEADER ================= */}
        <header className="border-b-4 border-black pb-8">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Nil ITR Return in India
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            A simple guide explaining what a Nil Income Tax Return is, who
            should file it, and how to file it correctly — even if your income
            is zero.
          </p>
        </header>

        {/* ================= WHAT IS NIL ITR ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-4">What Is a Nil ITR Return?</h2>
          <p className="text-gray-700 leading-relaxed">
            A Nil ITR Return is filed when your total income is below the
            taxable limit or zero, and no tax is payable. Filing Nil ITR is
            completely legal and allowed by the Income Tax Department.
          </p>
        </section>

        {/* ================= WHO SHOULD FILE ================= */}
        <section className="bg-gray-50 border-l-4 border-black p-6">
          <h2 className="text-xl font-bold mb-4">Who Should File Nil ITR?</h2>

          <ul className="space-y-2 text-gray-700">
            <li>• Students with PAN but no income</li>
            <li>• Job seekers currently unemployed</li>
            <li>• Homemakers with bank accounts</li>
            <li>• People with income below basic exemption limit</li>
            <li>• Anyone wanting to build financial history</li>
          </ul>
        </section>

        {/* ================= WHY FILE NIL ITR ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Why File Nil ITR If Income Is Zero?
          </h2>

          <ul className="space-y-3 text-gray-700">
            <li>• Required for visa applications</li>
            <li>• Helpful for education or personal loans</li>
            <li>• Proof of income status for banks</li>
            <li>• Keeps PAN active and compliant</li>
            <li>• Helps avoid future income tax notices</li>
          </ul>
        </section>

        {/* ================= STEP BY STEP ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Step-by-Step: How to File Nil ITR
          </h2>

          <div className="space-y-5 text-gray-700">
            <p>
              <strong>Step 1:</strong> Keep PAN, Aadhaar, and bank details
              ready.
            </p>

            <p>
              <strong>Step 2:</strong> Visit the official website{" "}
              <span className="font-mono">https://www.incometax.gov.in</span>{" "}
              and log in using your PAN.
            </p>

            <p>
              <strong>Step 3:</strong> Select ITR-1 (Sahaj) if eligible.
            </p>

            <p>
              <strong>Step 4:</strong> Confirm that income details show zero or
              below taxable limit.
            </p>

            <p>
              <strong>Step 5:</strong> Submit the return and complete
              e-verification using Aadhaar OTP.
            </p>
          </div>
        </section>

        {/* ================= IMPORTANT WARNING ================= */}
        <section className="bg-red-50 border-l-4 border-red-600 p-6">
          <h3 className="font-bold text-red-800 mb-2">
            ⚠ Important Things to Remember
          </h3>
          <ul className="space-y-2 text-red-700 text-sm">
            <li>• Bank interest may still count as income</li>
            <li>• TDS refund requires ITR filing</li>
            <li>• Filing is optional but beneficial</li>
          </ul>
        </section>

        {/* ================= FAQ ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-700 mb-3">
            <strong>Q: Is Nil ITR compulsory?</strong>
            <br />
            No. It is not compulsory, but recommended in many situations.
          </p>

          <p className="text-gray-700 mb-3">
            <strong>Q: Can I file Nil ITR from mobile?</strong>
            <br />
            Yes. The income tax portal works on mobile browsers.
          </p>

          <p className="text-gray-700">
            <strong>Q: Will I get refund if I file Nil ITR?</strong>
            <br />
            Only if TDS was deducted earlier.
          </p>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t-4 border-black pt-8">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">
            Nil Income Tax Return Guide — India
          </p>
          <a
            href="https://www.incometax.gov.in"
            target="_blank"
            className="inline-block bg-black text-white px-6 py-3 text-xs font-bold uppercase"
          >
            Open Income Tax Portal
          </a>
        </footer>
      </article>
    </div>
  );
}
