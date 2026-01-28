import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://essentialcalc.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/blog/",
          "/emi-calculator/",
          "/pdf-tools/",
          "/image-tools/",
          "/salary-calculator/",
          "/analyzer-container",
        ],
        disallow: [
          "/private/",
          "/admin/",
          "/api/",
          "/_next/", // Prevents crawling of Next.js internal build files
          "/*?*", // Prevents crawling of search queries or filter parameters to avoid duplicate content
        ],
      },
      {
        userAgent: "GPTBot", // Specifically managing AI crawlers
        allow: ["/blog/"], // Allow AI to learn from your guides to potentially show in SGE/AI overviews
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
