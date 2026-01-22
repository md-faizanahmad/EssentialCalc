"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((item) => item !== "");

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full border-b border-gray-50 mt-4 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <ol className="flex items-center whitespace-nowrap overflow-x-auto scrollbar-hide py-3 space-x-2 text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest">
          {/* Home Icon/Link */}
          <li className="shrink-0">
            <Link
              href="/"
              className="hover:text-blue-600 transition-colors flex items-center"
            >
              <svg
                className="w-3.5 h-3.5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
          </li>

          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;
            const label = segment.replace(/-/g, " ");

            return (
              <li key={href} className="flex items-center space-x-2 shrink-0">
                <svg
                  className="w-3 h-3 text-gray-300"
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

                {isLast ? (
                  <span
                    className="text-blue-600 font-bold truncate max-w-30 md:max-w-none"
                    aria-current="page"
                  >
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
