export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicy() {
  return (
    <article className="max-w-3xl mx-auto prose prose-slate py-10">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-4">Last updated: January 2026</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          1. Information We Collect
        </h2>
        <p>
          EssentialCalc does not require user registration. We do not collect
          personal identification information unless you contact us directly.
          Our tools process data locally in your browser whenever possible.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          2. Google AdSense & Cookies
        </h2>
        <p>
          We use Google AdSense to serve ads. Google, as a third-party vendor,
          uses cookies to serve ads on our site. Google&apos;s use of
          advertising cookies enables it and its partners to serve ads to our
          users based on their visit to EssentialCalc and other sites on the
          Internet.
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Users may opt out of personalized advertising by visiting Google Ads
            Settings.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Data Security</h2>
        <p>
          The calculations performed on EssentialCalc (like EMI or Salary) are
          processed on the client-side. We do not store your financial inputs on
          our servers.
        </p>
      </section>
    </article>
  );
}
