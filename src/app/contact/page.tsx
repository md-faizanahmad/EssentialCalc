import { Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | EssentialCalc",
  description:
    "Contact EssentialCalc for questions, feedback, or support related to our calculators and online tools.",
};

export default function Contact() {
  return (
    <article className="max-w-5xl mx-auto py-12 px-4">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          If you have questions, feedback, or need assistance related to
          EssentialCalc tools, feel free to reach out using the contact details
          below.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Email */}
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 mb-4 shadow-sm">
            <Mail size={22} />
          </div>
          <h2 className="font-semibold text-gray-900 mb-1">
            Email Communication
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            For support, feedback, or general inquiries:
          </p>
          <a
            href="mailto:mdfaizan7563@gmail.com"
            className="text-sm text-blue-600 font-medium hover:underline break-all"
          >
            mdfaizan7563@gmail.com
          </a>
        </div>

        {/* Location */}
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-500 mb-4 shadow-sm">
            <MapPin size={22} />
          </div>
          <h2 className="font-semibold text-gray-900 mb-1">Location</h2>
          <p className="text-sm text-gray-600">Bihar, India</p>
        </div>

        {/* Response Time */}
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-gray-500 mb-4 shadow-sm">
            <Clock size={22} />
          </div>
          <h2 className="font-semibold text-gray-900 mb-1">
            Expected Response Time
          </h2>
          <p className="text-sm text-gray-600">
            We typically respond within 24–48 hours.
          </p>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-500">
          EssentialCalc is an independent online utility platform providing
          calculators and tools for informational purposes.
        </p>
      </footer>
    </article>
  );
}
