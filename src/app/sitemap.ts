import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://essentialcalc.com";

  type ChangeFrequency =
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";

  const routes = [
    // ======================
    // CORE / MAIN PAGES
    // ======================

    // Homepage – strongest signal
    { path: "", priority: 1.0, changeFreq: "weekly" as ChangeFrequency },

    // ======================
    // PRIMARY TOOL HUBS
    // ======================

    // Core money hub
    {
      path: "/emi-calculator",
      priority: 0.8,
      changeFreq: "monthly" as ChangeFrequency,
    },

    // Core salary calculator (ONLY one kept)
    {
      path: "/salary-calculator",
      priority: 0.8,
      changeFreq: "monthly" as ChangeFrequency,
    },

    {
      path: "/pdf-tools",
      priority: 0.7,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/image-tools",
      priority: 0.7,
      changeFreq: "monthly" as ChangeFrequency,
    },

    // ======================
    // EMI SUB-PAGES (VALID – distinct intent)
    // ======================

    {
      path: "/emi-calculator/home-loan",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/emi-calculator/car-loan",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/emi-calculator/product-emi",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },

    // ======================
    // PDF TOOLS (only index if content exists)
    // ======================

    {
      path: "/compress-file",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },

    // ⚠️ These MUST have content sections (FAQ, text, headings)
    // If UI-only → expect Crawled but not indexed
    {
      path: "/pdf-tools/pdf-merge",
      priority: 0.5,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/pdf-tools/image-to-pdf",
      priority: 0.5,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/pdf-tools/ocr",
      priority: 0.5,
      changeFreq: "monthly" as ChangeFrequency,
    },

    // ======================
    // IMAGE TOOLS
    // ======================

    {
      path: "/image-tools/remove-bg",
      priority: 0.5,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/image-tools/self-attest",
      priority: 0.5,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/image-tools/image-optimize",
      priority: 0.5,
      changeFreq: "monthly" as ChangeFrequency,
    },

    // ======================
    // BLOG (ALL INDEXED – GOOD)
    // ======================

    {
      path: "/blog",
      priority: 0.7,
      changeFreq: "weekly" as ChangeFrequency,
    },

    // Blog posts – realistic priority
    {
      path: "/blog/emi-vs-lump-sum-payment",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/blog/tax-regime-2026",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/blog/how-to-file-itr-india",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/blog/how-to-file-gst-return-india",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/blog/how-much-emi-is-safe",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/blog/salary-calculation-india",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/blog/home-loan-emi-tips",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/blog/personal-loan-mistakes",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/blog/nil-itr-return",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/blog/itr-gst-compliance-india",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/blog/itr-for-freelancers",
      priority: 0.6,
      changeFreq: "monthly" as ChangeFrequency,
    },

    // ======================
    // LOW-VALUE / LEGAL
    // ======================

    { path: "/faq", priority: 0.4, changeFreq: "monthly" as ChangeFrequency },
    { path: "/about", priority: 0.3, changeFreq: "monthly" as ChangeFrequency },
    {
      path: "/contact",
      priority: 0.3,
      changeFreq: "monthly" as ChangeFrequency,
    },
    {
      path: "/privacy-policy",
      priority: 0.2,
      changeFreq: "yearly" as ChangeFrequency,
    },
    { path: "/terms", priority: 0.2, changeFreq: "yearly" as ChangeFrequency },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFreq,
    priority: route.priority,
  }));
}
