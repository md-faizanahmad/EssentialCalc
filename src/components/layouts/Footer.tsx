import Link from "next/link";

// 1. Define strict Types for the Footer
interface FooterSubLink {
  name: string;
  href: string;
  highlight?: boolean;
}

interface FooterSection {
  title: string;
  href?: string; // Optional: Only for sections that link to a hub
  links: FooterSubLink[];
}

// 2. Apply the Record type to the constant
const FOOTER_LINKS: Record<string, FooterSection> = {
  calculators: {
    title: "Calculators",
    href: "/emi-calculator",
    links: [
      { name: "Home Loan EMI", href: "/emi-calculator/home-loan" },
      { name: "Car Loan EMI", href: "/emi-calculator/car-loan" },
      { name: "Product EMI", href: "/emi-calculator/product-emi" },
      { name: "Salary Breakup", href: "/salary-calculator/salary-breakup" },
      { name: "Loan Eligibility", href: "/salary-calculator/salary-based" },
    ],
  },
  utilities: {
    title: "Utilities",
    links: [
      { name: "PDF Merger", href: "/pdf/merge" },
      { name: "Image Optimizer", href: "/image-tool" },
      { name: "Financial Blog", href: "/blog", highlight: true },
      { name: "How it Works", href: "/how-it-works" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200/50 bg-white/70 backdrop-blur-md mt-auto">
      <div className="container mx-auto px-4 py-12 pb-24 md:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="space-y-3">
            <Link
              href="/"
              className="text-lg tracking-tight text-gray-900 group"
            >
              <span className="font-bold">Essential</span>
              <span className="font-light text-gray-500 group-hover:text-blue-600 transition-colors">
                Calc
              </span>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Providing precision-engineered financial calculators and secure
              utility tools. Data privacy and accuracy are our top priorities.
            </p>
          </div>

          {/* Dynamic Link Sections */}
          {Object.entries(FOOTER_LINKS).map(([key, section]) => (
            <div key={key} className="space-y-4">
              <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
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
              <ul className="space-y-2 text-sm text-gray-500">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`transition-colors hover:text-blue-600 ${
                        link.highlight ? "font-medium text-blue-600/80" : ""
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

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest text-center md:text-left">
          <p>© {currentYear} EssentialCalc — Smart Online Tools</p>
          <p className="mt-2 md:mt-0 max-w-75 md:max-w-none">
            Calculations are for indicative purposes only. Always verify with
            your bank.
          </p>
        </div>
      </div>
    </footer>
  );
}
