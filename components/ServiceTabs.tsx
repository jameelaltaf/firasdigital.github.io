"use client";
import { useState } from "react";

export type ServiceTab = {
  id: string;
  label: string;
  title: string;
  body: string;
  stat?: { value: string; label: string };
};

export default function ServiceTabs({ tabs }: { tabs: ServiceTab[] }) {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div className="my-10">
      <div className="flex flex-wrap gap-2 mb-5">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            onClick={() => setActive(i)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
              active === i
                ? "bg-secondary text-on-secondary shadow-lg shadow-secondary/20"
                : "bg-surface-container border border-outline-variant/20 text-on-surface-variant hover:text-on-surface hover:border-secondary/30"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="bg-surface-container rounded-2xl p-6 md:p-8 border border-outline-variant/20 transition-all duration-300 min-h-[160px]">
        {tab.stat && (
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-4">
            <span className="text-secondary font-black text-2xl leading-none">{tab.stat.value}</span>
            <span className="text-on-surface-variant text-[10px] font-bold uppercase tracking-widest">{tab.stat.label}</span>
          </div>
        )}
        <h3 className="font-black text-on-surface text-lg md:text-xl mb-3 leading-snug">{tab.title}</h3>
        <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">{tab.body}</p>
      </div>
    </div>
  );
}
