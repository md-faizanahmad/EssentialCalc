import Hero from "@/components/layouts/Hero";
import ToolLinks from "@/components/layouts/TookLinks";
import ToolGrid from "@/components/layouts/ToolGrid";
import AdSlot from "@/components/layouts/AdSlot"; // Placeholder for Ads
import LatestNews from "@/components/layouts/LatestNews";
import HomeStory from "@/components/layouts/HomeStory";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* 1. HERO: Grabs attention & defines primary CTA */}
      <Hero />

      {/* 2. TOOL GRID: Direct access to the most popular tools */}
      <ToolGrid />

      {/* 3. AD SLOT: High-visibility placement below initial tools */}
      <AdSlot id="home-top" />

      {/* 4. TOOL LINKS: Categorized links for better SEO crawling and navigation */}
      <ToolLinks />
      <LatestNews />
      <HomeStory />
      {/* 5. HOMEPAGE SEO ARTICLE (CRITICAL FOR ADSENSE)
          Purpose: Provides long-form text content that tells Google what the site is about.
          Reviewers hate empty sites; this provides 'Value-Add' content. */}

      {/* 6. AD SLOT: Footer ad for additional revenue */}
      <AdSlot id="home-footer" />
    </div>
  );
}
