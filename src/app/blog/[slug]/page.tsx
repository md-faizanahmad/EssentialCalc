import { notFound } from "next/navigation";
import BlogLayout from "../components/BlogLayout";
import BlogSchema from "@/components/BlogSchema"; // Import the Schema component

// Post Components
import HowToFileITRIndia from "../posts/how-to-file-itr-india";
import HowToFileGSTReturnIndia from "../posts/how-to-file-gst-return-india";
import TaxRegime2026 from "../posts/tax-regime-2026";
import HowMuchEMIIsSafe from "../posts/how-much-emi-is-safe";
import EmiVsLumpSum from "../posts/emi-vs-lump-sum-payment";
import SalaryCalculationIndia from "../posts/salary-calculation-india";
import HomeLoanEmiTips from "../posts/home-loan-emi-tips";
import PersonalLoanEmiMistakes from "../posts/personal-loan-mistakes";
import { Metadata } from "next";
import ShareBar from "@/components/ShareBar";
import MobileShareBubble from "@/components/MobileShareBubble";
import ComplianceHub from "../posts/itr-gst-compliance-india";

export const dynamic = "force-static";

// Updated to include all 8 routes for static generation
export async function generateStaticParams() {
  return [
    { slug: "how-to-file-itr-india" },
    { slug: "how-to-file-gst-return-india" },
    { slug: "tax-regime-2026" },
    { slug: "how-much-emi-is-safe" },
    { slug: "emi-vs-lump-sum-payment" },
    { slug: "salary-calculation-india" },
    { slug: "home-loan-emi-tips" },
    { slug: "personal-loan-mistakes" },
  ];
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const baseUrl = "https://essentialcalc.com";

  // Map slugs to SEO titles and descriptions (Keep these synced with your switch logic)
  const seoData: Record<string, { title: string; desc: string }> = {
    "how-to-file-itr-india": {
      title: "How to File ITR Online in India (AY 2026–27)",
      desc: "Step-by-step guide to filing Income Tax Return (ITR) online in India for AY 2026–27. Covers forms, documents, and e-verification.",
    },

    "how-to-file-gst-return-india": {
      title: "How to File GST Return in India (2026)",
      desc: "Simple guide to filing GST returns online in India. Learn about GSTR-1, GSTR-3B, due dates, and 2026 GST compliance rules.",
    },

    "tax-regime-2026": {
      title: "New Tax Regime 2026: Slabs & Old vs New Comparison",
      desc: "Detailed explanation of the New Tax Regime for FY 2025–26. Compare tax slabs, deductions, and choose between old vs new regime.",
    },

    "how-much-emi-is-safe": {
      title: "How Much EMI Is Safe for Your Salary? (India)",
      desc: "Learn how much EMI is safe based on your salary using the 40% rule. Understand debt-to-income ratio and smart borrowing limits.",
    },

    "emi-vs-lump-sum-payment": {
      title: "EMI vs Lump Sum Payment: Which Is Better?",
      desc: "Compare EMI vs lump sum payment using real examples. Understand interest cost, opportunity cost, and inflation impact.",
    },

    "salary-calculation-india": {
      title: "Salary Calculation in India: Net Take-Home from CTC",
      desc: "Learn how to calculate take-home salary from CTC in India. Covers PF, HRA, professional tax, and common deductions.",
    },

    "home-loan-emi-tips": {
      title: "Home Loan EMI Tips to Reduce Interest (2026)",
      desc: "Practical home loan EMI tips to reduce interest and loan tenure. Learn about prepayment, refinancing, and step-up EMIs.",
    },

    "personal-loan-mistakes": {
      title: "Personal Loan Mistakes to Avoid (EMI Guide)",
      desc: "Common personal loan mistakes explained. Learn about hidden charges, flat vs reducing interest, and EMI planning.",
    },
  };

  const current = seoData[slug] || {
    title: "Financial Guide | EssentialCalc",
    desc: "Expert financial calculators and guides for India.",
  };

  return {
    title: current.title,
    description: current.desc,
    openGraph: {
      title: current.title,
      description: current.desc,
      url: `${baseUrl}/blog/${slug}`,
      siteName: "EssentialCalc",
      locale: "en_IN",
      type: "article",
      // Reference a dynamic OG image or a static one
      images: [
        {
          url: `${baseUrl}/og-images/${slug}.png`,
          width: 1200,
          height: 630,
          alt: current.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: current.title,
      description: current.desc,
      images: [`${baseUrl}/og-images/${slug}.png`],
    },
  };
}
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Configuration for Schema and Layout
  let postData = {
    title: "",
    description: "",
    date: "2026-01-15",
    category: "Finance",
    component: <></>,
  };

  switch (slug) {
    case "how-to-file-itr-india":
      postData = {
        title: "How to File Income Tax Return (ITR) in India",
        description:
          "Complete 2026 guide to filing ITR online, documents required, and deadlines.",
        date: "2026-01-10",
        category: "Income Tax",
        component: <HowToFileITRIndia />,
      };
      break;

    case "how-to-file-gst-return-india":
      postData = {
        title: "How to File GST Return in India - Complete GSTR Guide",
        description:
          "Learn how to file GSTR-1 and GSTR-3B online with the latest 2026 rules.",
        date: "2026-01-12",
        category: "GST",
        component: <HowToFileGSTReturnIndia />,
      };
      break;

    case "tax-regime-2026":
      postData = {
        title: "New Tax Regime 2026 Explained: Slabs & Benefits",
        description:
          "Compare the new vs old tax regime to find the best savings for your salary.",
        date: "2026-01-15",
        category: "Income Tax",
        component: <TaxRegime2026 />,
      };
      break;

    case "how-much-emi-is-safe":
      postData = {
        title: "How Much EMI is Safe for Your Salary?",
        description:
          "Calculate your debt-to-income ratio and learn the 40% rule for loan safety.",
        date: "2026-01-15",
        category: "Loans",
        component: <HowMuchEMIIsSafe />,
      };
      break;

    case "emi-vs-lump-sum-payment":
      postData = {
        title: "EMI vs. Lump Sum Payment: Which is Better?",
        description:
          "Understand opportunity cost and interest savings when choosing between EMI and upfront payment.",
        date: "2026-01-15",
        category: "Financial Planning",
        component: <EmiVsLumpSum />,
      };
      break;

    case "salary-calculation-india":
      postData = {
        title: "Salary Calculation India: Gross vs. Take-Home Pay",
        description:
          "Decode your salary breakup including HRA, PF, and Professional Tax in India.",
        date: "2026-01-15",
        category: "Salary",
        component: <SalaryCalculationIndia />,
      };
      break;

    case "home-loan-emi-tips":
      postData = {
        title: "5 Home Loan EMI Tips to Save Lakhs in Interest",
        description:
          "Proven strategies like step-up EMIs and prepayments to clear your home loan faster.",
        date: "2026-01-15",
        category: "Home Loan",
        component: <HomeLoanEmiTips />,
      };
      break;

    case "personal-loan-mistakes":
      postData = {
        title: "Critical Personal Loan EMI Mistakes to Avoid",
        description:
          "Avoid high-interest traps and hidden charges in personal loan agreements.",
        date: "2026-01-15",
        category: "Loans",
        component: <PersonalLoanEmiMistakes />,
      };
      break;
    case "itr-gst-compliance-india":
      postData = {
        title: "How to File GST and ITR Return in India - Complete GSTR Guide",
        description:
          "Avoid high-interest traps and hidden charges in personal loan agreements.",
        date: "2026-01-15",
        category: "Loans",
        component: <ComplianceHub />,
      };
      break;

    default:
      notFound();
  }

  return (
    <>
      <BlogSchema
        post={{
          title: postData.title,
          description: postData.description,
          slug: slug,
          date: postData.date,
          category: postData.category,
          // You can add unique FAQs here for each case if needed
        }}
      />
      <BlogLayout
        title={postData.title}
        author="EssentialCalc Team"
        publishedDate={postData.date}
      >
        {postData.component}
      </BlogLayout>
      <ShareBar title={postData.title} slug={slug} />
      <MobileShareBubble title={postData.title} slug={slug} />
    </>
  );
}
