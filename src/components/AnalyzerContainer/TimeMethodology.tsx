import { Info, Zap, Moon, Trash2 } from "lucide-react";

export default function TimeMethodology() {
  const definitions = [
    {
      title: "Productive",
      icon: <Zap size={18} fill="currentColor" />,
      color: "bg-[#FEF08A]", // Yellow
      desc: "Activities that contribute to your long-term growth, career, and spiritual well-being (Office, Study, Quran, Prayer).",
    },
    {
      title: "Neutral",
      icon: <Moon size={18} fill="currentColor" />,
      color: "bg-slate-200", // Gray/White
      desc: "Necessary biological functions. These aren't 'work' but they aren't 'waste'—they are the foundation of your energy (Sleep).",
    },
    {
      title: "Waste",
      icon: <Trash2 size={18} />,
      color: "bg-[#EF4444]", // Red
      desc: "Passive consumption or entertainment that often exceeds its value. If these hours are high, they drain your potential (Mobile, Play).",
    },
  ];

  return (
    <section className="bg-white border-4 border-black p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Info size={20} strokeWidth={3} />
        <h3 className="font-black uppercase italic text-lg border-b-4 border-black">
          How we analyze
        </h3>
      </div>

      <div className="space-y-4">
        {definitions.map((item) => (
          <div key={item.title} className="flex gap-4 items-start">
            <div
              className={`${item.color} border-2 border-black p-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] shrink-0`}
            >
              {item.icon}
            </div>
            <div>
              <h4 className="font-black uppercase text-xs mb-1">
                {item.title}
              </h4>
              <p className="text-[11px] leading-tight font-medium text-gray-700">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t-2 border-black pt-4 italic">
        <p className="text-[10px] font-bold text-center uppercase tracking-tighter">
          &quot;The way we spend our days is, of course, the way we spend our
          lives.&quot;
        </p>
      </div>
    </section>
  );
}
