export const metadata = { title: "Contact Us" };

export default function Contact() {
  return (
    <div className="max-w-2xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have a question or feedback about our tools? We&apos;d love to hear from
        you.
      </p>

      <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Email Support</h2>
        <p className="text-gray-500 mb-4">
          For general inquiries and feedback, reach out to us at:
        </p>
        <a
          href="mailto:support@essentialcalc.com"
          className="text-blue-600 font-medium hover:underline text-lg"
        >
          support@essentialcalc.com
        </a>
      </div>

      <p className="mt-8 text-sm text-gray-400">
        We typically respond to all inquiries within 24–48 hours.
      </p>
    </div>
  );
}
