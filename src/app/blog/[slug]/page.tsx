import { notFound } from "next/navigation";
import BlogLayout from "../components/BlogLayout";

import HowToFileITRIndia from "../posts/how-to-file-itr-india";
import HowToFileGSTReturnIndia from "../posts/how-to-file-gst-return-india";
import TaxRegime2026 from "../posts/tax-regime-2026";
import HowMuchEMIIsSafe from "../posts/how-much-emi-is-safe";
import EmiVsLumpSum from "../posts/emi-vs-lump-sum-payment";
import SalaryCalculationIndia from "../posts/salary-calculation-india";
import HomeLoanEmiTips from "../posts/home-loan-emi-tips";
import PersonalLoanEmiMistakes from "../posts/personal-loan-mistakes";

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

    case "how-much-emi-is-safe":
      return (
        <BlogLayout
          title="How-Much-Emi-is-Safe"
          author="EssentialCalc Team"
          publishedDate="2026-01-15"
        >
          <HowMuchEMIIsSafe />
        </BlogLayout>
      );
    case "emi-vs-lump-sum-payment":
      return (
        <BlogLayout
          title="Emi-vs-Lump-Sum-Payment"
          author="EssentialCalc Team"
          publishedDate="2026-01-15"
        >
          <EmiVsLumpSum />
        </BlogLayout>
      );

    case "salary-calculation-india":
      return (
        <BlogLayout
          title="Salary-Calculation-India"
          author="EssentialCalc Team"
          publishedDate="2026-01-15"
        >
          <SalaryCalculationIndia />
        </BlogLayout>
      );

    case "home-loan-emi-tips":
      return (
        <BlogLayout
          title="Home-Loan-Emi-Tips"
          author="EssentialCalc Team"
          publishedDate="2026-01-15"
        >
          <HomeLoanEmiTips />
        </BlogLayout>
      );

    case "personal-loan-mistakes":
      return (
        <BlogLayout
          title="Personal-Loan-Mistakes"
          author="EssentialCalc Team"
          publishedDate="2026-01-15"
        >
          <PersonalLoanEmiMistakes />
        </BlogLayout>
      );
    default:
      notFound();
  }
}
