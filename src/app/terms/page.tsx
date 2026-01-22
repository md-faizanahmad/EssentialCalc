export const metadata = {
  title: "Terms of Service | EssentialCalc - User Agreement",
  description:
    "Terms and conditions for using EssentialCalc. Learn about our calculation disclaimers, usage policy, and legal limitations.",
};

export default function TermsOfService() {
  const lastUpdated = "January 22, 2026";

  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-black text-gray-900 mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-gray-500 mb-10 uppercase tracking-widest">
        Effective Date: {lastUpdated}
      </p>

      <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
        <section className="mb-10 p-6 bg-orange-50 rounded-2xl border border-orange-100">
          <h2 className="text-xl font-bold text-orange-900 mt-0 uppercase tracking-tight">
            Financial Disclaimer
          </h2>
          <p className="text-orange-800 text-sm mb-0 font-medium">
            EssentialCalc provides financial calculators for{" "}
            <strong>informational and educational purposes only</strong>. The
            results generated do not constitute financial, legal, or tax advice.
            We strongly recommend consulting with a qualified professional or
            your bank before making any financial commitments.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing and using <strong>EssentialCalc</strong>, you
            acknowledge that you have read, understood, and agreed to be bound
            by these Terms of Service and our Privacy Policy. If you do not
            agree, please refrain from using our tools.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            2. Use of Service
          </h2>
          <p>
            EssentialCalc grants you a personal, non-exclusive, and
            non-transferable license to use our web application for personal or
            internal business planning. You agree not to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Use the service for any illegal purposes or to violate Indian
              laws.
            </li>
            <li>
              Attempt to reverse engineer, scrape, or automate data collection
              from our tools.
            </li>
            <li>
              Use our calculators to build a competing service without written
              permission.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            3. Accuracy of Information
          </h2>
          <p>
            While we strive for absolute precision using industry-standard
            formulas (such as the Reducing Balance Method), EssentialCalc does
            not warrant that the results are 100% error-free. Variations may
            occur due to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Specific bank rounding rules.</li>
            <li>Changes in government tax slabs or GST rates.</li>
            <li>
              Processing fees or hidden charges applied by financial
              institutions.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            4. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by the{" "}
            <strong>Information Technology Act, 2000</strong>,
            <strong>Md Faizan Ahmad</strong> and <strong>EssentialCalc</strong>{" "}
            shall not be liable for any financial loss, damages, or decisions
            made based on the calculations provided by this website. Your use of
            the tools is at your own risk.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">5. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the
            laws of <strong>India</strong>. Any disputes arising from the use of
            this website shall be subject to the exclusive jurisdiction of the
            courts in <strong>Bihar, India</strong>.
          </p>
        </section>

        <section className="mb-8 border-t border-gray-100 pt-8">
          <h2 className="text-2xl font-bold text-gray-900">6. Modifications</h2>
          <p>
            We reserve the right to update these terms at any time. We will
            notify users of any changes by updating the &quot;Last Updated&quot;
            date at the top of this page.
          </p>
        </section>

        <footer className="mt-12 p-6 bg-gray-900 rounded-2xl text-white text-center">
          <p className="text-sm font-bold mb-2">
            Questions regarding these terms?
          </p>
          <p className="text-xs opacity-70">
            Please reach out via our Contact Page.
          </p>
        </footer>
      </div>
    </article>
  );
}
