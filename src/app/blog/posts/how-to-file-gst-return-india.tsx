// GST Return Guide – Simple Human-Friendly Editorial Layout
// Goal: Help small business owners file GST return without confusion

import Image from "next/image";

/**
 * PortalScreenshot
 * Use:
 * - Show real GST portal screens
 * - Help users visually match steps
 * - Build trust (real system, not theory)
 */
function PortalScreenshot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-12">
      <div className="relative w-full aspect-video border border-black bg-gray-100">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-contain"
        />
      </div>
      <figcaption className="mt-3 text-xs text-gray-500 italic">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function HowToFileGSTReturnIndia() {
  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      <article className="mx-auto max-w-187.5 px-4 py-2 md:py-16">
        {/* ================= HEADER ================= */}
        <header className="border-b-2 border-black pb-8 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-black text-white text-xs font-bold px-2 py-1 uppercase tracking-widest">
              GST Guide
            </span>
            <span className="text-gray-500 text-sm">Updated for 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-6">
            How to File GST Return in India
          </h1>

          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
            This guide explains GST return filing in very simple words. No legal
            language. No CA terms. Just clear steps that any business owner can
            follow.
          </p>
        </header>

        {/* ================= GST PORTAL INTRO ================= */}
        <section className="mb-20">
          <p className="text-lg text-gray-700 leading-relaxed">
            GST return is filed only on the official government website:
          </p>

          <p className="mt-2 font-mono text-sm">👉 https://www.gst.gov.in</p>

          <PortalScreenshot
            src="/gst/gst-homepage.png"
            alt="GST official portal homepage"
            caption="GST official website homepage (gst.gov.in)"
          />
        </section>

        {/* ================= WHO MUST FILE ================= */}
        <section id="eligibility" className="mb-20">
          <h2 className="text-2xl font-bold uppercase border-l-4 border-black pl-4 mb-6">
            Who Needs to File GST Return?
          </h2>

          <ul className="space-y-4 text-gray-700">
            <li>• Any business registered under GST</li>
            <li>• Shopkeepers, traders, service providers</li>
            <li>• Online sellers (Amazon, Flipkart, Meesho, etc.)</li>
            <li>
              • Even if you had <strong>no sales</strong> (NIL return)
            </li>
          </ul>
        </section>

        {/* ================= GST REGISTRATION SCREEN ================= */}
        <PortalScreenshot
          src="/gst/gst-register.png"
          alt="GST portal registration page"
          caption="GST portal registration page (only once, during GST signup)"
        />

        {/* ================= LOGIN SCREEN ================= */}
        <PortalScreenshot
          src="/gst/gst-login.png"
          alt="GST portal login page"
          caption="GST login page using GSTIN, username, and password"
        />

        {/* ================= STEP BY STEP PROCESS ================= */}
        <section id="process" className="mb-20">
          <h2 className="text-2xl font-bold uppercase border-l-4 border-black pl-4 mb-8">
            Step-by-Step GST Return Filing Process
          </h2>

          <div className="space-y-10">
            {/* Step 1 */}
            <div>
              <h3 className="font-bold text-lg mb-2">
                Step 1: Login to GST Portal
              </h3>
              <p className="text-gray-700">
                Go to <strong>gst.gov.in</strong> and login using your GSTIN,
                username, and password. If OTP is asked, verify using your
                registered mobile number.
              </p>
            </div>

            {/* Step 2 */}
            <div>
              <h3 className="font-bold text-lg mb-2">
                Step 2: Open Returns Dashboard
              </h3>
              <p className="text-gray-700">
                After login, go to:
                <br />
                <strong>Services → Returns → Returns Dashboard</strong>
              </p>
            </div>

            {/* Step 3 */}
            <div>
              <h3 className="font-bold text-lg mb-2">
                Step 3: Select Return Month
              </h3>
              <p className="text-gray-700">
                Choose the correct month and year for which you are filing the
                GST return.
              </p>
            </div>

            {/* Step 4 */}
            <div>
              <h3 className="font-bold text-lg mb-2">
                Step 4: Fill GSTR-1 or GSTR-3B
              </h3>
              <p className="text-gray-700">
                • Enter sales invoice details • Check purchase details from
                GSTR-2B • Make sure numbers match to avoid notice
              </p>
            </div>

            {/* Step 5 */}
            <div>
              <h3 className="font-bold text-lg mb-2">
                Step 5: Pay Tax (If Any)
              </h3>
              <p className="text-gray-700">
                If tax is payable, pay using net banking or UPI from Electronic
                Cash Ledger.
              </p>
            </div>

            {/* Step 6 */}
            <div>
              <h3 className="font-bold text-lg mb-2">
                Step 6: Submit & File Return
              </h3>
              <p className="text-gray-700">
                Submit the return and verify using:
                <br />• OTP (for individuals) • DSC (for companies)
              </p>
            </div>
          </div>
        </section>

        {/* ================= IMPORTANT WARNING ================= */}
        <section className="mb-20 bg-red-50 border-l-4 border-red-600 p-6">
          <h3 className="font-bold text-red-800 mb-2">⚠ Important Warning</h3>
          <p className="text-red-700 text-sm">
            Even if you had ZERO sales or purchases, you MUST file a
            <strong> NIL GST Return</strong>. Not filing for continuous months
            can lead to late fees, blocked returns, or GST cancellation.
          </p>
        </section>

        {/* ================= PENALTY ================= */}
        <section className="mb-20 bg-black text-white p-8">
          <h2 className="text-2xl font-bold mb-6">Late Filing Penalty</h2>
          <ul className="space-y-3 text-sm">
            <li>• ₹50 per day for normal return</li>
            <li>• ₹20 per day for NIL return</li>
            <li>• Interest at 18% per year on tax amount</li>
          </ul>
        </section>

        {/* ================= FAQ ================= */}
        <section id="faq" className="mb-20">
          <h2 className="text-2xl font-bold uppercase mb-6">
            Common Questions
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>Q: I have no sales. Should I still file GST?</strong>
            <br />
            Yes. File NIL return to keep GST active.
          </p>

          <p className="text-gray-700">
            <strong>Q: Can I file GST myself?</strong>
            <br />
            Yes. Small businesses can easily file GST return on the portal
            without CA if data is simple.
          </p>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="pt-10 border-t-4 border-black">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-6">
            GST Filing Guide — India
          </p>
          <a
            href="https://www.gst.gov.in"
            target="_blank"
            className="inline-block bg-black text-white px-6 py-3 text-xs font-bold uppercase"
          >
            Open GST Portal
          </a>
        </footer>
      </article>
    </div>
  );
}
