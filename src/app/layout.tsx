import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Breadcrumbs from "@/components/layouts/Breadcrumbs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "EssentialCalc — Calculators & Smart Online Tools",
    template: "%s | EssentialCalc",
  },
  description:
    "Free, accurate online calculators for EMI, Salary, Loans, and more. Simple, fast, and mobile-friendly utility tools.",
  keywords: [
    "EMI Calculator",
    "Salary Calculator",
    "Loan Calculator",
    "Online Tools",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://essentialcalc.com", // Replace with your domain
    siteName: "EssentialCalc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <Breadcrumbs />
          <main className="grow container mx-auto px-4 py-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
