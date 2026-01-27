import Link from "next/link";
import blogData from "@/data/blog.json";

export const metadata = {
  title: "Financial Planning & Smart Utility Blog",
  description:
    "Expert guides on income tax, GST, loans, EMIs, and personal finance for India.",
};

/* ---------------------------------------------
   Flatten articles across categories
---------------------------------------------- */
const allPosts = blogData.categories.flatMap((category) =>
  category.articles.map((article) => ({
    ...article,
    category: category.category,
  }))
);

export default function BlogIndex() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Header */}
      <header className="mb-12 border-b border-gray-100 pb-8">
        <h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
          Financial Insights
        </h1>
        <p className="text-gray-600">
          Practical guides on taxes, loans, GST, and personal finance in India.
        </p>
      </header>

      {/* Blog list */}
      <div className="space-y-12">
        {allPosts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-xs font-bold text-sky-600 uppercase bg-sky-50 px-2 py-1 rounded">
                  {post.category}
                </span>

                <span className="text-xs text-gray-400 font-medium">
                  {new Date(post.last_updated).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors mb-3">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-500 leading-relaxed mb-4">
                {post.excerpt}
              </p>

              {/* CTA */}
              <div className="text-sm font-bold text-gray-900 flex items-center group-hover:underline">
                Read Article
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}