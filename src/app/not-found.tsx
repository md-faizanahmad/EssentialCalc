import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-grid">
      <div className="max-w-md w-full text-center">
        {/* Visual 404 Header */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-black text-gray-100 select-none">404</h1>
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-900">
            Page Not Found
          </p>
        </div>

        {/* Content */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Oops! This tool seems to be missing.
        </h2>
        <p className="text-gray-500 mb-10 leading-relaxed">
          The page you are looking for might have been moved or doesn&apos;t
          exist. Try one of our popular calculators instead.
        </p>

        {/* Suggested Actions */}
        <div className="grid grid-cols-1 gap-3">
          <Link
            href="/emi-calculator"
            className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-sm"
          >
            Go to EMI Calculator
          </Link>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/"
              className="py-3 px-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all"
            >
              Home
            </Link>
            <Link
              href="/salary-calculator"
              className="py-3 px-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all"
            >
              Salary Calc
            </Link>
          </div>
        </div>

        {/* Help Link */}
        <p className="mt-12 text-sm text-gray-400">
          Need help?{" "}
          <Link href="/contact" className="text-blue-500 hover:underline">
            Contact Support
          </Link>
        </p>
      </div>
    </div>
  );
}
