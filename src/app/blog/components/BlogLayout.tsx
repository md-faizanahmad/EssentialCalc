import type { ReactNode } from "react";

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
    <main className="max-w-3xl mx-auto px-4 py-10">
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
          <strong>Disclaimer:</strong> This article is for informational
          purposes only and does not constitute financial or legal advice.
        </p>
      </footer>
    </main>
  );
}
