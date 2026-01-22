import Hero from "@/components/layouts/Hero";
import ToolGrid from "@/components/layouts/ToolGrid";
import PdfToolLinks from "@/components/tools/PdfToolLinks";
import ImageToolLinks from "@/components/tools/ImageToolLinks";
import LatestNews from "@/components/layouts/LatestNews";
import HomeStory from "@/components/layouts/HomeStory";
import AdSlot from "@/components/layouts/AdSlot";
import ToolLinks from "@/components/layouts/TookLinks";

export default function Home() {
  return (
    <main className="space-y-16">
      {/* 1. HERO: Clear purpose & trust */}
      <Hero />

      {/* 2. CORE TOOLS: Immediate user value */}
      <ToolGrid />

      {/* 3. HOMEPAGE INTRO CONTENT (CRITICAL FOR SEO & ADSENSE) */}
      <section aria-labelledby="about-essentialcalc">
        <HomeStory />
      </section>

      {/* 4. FIRST AD (AFTER CONTENT — SAFE PLACEMENT) */}
      <AdSlot id="home-mid" />

      {/* 5. INTERNAL LINKING FOR SEO */}
      <section aria-labelledby="calculator-links">
        <ToolLinks />
      </section>

      <section aria-labelledby="pdf-tools">
        <PdfToolLinks />
      </section>

      <section aria-labelledby="image-tools">
        <ImageToolLinks />
      </section>

      {/* 6. FRESH CONTENT SIGNAL */}
      <LatestNews />

      {/* 7. FOOTER AD (LOW RISK) */}
      <AdSlot id="home-footer" />
    </main>
  );
}
