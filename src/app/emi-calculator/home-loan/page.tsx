import AdSlot from "@/components/layouts/AdSlot";
import HomeLoanCalc from "@/components/tools/HomeLoanCalc";


export const metadata = {
  title: "Home Loan EMI Calculator (2026) – Monthly EMI, Interest & Cost | EssentialCalc",
  description:
    "Free Home Loan EMI Calculator for India. Calculate monthly EMI, total interest, and repayment amount instantly. Suitable for all major banks.",
};

export default function HomeLoanPage() {
  return (
    <article className="max-w-6xl mx-auto px-4 py-10">

      {/* Header */}
      <header className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Home Loan EMI Calculator
        </h1>
        <p className="text-gray-600 max-w-3xl">
          Calculate your monthly home loan EMI, total interest payable, and overall
          repayment cost based on loan amount, interest rate, and tenure.
        </p>
      </header>

      {/* Calculator */}
      <HomeLoanCalc />

      {/* Ads AFTER value */}
      <AdSlot id="below-home-loan-content" />

      {/* SEO Content */}
      <section className="mt-16 prose prose-slate max-w-none">
        <h2>Understanding Home Loan EMI</h2>
        <p>
          A home loan is a long-term financial commitment, often lasting up to
          30 years. An EMI calculator helps borrowers understand how interest
          rate and tenure affect monthly payments and overall loan cost.
        </p>

        <h2>Home Loan EMI Formula</h2>
        <pre>
EMI = P × r × (1+r)^n / ((1+r)^n − 1)
        </pre>
        <p>
          Where P is the loan amount, r is the monthly interest rate, and n is
          the loan tenure in months.
        </p>

        <h2>Example Home Loan EMI Calculation</h2>
        <p>
          For a ₹50 lakh home loan at an interest rate of 8.5% for 20 years,
          the monthly EMI comes to approximately ₹43,391.
        </p>
      </section>

      {/* FAQ Section – STATIC */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">
          Frequently Asked Questions (FAQs)
        </h2>

        <details className="rounded-xl border border-gray-200 p-4 open:bg-gray-50">
          <summary className="cursor-pointer font-semibold text-gray-900">
            What is Home Loan EMI?
          </summary>
          <p className="mt-3 text-gray-600">
            Home Loan EMI (Equated Monthly Installment) is the fixed monthly
            amount paid by a borrower to repay a housing loan. It includes
            both principal repayment and interest charged by the lender.
          </p>
        </details>

        <details className="rounded-xl border border-gray-200 p-4 open:bg-gray-50 mt-4">
          <summary className="cursor-pointer font-semibold text-gray-900">
            How is Home Loan EMI calculated?
          </summary>
          <p className="mt-3 text-gray-600">
            Home Loan EMI is calculated using a standard formula that takes
            into account the loan amount, interest rate, and loan tenure.
            Longer tenure lowers EMI but increases total interest paid.
          </p>
        </details>

        <details className="rounded-xl border border-gray-200 p-4 open:bg-gray-50 mt-4">
          <summary className="cursor-pointer font-semibold text-gray-900">
            Can I reduce my home loan EMI?
          </summary>
          <p className="mt-3 text-gray-600">
            Yes. EMI can be reduced by increasing loan tenure, making part
            prepayments, negotiating interest rates, or opting for a balance
            transfer to another bank.
          </p>
        </details>

        <details className="rounded-xl border border-gray-200 p-4 open:bg-gray-50 mt-4">
          <summary className="cursor-pointer font-semibold text-gray-900">
            Is lower EMI or shorter tenure better?
          </summary>
          <p className="mt-3 text-gray-600">
            Lower EMI helps with monthly cash flow, while shorter tenure
            significantly reduces total interest outflow. Shorter tenure
            is financially better if affordable.
          </p>
        </details>

        <details className="rounded-xl border border-gray-200 p-4 open:bg-gray-50 mt-4">
          <summary className="cursor-pointer font-semibold text-gray-900">
            Does interest rate change affect EMI?
          </summary>
          <p className="mt-3 text-gray-600">
            Yes. For floating-rate home loans, any change in interest rate
            directly impacts EMI or loan tenure depending on the lender’s policy.
          </p>
        </details>
      </section>

      {/* STATIC FAQ SCHEMA */}
    
  
       
    </article>
  );
}