import type { ReactNode } from "react";
import SuggestedBlogs from "../SuggestedBlogs";

interface BlogLayoutProps {
  title: string;
  author: string;
  publishedDate: string;
  children: ReactNode;
}

export default function BlogLayout({
  title,
  author,
  publishedDate,
  children,
}: BlogLayoutProps) {
  return (
    <main className="max-w-3xl mx-auto px-4 py-2">
      <header className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
          {title}
        </h1>

        <div className="text-sm text-gray-500 flex gap-2">
          <span>By {author}</span>
          <span>•</span>
          <time dateTime={publishedDate}>{publishedDate}</time>
        </div>
      </header>

      {children}

      <footer className="mt-12 border-t border-gray-200 pt-6 text-sm text-gray-500">
        <p>
          <strong>Disclaimer:</strong> These guides are for informational
          purposes. Tax and loan rules in India can change; always verify with a
          certified professional before making financial decisions.
        </p>
      </footer>
      <SuggestedBlogs />
    </main>
  );
}
