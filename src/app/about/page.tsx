import { ShieldCheck, Globe, Zap, EyeOff, Database } from "lucide-react";

export const metadata = {
  title: "About EssentialCalc | Privacy-First Financial Calculators for India",
  description:
    "EssentialCalc provides free financial calculators and practical guides with a focus on privacy, minimal data collection, and a cleaner experience without unnecessary tracking or advertising.",
  alternates: {
    canonical: "https://essentialcalc.com/about",
  },
};

const aboutContent = {
  intro: [
    "EssentialCalc was created from a simple concern: everyday tools should not require people to give up their privacy.",
    "Many websites and online tools collect information about visitors, use tracking technologies, build user profiles, or display targeted advertisements. Even when the calculation itself is simple, the surrounding experience can involve more data collection than users expect.",
    "EssentialCalc aims to provide a different kind of experience—useful calculators and practical guides with privacy considered from the beginning.",
  ],

  concerns: [
    {
      icon: Database,
      title: "Unnecessary Data Collection",
      description:
        "Simple tasks should not require collecting personal information that is unrelated to the calculation or service being provided.",
    },
    {
      icon: EyeOff,
      title: "Tracking & Profiling",
      description:
        "Users should be able to use basic tools without being unnecessarily tracked or profiled based on their activity.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy by Design",
      description:
        "Where possible, calculations are performed directly in the browser so the information entered into a calculator does not need to be sent to a server.",
    },
  ],

  pillars: [
    {
      icon: ShieldCheck,
      title: "Privacy Focused",
      description: "Designed with minimal data collection and privacy in mind.",
    },
    {
      icon: Globe,
      title: "Open Access",
      description:
        "Useful tools available without unnecessary accounts or sign-ups.",
    },
    {
      icon: Zap,
      title: "Fast & Lightweight",
      description:
        "Simple tools built to work quickly without unnecessary complexity.",
    },
  ],

  guides: {
    title: "Calculators with Simple Guides",
    description:
      "Alongside calculators, EssentialCalc provides short and practical guides explaining how calculations work and how to understand the results. These resources are intended for general informational purposes and are not professional financial advice.",
  },

  commitment: {
    title: "Our Commitment",
    description:
      "EssentialCalc aims to remain free, useful, and privacy-conscious. The goal is simple: provide practical tools without making users feel that their personal information is the price of using them.",
  },
};

export default function About() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-12">
      {/* Header */}
      <header className="mb-16 text-center">
        <h1 className="mb-4 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
          About <span className="text-sky-600">EssentialCalc</span>
        </h1>

        <div className="relative mx-auto h-1.5 w-20 overflow-hidden rounded-full bg-sky-100">
          <div
            className="
              absolute inset-y-0 left-0 w-full rounded-full
              bg-linear-to-r from-sky-300 via-green-400 to-green-700
              animate-[waveFill_2s_ease-in-out_infinite]
            "
          />
        </div>
      </header>

      {/* Why EssentialCalc */}
      <section className="mb-20 space-y-6 text-lg leading-relaxed text-gray-700">
        {aboutContent.intro.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      {/* Privacy Concerns */}
      <section className="mb-20">
        <div className="mb-8">
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            Why Privacy Matters
          </h2>

          <p className="leading-relaxed text-gray-600">
            Privacy can easily be overlooked when using everyday online tools.
            EssentialCalc was created to reduce some of the common concerns
            associated with using simple web-based services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {aboutContent.concerns.map((concern) => {
            const Icon = concern.icon;

            return (
              <div
                key={concern.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >
                <Icon className="mb-4 text-sky-600" size={28} />

                <h3 className="mb-2 font-semibold text-gray-900">
                  {concern.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {concern.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Principles */}
      <section className="mb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {aboutContent.pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-gray-100 bg-gray-50 p-6"
              >
                <Icon className="mb-3 text-sky-600" size={28} />

                <h3 className="mb-1 font-semibold text-gray-900">
                  {pillar.title}
                </h3>

                <p className="text-sm leading-relaxed text-gray-500">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Guides */}
      <section className="mb-20 text-base leading-relaxed text-gray-700">
        <h2 className="mb-3 text-xl font-bold text-gray-900">
          {aboutContent.guides.title}
        </h2>

        <p>{aboutContent.guides.description}</p>
      </section>

      {/* Commitment */}
      <section className="rounded-3xl border border-gray-100 bg-white p-8 text-center">
        <h2 className="mb-3 text-2xl font-bold text-gray-900">
          {aboutContent.commitment.title}
        </h2>

        <p className="text-gray-600">{aboutContent.commitment.description}</p>
      </section>
    </article>
  );
}
