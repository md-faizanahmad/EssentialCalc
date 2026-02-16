import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EssentialCalc – Financial Calculators & Smart Online Tools",
  description:
    "EssentialCalc offers free financial calculators, PDF tools, and image utilities for India. Calculate EMI, salary, loans, and use private browser-based tools.",
  alternates: {
    canonical: "https://essentialcalc.com/",
  },
  openGraph: {
    title: "EssentialCalc – Financial Calculators & Smart Online Tools",
    description:
      "Free EMI, loan, salary calculators plus private PDF and image tools. Built for speed, privacy, and mobile users in India.",
    url: "https://essentialcalc.com/",
    siteName: "EssentialCalc",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
      <Hero />
      <ToolGrid />

      <AdSlot id="home-mid" />

      <section aria-labelledby="calculator-links">
        <ToolLinks />
      </section>

      <section aria-labelledby="pdf-tools">
        <PdfToolLinks />
      </section>

      <section aria-labelledby="image-tools">
        <ImageToolLinks />
      </section>

      <LatestNews />

      <section aria-labelledby="about-essentialcalc">
        <HomeStory />
      </section>

      <AdSlot id="home-footer" />
    </main>
  );
}
