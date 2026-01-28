import Head from "next/head";

interface SchemaProps {
  post: {
    title: string;
    description: string;
    slug: string;
    date: string;
    category: string;
    faqs?: { q: string; a: string }[];
  };
}

export default function BlogSchema({ post }: SchemaProps) {
  const baseUrl = "https://essentialcalc.com";
  const url = `${baseUrl}/blog/${post.slug}`;

  // 1. Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle", // Better for "How-to" / Calculator guides
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: new Date().toISOString().split("T")[0],
    author: {
      "@type": "Organization",
      name: "EssentialCalc Finance Team",
    },
    publisher: {
      "@type": "Organization",
      name: "EssentialCalc",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  // 2. FAQ Schema (if FAQs exist)
  const faqSchema = post.faqs
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
      }
    : null;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </Head>
  );
}
