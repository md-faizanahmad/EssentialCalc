export const metadata = { title: "About Us" };

export default function About() {
  return (
    <article className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        About EssentialCalc
      </h1>
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          <span className="font-semibold text-gray-900">EssentialCalc</span> is
          a dedicated platform providing high-performance, easy-to-use online
          calculators and digital utility tools.
        </p>
        <p>
          Our mission is to simplify complex calculations—whether it&apos;s
          financial planning with our <strong>EMI Calculator</strong> or career
          planning with our <strong>Salary Breakup tools</strong>. We believe in
          tools that are fast, mobile-first, and free of unnecessary clutter.
        </p>
        <h2 className="text-xl font-bold text-gray-900">Why Use Our Tools?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Privacy First:</strong> Most of our tools process data right
            in your browser.
          </li>
          <li>
            <strong>Speed:</strong> Built on Next.js for near-instant loading
            times.
          </li>
          <li>
            <strong>Accuracy:</strong> Verified formulas to ensure reliable
            results every time.
          </li>
        </ul>
      </div>
    </article>
  );
}
