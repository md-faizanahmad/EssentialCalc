import { notFound } from "next/navigation";
import BlogLayout from "../components/BlogLayout";

import HowToFileITRIndia from "../posts/how-to-file-itr-india";
import HowToFileGSTReturnIndia from "../posts/how-to-file-gst-return-india";
import TaxRegime2026 from "../posts/tax-regime-2026";

export const dynamic = "force-static";

export async function generateStaticParams() {
  return [
    { slug: "how-to-file-itr-india" },
    { slug: "how-to-file-gst-return-india" },
    { slug: "tax-regime-2026" },
  ];
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  switch (slug) {
    case "how-to-file-itr-india":
      return (
        <BlogLayout
          title="How to File Income Tax Return (ITR) in India"
          author="EssentialCalc Team"
          publishedDate="2026-01-10"
        >
          <HowToFileITRIndia />
        </BlogLayout>
      );

    case "how-to-file-gst-return-india":
      return (
        <BlogLayout
          title="How to File GST Return in India"
          author="EssentialCalc Team"
          publishedDate="2026-01-12"
        >
          <HowToFileGSTReturnIndia />
        </BlogLayout>
      );

    case "tax-regime-2026":
      return (
        <BlogLayout
          title="New Tax Regime 2026 Explained"
          author="EssentialCalc Team"
          publishedDate="2026-01-15"
        >
          <TaxRegime2026 />
        </BlogLayout>
      );

    default:
      notFound();
  }
}
