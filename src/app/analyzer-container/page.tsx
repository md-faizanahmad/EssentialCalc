import AnalyzerContainer from "@/components/AnalyzerContainer/AnalyzerContainer";
import TimeMethodology from "@/components/AnalyzerContainer/TimeMethodology";

export default function Home() {
  return (
    <section className="px-4 py-6">
      <header className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Day Overview</h2>
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
