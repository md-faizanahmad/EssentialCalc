import Link from "next/link";

// 1. Strict Types for the Hub-based Footer
interface FooterSubLink {
  name: string;
  href: string;
  highlight?: boolean;
}

interface FooterSection {
  title: string;
  href?: string; // Links to the main Hub/Category page
  links: FooterSubLink[];
}

// 2. Organized Data for AdSense & SEO
const FOOTER_LINKS: Record<string, FooterSection> = {
  calculators: {
    title: "Calculators",
    href: "/emi-calculator",
    links: [
      { name: "Home Loan EMI", href: "/emi-calculator/home-loan" },
      { name: "Car Loan EMI", href: "/emi-calculator/car-loan" },
      { name: "Salary Breakup", href: "/salary-calculator/salary-breakup" },
      { name: "Loan Eligibility", href: "/salary-calculator/salary-based" },
    ],
  },
  pdfTools: {
    title: "PDF Tools",
    href: "/pdf-tools",
    links: [
      { name: "QuickMerge PDF", href: "/pdf/pdf-merge" },
      { name: "Compress File", href: "/compress-file" },
      { name: "PDF to Image", href: "/pdf/to-image" },
      { name: "OCR Text Extractor", href: "/pdf/ocr" },
    ],
  },
  imageTools: {
    title: "Image Tools",
    href: "/image-tools",
    links: [
      { name: "BG Remover", href: "/image-tools/remove-bg" },
      { name: "Self-Attestation", href: "/image-tools/self-attest" },
      { name: "Smart Cropper", href: "/image-tools/crop" },
      { name: "Image Compress", href: "/compress-file" },
    ],
  },
  legal: {
    title: "Resources",
    links: [
      { name: "Financial Blog", href: "/blog", highlight: true },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Faq", href: "/faq" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-100 bg-white mt-auto pt-16 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        {/* Top Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {Object.entries(FOOTER_LINKS).map(([key, section]) => (
            <div key={key} className="space-y-5">
              <h3 className="text-xs font-black text-gray-900 uppercase tracking-widest">
                {section.href ? (
                  <Link
                    href={section.href}
                    className="hover:text-blue-600 transition-colors"
                  >
                    {section.title}
                  </Link>
                ) : (
                  section.title
                )}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`text-sm transition-colors hover:text-blue-600 ${
                        link.highlight
                          ? "font-bold text-blue-600 underline underline-offset-4"
                          : "text-gray-500 font-medium"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle Section: Mission & Branding */}
        <div className="py-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <Link
              href="/"
              className="text-xl tracking-tighter text-gray-900 font-black uppercase"
            >
              Essential<span className="text-blue-600">Calc.</span>
            </Link>
            <p className="text-xs text-gray-400 font-medium max-w-sm">
              Helping India calculate better. Professional financial and media
              utilities built for privacy and speed. 100% Client-side.
            </p>
          </div>

          <div className="flex gap-4">
            {/* Add Social Icons or Certifications here later */}
            <div className="px-3 py-1 rounded-full border border-green-100 bg-green-50 text-[10px] font-bold text-green-600 uppercase tracking-widest">
              Safe & Secure
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Disclaimer */}
        <div className="pt-8 border-t border-gray-50 text-center md:text-left space-y-4 md:space-y-0 md:flex md:justify-between">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            © {currentYear}{" "}
            {/* <a href="mailto:md.faizan.ahmad.web@gmail.com">Md Faizan Ahmad</a>{" "} */}
            &middot; EssentialCalc India
          </p>
          <p className="text-[10px] text-gray-400 font-medium max-w-md mx-auto md:mx-0">
            Disclaimer: Our tools are for informational purposes. Verify
            financial data with official bank sources before making decisions.
          </p>
        </div>
      </div>
    </footer>
  );
}
