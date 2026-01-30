import AdSlot from "@/components/layouts/AdSlot";
import CarLoanCalc from "@/components/tools/CarLoanCalc";

export const metadata = {
  title:
    "Car Loan EMI Calculator (India) – Monthly EMI, Interest & Cost | EssentialCalc",
  description:
    "Free car loan EMI calculator for India. Calculate monthly EMI, total interest, and repayment amount for car or bike loans by adjusting loan amount, interest rate, and tenure.",
  alternates: {
    canonical: "https://essentialcalc.com/emi-calculator/car-loan",
  },
};

export default function CarLoanPage() {
  return (
    <article className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
          Car Loan EMI Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Planning to buy a new car or bike? Use our calculator to find the most
          affordable monthly payment plan in seconds.
        </p>
      </header>

      {/* Interactive Tool */}
      <CarLoanCalc />

      <AdSlot id="car-loan-middle" className="my-12" />

      {/* SEO Content Section */}
      <section className="prose prose-slate max-w-none mt-16 bg-white p-8 rounded-3xl border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900">
          How to Use the Car Loan Calculator?
        </h2>
        <p>
          Buying a vehicle often involves choosing between different interest
          rates and loan durations. Our tool helps you compare these options
          instantly:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-2">Step 1: Loan Amount</h3>
            <p className="text-sm text-gray-600">
              Enter the amount you wish to borrow after deducting your down
              payment.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl">
            <h3 className="text-lg font-bold mb-2">Step 2: Interest Rate</h3>
            <p className="text-sm text-gray-600">
              Banks typically offer car loans between 8% to 12% depending on
              your credit score.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-8">
          Important Tips for Vehicle Loans:
        </h3>
        <ul className="space-y-3">
          <li>
            <strong>Check Processing Fees:</strong> Most banks charge a small
            percentage (0.5% - 1%) as a processing fee.
          </li>
          <li>
            <strong>Short Tenure vs Long Tenure:</strong> A 3-year loan will
            have higher EMIs but will save you thousands in total interest
            compared to a 7-year loan.
          </li>
          <li>
            <strong>Prepayment Rules:</strong> Always check if your bank allows
            early repayment without high penalties.
          </li>
        </ul>
      </section>

      <AdSlot id="car-loan-footer" className="mt-12" />
    </article>
  );
}
