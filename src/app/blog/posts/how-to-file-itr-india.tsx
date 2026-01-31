// ITR Filing Guide - Editorial White/Black Layout
import { Link } from "lucide-react";
import Image from "next/image";

function PortalScreenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-12">
      <div className="relative w-full aspect-video border border-black bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-contain"
          priority={false}
        />
      </div>
      <figcaption className="mt-3 text-xs text-gray-500 italic">
        {caption}
      </figcaption>
    </figure>
  );
}

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
          <PortalScreenshot
            src="/itr/e-filling-website.png"
            alt="Income Tax e-Filing official website homepage"
            caption="Official Income Tax e-Filing portal homepage (incometax.gov.in)"
          />

          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl italic">
            Filing your Income Tax Return is not just a legal obligation; it is
            a financial identity document required for loans, visas, and
            refunds.
          </p>
        </header>
        <section className="mt-12 max-w-3xl">
          <p className="text-gray-700 leading-relaxed mb-4">
            This guide is written for normal Indian taxpayers — salaried
            employees, students, freelancers, housewives, first-time earners,
            and even people with <strong>zero income</strong>. You do{" "}
            <strong>not</strong> need a CA, accounting knowledge, or paid
            software to file your Income Tax Return.
          </p>

          <p className="text-gray-700 leading-relaxed">
            If you can use a smartphone, receive an OTP, and read basic English,
            you can file your ITR yourself in under 30 minutes using the
            official income tax e-filing website.
          </p>
        </section>
        <section
          id="real-mistakes"
          className="mt-20 border-l-4 border-black pl-6"
        >
          <h2 className="text-2xl font-bold uppercase mb-6">
            Real Filing Mistakes That Cause Notices
          </h2>

          <p className="text-gray-700 mb-4">
            These are not theory mistakes. These are issues taxpayers actually
            face after filing.
          </p>

          <ul className="space-y-4 text-sm text-gray-700">
            <li>
              • Filing ITR but forgetting Aadhaar OTP verification (return
              becomes invalid)
            </li>
            <li>
              • AIS showing interest income that people ignore (leads to
              mismatch notice)
            </li>
            <li>• Employer Form 16 missing bonus TDS</li>
            <li>• Refund stuck because bank account was not pre-validated</li>
          </ul>
        </section>

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
          <section id="no-income" className="mt-16">
            <h2 className="text-2xl font-bold uppercase border-b-2 border-black inline-block mb-8">
              Who Can File ITR Without Income
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Many people think Income Tax Return is only for people who earn
              money. This is incorrect. Even if your income is{" "}
              <strong>zero</strong> or below the taxable limit, you can and
              should file ITR in certain situations.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>
                • College students applying for foreign education or visas
              </li>
              <li>• Housewives with bank accounts or FD interest</li>
              <li>• Job seekers with PAN but no current income</li>
              <li>• People claiming TDS refund from bank or employer</li>
              <li>• First-time taxpayers building financial history</li>
            </ul>

            <p className="mt-6 text-sm text-gray-500">
              Filing ITR with zero income is completely legal and is called a
              <strong> Nil Return</strong>.
              <div className="mt-8 bg-gray-50 border-l-4 border-black p-4">
                <p className="text-sm text-gray-700">
                  If your income is zero or below the taxable limit, you can
                  file a{" "}
                  <Link
                    href="/blog/nil-itr-return"
                    className="font-semibold underline"
                  >
                    Nil ITR Return
                  </Link>{" "}
                  instead of a regular return.
                </p>
              </div>
            </p>
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
          <section
            id="registration"
            className="mt-20 bg-gray-50 p-8 border border-black"
          >
            <PortalScreenshot
              src="/itr/register.png"
              alt="Income Tax portal registration page for new users"
              caption="New user registration page on the Income Tax e-Filing portal"
            />

            <h2 className="text-2xl font-bold uppercase mb-6">
              How to Register on Income Tax e-Filing Portal
            </h2>

            <ol className="space-y-6 text-gray-700 text-sm leading-relaxed">
              <li>
                <strong>Step 1:</strong> Visit
                <span className="font-mono"> incometax.gov.in </span> and click
                “Register”.
              </li>
              <li>
                <strong>Step 2:</strong> Select “Taxpayer” and enter your PAN
                number. Your PAN will act as your user ID.
              </li>
              <li>
                <strong>Step 3:</strong> Enter basic details such as name, date
                of birth, mobile number, and email ID.
              </li>
              <li>
                <strong>Step 4:</strong> Verify your mobile and email using OTP.
              </li>
              <li>
                <strong>Step 5:</strong> Set a password and complete
                registration.
              </li>
            </ol>

            <p className="mt-6 text-gray-500 text-sm">
              Registration is required only once. After that, you can log in
              every year using PAN and password.
            </p>
          </section>

          <PortalScreenshot
            src="/itr/login.png"
            alt="Income Tax dashboard after login"
            caption="Dashboard view after successful login showing file return options"
          />
          {/* Section 3: Filing Process */}
          <section id="process">
            <h2 className="text-2xl font-bold uppercase tracking-tight border-b-2 border-black inline-block mb-8">
              03. Online Filing Process
            </h2>
            <PortalScreenshot
              src="/itr/e-filling-after-login.png"
              alt="Income Tax dashboard after login"
              caption="Dashboard view after successful login showing file return options"
            />

            <div className="space-y-12">
              {[
                {
                  step: "Portal Access",
                  detail:
                    "Open the income tax e-filing website and log in using your PAN number PAN is your permanent tax identity and works as your username for life Make sure your mobile number linked with Aadhaar is active to receive OTP.",
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
          <section id="itr-forms" className="mt-20">
            <h2 className="text-2xl font-bold uppercase border-b-2 border-black inline-block mb-8">
              05. Which ITR Form Should You Select
            </h2>

            <div className="space-y-4 text-gray-700 text-sm">
              <p>
                <strong>ITR-1 (Sahaj):</strong> Salaried individuals with income
                up to ₹50 lakh.
              </p>
              <p>
                <strong>ITR-2:</strong> Income from capital gains, multiple
                house properties.
              </p>
              <p>
                <strong>ITR-3:</strong> Business owners and professionals.
              </p>
              <p>
                <strong>ITR-4:</strong> Freelancers under presumptive taxation.
              </p>
            </div>

            <p className="mt-6 text-gray-500 text-sm">
              Selecting the wrong ITR form can lead to rejection or defective
              return notice.
            </p>
            <div className="mt-10 border-l-4 border-red-600 bg-red-50 p-4">
              <p className="text-sm text-red-800 font-semibold">⚠ Important:</p>
              <p className="text-sm text-red-700 mt-1">
                After submission, the portal may show{" "}
                <strong>“Return submitted but not verified”</strong>. This means
                your ITR is <strong>NOT complete</strong>. You must e-verify
                within 30 days, otherwise the return is treated as invalid.
              </p>
            </div>
          </section>
          <section id="need-ca" className="mt-20 bg-black text-white p-8">
            <h2 className="text-2xl font-bold uppercase mb-6">
              Do You Need a CA to File ITR?
            </h2>

            <p className="text-sm leading-relaxed text-gray-300">
              No. Most salaried employees, students, and individuals with simple
              income can file ITR themselves using the government portal for
              free.
            </p>

            <p className="mt-4 text-sm text-gray-400">
              You may need a CA only if you have complex business income,
              audits, or international assets.
            </p>
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
