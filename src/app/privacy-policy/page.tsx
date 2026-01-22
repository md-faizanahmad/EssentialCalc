export const metadata = {
  title: "Privacy Policy | EssentialCalc - Indian DPDPA Compliant",
  description:
    "Privacy Policy for EssentialCalc. We follow Indian Digital Personal Data Protection Act (DPDPA) guidelines. Learn how we handle your data with zero server storage.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "January 22, 2026";

  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-black text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10 uppercase tracking-widest">
        Last updated: {lastUpdated}
      </p>

      <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed">
        <section className="mb-10 p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <h2 className="text-xl font-bold text-blue-900 mt-0">
            Compliance Statement
          </h2>
          <p className="text-blue-800 text-sm mb-0">
            This Privacy Policy is prepared in accordance with the **Digital
            Personal Data Protection Act (DPDPA), 2023 (India)**, the
            Information Technology Act, 2000, and global standards like GDPR.
            EssentialCalc is committed to protecting the privacy of its users in
            Bihar and across India.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            1. Data Minimization & Collection
          </h2>
          <p>
            At EssentialCalc, we follow the principle of{" "}
            <strong>Data Minimization</strong>. We do not require users to
            create accounts, provide phone numbers, or share Aadhaar/PAN
            details.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Calculation Data:</strong> All inputs for EMI, Salary, and
              Loan calculators are processed <strong>client-side</strong>{" "}
              (within your browser). This data never reaches our servers.
            </li>
            <li>
              <strong>Contact Information:</strong> If you email us, we only use
              your email address to respond to your query.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            2. Cookies & Third-Party Advertising
          </h2>
          <p>
            We use <strong>Google AdSense</strong> to support our &quot;Service
            to Nation&quot; mission. Google, as a third-party vendor, uses
            cookies to serve ads based on a user&quot;s prior visits to our
            website or other websites.
          </p>
          <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 my-4">
            <h3 className="text-lg font-bold mb-2">Google’s DART Cookie</h3>
            <p className="text-sm">
              Google&quot;s use of advertising cookies enables it and its
              partners to serve ads based on your visit to EssentialCalc. You
              may opt-out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                className="text-blue-600 underline"
              >
                Google Ads Settings
              </a>
              .
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            3. Log Files & Analytics
          </h2>
          <p>
            Like most websites, we use log files. This includes internet
            protocol (IP) addresses, browser type, Internet Service Provider
            (ISP), date/time stamp, and referring/exit pages. This information
            is used solely to analyze trends and administer the site, and is{" "}
            <strong>not linked</strong> to any personally identifiable
            information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            4. Rights of the &quot;Data Principal&quot; (Your Rights)
          </h2>
          <p>Under the Indian DPDPA 2023, you have the following rights:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Right to Erasure:</strong> Since we do not store your
              data, your data is &quot;erased&quot; the moment you close your
              browser tab.
            </li>
            <li>
              <strong>Right to Redressal:</strong> If you have concerns about
              how the site functions, you can contact our Grievance Officer.
            </li>
          </ul>
        </section>

        <section className="mb-8 border-t border-gray-100 pt-8">
          <h2 className="text-2xl font-bold text-gray-900">
            5. Grievance Officer
          </h2>
          <p>
            In accordance with the Information Technology Act and DPDPA, the
            name and contact details of the Grievance Officer are provided
            below:
          </p>
          <p className="bg-gray-50 p-4 rounded-xl font-medium">
            <strong>Name:</strong> Md Faizan Ahmad
            <br />
            <strong>Location:</strong> Bihar, India
            <br />
            <strong>Email:</strong> mdfaizan7563@gmail.com
          </p>
        </section>

        <footer className="mt-12 text-sm text-gray-500 italic">
          By using EssentialCalc, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions.
        </footer>
      </div>
    </article>
  );
}
