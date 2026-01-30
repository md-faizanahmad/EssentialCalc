import { ShieldCheck, Globe, Code2, Zap } from "lucide-react";

export const metadata = {
  title: "About EssentialCalc | Privacy-First Tools for India",
  description:
    "Learn about EssentialCalc, a privacy-first platform built in India to provide secure financial and utility tools without tracking or data storage.",
  alternates: {
    canonical: "https://essentialcalc.com/about",
  },
};

export default function About() {
  return (
    <article className="max-w-4xl mx-auto py-12 px-4">
      {/* Header Section */}
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          The Story Behind <span className="text-blue-600">EssentialCalc</span>
        </h1>
        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8" />
      </header>

      {/* Founder's Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-20">
        <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Hello, I am{" "}
            <strong className="text-gray-900">Md Faizan Ahmad</strong>. I am a
            web developer originally from{" "}
            <span className="text-blue-600 font-semibold">Bihar, India</span>.
          </p>
          <p>
            As a developer, I spent a lot of time observing how the modern web
            works. I noticed a worrying trend: every time we want to perform a
            simple task—like calculating a loan or resizing an image—big
            companies ask for our details. They save our inputs, track our
            behavior, and use our personal data for their own profit.
          </p>
          <div className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-600 italic">
            &quot;I asked myself: Why should a simple calculation cost you your
            privacy?&quot;
          </div>
          <p>
            That thought became the seed for <strong>EssentialCalc</strong>. I
            decided to use my skills to build a service for my nation and the
            global community—a platform where tools are powerful, professional,
            and most importantly,
            <span className="font-bold text-gray-900"> 100% private.</span>
          </p>
        </div>

        {/* Founder Card */}
        <div className="bg-white border border-gray-100 p-6 rounded-3xl shadow-xl shadow-blue-50 text-center">
          <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600">
            <Code2 size={40} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">Md Faizan Ahmad</h3>
          <p className="text-sm text-blue-600 font-medium mb-4">
            Founder & Developer
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Building privacy-first digital infrastructure for a transparent
            India.
          </p>
        </div>
      </div>

      {/* The Mission Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
          <ShieldCheck className="text-blue-600 mb-4" size={32} />
          <h4 className="font-bold text-gray-900 mb-2">Zero Data Collection</h4>
          <p className="text-sm text-gray-500">
            I designed this app so your data stays in your browser. We
            don&apos;t save what you calculate.
          </p>
        </div>
        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
          <Globe className="text-blue-600 mb-4" size={32} />
          <h4 className="font-bold text-gray-900 mb-2">Service to Nation</h4>
          <p className="text-sm text-gray-500">
            EssentialCalc is my way of giving back. Quality tools should be free
            for every citizen.
          </p>
        </div>
        <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
          <Zap className="text-blue-600 mb-4" size={32} />
          <h4 className="font-bold text-gray-900 mb-2">High Performance</h4>
          <p className="text-sm text-gray-500">
            Built with Next.js to ensure that even users in villages with slow
            internet can use it.
          </p>
        </div>
      </div>

      {/* Commitment Section */}
      <section className="prose prose-slate max-w-none bg-white p-8 rounded-3xl border border-gray-100 text-center">
        <h2 className="text-2xl font-bold">My Promise</h2>
        <p className="text-gray-600 italic">
          &quot;EssentialCalc will always remain free, always remain private,
          and always put the user first. Whether you are planning your first
          home loan or checking your monthly salary, you can do it here with
          peace of mind.&quot;
        </p>
      </section>
    </article>
  );
}
