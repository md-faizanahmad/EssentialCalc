"use client";

import { useState, useEffect } from "react";
import { calculateLoanDetails, formatCurrency } from "@/lib/calculations";

export default function CarLoanCalc() {
  const [amount, setAmount] = useState(800000);
  const [rate, setRate] = useState(9.5);
  const [tenure, setTenure] = useState(5);
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Input Sliders */}
      <div className="space-y-8 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Vehicle Loan Amount
            </label>
            <span className="text-xl font-black text-blue-600">
              {formatCurrency(amount)}
            </span>
          </div>
          <input
            type="range"
            min="100000"
            max="5000000"
            step="10000"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Interest Rate (p.a)
            </label>
            <span className="text-xl font-black text-blue-600">{rate}%</span>
          </div>
          <input
            type="range"
            min="5"
            max="20"
            step="0.1"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">
              Tenure (Years)
            </label>
            <span className="text-xl font-black text-blue-600">
              {tenure} Yrs
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="7"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
      </div>

      {/* Results Display */}
      <div className="bg-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-100 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 opacity-10 p-4">
          <svg
            width="120"
            height="120"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 13.1V16c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        </div>

        <h3 className="text-blue-100 text-xs font-bold uppercase tracking-[0.2em] mb-2">
          Monthly Installment (EMI)
        </h3>
        <p className="text-5xl font-black mb-10">
          {formatCurrency(results.emi)}
        </p>

        <div className="grid grid-cols-2 gap-6 pt-6 border-t border-blue-500/50">
          <div>
            <p className="text-blue-200 text-[10px] uppercase font-bold mb-1">
              Total Interest
            </p>
            <p className="text-xl font-bold">
              {formatCurrency(results.totalInterest)}
            </p>
          </div>
          <div>
            <p className="text-blue-200 text-[10px] uppercase font-bold mb-1">
              Total Payable
            </p>
            <p className="text-xl font-bold">
              {formatCurrency(results.totalAmount)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
