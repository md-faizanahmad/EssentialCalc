import { ShieldCheck, Zap, HeartHandshake } from "lucide-react";

export default function HomeStory() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
              Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6 tracking-tight">
              Calculations You Can <span className="text-blue-600">Trust.</span>
            </h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full" />
          </div>

          {/* Narrative Storytelling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="prose prose-slate prose-lg">
              <p className="text-xl text-gray-600 leading-relaxed font-medium italic">
                &apos;We built EssentialCalc because financial clarity
                shouldn&apos;t be hidden behind complex spreadsheets or
                bank-favored math.&quot;
              </p>
              <p className="text-gray-600">
                In a world of &apos;No-Cost EMIs&apos; and hidden processing
                fees, we realized that most online tools were designed to sell
                you loans, not help you understand them. We decided to flip the
                script.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-4xl border border-blue-100 rotate-2">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 -rotate-2">
                The Essential Accuracy
              </h3>
              <p className="text-blue-800/80 text-sm leading-relaxed -rotate-2">
                Every tool on this platform uses the same{" "}
                <strong>Reducing Balance Method</strong> used by major financial
                institutions. Whether you&apos;re calculating a ₹50,000
                smartphone EMI or a ₹5Cr Home Loan, the precision remains
                absolute.
              </p>
            </div>
          </div>

          {/* Value Pillars - Icon Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <ShieldCheck size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Privacy First
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                We believe your finances are your business. Our tools process
                everything in your browser; your data never touches our servers.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Blazing Performance
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                No spinners. No waiting. Built with Next.js 15 for a sub-second
                response time, even on slow 3G connections.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <HeartHandshake size={24} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Community Led
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                EssentialCalc is free for everyone. We sustain our work through
                clean, non-intrusive ads so we can keep building for you.
              </p>
            </div>
          </div>

          {/* Final Social Proof / AdSense Content */}
          <div className="mt-20 text-center border-t border-gray-100 pt-12">
            <p className="text-sm text-gray-400 font-medium uppercase tracking-[0.3em] mb-8">
              Empowering 10,000+ Monthly Planners
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
              {/* You can add partner or trust logos here later */}
              <span className="font-black text-2xl italic">TRUSTED</span>
              <span className="font-black text-2xl italic">SECURE</span>
              <span className="font-black text-2xl italic">ACCURATE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
