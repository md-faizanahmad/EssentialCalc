import GuideToolLinks from "@/components/layouts/GuideToolLink";
import LatestNews from "@/components/layouts/LatestNews";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Complete GST Guide in India (2026) – Registration, Returns, Filing Process & Examples | EssentialCalc",
  description:
    "Comprehensive GST guide covering GST registration, types of GST, GST returns, filing process, due dates, penalties, and practical calculation examples for businesses and freelancers in India.",
  alternates: {
    canonical: "https://essentialcalc.com/gst-guide",
  },
};

export default function GSTGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">
        Complete GST Guide in India (2026)
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        This guide explains everything about Goods and Services Tax (GST) in
        India — who must register, GST return filing process, GST calculation
        examples, penalties, and compliance rules for businesses and
        freelancers.
      </p>

      {/* WHAT IS GST */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What is GST?</h2>
        <p className="mb-4">
          GST (Goods and Services Tax) is an indirect tax applied on the supply
          of goods and services in India. It replaced multiple indirect taxes
          like VAT, service tax, and excise duty.
        </p>
        <p>
          GST is destination-based and charged at every stage of value addition,
          with input tax credit available to businesses.
        </p>
      </section>

      {/* TYPES OF GST */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Types of GST</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>CGST</strong> – Central GST (collected by central
            government)
          </li>
          <li>
            <strong>SGST</strong> – State GST (collected by state government)
          </li>
          <li>
            <strong>IGST</strong> – Integrated GST (for inter-state
            transactions)
          </li>
          <li>
            <strong>UTGST</strong> – Union Territory GST
          </li>
        </ul>
      </section>

      {/* WHO MUST REGISTER */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Who Must Register Under GST?
        </h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            Businesses with turnover above ₹40 lakh (₹20 lakh for services in
            many states)
          </li>
          <li>E-commerce sellers</li>
          <li>Inter-state suppliers</li>
          <li>Freelancers providing taxable services</li>
        </ul>
      </section>

      {/* GST CALCULATION EXAMPLE */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          GST Calculation Example (Practical Breakdown)
        </h2>

        <p className="mb-4">Let’s understand GST with a real example.</p>

        <div className="bg-gray-50 border rounded-xl p-6 mb-6">
          <h3 className="font-semibold mb-2">Example:</h3>
          <p>Product Price (before GST): ₹1,000</p>
          <p>GST Rate: 18%</p>

          <ul className="list-disc pl-6 mt-4 space-y-1 text-sm">
            <li>GST Amount = ₹1,000 × 18% = ₹180</li>
            <li>Total Invoice Value = ₹1,180</li>
            <li>If intra-state → CGST ₹90 + SGST ₹90</li>
            <li>If inter-state → IGST ₹180</li>
          </ul>
        </div>

        <p>
          Businesses can claim Input Tax Credit (ITC) on GST paid for purchases.
        </p>
      </section>

      {/* INPUT TAX CREDIT */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          What is Input Tax Credit (ITC)?
        </h2>

        <p className="mb-4">
          Input Tax Credit allows businesses to reduce the GST paid on purchases
          from the GST collected on sales.
        </p>

        <div className="bg-gray-50 p-6 rounded-xl border">
          <h3 className="font-semibold mb-2">Example:</h3>
          <p>GST collected from customer: ₹18,000</p>
          <p>GST paid on purchases: ₹10,000</p>
          <p className="mt-3 font-semibold">Net GST payable = ₹8,000</p>
        </div>
      </section>

      {/* GST RETURNS */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Types of GST Returns</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>GSTR-1</strong> – Details of outward supplies
          </li>
          <li>
            <strong>GSTR-3B</strong> – Monthly summary return
          </li>
          <li>
            <strong>GSTR-9</strong> – Annual return
          </li>
        </ul>

        <p className="mt-4">
          Detailed filing steps:{" "}
          <Link
            href="/blog/how-to-file-gst-return-india"
            className="text-blue-600 font-semibold"
          >
            How to File GST Return in India
          </Link>
        </p>
      </section>

      {/* DUE DATES */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">GST Return Due Dates</h2>

        <ul className="list-disc pl-6 space-y-2">
          <li>GSTR-1 – 11th of following month</li>
          <li>GSTR-3B – 20th of following month</li>
          <li>Annual Return – 31 December</li>
        </ul>
      </section>

      {/* PENALTIES */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          GST Penalties for Late Filing
        </h2>

        <p>
          Late filing attracts ₹50 per day (₹25 CGST + ₹25 SGST) and ₹20 per day
          for nil returns, subject to maximum limits.
        </p>
      </section>

      {/* FAQ SECTION */}
      <section className="border-t pt-10 mt-10">
        <h2 className="text-2xl font-semibold mb-6">
          Frequently Asked Questions (GST)
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold">Is GST mandatory for freelancers?</h3>
            <p>
              GST registration is mandatory if annual turnover exceeds
              prescribed limits or if providing inter-state services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              What happens if GST return is not filed?
            </h3>
            <p>
              Late fees, interest, and suspension of GST registration may apply.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Can I claim GST refund?</h3>
            <p>
              Yes, excess input tax credit or export-related credits can be
              refunded.
            </p>
          </div>
        </div>
      </section>
      <GuideToolLinks />
      <LatestNews />
      {/* JSON-LD FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Is GST mandatory for freelancers?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "GST registration is mandatory if annual turnover exceeds prescribed limits or if inter-state services are provided.",
                },
              },
              {
                "@type": "Question",
                name: "What is Input Tax Credit?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Input Tax Credit allows businesses to reduce GST paid on purchases from GST collected on sales.",
                },
              },
              {
                "@type": "Question",
                name: "What is the GST late filing penalty?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Late filing attracts ₹50 per day (₹25 CGST + ₹25 SGST) and ₹20 per day for nil returns, subject to maximum limits.",
                },
              },
            ],
          }),
        }}
      />
    </article>
  );
}
