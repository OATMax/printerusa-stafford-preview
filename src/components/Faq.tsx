"use client";
import { useState } from "react";

type Item = { q: string; a: React.ReactNode };

export default function Faq({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="bg-ink-800 border border-ink-700 rounded-xl overflow-hidden">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 hover:bg-ink-700/40 transition"
            >
              <span className="text-white font-bold text-base sm:text-lg">{it.q}</span>
              <span
                aria-hidden
                className={`text-accent-yellow text-2xl font-extrabold transition-transform ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-white/75 text-sm sm:text-base leading-relaxed">{it.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
