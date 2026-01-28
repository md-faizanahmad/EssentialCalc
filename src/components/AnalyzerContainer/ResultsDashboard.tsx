"use client";

import { TimeAllocation } from "@/@types";
import {
  Zap,
  Trash2,
  Moon,
  PieChart as ChartIcon,
  Smartphone,
  Gamepad2,
  BookOpen,
  Heart,
  Activity,
} from "lucide-react";

interface DashboardProps {
  values: TimeAllocation;
  stats: {
    productive: number;
    waste: number;
    neutral: number;
    ratio: string;
  };
}

// Icon and Color mapping for specific categories
const itemConfig: Record<
  string,
  { icon: React.ReactNode; color: string; textColor: string }
> = {
  sleep: {
    icon: <Moon size={14} />,
    color: "bg-slate-200",
    textColor: "text-black",
  },
  work: {
    icon: <Activity size={14} />,
    color: "bg-blue-200",
    textColor: "text-black",
  },
  mobile: {
    icon: <Smartphone size={14} />,
    color: "bg-red-200",
    textColor: "text-black",
  },
  play: {
    icon: <Gamepad2 size={14} />,
    color: "bg-orange-200",
    textColor: "text-black",
  },
  quran: {
    icon: <BookOpen size={14} />,
    color: "bg-green-200",
    textColor: "text-black",
  },
  prayer: {
    icon: <Heart size={14} />,
    color: "bg-pink-200",
    textColor: "text-black",
  },
};

export default function ResultsDashboard({ values, stats }: DashboardProps) {
  const prodDeg = (stats.productive / 24) * 360;
  const wasteDeg = (stats.waste / 24) * 360;

  const chartStyle = {
    background: `conic-gradient(#FEF08A 0deg ${prodDeg}deg, #EF4444 ${prodDeg}deg ${prodDeg + wasteDeg}deg, #000000 ${prodDeg + wasteDeg}deg 360deg)`,
  };

  return (
    <div className="bg-white border-4 border-black p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <div className="flex items-center gap-2 mb-6">
        <ChartIcon size={20} strokeWidth={3} />
        <h3 className="font-black uppercase italic text-lg border-b-4 border-black">
          Analysis
        </h3>
      </div>

      {/* CHART SECTION */}
      <div className="flex flex-col items-center mb-8">
        <div
          className="w-44 h-44 rounded-full border-4 border-black mb-6 flex items-center justify-center relative shadow-[6px_6px_0px_0px_rgba(239,68,68,1)]"
          style={chartStyle}
        >
          <div className="w-28 h-28 bg-white border-4 border-black rounded-full flex flex-col items-center justify-center">
            <span className="text-3xl font-black">{stats.ratio}%</span>
            <span className="text-[8px] font-black uppercase tracking-tighter">
              Efficiency
            </span>
          </div>
        </div>

        {/* SUMMARY STATS GRID: Responsive 1 column mobile, 3 column desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
          <StatCard
            label="Productive"
            hours={stats.productive}
            color="bg-[#FEF08A]"
            icon={<Zap size={16} fill="currentColor" />}
          />
          <StatCard
            label="Waste"
            hours={stats.waste}
            color="bg-[#EF4444]"
            textColor="text-white"
            icon={<Trash2 size={16} />}
          />
          <StatCard
            label="Neutral"
            hours={stats.neutral}
            color="bg-black"
            textColor="text-white"
            icon={<Moon size={16} fill="currentColor" />}
          />
        </div>
      </div>

      {/* FULL BREAKDOWN: All 6 categories as distinct cards */}
      <div className="space-y-3">
        <p className="font-black text-[10px] uppercase text-gray-500 border-l-4 border-gray-500 pl-2">
          Detailed Split
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
          {Object.entries(values).map(([key, val]) => {
            const config = itemConfig[key] || itemConfig.work;
            return (
              <div
                key={key}
                className={`border-2 border-black p-2 flex flex-col shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] ${config.color} ${config.textColor}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {config.icon}
                  <span className="text-[9px] font-black uppercase truncate">
                    {key}
                  </span>
                </div>
                <span className="text-sm font-black italic">{val}H</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatCard({
  label,
  hours,
  color,
  textColor = "text-black",
  icon,
}: {
  label: string;
  hours: number;
  color: string;
  textColor?: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`border-4 border-black p-3 flex justify-between items-center ${color} ${textColor} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}
    >
      <div className="flex items-center gap-2">
        <div className="bg-white p-1 border-2 border-black text-black">
          {icon}
        </div>
        <span className="font-black uppercase text-[10px]">{label}</span>
      </div>
      <span className="font-black text-md">{hours}H</span>
    </div>
  );
}
