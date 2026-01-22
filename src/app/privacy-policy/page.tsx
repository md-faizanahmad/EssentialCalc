export const metadata = {
  title: "Privacy Policy | EssentialCalc",
  description:
    "Privacy Policy for EssentialCalc. Learn how we handle user information, cookies, and third-party advertising such as Google AdSense.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "January 22, 2026";

  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: {lastUpdated}</p>

      <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
        <section className="mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 mt-0">Overview</h2>
          <p className="text-sm mb-0">
            This Privacy Policy explains how EssentialCalc collects, uses, and
            protects information when you use our website. By accessing or using
            EssentialCalc, you agree to the terms described in this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            1. Information We Collect
          </h2>
          <p>
            EssentialCalc follows a principle of data minimization. We do not
            require users to create accounts or submit personal identification
            details.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Calculator & Tool Inputs:</strong> All inputs for EMI,
              Salary, Loan, PDF, and Image tools are processed entirely within
              your browser. This information is not transmitted to or stored on
              our servers.
            </li>
            <li>
              <strong>Contact Information:</strong> If you contact us via email,
              we use your email address solely to respond to your inquiry.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            2. Cookies & Third-Party Advertising
          </h2>
          <p>
            EssentialCalc uses <strong>Google AdSense</strong>, a third-party
            advertising service, to display ads. Google may use cookies or web
            beacons to show advertisements based on a user’s visit to this and
            other websites.
          </p>

          <div className="bg-white p-6 rounded-xl border border-gray-200 my-4">
            <h3 className="text-lg font-semibold mb-2">
              Google Advertising Cookies
            </h3>
            <p className="text-sm">
              Google’s use of advertising cookies enables it and its partners to
              serve ads based on your visit to EssentialCalc and/or other sites
              on the internet. Users may opt out of personalized advertising by
              visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Google Ads Settings
              </a>
              .
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            3. Log Files & Analytics
          </h2>
          <p>
            Like many websites, EssentialCalc may collect non-personal
            information through standard log files. This may include IP
            addresses, browser type, Internet Service Provider (ISP), date and
            time stamps, referring pages, and exit pages.
          </p>
          <p>
            This information is used solely for understanding site usage trends,
            administering the website, and improving user experience. It is not
            linked to personally identifiable information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            4. Data Retention & User Rights
          </h2>
          <p>
            EssentialCalc does not store calculation data on its servers. Any
            information processed through our tools is automatically discarded
            when you close your browser session.
          </p>
          <p>
            Users may contact us if they have questions or concerns about how
            the website functions or how information is handled.
          </p>
        </section>

        <section className="mb-8 border-t border-gray-100 pt-8">
          <h2 className="text-2xl font-semibold text-gray-900">
            5. Contact Information
          </h2>
          <p>
            If you have any questions about this Privacy Policy or our
            practices, you may contact us at:
          </p>
          <p className="bg-gray-50 p-4 rounded-xl font-medium">
            <strong>Name:</strong> Md Faizan Ahmad
            <br />
            <strong>Location:</strong> India
            <br />
            <strong>Email:</strong> mdfaizan7563@gmail.com
          </p>
        </section>

        <footer className="mt-12 text-sm text-gray-500 italic">
          By using EssentialCalc, you acknowledge that you have read and
          understood this Privacy Policy.
        </footer>
      </div>
    </article>
  );
}
