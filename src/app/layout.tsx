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
  // maximumScale: 1, // Crucial: Prevents annoying auto-zoom on mobile forms
  viewportFit: "cover", // Ensures app content uses the full screen on notched iPhones
};

export const metadata: Metadata = {
  metadataBase: new URL("https://essentialcalc.com"),
  other: {
    "google-adsense-account": "ca-pub-5188894530340921",
  },
  title: {
    default: "EssentialCalc — Private Financial & Smart PDF Tools",
    template: "%s | EssentialCalc",
  },
  description:
    "100% Private, browser-based tools. Calculate Home Loan EMI, Salary breakup, or Merge/Compress PDFs locally. No data leaves your device.",
  keywords: [
    "EMI Calculator India",
    "pdf compressor",
    "Home Loan EMI",
    "Salary Calculator Bihar",
    "PDF Merger Offline",
    "Image Compressor 50KB",
    "Privacy First Tools",
    "Self Attest",
    "Time Management",
    "Image remove BG free",
    "Free Tool",
    "image crop",
  ],
  manifest: "/manifest.json", // Links your manifest.ts
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "EssentialCalc",
    // Added Apple Touch Icon for iOS home screen
    startupImage: ["/apple-touch-icon.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png", // Ensure this 180x180px icon exists in /public
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://essentialcalc.com",
    siteName: "EssentialCalc",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EssentialCalc - Smart Private Tools",
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
          {/* Added pb-20 to main to ensure bottom-nav doesn't overlap content on mobile */}
          <main className=" mx-auto px-4 py-8 pb-20 md:pb-8">{children}</main>
          <ScrollToTop />
          <Footer />
        </div>
      </body>
    </html>
  );
}
