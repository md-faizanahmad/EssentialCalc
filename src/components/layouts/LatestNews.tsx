import Link from "next/link";
import blogData from "@/data/blog.json";

/* -------------------------------------------
   Flatten + sort posts by latest date
---------------------------------------------- */
const latestPosts = blogData.categories
  .flatMap((category) =>
    category.articles.map((article) => ({
      ...article,
      category: category.category,
    }))
  )
  .sort(
    (a, b) =>
      new Date(b.last_updated).getTime() -
      new Date(a.last_updated).getTime()
  )
  .slice(0, 4);

export default function LatestNews() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* News Header */}
        <div className="flex items-end justify-between border-b-2 border-gray-900 pb-4 mb-8">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter text-gray-900">
              Financial News
            </h2>
            <p className="text-sm text-gray-500 font-medium">
              Tax, Loans, GST & Personal Finance Updates
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden md:block text-xs font-bold uppercase tracking-widest text-sky-600 hover:text-sky-800 transition-colors"
          >
            View All Articles →
          </Link>
        </div>

        {/* News List */}
        <div className="grid grid-cols-1 gap-0 border-t border-gray-100">
          {latestPosts.map((post, index) => (
            <article
              key={post.slug}
              className={`group py-8 ${
                index !== latestPosts.length - 1
                  ? "border-b border-gray-100"
                  : ""
              }`}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col md:flex-row gap-6"
              >
                {/* Meta Column */}
                <div className="md:w-32 shrink-0 flex md:flex-col items-center md:items-start gap-2">
                  <span className="text-[10px] font-black text-sky-600 uppercase bg-sky-50 px-2 py-1 rounded">
                    {post.category}
                  </span>

                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    {new Date(post.last_updated).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Content */}
                <div className="grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-sky-700 transition-colors mb-3 leading-tight group-hover:underline decoration-2 underline-offset-4">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 md:line-clamp-none max-w-3xl">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-sky-600 transition-colors">
                    Full Report
                    <svg
                      className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Mobile CTA */}
        <Link
          href="/blog"
          className="md:hidden block text-center mt-8 py-4 bg-gray-50 rounded-xl text-xs font-bold uppercase tracking-widest text-gray-600"
        >
          See All Articles
        </Link>
      </div>
    </section>
  );
}