"use client";

import {
  Moon,
  Briefcase,
  Smartphone,
  Gamepad2,
  BookOpen,
  // Note: You can use "Hands" or "Flame" if your lucide version differs
} from "lucide-react";

interface TimeInputProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  min: number;
  max: number;
}

// Map labels to icons for quick visual recognition
const iconMap: Record<string, React.ReactNode> = {
  Sleep: <Moon size={16} />,
  "Office / Study": <Briefcase size={16} />,
  "Mobile Usage": <Smartphone size={16} />,
  "Play / Entertainment": <Gamepad2 size={16} />,
  "Quran / Learning": <BookOpen size={16} />,
  Prayer: (
    <span className="text-xs font-bold" title="dua hand">
      🤲
    </span>
  ), // Using emoji or specific icon
};

export default function TimeInput({
  label,
  value,
  onChange,
  min,
  max,
}: TimeInputProps) {
  return (
    <div className="flex flex-col space-y-3 py-3 border-b-2 border-black/5 last:border-0">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Neobrutalist Icon Box */}
          <div className="bg-white border-2 border-black p-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            {iconMap[label] || <Briefcase size={16} />}
          </div>
          <label className="text-xs font-black uppercase tracking-tight text-black">
            {label}
          </label>
        </div>

        {/* Value Display */}
        <span className="text-sm font-black text-white bg-black border-2 border-black px-3 py-1 shadow-[3px_3px_0px_0px_rgba(239,68,68,1)]">
          {value}H
        </span>
      </div>

      <div className="relative flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step="0.5"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full h-2 cursor-pointer"
        />
      </div>
    </div>
  );
}
