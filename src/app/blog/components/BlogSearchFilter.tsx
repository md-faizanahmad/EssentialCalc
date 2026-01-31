"use client";

import { useMemo, useState } from "react";

type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
};

export default function BlogSearchFilter({
  posts,
  onFilter,
}: {
  posts: BlogPostMeta[];
  onFilter: (filtered: BlogPostMeta[]) => void;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  // Extract unique categories
  const categories = useMemo(() => {
    const unique = new Set(posts.map((p) => p.category));
    return ["All", ...Array.from(unique)];
  }, [posts]);

  // Filter logic
  useMemo(() => {
    const q = query.toLowerCase();

    const filtered = posts.filter((post) => {
      const matchesQuery =
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q);

      const matchesCategory = category === "All" || post.category === category;

      return matchesQuery && matchesCategory;
    });

    onFilter(filtered);
  }, [query, category, posts, onFilter]);

  return (
    <div className="mb-10 space-y-4">
      {/* Search Input */}
      <input
        type="search"
        placeholder="Search guides (ITR, GST, EMI...)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border-2 border-black px-4 py-3 text-sm outline-none focus:bg-gray-50"
      />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 text-xs font-bold uppercase border-2 transition
              ${
                category === cat
                  ? "bg-black text-white border-black"
                  : "border-gray-300 text-gray-600 hover:border-black"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
