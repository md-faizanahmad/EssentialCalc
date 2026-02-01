import { notFound } from "next/navigation";
import BlogLayout from "../components/BlogLayout";
import BlogSchema from "@/components/BlogSchema"; // Import the Schema component

// Post Components
import HowToFileITRIndia from "../posts/how-to-file-itr-india";
import HowToFileGSTReturnIndia from "../posts/how-to-file-gst-return-india";
import TaxRegime2026 from "../posts/budget-2026";
import HowMuchEMIIsSafe from "../posts/how-much-emi-is-safe";
import EmiVsLumpSum from "../posts/emi-vs-lump-sum-payment";
import SalaryCalculationIndia from "../posts/salary-calculation-india";
import HomeLoanEmiTips from "../posts/home-loan-emi-tips";
import PersonalLoanEmiMistakes from "../posts/personal-loan-mistakes";
import { Metadata } from "next";
import ShareBar from "@/components/ShareBar";
import MobileShareBubble from "@/components/MobileShareBubble";
import ComplianceHub from "../posts/itr-gst-compliance-india";
import ITRForFreelancers from "../posts/itr-for-freelancers";
import NilITRReturn from "../posts/nil-itr-return";
import FaqSchema from "../components/FaqSchema";

export const dynamic = "force-static";

// Updated to include all 8 routes for static generation
export async function generateStaticParams() {
  return [
    { slug: "how-to-file-itr-india" },
    { slug: "how-to-file-gst-return-india" },
    { slug: "itr-gst-compliance-india" },
    { slug: "itr-for-freelancers" },
    { slug: "nil-itr-return" },
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
      title: "How to File ITR Online in India (AY 2026–27) – Step by Step",
      desc: "Learn how to file Income Tax Return (ITR) online in India for AY 2026–27. Covers forms, documents, Nil return, and e-verification.",
    },

    "how-to-file-gst-return-india": {
      title: "How to File GST Return Online in India (GSTR-1 & GSTR-3B)",
      desc: "Simple guide to filing GST return online in India. Covers GSTR-1, GSTR-3B, Nil GST return, due dates, and penalties.",
    },

    "itr-gst-compliance-india": {
      title: "ITR & GST Compliance in India – Complete Filing Guide (2026)",
      desc: "Understand ITR and GST compliance in India. Learn who should file, how to file, Nil returns, and how to avoid penalties.",
    },

    "itr-for-freelancers": {
      title: "ITR for Freelancers in India – How to File & Save Tax (2026)",
      desc: "Step-by-step ITR filing guide for freelancers in India. Covers ITR-3 vs ITR-4, advance tax, expenses, and deductions.",
    },

    "nil-itr-return": {
      title: "Nil ITR Return in India – Who Should File & Benefits Explained",
      desc: "What is Nil ITR? Learn who should file Nil Income Tax Return, benefits, and step-by-step filing process in India.",
    },

    "tax-regime-2026": {
      title: "New Tax Regime 2026 – Tax Slabs & Old vs New Comparison",
      desc: "Compare old vs new tax regime for FY 2025–26. Understand tax slabs, deductions, and which regime saves more tax.",
    },

    "how-much-emi-is-safe": {
      title: "How Much EMI Is Safe for Your Salary in India?",
      desc: "Understand the safe EMI limit based on salary. Learn the 40% rule and debt-to-income ratio for smart borrowing.",
    },

    "emi-vs-lump-sum-payment": {
      title: "EMI vs Lump Sum Payment – Which Option Is Better?",
      desc: "Compare EMI vs lump sum payment. Learn interest cost, cash flow impact, and smarter payment choice.",
    },

    "salary-calculation-india": {
      title: "Salary Calculation in India – Take Home Salary from CTC",
      desc: "Learn how to calculate take-home salary from CTC in India. Includes PF, HRA, tax deductions, and net salary.",
    },

    "home-loan-emi-tips": {
      title: "Home Loan EMI Tips – Reduce Interest & Close Loan Faster",
      desc: "Best home loan EMI tips to reduce interest and loan tenure. Learn about prepayment and refinancing.",
    },

    "personal-loan-mistakes": {
      title: "Personal Loan Mistakes to Avoid – EMI & Interest Traps",
      desc: "Common personal loan mistakes explained. Avoid high interest, hidden charges, and EMI planning errors.",
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

  const faqData: Record<string, { question: string; answer: string }[]> = {
    "how-to-file-itr-india": [
      {
        question: "Is filing ITR mandatory if income is below taxable limit?",
        answer:
          "ITR filing is not mandatory if income is below the basic exemption limit, but filing a Nil ITR is recommended for loans, visas, and refunds.",
      },
      {
        question: "Which ITR form should salaried employees use?",
        answer:
          "Most salaried individuals should use ITR-1 (Sahaj) if income is up to ₹50 lakh and there is no business income.",
      },
      {
        question: "How long does ITR verification take?",
        answer:
          "After Aadhaar OTP verification, ITR is usually processed within a few weeks, depending on the case.",
      },
    ],

    "how-to-file-gst-return-india": [
      {
        question: "Is GST return mandatory even if there are no sales?",
        answer:
          "Yes, a Nil GST return must be filed even if there are no sales or purchases during the period.",
      },
      {
        question: "What happens if GST return is not filed on time?",
        answer:
          "Late filing attracts late fees, interest, and may lead to GSTIN suspension or cancellation.",
      },
      {
        question: "Which GST returns are filed monthly?",
        answer:
          "Most regular taxpayers file GSTR-1 and GSTR-3B on a monthly basis.",
      },
    ],
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

    case "Budget-2026":
      postData = {
        title: "New Budget 2026 Explained: Slabs & Benefits",
        description:
          "Compare the new vs old tax regime to find the best savings for your salary.",
        date: "2026-02-01",
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
        title: "ITR & GST Compliance in India",
        description:
          "Complete compliance guide covering ITR and GST filing, Nil returns, and penalty avoidance.",
        date: "2026-01-15",
        category: "Compliance",
        component: <ComplianceHub />,
      };
      break;

    case "itr-for-freelancers":
      postData = {
        title: "ITR for Freelancers in India",
        description:
          "Step-by-step guide for freelancers to file ITR, choose correct form, and manage advance tax.",
        date: "2026-01-15",
        category: "Income Tax",
        component: <ITRForFreelancers />,
      };
      break;

    case "nil-itr-return":
      postData = {
        title: "Nil ITR Return in India",
        description:
          "Learn who should file Nil ITR, benefits of filing, and step-by-step filing process.",
        date: "2026-01-15",
        category: "Income Tax",
        component: <NilITRReturn />,
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
      {faqData[slug] && <FaqSchema faqs={faqData[slug]} />}
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
