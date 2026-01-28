import Link from "next/link";
import blogData from "@/data/blog.json";

interface SuggestedBlogsProps {
  currentSlug?: string;
  maxDisplay?: number;
}

export default function SuggestedBlogs({
  currentSlug,
  maxDisplay = 3,
}: SuggestedBlogsProps) {
  const suggestions = blogData
    .filter((post) => post.slug !== currentSlug)
    .slice(0, maxDisplay);

  if (suggestions.length === 0) return null;

  return (
    <section className="mt-20 border-t-4 border-black pt-12 pb-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">
            Suggested Reading
          </h2>
          <div className="hidden md:block h-px flex-1 ml-6 bg-gray-100" />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suggestions.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col border-2 border-black p-5 md:p-6 transition-all hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col h-full"
              >
                {/* Meta Row */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-2 py-0.5">
                    {post.category}
                  </span>
                  <time className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {post.date}
                  </time>
                </div>

                {/* Content Area */}
                <div className="grow">
                  <h3 className="text-xl md:text-2xl font-black tracking-tighter leading-tight mb-3 group-hover:underline decoration-2 underline-offset-4">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read Guide
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 max-w-sm mx-auto">
          <Link
            href="/blog"
            className="flex items-center justify-center gap-3 border-2 border-black py-4 px-8 font-black uppercase text-xs tracking-[0.2em] hover:bg-black hover:text-white transition-all group"
          >
            All 2026 Guides
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
