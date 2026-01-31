import blogData from "@/data/blog.json";
import BlogIndexClient from "./components/BlogIndexClient";

export const metadata = {
  title: "Tax & Salary Guides for India (2026) | EssentialCalc",
  description:
    "Clear, practical guides on income tax filing, GST returns, and salary planning for Indian users. Updated for 2026.",
};

export default function BlogIndexPage() {
  return (
    <main className="max-w-4xl mx-auto py-6 px-4">
      {/* Header */}
      <header className="mb-2 border-b border-gray-100 pb-8">
        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
          Tax, Loan, Salary & EMI Guides for India
        </h1>
        <p className="text-gray-600">
          Practical, easy-to-follow guides on income tax, GST compliance, loan
          planning, and salary management for individuals and businesses in
          India.
        </p>
      </header>

      {/* Hub description */}
      <section className="mb-8 text-gray-700">
        <p>
          This blog acts as a knowledge hub covering Income Tax Return (ITR),
          GST compliance, loans, EMIs, and salary planning. Articles are written
          using real-world scenarios and updated as per current rules.
        </p>
      </section>

      {/* 🔑 Client-side Search & Filter */}
      <BlogIndexClient posts={blogData} />

      {/* Trust footer */}
      <footer className="mt-20 border-t border-gray-200 pt-6 text-sm text-gray-500">
        <p>
          Disclaimer: The content published on this blog is for informational
          purposes only and does not constitute financial, tax, or legal advice.
        </p>
      </footer>
    </main>
  );
}
