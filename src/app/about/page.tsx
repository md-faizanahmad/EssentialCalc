import { ShieldCheck, Globe, Code2, Zap } from "lucide-react";

export const metadata = {
  title: "About EssentialCalc | Privacy-First Financial Calculators for India",
  description:
    "EssentialCalc is a privacy-first platform built in India that provides free financial calculators and practical guides. No user tracking. No data storage.",
  alternates: {
    canonical: "https://essentialcalc.com/about",
  },
};

export default function About() {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          About <span className="text-sky-400-600">EssentialCalc</span>
        </h1>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8" />
      </header>

      {/* Intro */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg mb-16">
        <p>
          <strong>EssentialCalc</strong> is a privacy-first platform designed to
          help users perform everyday financial calculations without sharing
          personal data. All tools run directly in the browser, and user inputs
          are never stored or tracked.
        </p>

        <p>
          The platform includes calculators for common needs such as loan
          planning and salary estimation, along with simple reference guides
          that explain financial concepts in clear language.
        </p>
      </div>

      {/* Founder (minimal, factual) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-20">
        <div className="md:col-span-2 space-y-4 text-gray-700 leading-relaxed">
          <p>
            EssentialCalc is developed and maintained by{" "}
            <strong className="text-gray-900">Md Faizan Ahmad</strong>, a web
            developer based in India, with a focus on building fast, reliable,
            and privacy-respecting web applications.
          </p>
        </div>

        <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-sm text-center">
          <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-sky-400-600">
            <Code2 size={36} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">
            Md Faizan Ahmad
          </h3>
          <p className="text-xs text-gray-500">Founder & Developer</p>
        </div>
      </div>

      {/* Mission Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <ShieldCheck className="text-sky-400-600 mb-3" size={28} />
          <h4 className="font-semibold text-gray-900 mb-1">No Data Storage</h4>
          <p className="text-sm text-gray-500">
            Calculations stay on your device. Inputs are not saved on servers.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <Globe className="text-sky-400-600 mb-3" size={28} />
          <h4 className="font-semibold text-gray-900 mb-1">Open Access</h4>
          <p className="text-sm text-gray-500">
            Tools are available to anyone, without accounts or sign-ups.
          </p>
        </div>

        <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
          <Zap className="text-sky-400-600 mb-3" size={28} />
          <h4 className="font-semibold text-gray-900 mb-1">
            Fast & Lightweight
          </h4>
          <p className="text-sm text-gray-500">
            Built for performance, even on slow or limited connections.
          </p>
        </div>
      </div>

      {/* Guides clarification (important for SEO/AI) */}
      <section className="text-gray-700 text-base leading-relaxed mb-20">
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          Calculators with Simple Guides
        </h2>
        <p>
          Alongside calculators, EssentialCalc includes short, practical guides
          that explain how calculations work and how to interpret results. These
          guides are meant for basic understanding, not professional advice.
        </p>
      </section>

      {/* Commitment */}
      <section className="bg-white p-8 rounded-3xl border border-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Commitment</h2>
        <p className="text-gray-600">
          EssentialCalc is committed to remaining free, private, and focused on
          clarity—helping users make sense of numbers without unnecessary
          complexity.
        </p>
      </section>
    </article>
  );
}
