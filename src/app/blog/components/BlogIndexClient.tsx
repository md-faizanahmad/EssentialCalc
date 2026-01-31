"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
};

export default function BlogIndexClient({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(posts.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [posts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    const q = query.toLowerCase();

    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q);

      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [query, activeCategory, posts]);

  // Group filtered posts by category
  const groupedPosts = useMemo(() => {
    return filteredPosts.reduce(
      (acc, post) => {
        acc[post.category] = acc[post.category] || [];
        acc[post.category].push(post);
        return acc;
      },
      {} as Record<string, BlogPost[]>,
    );
  }, [filteredPosts]);

  return (
    <>
      {/* Search */}
      <div className="mb-6">
        <input
          type="search"
          placeholder="Search guides (ITR, GST, Nil return...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border-2 border-black px-4 py-3 text-sm outline-none focus:bg-gray-50"
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-bold uppercase border-2 transition
              ${
                activeCategory === cat
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-600 hover:border-black"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog listing */}
      {Object.keys(groupedPosts).length === 0 && (
        <p className="text-gray-500 text-sm">
          No articles found. Try another keyword.
        </p>
      )}

      {Object.entries(groupedPosts).map(([category, items]) => (
        <section key={category} className="mb-16">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
            {category} Guides
          </h2>

          <div className="space-y-12">
            {items.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <time
                    className="text-xs text-gray-400 font-medium"
                    dateTime={post.date}
                  >
                    {post.date}
                  </time>

                  <h3 className="text-2xl font-bold text-gray-900 group-hover:underline mt-2 mb-3">
                    {post.title}
                  </h3>

                  <p className="text-gray-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <span className="text-sm font-bold">Read Article →</span>
                </Link>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
