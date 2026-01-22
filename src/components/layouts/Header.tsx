"use client";

import {
  Newspaper,
  Home,
  Calculator,
  FileText,
  IndianRupee,
  HelpCircle,
  Download,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}
export default function Header() {
  const pathname = usePathname();
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={20} /> },
    {
      name: "EMI Cal",
      href: "/emi-calculator",
      icon: <Calculator size={20} />,
    },
    { name: "PDF Tool", href: "/pdf-tools", icon: <FileText size={20} /> },
    { name: "Image Tool", href: "/image-tools", icon: <FileText size={20} /> },
    {
      name: "Salary",
      href: "/salary-calculator",
      icon: <IndianRupee size={20} />,
    },
    { name: "Blog", href: "/blog", icon: <Newspaper size={20} /> },
  ];
  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);
  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setDeferredPrompt(null);
  };
  return (
    <>
      {/* --- MOBILE TOP BAR --- */}
      <div className="md:hidden sticky top-0 z-50 w-full h-14 bg-white/80 backdrop-blur-md border-b border-gray-100 px-4 flex items-center justify-between">
        <Link href="/" className="text-lg tracking-tight text-gray-900">
          <span className="font-bold">Essential</span>
          <span className="font-light text-gray-500">Calc</span>
        </Link>

        <div className="flex items-center gap-2">
          {/* PWA INSTALL BUTTON - Only shows if supported/available */}
          {deferredPrompt && (
            <button
              onClick={handleInstallClick}
              className="p-2 text-blue-600 animate-pulse active:scale-90 transition-transform"
              aria-label="Install App"
            >
              <Download size={22} strokeWidth={2.5} />
            </button>
          )}

          <Link
            href="/about"
            className={`p-2 transition-colors ${pathname === "/about" ? "text-blue-600" : "text-gray-400"}`}
            aria-label="About"
          >
            <HelpCircle size={22} />
          </Link>
        </div>
      </div>

      {/* --- DESKTOP TOP HEADER --- */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md hidden md:block">
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
                  className={`hover:text-blue-700 transition-colors ${pathname.startsWith(link.href) ? "text-blue-600 font-bold" : ""}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/about"
                className={`transition-colors ${pathname === "/about" ? "text-blue-600" : "hover:text-blue-600"}`}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* --- MOBILE BOTTOM NAVIGATION --- */}
      <nav className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white/90 backdrop-blur-lg border-t border-gray-100 md:hidden pb-safe">
        <div className="grid h-full grid-cols-6 mx-auto">
          {" "}
          {/* Changed to grid-cols-5 */}
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className="inline-flex flex-col items-center justify-center group"
              >
                <div
                  className={`mb-1 transition-all duration-300 ${isActive ? "text-blue-600 scale-110" : "text-gray-400"}`}
                >
                  {link.icon}
                </div>
                <span
                  className={`text-[9px] font-bold uppercase tracking-tighter ${isActive ? "text-blue-600" : "text-gray-400"}`}
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
