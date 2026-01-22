import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://essentialcalc.com";

  const routes = [
    "",
    "/emi-calculator",
    "/emi-calculator/home-loan",
    "/emi-calculator/car-loan",
    "/emi-calculator/product-emi",
    "/emi-calculator/salary-calculator",
    "/loan-calculator/salary-based",
    "/how-it-works",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
