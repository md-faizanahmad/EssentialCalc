import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://essentialcalc.com";

  // Define a type for change frequency to ensure type safety
  type ChangeFrequency =
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";

  // Define routes with specific priorities for better SEO crawling
  const routes = [
    // Main Hubs
    { path: "", priority: 1.0, changeFreq: "daily" as ChangeFrequency },
    {
      path: "/emi-calculator",
      priority: 0.9,
      changeFreq: "weekly" as ChangeFrequency,
    },
    {
      path: "/pdf-tools",
      priority: 0.9,
      changeFreq: "weekly" as ChangeFrequency,
    },
    {
      path: "/image-tools",
      priority: 0.9,
      changeFreq: "weekly" as ChangeFrequency,
    },

    // Financial Tools
    {
      path: "/emi-calculator/home-loan",
      priority: 0.8,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/emi-calculator/car-loan",
      priority: 0.8,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/emi-calculator/product-emi",
      priority: 0.8,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/salary-calculator/salary-breakup",
      priority: 0.8,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/salary-calculator/salary-based",
      priority: 0.8,
      changeFreq: "monthly" as ChangeFrequency,
    },

    // PDF Tools
    {
      path: "/compress-file",
      priority: 0.8,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/pdf-tools/pdf-merge",
      priority: 0.7,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/pdf-tools/image-to-pdf",
      priority: 0.7,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/pdf-tools/ocr",
      priority: 0.7,
      changeFreq: "monthly" as ChangeFrequency,
    },

    // Image Tools
    {
      path: "/image-tools/remove-bg",
      priority: 0.8,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/image-tools/self-attest",
      priority: 0.8,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/image-tools/crop",
      priority: 0.7,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/image-tools/optimize",
      priority: 0.7,
      changeFreq: "monthly" as ChangeFrequency,
    },

    // Content & Legal
    { path: "/blog", priority: 0.6, changeFreq: "weekly" as ChangeFrequency },
    { path: "/faq", priority: 0.6, changeFreq: "monthly" as ChangeFrequency },
    { path: "/about", priority: 0.5, changeFreq: "monthly" as ChangeFrequency },
    {
      path: "/contact",
      priority: 0.5,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/privacy-policy",
      priority: 0.3,
      changeFreq: "yearly" as ChangeFrequency,
    },
    { path: "/terms", priority: 0.3, changeFreq: "yearly" as ChangeFrequency },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}
