import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "EssentialCalc | Free Financial Calculators, Budget Updates & Smart Tools",
  description:
    "EssentialCalc offers free financial calculators, budget updates, finance guides, and smart PDF & image tools. Calculate EMI, loan, salary, and income tax using fast, privacy-first online tools built for India.",
  alternates: {
    canonical: "https://essentialcalc.com/",
  },
  openGraph: {
    title:
      "EssentialCalc | Financial Calculators, Budget Updates & Free Tools",
    description:
      "Free EMI, loan, salary, and income tax calculators with budget updates, finance guides, and privacy-first PDF & image tools. Built for speed and clarity.",
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
