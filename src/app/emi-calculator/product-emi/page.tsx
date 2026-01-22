import ProductCalc from "@/components/tools/ProductCalc";
import AdSlot from "@/components/layouts/AdSlot";

export const metadata = {
  title: "Product EMI Calculator - The Truth Behind No-Cost EMI",
  description:
    "Calculate the real cost of buying phones and laptops on EMI. Uncover hidden processing fees and interest costs instantly.",
};

export default function ProductEMIPage() {
  return (
    <article className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Product EMI Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Is &quot;No-Cost EMI&quot; actually free? Use our calculator to
          uncover hidden processing fees and interest charges on your next
          mobile or laptop purchase.
        </p>
      </header>

      <ProductCalc />

      <AdSlot id="product-emi-mid" className="my-12" />

      <section className="mt-16 prose prose-slate max-w-none bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl font-bold">
          The Truth About &quot;No-Cost&quot; EMI
        </h2>
        <p>
          Online retailers often promote &quot;No-Cost EMI&quot; where the
          interest you owe the bank is given to you as a discount upfront.
          However, it is rarely truly free.
        </p>

        <h3 className="text-xl font-bold mt-8">What are the Hidden Costs?</h3>
        <ol className="space-y-4">
          <li>
            <strong>Non-Refundable Processing Fees:</strong> Most banks charge
            between ₹199 to ₹999 + GST just to initiate the EMI.
          </li>
          <li>
            <strong>Lost Cash Discounts:</strong> Often, the &quot;No-Cost
            EMI&quot; offer cannot be combined with flat cash discounts
            available for full payments.
          </li>
          <li>
            <strong>GST on Interest:</strong> Even if the bank gives you an
            interest discount, you still have to pay 18% GST on the interest
            component every month.
          </li>
        </ol>

        <div className="mt-10 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-2xl">
          <h4 className="font-bold text-red-900">Important Warning:</h4>
          <p className="text-sm text-red-800 italic">
            &quot;Missing a single EMI payment can trigger high penalty interest
            rates (up to 36% p.a.) and damage your credit score
            significantly.&quot;
          </p>
        </div>
      </section>

      <AdSlot id="product-emi-footer" />
    </article>
  );
}
