"use client";

import { useState, useEffect } from "react";
import { calculateSalaryBreakdown } from "@/lib/salaryLogic";
import { calculateLoanEligibility } from "@/lib/loanEligibility";
import { formatCurrency } from "@/lib/calculations";

export default function CombinedSalaryTool() {
  const [ctc, setCtc] = useState(1200000);
  const [existingEMI, setExistingEMI] = useState(0);
  const [rate, setRate] = useState(9.0);
  const [years, setYears] = useState(20);

  // Derived states
  const [salaryData, setSalaryData] = useState<any>(null);
  const [loanResults, setLoanResults] = useState({
    safeEMI: 0,
    maxLoanAmount: 0,
  });

  useEffect(() => {
    const sData = calculateSalaryBreakdown(ctc);
    setSalaryData(sData);

    // Automatically use the calculated takeHome for loan eligibility
    const lData = calculateLoanEligibility(
      sData.takeHome,
      existingEMI,
      rate,
      years,
    );
    setLoanResults(lData);
  }, [ctc, existingEMI, rate, years]);

  if (!salaryData) return null;

  return (
    <div className="space-y-12">
      {/* SECTION 1: Salary Breakup */}
      <section
        id="salary-breakup"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10"
      >
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
              1
            </span>
            Salary Input
          </h2>
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
                Annual CTC (Gross)
              </label>
              <input
                type="number"
                value={ctc}
                onChange={(e) => setCtc(Number(e.target.value))}
                className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-2xl font-bold text-blue-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <input
                type="range"
                min="300000"
                max="5000000"
                step="50000"
                value={ctc}
                onChange={(e) => setCtc(Number(e.target.value))}
                className="w-full h-2 mt-6 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-900 rounded-3xl p-6 md:p-8 text-white shadow-xl">
          <div className="text-center mb-6">
            <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">
              Monthly Take-Home
            </h3>
            <p className="text-4xl md:text-5xl font-black text-green-400">
              {formatCurrency(salaryData.takeHome)}
            </p>
          </div>
          <div className="space-y-3 border-t border-gray-800 pt-4">
            <div className="flex justify-between text-sm py-1">
              <span className="text-gray-400">Monthly Gross</span>
              <span>{formatCurrency(salaryData.monthlyCTC)}</span>
            </div>
            <div className="flex justify-between text-sm py-1 text-red-400">
              <span>EPF Deduction</span>
              <span>- {formatCurrency(salaryData.monthlyPF)}</span>
            </div>
            <div className="flex justify-between text-sm py-1 text-red-400">
              <span>Income Tax (Est.)</span>
              <span>- {formatCurrency(salaryData.monthlyTax)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Loan Eligibility */}
      <section
        id="loan-eligibility"
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 pt-8 border-t border-gray-100"
      >
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
            <span className="bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">
              2
            </span>
            Loan Requirements
          </h2>
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
              Existing Monthly EMIs
            </label>
            <input
              type="number"
              value={existingEMI}
              onChange={(e) => setExistingEMI(Number(e.target.value))}
              className="w-full p-4 bg-gray-50 rounded-2xl text-xl font-bold border-none focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
                Rate (%)
              </label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                className="w-full p-4 bg-gray-50 rounded-2xl font-bold border-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
                Tenure (Yrs)
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full p-4 bg-gray-50 rounded-2xl font-bold border-none"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-purple-600 rounded-3xl p-6 md:p-8 text-white text-center shadow-xl">
          <h3 className="text-purple-200 text-xs font-bold uppercase tracking-widest mb-2">
            Max Loan Eligibility
          </h3>
          <p className="text-4xl md:text-5xl font-black mb-6">
            {formatCurrency(loanResults.maxLoanAmount)}
          </p>
          <div className="bg-purple-700/50 p-4 rounded-2xl border border-purple-400/30">
            <p className="text-xs uppercase font-bold text-purple-200">
              Recommended Max EMI
            </p>
            <p className="text-2xl font-bold">
              {formatCurrency(loanResults.safeEMI)}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
