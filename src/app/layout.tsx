import type { Metadata, Viewport } from "next"; // Added Viewport
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Breadcrumbs from "@/components/layouts/Breadcrumbs";
// import Script from "next/script";
import ScrollToTop from "@/components/layouts/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

// Theme color and mobile viewport settings
export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevents auto-zoom on inputs in mobile
};

export const metadata: Metadata = {
  other: {
    "google-adsense-account": "ca-pub-5188894530340921",
  },
  title: {
    default: "EssentialCalc — Financial Calculators & Smart Online PDF Tools",
    template: "%s | EssentialCalc",
  },
  description:
    "Free, high-accuracy financial tools. Calculate Home Loan EMI, Car Loan, Salary take-home, and use our PDF/Image utilities. 100% Secure and Mobile-Friendly.",
  keywords: [
    "EMI Calculator",
    "Home Loan Calculator",
    "Car Loan Calculator",
    "Salary Calculator India",
    "CTC to In-hand",
    "Personal Loan EMI",
    "PDF Merger",
    "Image Compressor",
    "Online Utility Tools",
    "GST Calculator",
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EssentialCalc",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://essentialcalc.com",
    siteName: "EssentialCalc",
    images: [{ url: "/og-image.png" }], // Essential for social media sharing
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* AdSense Script */}
        {/* <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5188894530340921"
          crossOrigin="anonymous"
        />{" "}
        <Script id="adsense-init" strategy="afterInteractive">
          {`
            (adsbygoogle = window.adsbygoogle || []).push({});
          `}
        </Script> */}
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <div className="flex flex-col min-h-screen relative bg-grid">
          <Header />
          <Breadcrumbs />
          <main className="grow container mx-auto px-4 py-8 pb-24 md:pb-8">
            {children}
          </main>
          <ScrollToTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
