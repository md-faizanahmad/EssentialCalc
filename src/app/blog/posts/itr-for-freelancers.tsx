// ITR for Freelancers – Practical Guide
// Audience: Freelancers, consultants, self-employed individuals in India

export const metadata = {
  title: "ITR for Freelancers in India: Simple Filing Guide (2026)",
  description:
    "Learn how freelancers and self-employed professionals can file Income Tax Return (ITR) in India. Covers ITR forms, expenses, presumptive tax, and common mistakes.",
};

export default function ITRForFreelancers() {
  return (
    <div className="min-h-screen bg-white text-black">
      <article className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* ================= HEADER ================= */}
        <header className="border-b-4 border-black pb-8">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            ITR for Freelancers in India
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl">
            A simple and practical guide for freelancers and self-employed
            professionals to file Income Tax Return correctly — without CA
            confusion or legal language.
          </p>
        </header>

        {/* ================= WHO IS A FREELANCER ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Who Is Considered a Freelancer?
          </h2>
          <p className="text-gray-700 mb-4">
            You are treated as a freelancer if you earn money independently and
            not as a salaried employee.
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Web developers, designers, writers</li>
            <li>Digital marketers, consultants, trainers</li>
            <li>
              Online service providers working with Indian or foreign clients
            </li>
            <li>Anyone earning without Form 16</li>
          </ul>
        </section>

        {/* ================= WHY ITR IS IMPORTANT ================= */}
        <section className="bg-gray-50 border-l-4 border-black p-6">
          <h2 className="text-xl font-bold mb-3">
            Why Freelancers Should File ITR
          </h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Required for loans, credit cards, and visas</li>
            <li>• Helps avoid income tax notices later</li>
            <li>• Needed to show income proof</li>
            <li>• Builds clean financial history</li>
          </ul>
        </section>

        {/* ================= WHICH ITR FORM ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Which ITR Form Should Freelancers Use?
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>ITR-3:</strong>
              Use this if you want to show actual income and expenses (rent,
              internet, laptop, software, travel, etc.).
            </p>

            <p>
              <strong>ITR-4 (Presumptive Tax):</strong>
              Use this if your annual income is up to ₹50 lakh and you want a
              simpler method. You declare 50% of income as profit and don’t need
              to show expenses.
            </p>
          </div>
        </section>

        {/* ================= DOCUMENTS ================= */}
        <section className="bg-gray-50 p-6 border border-black">
          <h2 className="text-2xl font-bold mb-4">Documents You Need</h2>

          <ul className="space-y-2 text-gray-700">
            <li>• PAN & Aadhaar</li>
            <li>• Bank statements</li>
            <li>• Payment receipts or invoices</li>
            <li>• Expense proofs (if filing ITR-3)</li>
            <li>• AIS / Form 26AS from income tax portal</li>
          </ul>
        </section>

        {/* ================= STEP BY STEP PROCESS ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Step-by-Step: How Freelancers File ITR
          </h2>

          <div className="space-y-6 text-gray-700">
            <p>
              <strong>Step 1:</strong> Collect income details from bank
              statements, invoices, and payment platforms.
            </p>

            <p>
              <strong>Step 2:</strong> Visit the official portal
              <span className="font-mono"> https://www.incometax.gov.in </span>
              and log in using PAN.
            </p>

            <p>
              <strong>Step 3:</strong> Choose ITR-3 or ITR-4 based on your
              income method.
            </p>

            <p>
              <strong>Step 4:</strong> Check AIS and Form 26AS to confirm income
              and TDS details.
            </p>

            <p>
              <strong>Step 5:</strong> Submit the return and complete
              e-verification using Aadhaar OTP or net banking.
            </p>
          </div>
        </section>

        {/* ================= COMMON MISTAKES ================= */}
        <section className="bg-black text-white p-8">
          <h2 className="text-2xl font-bold mb-4">
            Common Mistakes Freelancers Make
          </h2>

          <ul className="space-y-2 text-sm">
            <li>× Not reporting foreign client income</li>
            <li>× Ignoring bank interest</li>
            <li>× Choosing wrong ITR form</li>
            <li>× Skipping advance tax completely</li>
          </ul>
        </section>

        {/* ================= FAQ ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-700 mb-3">
            <strong>Q: Do freelancers need to pay advance tax?</strong>
            <br />
            Yes. If total tax payable exceeds ₹10,000 in a year, advance tax is
            required.
          </p>

          <p className="text-gray-700">
            <strong>Q: Can I file ITR without CA?</strong>
            <br />
            Yes. Freelancers with simple income can file ITR themselves using
            the government portal.
          </p>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t-4 border-black pt-8">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-4">
            Freelancer Tax Guide — India
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
