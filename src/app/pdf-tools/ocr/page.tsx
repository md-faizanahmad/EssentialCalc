import { Zap, ShieldCheck, BrainCircuit } from "lucide-react";
import Link from "next/link";
import AdSlot from "@/components/layouts/AdSlot";
import OCRWork from "@/components/pdf/OCRWork";

export const metadata = {
  title: "OCR Online – Extract Text from Images & PDFs | EssentialCalc",
  description:
    "Free OCR tool to extract text from images and scanned PDFs online. 100% browser-based, private on-device AI text recognition. No uploads required.",
  alternates: {
    canonical: "https://essentialcalc.com/pdf-tools/ocr",
  },
};

export default function OCRPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center">
      {/* HEADER */}
      <section className="max-w-4xl text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs font-bold uppercase tracking-widest mb-6 text-sky-400-600">
          <Zap size={12} fill="currentColor" />
          On-Device OCR Engine
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
          Free OCR Online – Extract Text from Images & PDFs
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          Extract text instantly from images and scanned PDF documents using
          secure browser-based Optical Character Recognition (OCR). No uploads.
          No server processing. 100% private.
        </p>
      </section>

      {/* TOOL */}
      <section className="w-full mb-16">
        <OCRWork />
      </section>

      <AdSlot id="ocr-bottom" className="mt-12" />

      {/* SEO CONTENT SECTION */}
      <article className="max-w-4xl mt-20 space-y-12 text-gray-700 leading-relaxed">
        {/* WHAT IS OCR */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            What is OCR (Optical Character Recognition)?
          </h2>
          <p className="mb-4">
            OCR is a technology that converts text within images, scanned
            documents, or PDF files into machine-readable digital text. It
            allows users to copy, edit, and search text from otherwise static
            files.
          </p>
          <p>
            OCR is commonly used for digitizing printed documents, extracting
            invoice data, converting handwritten notes, and making scanned PDFs
            searchable.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            How This Online OCR Tool Works
          </h2>
          <p className="mb-4">
            Unlike many OCR tools that upload files to external servers,
            EssentialCalc processes everything locally in your browser using
            on-device AI models.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You upload an image or PDF file.</li>
            <li>The OCR engine analyzes pixels and detects text patterns.</li>
            <li>Recognized characters are reconstructed into editable text.</li>
            <li>No data leaves your device at any time.</li>
          </ul>
        </section>

        {/* USE CASES */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Common Use Cases for OCR</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Extract text from scanned invoices or bills</li>
            <li>Convert printed books into editable format</li>
            <li>Digitize handwritten notes</li>
            <li>Make scanned PDFs searchable</li>
            <li>Copy text from screenshots</li>
          </ul>
        </section>

        {/* FILE TYPES */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Supported File Types</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>JPG / JPEG</li>
            <li>PNG</li>
            <li>Scanned PDF documents</li>
          </ul>
        </section>

        {/* ACCURACY TIPS */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Tips for Better OCR Accuracy
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use high-resolution images</li>
            <li>Avoid blurry or tilted photos</li>
            <li>Ensure proper lighting</li>
            <li>Crop unnecessary background areas</li>
          </ul>
        </section>

        {/* SECURITY */}
        <section className="bg-gray-50 border rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Privacy & Security</h2>
          <div className="flex flex-col md:flex-row gap-6 text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-green-600" />
              100% On-Device Processing
            </div>
            <div className="flex items-center gap-2">
              <BrainCircuit size={16} className="text-sky-400-600" />
              No External API Calls
            </div>
          </div>
          <p className="mt-4">
            Since processing happens locally in your browser, your documents
            remain private and secure.
          </p>
        </section>

        {/* INTERNAL LINKING */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Related PDF & Image Tools</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/pdf-tools/pdf-merge"
                className="text-sky-400-600 font-semibold"
              >
                Merge PDF Files Online
              </Link>
            </li>
            <li>
              <Link
                href="/pdf-tools/image-to-pdf"
                className="text-sky-400-600 font-semibold"
              >
                Convert Image to PDF
              </Link>
            </li>
            <li>
              <Link
                href="/image-tools/remove-bg"
                className="text-sky-400-600 font-semibold"
              >
                Remove Image Background
              </Link>
            </li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Is this OCR tool free?</h3>
              <p>Yes, the OCR tool is completely free and browser-based.</p>
            </div>

            <div>
              <h3 className="font-semibold">
                Does my file get uploaded to a server?
              </h3>
              <p>No. All processing happens locally in your browser.</p>
            </div>

            <div>
              <h3 className="font-semibold">
                Can I extract text from scanned PDFs?
              </h3>
              <p>Yes, scanned PDF files are supported.</p>
            </div>

            <div>
              <h3 className="font-semibold">Is OCR 100% accurate?</h3>
              <p>
                Accuracy depends on image quality, clarity, and formatting.
                High-resolution images produce better results.
              </p>
            </div>
          </div>
        </section>

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Is this OCR tool free?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, this OCR tool is completely free and runs in your browser.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does my file get uploaded?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No, all processing happens locally in your browser. No files are uploaded.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can OCR extract text from scanned PDFs?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, the tool supports scanned PDF documents and images.",
                  },
                },
              ],
            }),
          }}
        />
      </article>
    </main>
  );
}
