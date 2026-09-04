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

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "EMI",
    href: "/emi-calculator",
    icon: Calculator,
  },
  {
    name: "PDF",
    href: "/pdf-tools",
    icon: FileText,
  },
  {
    name: "Image",
    href: "/image-tools",
    icon: FileText,
  },
  {
    name: "Salary",
    href: "/salary-calculator",
    icon: IndianRupee,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: Newspaper,
  },
];

export default function Header() {
  const pathname = usePathname();

  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();

      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    await deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* MOBILE TOP BAR */}
      <div className="sticky top-0 z-50 flex h-14 w-full items-center justify-between border-b border-gray-100 bg-white/85 px-4 backdrop-blur-md md:hidden">
        <Link
          href="/"
          className="text-lg tracking-tight text-sky-600"
          aria-label="EssentialCalc Home"
        >
          <span className="font-bold">Essential</span>
          <span className="font-light text-gray-500">Calc</span>
        </Link>

        <div className="flex items-center gap-1">
          {deferredPrompt && (
            <button
              onClick={handleInstallClick}
              className="
                flex h-10 w-10 items-center justify-center
                text-sky-600
                transition-transform
                active:scale-90
              "
              aria-label="Install EssentialCalc"
            >
              <Download size={21} strokeWidth={2.4} />
            </button>
          )}

          <Link
            href="/about"
            className={`
              flex h-10 w-10 items-center justify-center
              transition-colors
              ${
                pathname === "/about"
                  ? "text-sky-600"
                  : "text-gray-400 hover:text-sky-600"
              }
            `}
            aria-label="About EssentialCalc"
          >
            <HelpCircle size={21} strokeWidth={2.2} />
          </Link>
        </div>
      </div>

      {/* DESKTOP HEADER */}
      <header className="sticky top-0 z-50 hidden w-full border-b border-gray-200/50 bg-white/85 backdrop-blur-md md:block">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link
            href="/"
            className="group text-xl tracking-tight text-sky-600"
            aria-label="EssentialCalc Home"
          >
            <span className="font-bold">Essential</span>
            <span className="font-light text-gray-500 transition-colors group-hover:text-sky-600">
              Calc
            </span>
          </Link>

          <ul className="flex items-center gap-8 text-sm font-medium">
            {navLinks.slice(1).map((link) => {
              const active = isActive(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      relative py-2 transition-colors
                      ${
                        active
                          ? "font-semibold text-sky-600"
                          : "text-gray-600 hover:text-sky-600"
                      }
                    `}
                  >
                    {link.name}

                    {active && (
                      <span className="absolute -bottom-0.5 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-sky-600" />
                    )}
                  </Link>
                </li>
              );
            })}

            <li>
              <Link
                href="/about"
                className={`
                  transition-colors
                  ${
                    pathname === "/about"
                      ? "font-semibold text-sky-600"
                      : "text-gray-600 hover:text-sky-600"
                  }
                `}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* MOBILE BOTTOM NAVIGATION */}
      <nav
        className="
          fixed inset-x-0 bottom-0 z-50
          h-[68px]
          border-t border-gray-200/70
          bg-white/92
          backdrop-blur-xl
          md:hidden
          pb-[env(safe-area-inset-bottom)]
        "
        aria-label="Main navigation"
      >
        <div className="mx-auto grid h-full max-w-lg grid-cols-6 px-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`
                  relative flex min-w-0 flex-col items-center justify-center
                  transition-colors duration-200
                  active:scale-95
                  ${
                    active
                      ? "text-sky-600"
                      : "text-gray-400 hover:text-gray-600"
                  }
                `}
              >
                {/* Active indicator */}
                {active && (
                  <span
                    className="
                      absolute top-1
                      h-1 w-7
                      rounded-full
                      bg-sky-600
                    "
                  />
                )}

                {/* Icon */}
                <span
                  className={`
                    flex h-8 w-10 items-center justify-center
                    rounded-xl
                    transition-all duration-200
                    ${active ? "bg-sky-50" : "bg-transparent"}
                  `}
                >
                  <Icon size={20} strokeWidth={active ? 2.5 : 2} />
                </span>

                {/* Label */}
                <span
                  className={`
                    mt-0.5 truncate text-[10px] leading-none
                    transition-all duration-200
                    ${
                      active
                        ? "font-semibold text-sky-600"
                        : "font-medium text-gray-400"
                    }
                  `}
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
