"use client";

import React, { useState, useMemo, useEffect } from "react";
import TimeInput from "./TimeInput";
import FeedbackMessage from "./FeedbackMessage";
import ResultsDashboard from "./ResultsDashboard";
import { RotateCcw } from "lucide-react";
import { TimeAllocation } from "@/@types/index";

export default function AnalyzerContainer() {
  const defaultValues: TimeAllocation = {
    sleep: 8,
    work: 8,
    mobile: 2,
    play: 2,
    quran: 2,
    prayer: 2,
  };

  const [values, setValues] = useState<TimeAllocation>(defaultValues);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("timetrace_data");
    if (saved) {
      try {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setValues(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated)
      localStorage.setItem("timetrace_data", JSON.stringify(values));
  }, [values, isHydrated]);

  const totalHours = Object.values(values).reduce((a, b) => a + b, 0);

  const stats = useMemo(() => {
    const productive = values.work + values.quran + values.prayer;
    const waste = values.mobile + values.play;
    const neutral = values.sleep;
    return {
      productive,
      waste,
      neutral,
      ratio: ((productive / 24) * 100).toFixed(0),
      isImbalanced: values.mobile > values.quran + values.prayer,
    };
  }, [values]);

  const handleInputChange = (key: keyof TimeAllocation, val: number) => {
    setValues((prev) => ({ ...prev, [key]: val }));
  };

  if (!isHydrated)
    return (
      <div className="p-10 text-center font-black uppercase">Loading...</div>
    );

  return (
    /* Constrain the max width for desktop and use a grid */
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-6 p-4 md:p-6 animate-in fade-in duration-500">
      {/* LEFT COLUMN: INPUTS */}
      <div className="space-y-4">
        <section className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between items-center mb-4 border-b-2 border-black pb-2">
            <h1 className="font-black uppercase italic text-md">Daily Log</h1>
            <span
              className={`text-[10px] font-black px-2 py-0.5 border-2 border-black ${totalHours > 24 ? "bg-[#EF4444] text-white" : "bg-green-400"}`}
            >
              {totalHours}/24H
            </span>
          </div>

          <div className="space-y-1">
            {(Object.keys(values) as Array<keyof TimeAllocation>).map((key) => (
              <TimeInput
                key={key}
                label={
                  key === "work"
                    ? "Office/Study"
                    : key === "quran"
                      ? "Quran/Study"
                      : key
                }
                value={values[key]}
                onChange={(v) => handleInputChange(key, v)}
                min={0}
                max={24}
              />
            ))}
          </div>

          <button
            onClick={() => confirm("Reset data?") && setValues(defaultValues)}
            className="w-full mt-4 border-2 border-black p-1.5 font-black uppercase text-[10px] flex items-center justify-center gap-2 hover:bg-gray-100 active:translate-y-0.5 active:shadow-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <RotateCcw size={12} /> Reset Data
          </button>
        </section>

        {/* FEEDBACK: Tucked under inputs */}
        <div className="space-y-2">
          {totalHours > 24 && (
            <FeedbackMessage type="error" message="Exceeds 24h limit!" />
          )}
          {values.sleep < 5 && (
            <FeedbackMessage type="warning" message="Low sleep warning." />
          )}
          {stats.isImbalanced && (
            <FeedbackMessage type="warning" message="Screen > Worship/Study" />
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: RESULTS */}
      <div className="md:sticky md:top-24 h-fit">
        <ResultsDashboard values={values} stats={stats} />
        <p className="text-[9px] font-bold text-center uppercase text-gray-400 mt-4">
          Changes are auto-saved locally
        </p>
      </div>
    </div>
  );
}
