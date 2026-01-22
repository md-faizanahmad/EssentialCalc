"use client";

import { ArrowRight, Zap, Cpu } from "lucide-react";
import Link from "next/link";

interface ToolCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
  href: string;
  accent: "blue" | "purple";
}

export default function ToolCard({
  title,
  desc,
  icon,
  href,
  accent,
}: ToolCardProps) {
  const isBlue = accent === "blue";

  return (
    <Link href={href} className="group block h-full">
      <div className="h-full p-8 rounded-[2.5rem] bg-white border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-50 hover:-translate-y-2">
        <div className="flex items-center justify-between mb-8">
          <div
            className={`p-4 rounded-2xl transition-colors ${
              isBlue
                ? "bg-blue-50 text-blue-600"
                : "bg-purple-50 text-purple-600"
            }`}
          >
            {icon}
          </div>
          <div className="px-3 py-1 rounded-full bg-gray-50 border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[9px] font-bold text-gray-500 uppercase flex items-center gap-1">
              <Cpu size={10} /> Client-Side
            </span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed mb-8 line-clamp-2">
          {desc}
        </p>

        <div className="flex items-center justify-between pt-6 border-t border-gray-50">
          <div className="flex items-center gap-2">
            <Zap
              size={14}
              className={isBlue ? "text-blue-500" : "text-purple-500"}
              fill="currentColor"
            />
            <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">
              Private
            </span>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  );
}
