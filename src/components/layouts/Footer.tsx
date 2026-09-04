import Link from "next/link";

// Strict footer types
interface FooterSubLink {
  name: string;
  href: string;
  highlight?: boolean;
}

interface FooterSection {
  title: string;
  href?: string;
  links: FooterSubLink[];
}

// Footer navigation data
const FOOTER_LINKS: Record<string, FooterSection> = {
  calculators: {
    title: "Financial Calculators",
    href: "/emi-calculator",
    links: [
      {
        name: "Home Loan EMI Calculator",
        href: "/emi-calculator/home-loan",
      },
      {
        name: "Car Loan EMI Calculator",
        href: "/emi-calculator/car-loan",
      },
      {
        name: "Salary Calculator",
        href: "/salary-calculator/salary-breakup",
      },
      {
        name: "Loan Eligibility Calculator",
        href: "/salary-calculator/salary-based",
      },
    ],
  },

  pdfTools: {
    title: "PDF Tools",
    href: "/pdf-tools",
    links: [
      { name: "Merge PDF", href: "/pdf-tools/pdf-merge" },
      { name: "Compress PDF", href: "/compress-file" },
      { name: "PDF to Image", href: "/pdf-tools/image-to-image" },
      { name: "OCR Text Extractor", href: "/pdf-tools/ocr" },
    ],
  },

  imageTools: {
    title: "Image Tools",
    href: "/image-tools",
    links: [
      {
        name: "Background Remover",
        href: "/image-tools/remove-bg",
      },
      {
        name: "Self Attestation Tool",
        href: "/image-tools/self-attest",
      },
      {
        name: "Image Crop & Optimize",
        href: "/image-tools/image-optimize",
      },
      {
        name: "Image Compressor",
        href: "/compress-file",
      },
    ],
  },

  finance: {
    title: "Finance & Budget",
    links: [
      {
        name: "Budget 2026 Live Updates",
        href: "/budget-2026-live",
        highlight: true,
      },
      {
        name: "Income Tax Guides",
        href: "/blog",
      },
      {
        name: "Tax & Salary Articles",
        href: "/blog",
      },
      {
        name: "Finance FAQs",
        href: "/faq",
      },
    ],
  },

  resources: {
    title: "Resources",
    links: [
      {
        name: "Financial Blog",
        href: "/blog",
        highlight: true,
      },
      {
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        name: "Terms of Service",
        href: "/terms",
      },
      {
        name: "Contact Us",
        href: "/contact",
      },
    ],
  },

  guides: {
    title: "Guides",
    links: [
      {
        name: "Income Tax Guide",
        href: "/income-tax-guide",
        highlight: true,
      },
      {
        name: "GST Guide",
        href: "/gst-guide",
      },
      {
        name: "Loan Guide",
        href: "/loan-guide",
      },
    ],
  },
};

const FOOTER_META = {
  brand: {
    name: "EssentialCalc",
    tagline:
      "Free financial calculators, finance guides, budget updates, and practical PDF & image tools for everyday use in India.",
  },

  developer: {
    label: "Developed by",
    linkedin: "mdfaizanahmad",
    linkedinUrl: "https://www.linkedin.com/in/mdfaizanahmad/",
  },

  badge: "Safe & Secure",

  disclaimer:
    "Our tools are for informational purposes. Verify financial data with official bank sources before making decisions.",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full border-t border-gray-100 bg-white pb-24 pt-14 md:pb-10">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <div
          className="
            mb-12
            grid grid-cols-2 gap-x-8 gap-y-10
            sm:grid-cols-3
            lg:grid-cols-6
          "
        >
          {Object.entries(FOOTER_LINKS).map(([key, section]) => (
            <div key={key} className="min-w-0">
              <h3 className="mb-5 text-xs font-black uppercase tracking-widest text-gray-900">
                {section.href ? (
                  <Link
                    href={section.href}
                    className="transition-colors hover:text-sky-600"
                  >
                    {section.title}
                  </Link>
                ) : (
                  section.title
                )}
              </h3>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className={`
                        text-sm leading-relaxed transition-colors
                        ${
                          link.highlight
                            ? "font-semibold text-sky-600 hover:text-sky-700"
                            : "font-medium text-gray-500 hover:text-sky-600"
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Branding / Mission */}
        <div
          className="
            flex flex-col gap-6
            border-t border-gray-100
            py-8
            md:flex-row md:items-center md:justify-between
          "
        >
          <div className="max-w-lg">
            <Link
              href="/"
              className="inline-block text-xl font-black tracking-tight text-gray-900"
            >
              Essential<span className="text-sky-600">Calc.</span>
            </Link>

            <p className="mt-2 max-w-md text-xs font-medium leading-relaxed text-gray-400">
              {FOOTER_META.brand.tagline}
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            {/* Developer Link */}
            <a
              href={FOOTER_META.developer.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-xs font-medium text-gray-400
                transition-colors hover:text-sky-600
              "
            >
              {FOOTER_META.developer.label} ·{" "}
              <span className="font-semibold text-gray-500 hover:text-sky-600">
                {FOOTER_META.developer.linkedin}
              </span>
            </a>

            {/* Security Badge */}
            {/* <span
              className="
                inline-flex items-center
                rounded-full
                border border-green-100
                bg-green-50
                px-3 py-1
                text-[10px] font-bold uppercase tracking-widest
                text-green-600
              "
            >
              {FOOTER_META.badge}
            </span> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="
            flex flex-col gap-4
            border-t border-gray-100
            pt-6
            md:flex-row md:items-center md:justify-between
          "
        >
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            © {currentYear} · EssentialCalc India
          </p>

          <p className="max-w-xl text-[10px] font-medium leading-relaxed text-gray-400 md:text-right">
            Disclaimer: {FOOTER_META.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
