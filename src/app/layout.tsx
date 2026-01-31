import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Breadcrumbs from "@/components/layouts/Breadcrumbs";
import ScrollToTop from "@/components/layouts/ScrollToTop";
import Script from "next/script";

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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NR3QH493');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {" "}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NR3QH493"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
