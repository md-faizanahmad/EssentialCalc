"use client";

import { useState, useEffect } from "react";
import { calculateProductEMI } from "@/lib/calculations";
import { formatCurrency } from "@/lib/calculations";

export default function ProductCalc() {
  const [price, setPrice] = useState(50000);
  const [downPayment, setDownPayment] = useState(10000);
  const [rate, setRate] = useState(12);
  const [months, setMonths] = useState(12);
  const [fee, setFee] = useState(1000);
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    setResults(calculateProductEMI(price, downPayment, rate, months, fee));
  }, [price, downPayment, rate, months, fee]);

  if (!results) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase">
              Product Price
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full p-3 bg-gray-50 rounded-xl font-bold border-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase">
              Down Payment
            </label>
            <input
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full p-3 bg-gray-50 rounded-xl font-bold border-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <label className="text-sm font-semibold">
              Interest Rate: {rate}%
            </label>
          </div>
          <input
            type="range"
            min="0"
            max="24"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between">
            <label className="text-sm font-semibold">
              Tenure: {months} Months
            </label>
          </div>
          <input
            type="range"
            min="3"
            max="36"
            step="3"
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-400 uppercase">
            Processing Fee
          </label>
          <input
            type="number"
            value={fee}
            onChange={(e) => setFee(Number(e.target.value))}
            className="w-full p-3 bg-gray-50 rounded-xl font-bold border-none"
          />
        </div>
      </div>

      <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
        <div className="text-center mb-6">
          <h3 className="text-gray-500 text-xs font-bold uppercase mb-1">
            Monthly EMI
          </h3>
          <p className="text-4xl font-black text-gray-900">
            {formatCurrency(results.emi)}
          </p>
        </div>

        <div className="space-y-3 pt-6 border-t border-gray-200">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Total Interest</span>
            <span className="font-semibold">
              {formatCurrency(results.totalInterest)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Processing Fee</span>
            <span className="font-semibold">
              {formatCurrency(results.processingFee)}
            </span>
          </div>
          <div className="flex justify-between text-lg font-bold pt-2 border-t border-dashed border-gray-300">
            <span>Real Total Cost</span>
            <span className="text-blue-600">
              {formatCurrency(results.totalCost)}
            </span>
          </div>
        </div>

        {/* The "Truth" Box */}
        <div className="mt-8 p-4 bg-orange-50 border border-orange-100 rounded-2xl text-center">
          <p className="text-xs font-bold text-orange-600 uppercase mb-1">
            Hidden Extra Cost
          </p>
          <p className="text-2xl font-black text-orange-700">
            {formatCurrency(results.extraPaid)}
          </p>
          <p className="text-[10px] text-orange-500 mt-1 uppercase">
            That&apos;s what you pay above the sticker price
          </p>
        </div>
      </div>
    </div>
  );
}
