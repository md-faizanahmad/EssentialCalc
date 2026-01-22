"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/", icon: <HomeIcon /> },
    { name: "EMI Cal", href: "/emi-calculator", icon: <CalcIcon /> },
    { name: "PDF Tool", href: "/pdf/merge", icon: <PdfIcon /> },
    { name: "Salary", href: "/salary-calculator", icon: <SalaryIcon /> },
  ];

  return (
    <>
      {/* --- MOBILE TOP BAR (Brand & Help) --- */}
      <div className="md:hidden sticky top-0 z-50 w-full h-14 bg-white/70 backdrop-blur-md border-b border-gray-100 px-4 flex items-center justify-between">
        <Link href="/" className="text-lg tracking-tight text-gray-900">
          <span className="font-bold">Essential</span>
          <span className="font-light text-gray-500">Calc</span>
        </Link>
        <Link
          href="/about"
          className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
          aria-label="Help"
        >
          <HelpIcon />
        </Link>
      </div>

      {/* --- DESKTOP TOP HEADER --- */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/70 backdrop-blur-md hidden md:block">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl tracking-tight text-gray-900 group">
            <span className="font-bold">Essential</span>
            <span className="font-light text-gray-500 group-hover:text-blue-600 transition-colors">
              Calc
            </span>
          </Link>
          <ul className="flex items-center space-x-8 text-sm font-medium text-gray-600">
            {navLinks.slice(1).map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`hover:text-blue-700 transition-colors ${pathname === link.href ? "text-blue-600" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/about"
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <HelpIcon />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* --- MOBILE BOTTOM NAVIGATION (Instagram Style) --- */}
      <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white/80 backdrop-blur-lg border-t border-gray-200 md:hidden pb-safe">
        <div className="grid h-full grid-cols-4 mx-auto">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="inline-flex flex-col items-center justify-center group"
              >
                <div
                  className={`mb-1 transition-colors ${isActive ? "text-blue-600" : "text-gray-400"}`}
                >
                  {link.icon}
                </div>
                <span
                  className={`text-[10px] font-medium tracking-tight ${isActive ? "text-blue-600" : "text-gray-500"}`}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

// --- ICONS ---

function HelpIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" x2="12.01" y1="17" y2="17" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function CalcIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <line x1="8" x2="16" y1="6" y2="6" />
      <path d="M16 10h.01" />
      <path d="M12 10h.01" />
      <path d="M8 10h.01" />
      <path d="M12 14h.01" />
      <path d="M8 14h.01" />
      <path d="M12 18h.01" />
      <path d="M8 18h.01" />
    </svg>
  );
}

function PdfIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  );
}

function SalaryIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}
