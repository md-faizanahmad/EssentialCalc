import Link from "next/link";
import blogData from "@/data/blog.json";

export const metadata = {
  title: "Tax, Loan, Salary & EMI Guides for India (2026) | EssentialCalc Blog",
  description:
    "Step-by-step guides on income tax filing, GST returns, loan EMI calculations, and salary planning for India. Updated for 2026.",
};

// group posts by category (SEO silo)
const groupedPosts = blogData.reduce(
  (acc, post) => {
    acc[post.category] = acc[post.category] || [];
    acc[post.category].push(post);
    return acc;
  },
  {} as Record<string, typeof blogData>,
);

export default function BlogIndex() {
  return (
    <main className="max-w-4xl mx-auto py-6 px-4">
      {/* Header */}
      <header className="mb-8 border-b border-gray-100 pb-8">
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
          This blog acts as a knowledge hub covering important financial topics
          such as Income Tax Return (ITR) filing, GST returns, home and personal
          loan EMI calculations, and salary planning. All articles are written
          with real-world use cases and updated as per the latest rules.
        </p>
      </section>

      {/* Category-wise listing */}
      {Object.entries(groupedPosts).map(([category, posts]) => (
        <section key={category} className="mb-16">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            {category} Guides
          </h2>

          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                    <span className="text-xs font-bold text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded">
                      {post.category}
                    </span>

                    <time
                      className="text-xs text-gray-400 font-medium"
                      dateTime={post.date}
                    >
                      {post.date}
                    </time>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <span className="text-sm font-bold text-gray-900 group-hover:underline">
                    Read Article →
                  </span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* Trust footer */}
      <footer className="mt-20 border-t border-gray-200 pt-6 text-sm text-gray-500">
        <p>
          Disclaimer: The content published on this blog is for informational
          purposes only and does not constitute financial, tax, or legal advice.
          Always consult a qualified professional for personalized guidance.
        </p>
      </footer>
    </main>
  );
}
