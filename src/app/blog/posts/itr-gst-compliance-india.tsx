import { Link } from "lucide-react";

function ComplianceCard({
  title,
  desc,
  link,
}: {
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="border border-black p-6 hover:bg-gray-50 transition"
    >
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </a>
  );
}

function PortalLink({ label, href }: { label: string; href: string }) {
  return (
    <div className="mt-8">
      <a
        href={href}
        target="_blank"
        className="inline-block bg-black text-white px-6 py-3 text-xs font-bold uppercase"
      >
        {label}
      </a>
    </div>
  );
}

export default function ComplianceHub() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {/* ================= HERO ================= */}
        <section className="border-b-4 border-black pb-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            ITR & GST Compliance Hub
          </h1>

          <p className="text-xl text-gray-700 max-w-3xl">
            A simple guide for Indian taxpayers and business owners to file
            Income Tax Return (ITR) and GST returns correctly — without
            confusion, fear, or unnecessary CA dependency.
          </p>
        </section>

        {/* ================= WHO THIS IS FOR ================= */}
        <section>
          <h2 className="text-2xl font-bold uppercase mb-6">
            Who Should Use This?
          </h2>

          <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
            <li>• Salaried employees</li>
            <li>• Freelancers & consultants</li>
            <li>• Shopkeepers & small businesses</li>
            <li>• Online sellers & service providers</li>
          </ul>
        </section>

        {/* ================= ITR SECTION ================= */}
        <section className="border-t-4 border-black pt-12">
          <h2 className="text-3xl font-black mb-4">Income Tax Return (ITR)</h2>
          <p className="text-gray-700 max-w-3xl mb-8">
            ITR is required for individuals to report income, claim refunds, and
            maintain financial records for loans, visas, and government
            verification.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <ComplianceCard
              title="Salaried Individuals"
              desc="Salary income, Form 16, TDS, refund claims."
              link="/blog/how-to-file-itr-india"
            />
            <ComplianceCard
              title="Freelancers / Self-Employed"
              desc="Professional income, advance tax, deductions."
              link="/blog/itr-for-freelancers"
            />
            <ComplianceCard
              title="Nil ITR (Zero Income)"
              desc="Students, job seekers, no income but PAN exists."
              link="/blog/nil-itr-return"
            />
          </div>

          <p className="text-gray-700 mt-4">
            If you are an individual taxpayer, start with our complete guide on{" "}
            <Link
              href="/blog/how-to-file-itr-india"
              className="font-semibold underline"
            >
              how to file ITR in India
            </Link>
            .
          </p>
          <PortalLink
            label="Open Income Tax Portal"
            href="https://www.incometax.gov.in"
          />
        </section>

        {/* ================= GST SECTION ================= */}
        <section className="border-t-4 border-black pt-12">
          <h2 className="text-3xl font-black mb-4">
            Goods & Services Tax (GST)
          </h2>

          <p className="text-gray-700 max-w-3xl mb-8">
            GST returns are mandatory for registered businesses — even if there
            are no sales. Filing on time avoids penalties and GST cancellation.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <ComplianceCard
              title="Regular GST Filers"
              desc="GSTR-1, GSTR-3B, ITC, tax payment."
              link="/blog/how-to-file-gst-return-india"
            />
            <ComplianceCard
              title="Composition Scheme"
              desc="Quarterly return with lower tax rate."
              link="/blog/gst-composition-return"
            />
            <ComplianceCard
              title="Nil GST Return"
              desc="No sales? Still mandatory to file."
              link="/blog/nil-gst-return"
            />
          </div>

          <PortalLink label="Open GST Portal" href="https://www.gst.gov.in" />
        </section>

        {/* ================= COMMON MISTAKES ================= */}
        <section className="bg-black text-white p-10">
          <h2 className="text-2xl font-bold mb-6">
            Common Compliance Mistakes
          </h2>

          <ul className="space-y-3 text-sm">
            <li>× Filing return but not verifying OTP</li>
            <li>× Skipping NIL returns</li>
            <li>× Mismatch between portal data and actual records</li>
            <li>× Missing due dates repeatedly</li>
          </ul>
        </section>

        {/* ================= FOOTER CTA ================= */}
        <section className="border-t-4 border-black pt-10">
          <p className="text-gray-700 mb-4">
            Bookmark this page and use it every month or year before filing.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.incometax.gov.in"
              className="bg-black text-white px-6 py-3 text-xs font-bold uppercase"
            >
              Income Tax Portal
            </a>
            <a
              href="https://www.gst.gov.in"
              className="border-2 border-black px-6 py-3 text-xs font-bold uppercase"
            >
              GST Portal
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
