import Link from "next/link";
import blogData from "@/data/blog.json";

export default function LatestNews() {
  // Take only the latest 3-4 posts for the homepage news section
  const latestPosts = blogData.slice(0, 4);

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
              Market Trends & Utility Updates
            </p>
          </div>
          <Link
            href="/blog"
            className="hidden md:block text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800 transition-colors"
          >
            View All News &rarr;
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-0 border-t border-gray-100">
          {latestPosts.map((post, index) => (
            <article
              key={post.slug}
              className={`group py-8 ${index !== latestPosts.length - 1 ? "border-b border-gray-100" : ""}`}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col md:flex-row gap-6"
              >
                {/* Date/Category Column */}
                <div className="md:w-32 shrink-0 flex md:flex-col items-center md:items-start justify-between md:justify-start gap-2">
                  <span className="text-[10px] font-black text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    {post.date}
                  </span>
                </div>

                {/* Content Column */}
                <div className="grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-3 leading-tight decoration-blue-600/30 group-hover:underline decoration-2 underline-offset-4">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 md:line-clamp-none max-w-3xl">
                    {post.excerpt}
                  </p>

                  {/* "Read More" link only visible on mobile or as a hint */}
                  <div className="mt-4 flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-blue-600 transition-colors">
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

        {/* Mobile View All Link */}
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
