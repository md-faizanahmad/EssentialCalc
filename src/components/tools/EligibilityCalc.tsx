"use client";

import { useState, useEffect } from "react";
import { calculateLoanEligibility } from "@/lib/loanEligibility";
import { formatCurrency } from "@/lib/calculations";

export default function EligibilityCalc() {
  const [income, setIncome] = useState(75000);
  const [existingEMI, setExistingEMI] = useState(0);
  const [rate, setRate] = useState(9.0);
  const [years, setYears] = useState(20);
  const [results, setResults] = useState({ safeEMI: 0, maxLoanAmount: 0 });

  useEffect(() => {
    setResults(calculateLoanEligibility(income, existingEMI, rate, years));
  }, [income, existingEMI, rate, years]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
            Monthly In-Hand Salary
          </label>
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(Number(e.target.value))}
            className="w-full p-4 bg-gray-50 rounded-2xl text-xl font-bold border-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
            Existing Monthly EMIs (If any)
          </label>
          <input
            type="number"
            value={existingEMI}
            onChange={(e) => setExistingEMI(Number(e.target.value))}
            className="w-full p-4 bg-gray-50 rounded-2xl text-xl font-bold border-none"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-2">
              Interest Rate (%)
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
              Tenure (Years)
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

      <div className="flex flex-col justify-center bg-purple-600 rounded-3xl p-8 text-white text-center">
        <h3 className="text-purple-200 text-xs font-bold uppercase tracking-widest mb-2">
          Maximum Loan Eligibility
        </h3>
        <p className="text-4xl md:text-5xl font-black mb-8">
          {formatCurrency(results.maxLoanAmount)}
        </p>

        <div className="bg-purple-700/50 p-6 rounded-2xl border border-purple-400/30">
          <p className="text-xs uppercase font-bold text-purple-200 mb-1">
            Recommended Max EMI
          </p>
          <p className="text-2xl font-bold">
            {formatCurrency(results.safeEMI)}
          </p>
          <p className="text-[10px] mt-2 opacity-70 italic">
            Based on 50% FOIR banking standard
          </p>
        </div>
      </div>
    </div>
  );
}
