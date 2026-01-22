import { Mail, MapPin, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact Us | EssentialCalc - Get in Touch with Md Faizan Ahmad",
  description:
    "Have questions about our EMI or Salary calculators? Reach out to Md Faizan Ahmad and the EssentialCalc team for support and feedback.",
};

export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      {/* Page Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Get in <span className="text-blue-600">Touch.</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto text-lg leading-relaxed">
          Whether you found a bug, have a feature request, or just want to say
          hello, I&apos;m always happy to hear from you.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information Cards */}
        <div className="lg:col-span-1 space-y-6">
          <div className="p-6 bg-blue-50 rounded-3xl border border-blue-100 group transition-all hover:bg-white hover:shadow-xl">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-4 shadow-sm">
              <Mail size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Email Support</h3>
            <a
              href="mailto:mdfaizan7563@gmail.com"
              className="text-sm text-blue-600 font-medium hover:underline break-all"
            >
              mdfaizan7563@gmail.com
            </a>
          </div>

          <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group transition-all hover:bg-white hover:shadow-xl">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-400 mb-4 shadow-sm group-hover:text-blue-600">
              <MapPin size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Location</h3>
            <p className="text-sm text-gray-500">
              Aurangabad & Gaya , Bihar, India
            </p>
          </div>

          <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 group transition-all hover:bg-white hover:shadow-xl">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-gray-400 mb-4 shadow-sm group-hover:text-blue-600">
              <Clock size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-1">Response Time</h3>
            <p className="text-sm text-gray-500 italic">Within 24-48 Hours</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:col-span-2">
          <form className="bg-white border border-gray-100 p-8 rounded-4xl shadow-2xl shadow-gray-100 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Md Faizan Ahmad"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                Subject
              </label>
              <select className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none text-gray-500">
                <option>General Inquiry</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>Business Collaboration</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="How can I help you today?"
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-100 transition-all flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Social Proof Footer for AdSense */}
      <div className="mt-20 pt-10 border-t border-gray-100 text-center">
        <p className="text-xs font-bold text-gray-300 uppercase tracking-[0.5em] mb-4">
          Social Presence
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-blue-600 transition-colors font-bold text-sm"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="text-gray-400 hover:text-gray-900 transition-colors font-bold text-sm"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-gray-400 hover:text-blue-400 transition-colors font-bold text-sm"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
