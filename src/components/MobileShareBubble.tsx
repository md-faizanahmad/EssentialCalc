"use client";

import { useState } from "react";

interface MobileShareProps {
  title: string;
  slug: string;
}

export default function MobileShareBubble({ title, slug }: MobileShareProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const url = `https://essentialcalc.com/blog/${slug}`;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-30 left-6 z-100 md:hidden">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-4 items-end animate-in fade-in slide-in-from-bottom-4 duration-300">
          <a
            href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
            className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            aria-label="Share on WhatsApp"
          >
            <span className="text-[10px] font-black uppercase">WA</span>
          </a>
          <button
            onClick={copyLink}
            className="w-10 h-10 bg-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
          >
            <span className="text-[10px] font-black uppercase">
              {copied ? "OK" : "Link"}
            </span>
          </button>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 bg-black text-white border-2 border-black flex flex-col items-center justify-center shadow-[6px_6px_0px_0px_rgba(255,255,255,1),6px_6px_0px_2px_rgba(0,0,0,1)] active:scale-95 transition-all"
      >
        {isOpen ? (
          <span className="text-xl font-black">×</span>
        ) : (
          <>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <span className="text-[8px] font-black uppercase mt-1 tracking-tighter">
              Share
            </span>
          </>
        )}
      </button>
    </div>
  );
}
