"use client";

import { useState, useEffect } from "react";
import { calculateLoanDetails, formatCurrency } from "@/lib/calculations";

export default function HomeLoanCalc() {
  const [amount, setAmount] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [results, setResults] = useState({
    emi: 0,
    totalInterest: 0,
    totalAmount: 0,
    interestPercent: 0,
  });

  useEffect(() => {
    const data = calculateLoanDetails(amount, rate, tenure);
    setResults(data);
  }, [amount, rate, tenure]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      {/* Input Section */}
      <div className="space-y-8 bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100">
        <div className="space-y-4">
          <div className="flex justify-between">
            <label className="font-semibold text-gray-700">Loan Amount</label>
            <span className="text-blue-600 font-bold">
              {formatCurrency(amount)}
            </span>
          </div>
          <input
            type="range"
            min="100000"
            max="10000000"
            step="50000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <label className="font-semibold text-gray-700">
              Interest Rate (%)
            </label>
            <span className="text-blue-600 font-bold">{rate}%</span>
          </div>
          <input
            type="range"
            min="1"
            max="15"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <label className="font-semibold text-gray-700">
              Tenure (Years)
            </label>
            <span className="text-blue-600 font-bold">{tenure} Yr</span>
          </div>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
      </div>

      {/* Result Section */}
      <div className="bg-white border-2 border-blue-50 p-8 rounded-3xl shadow-sm text-center">
        <h3 className="text-gray-500 text-sm uppercase tracking-wider mb-2">
          Monthly EMI
        </h3>
        <p className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
          {formatCurrency(results.emi)}
        </p>

        <div className="grid grid-cols-2 gap-4 py-6 border-t border-gray-100">
          <div>
            <p className="text-xs text-gray-400 uppercase">Total Interest</p>
            <p className="font-bold text-gray-800">
              {formatCurrency(results.totalInterest)}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-400 uppercase">Total Payable</p>
            <p className="font-bold text-gray-800">
              {formatCurrency(results.totalAmount)}
            </p>
          </div>
        </div>

        {/* Simple Visual Breakdown Bar */}
        <div className="mt-6 w-full h-4 bg-gray-100 rounded-full overflow-hidden flex">
          <div
            className="bg-blue-600 h-full"
            style={{ width: `${100 - results.interestPercent}%` }}
          ></div>
          <div
            className="bg-orange-400 h-full"
            style={{ width: `${results.interestPercent}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-[10px] mt-2 font-bold uppercase tracking-tighter">
          <span className="text-blue-600">Principal</span>
          <span className="text-orange-400">Interest</span>
        </div>
      </div>
    </div>
  );
}
