"use client";

import { useState } from "react";

interface ShareBarProps {
  title: string;
  slug: string;
}

export default function ShareBar({ title, slug }: ShareBarProps) {
  const [copied, setCopied] = useState(false);
  const baseUrl = "https://essentialcalc.com";
  const url = `${baseUrl}/blog/${slug}`;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-8 border-y-2 border-black my-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-1">
            Share This Guide
          </h4>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            Help others avoid debt traps
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {/* WhatsApp */}
          <a
            href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black px-4 py-2 text-[10px] font-black uppercase hover:bg-green-500 hover:text-white transition-colors"
          >
            WhatsApp
          </a>

          {/* Facebook */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-black px-4 py-2 text-[10px] font-black uppercase hover:bg-blue-600 hover:text-white transition-colors"
          >
            Facebook
          </a>

          {/* Instagram (Instructions Note) */}
          <button
            onClick={copyToClipboard}
            className="border-2 border-black px-4 py-2 text-[10px] font-black uppercase hover:bg-linear-to-tr hover:from-yellow-400 hover:to-purple-600 hover:text-white transition-all"
          >
            Instagram
          </button>

          {/* Copy Link */}
          <button
            onClick={copyToClipboard}
            className="border-2 border-black px-4 py-2 text-[10px] font-black uppercase bg-black text-white hover:bg-gray-800 transition-colors"
          >
            {copied ? "Link Copied!" : "Copy Link"}
          </button>
        </div>
      </div>

      {/* Instagram Tip - Mobile First UX */}
      <p className="mt-4 text-[9px] text-gray-400 italic uppercase tracking-tighter">
        * Instagram does not allow direct link sharing. Use &quot;Copy
        Link&quot; to paste in your Stories or Bio.
      </p>
    </div>
  );
}
