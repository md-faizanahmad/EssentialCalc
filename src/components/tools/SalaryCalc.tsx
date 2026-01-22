"use client";

import { useState, useEffect } from "react";
import { calculateSalaryBreakdown } from "@/lib/salaryLogic";
import { formatCurrency } from "@/lib/calculations";

export default function SalaryCalc() {
  const [ctc, setCtc] = useState(1200000); // 12 LPA Default
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setData(calculateSalaryBreakdown(ctc));
  }, [ctc]);

  if (!data) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Input Section */}
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 uppercase mb-4">
            Annual CTC (Gross)
          </label>
          <input
            type="number"
            value={ctc}
            onChange={(e) => setCtc(Number(e.target.value))}
            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl text-2xl font-bold text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

        <div className="pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 italic">
            Adjust the slider or type your annual package to see the monthly
            in-hand breakdown.
          </p>
        </div>
      </div>

      {/* Result Section */}
      <div className="bg-gray-900 rounded-3xl p-8 text-white">
        <div className="text-center mb-8">
          <h3 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-2">
            Monthly Take-Home
          </h3>
          <p className="text-5xl font-black text-green-400">
            {formatCurrency(data.takeHome)}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-sm py-2 border-b border-gray-800">
            <span className="text-gray-400">Monthly Gross (CTC)</span>
            <span>{formatCurrency(data.monthlyCTC)}</span>
          </div>
          <div className="flex justify-between text-sm py-2 border-b border-gray-800 text-red-400">
            <span>EPF Deduction</span>
            <span>- {formatCurrency(data.monthlyPF)}</span>
          </div>
          <div className="flex justify-between text-sm py-2 border-b border-gray-800 text-red-400">
            <span>Estimated Income Tax</span>
            <span>- {formatCurrency(data.monthlyTax)}</span>
          </div>
          <div className="flex justify-between text-sm py-2 font-bold pt-4">
            <span className="text-green-400">Net In-Hand Salary</span>
            <span className="text-green-400">
              {formatCurrency(data.takeHome)}
            </span>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="mt-8">
          <div className="flex justify-between text-[10px] mb-2 uppercase font-bold text-gray-500">
            <span>Deductions ({100 - data.takeHomePercent}%)</span>
            <span>In-Hand ({data.takeHomePercent}%)</span>
          </div>
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden flex">
            <div
              className="bg-red-500 h-full"
              style={{ width: `${100 - data.takeHomePercent}%` }}
            ></div>
            <div
              className="bg-green-500 h-full"
              style={{ width: `${data.takeHomePercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
