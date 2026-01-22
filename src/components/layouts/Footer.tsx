import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200/50 bg-white/70 backdrop-blur-md mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Mission */}
          <div className="md:col-span-1 space-y-3">
            <Link href="/" className="text-lg tracking-tight text-gray-900">
              <span className="font-bold">Essential</span>
              <span className="font-light text-gray-500">Calc</span>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Fast, secure, and accurate online utility tools. Built for
              performance and privacy.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
              Financial
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/emi-calculator" className="hover:text-blue-600">
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/salary-calculator" className="hover:text-blue-600">
                  Salary Calculator
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
              Utilities
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/pdf/merge" className="hover:text-blue-600">
                  PDF Tools
                </Link>
              </li>
              <li>
                <Link href="/image-tool" className="hover:text-blue-600">
                  Image Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest">
              Support
            </h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <Link href="/about" className="hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-600">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
          <p>© {currentYear} EssentialCalc — Smart Online Tools</p>
          <p className="mt-2 md:mt-0">
            Calculations for Indicative Purposes Only
          </p>
        </div>
      </div>
    </footer>
  );
}
