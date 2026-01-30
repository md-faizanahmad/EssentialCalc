export const metadata = {
  title: "Terms of Service – EssentialCalc",
  description:
    "Read the Terms of Service for EssentialCalc to understand usage rules, calculation disclaimers, limitations of liability, and acceptable use of our tools.",
  alternates: {
    canonical: "https://essentialcalc.com/terms",
  },
};

export default function TermsOfService() {
  const lastUpdated = "January 22, 2026";

  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: {lastUpdated}</p>

      <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
        <section className="mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mt-0">
            Important Disclaimer
          </h2>
          <p className="text-sm mb-0">
            EssentialCalc provides calculators and tools for informational and
            educational purposes only. The results generated do not constitute
            financial, legal, or tax advice. Users are encouraged to verify
            results independently or consult qualified professionals before
            making financial decisions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using EssentialCalc, you agree to comply with these
            Terms of Service and our Privacy Policy. If you do not agree with
            any part of these terms, please discontinue use of the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            2. Use of the Website
          </h2>
          <p>
            EssentialCalc grants users a limited, non-exclusive right to use the
            website and its tools for personal or internal planning purposes.
            Users agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Use the website for unlawful or harmful activities.</li>
            <li>
              Attempt to disrupt, reverse engineer, or misuse the tools or
              content.
            </li>
            <li>
              Reproduce or resell the tools as a standalone competing service
              without permission.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            3. Accuracy of Calculations
          </h2>
          <p>
            EssentialCalc aims to provide accurate calculations using commonly
            accepted formulas and methods. However, results may vary due to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Rounding practices used by banks or institutions.</li>
            <li>Changes in interest rates, tax rules, or regulations.</li>
            <li>Additional fees or conditions applied by third parties.</li>
          </ul>
          <p>
            Users should treat all results as estimates and not guaranteed
            outcomes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            4. Limitation of Liability
          </h2>
          <p>
            To the extent permitted by applicable law, EssentialCalc and its
            owner shall not be responsible for any losses, damages, or decisions
            arising from reliance on information provided by this website. Use
            of the tools is at the user’s own discretion and risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            5. Governing Principles
          </h2>
          <p>
            These Terms are intended to be governed by generally applicable
            laws. Any disputes related to the use of this website shall be
            handled in accordance with applicable legal procedures.
          </p>
        </section>

        <section className="mb-8 border-t border-gray-100 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            6. Updates to These Terms
          </h2>
          <p>
            EssentialCalc may update these Terms of Service from time to time.
            Changes will be reflected by updating the date at the top of this
            page. Continued use of the website indicates acceptance of the
            revised terms.
          </p>
        </section>

        <footer className="mt-12 text-sm text-gray-500 italic">
          For questions regarding these terms, please contact us through the
          Contact page.
        </footer>
      </div>
    </article>
  );
}
