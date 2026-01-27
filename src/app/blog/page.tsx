import Link from "next/link";
import blogData from "@/data/blog.json";

export const metadata = {
title: "Financial Planning & Smart Utility Blog",
description:
"Guides, tips, and news on home loans, tax planning, and salary management.",
};

export default function BlogIndex() {
return (
<div className="max-w-4xl mx-auto py-12 px-4">
<header className="mb-12 border-b border-gray-100 pb-8">
<h1 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">
Financial Insights
</h1>
<p className="text-gray-600">
Expert guides to help you master your money and tools.
</p>
</header>

<div className="space-y-12">  
    {blogData.map((post) => (  
      <article key={post.slug} className="group">  
        <Link href={`/blog/${post.slug}`}>  
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">  
            <span className="text-xs font-bold text-blue-600 uppercase bg-blue-50 px-2 py-1 rounded">  
              {post.category}  
            </span>  
            <span className="text-xs text-gray-400 font-medium">  
              {post.date}  
            </span>  
          </div>  
          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">  
            {post.title}  
          </h2>  
          <p className="text-gray-500 leading-relaxed mb-4">  
            {post.excerpt}  
          </p>  
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