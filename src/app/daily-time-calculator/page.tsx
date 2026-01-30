import AnalyzerContainer from "@/components/AnalyzerContainer/AnalyzerContainer";
import TimeMethodology from "@/components/AnalyzerContainer/TimeMethodology";

export const metadata = {
  title:
    "Daily Time Management Calculator – Analyze How You Spend Your Day | EssentialCalc",
  description:
    "Free daily time management calculator to analyze how you spend your day on work, sleep, mobile, study, and personal activities. Privacy-first, no data tracking.",
  alternates: {
    canonical: "https://essentialcalc.com/daily-time-calculator",
  },
};
export default function Home() {
  return (
    <section className="px-4 py-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Daily Time Allocation Analyzer
        </h1>
        <p className="text-gray-600 text-sm">
          Input your hours to see your productivity breakdown.
        </p>
      </header>

      {/* The Client-side interactive part */}
      <AnalyzerContainer />
      <TimeMethodology />
    </section>
  );
}
