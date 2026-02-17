import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://essentialcalc.com";

  const routes = [
    // ======================
    // CORE / MAIN PAGES
    // ======================

    // Homepage – strongest signal
    { path: "" },

    // ======================
    // PRIMARY TOOL HUBS
    // ======================

    // Core money hub
    {
      path: "/emi-calculator",
    },

    // Core salary calculator (ONLY one kept)
    {
      path: "/salary-calculator",
    },

    {
      path: "/pdf-tools",
    },
    {
      path: "/image-tools",
    },
    {
      path: "/income-tax-guide",
    },
    {
      path: "/gst-guide",
    },
    {
      path: "/loan-guide",
    },
    // ======================
    // EMI SUB-PAGES (VALID – distinct intent)
    // ======================

    {
      path: "/emi-calculator/home-loan",
    },
    {
      path: "/emi-calculator/car-loan",
    },
    {
      path: "/emi-calculator/product-emi",
    },

    // ======================
    // PDF TOOLS (only index if content exists)
    // ======================

    {
      path: "/compress-file",
    },

    // ⚠️ These MUST have content sections (FAQ, text, headings)
    // If UI-only → expect Crawled but not indexed
    {
      path: "/pdf-tools/pdf-merge",
    },
    {
      path: "/pdf-tools/image-to-pdf",
    },
    {
      path: "/pdf-tools/ocr",
    },

    // ======================
    // IMAGE TOOLS
    // ======================

    {
      path: "/image-tools/remove-bg",
    },
    {
      path: "/image-tools/self-attest",
    },
    {
      path: "/image-tools/image-optimize",
    },

    // ======================
    // BLOG (ALL INDEXED – GOOD)
    // ======================

    {
      path: "/blog",
    },

    // Blog posts – realistic priority
    {
      path: "/blog/emi-vs-lump-sum-payment",
    },
    {
      path: "/blog/tax-regime-2026",
    },
    {
      path: "/blog/how-to-file-itr-india",
    },
    {
      path: "/blog/how-to-file-gst-return-india",
    },
    {
      path: "/blog/how-much-emi-is-safe",
    },
    {
      path: "/blog/salary-calculation-india",
    },
    {
      path: "/blog/home-loan-emi-tips",
    },
    {
      path: "/blog/personal-loan-mistakes",
    },
    {
      path: "/blog/nil-itr-return",
    },
    {
      path: "/blog/itr-gst-compliance-india",
    },
    {
      path: "/blog/itr-for-freelancers",
    },

    // ======================
    // LOW-VALUE / LEGAL
    // ======================

    { path: "/faq" },
    { path: "/about" },
    {
      path: "/contact",
    },
    {
      path: "/privacy-policy",
    },
    { path: "/terms", priority: 0.2 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
  }));
}
