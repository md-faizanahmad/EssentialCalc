import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Breadcrumbs from "@/components/layouts/Breadcrumbs";
import ScrollToTop from "@/components/layouts/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://essentialcalc.com"),

  title: {
    default: "EssentialCalc – Financial Calculators & Smart Utility Tools",
    template: "%s | EssentialCalc",
  },

  description:
    "EssentialCalc provides financial calculators and smart utility tools for India. Calculate EMI, salary, loans, and use browser-based PDF and image tools.",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://essentialcalc.com",
  },

  other: {
    "google-adsense-account": "ca-pub-5188894530340921",
  },

  manifest: "/manifest.json",

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EssentialCalc",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://essentialcalc.com",
    siteName: "EssentialCalc",
    title: "EssentialCalc – Financial Calculators & Smart Utility Tools",
    description:
      "Free financial calculators and private utility tools for India. EMI, salary, loan calculators plus PDF and image tools.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EssentialCalc – Financial Calculators & Utility Tools",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <div className="flex flex-col min-h-screen relative bg-grid">
          <Header />
          <Breadcrumbs />
          <main className="mx-auto px-4 py-8 pb-20 md:pb-8">{children}</main>
          <ScrollToTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
