"use client";

import { useEffect, useState } from "react";

type Size = "sm" | "md" | "lg" | "xl";
const STORAGE_KEY = "a365-text-size";
const sizes: { value: Size; label: string; abbr: string }[] = [
  { value: "sm", label: "작게", abbr: "가" },
  { value: "md", label: "보통", abbr: "가" },
  { value: "lg", label: "크게", abbr: "가" },
  { value: "xl", label: "매우 크게", abbr: "가" },
];

export default function AccessibilityToolbar() {
  const [size, setSize] = useState<Size>("md");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Size | null;
    if (stored && ["sm", "md", "lg", "xl"].includes(stored)) {
      setSize(stored);
      document.documentElement.dataset.textSize = stored;
    } else {
      document.documentElement.dataset.textSize = "md";
    }
  }, []);

  const apply = (s: Size) => {
    setSize(s);
    document.documentElement.dataset.textSize = s;
    if (typeof window !== "undefined") localStorage.setItem(STORAGE_KEY, s);
  };

  return (
    <div className="fixed bottom-4 left-4 z-40">
      {open && (
        <div
          className="mb-2 bg-white border border-primary-200 rounded-2xl shadow-xl p-3 w-56"
          role="region"
          aria-label="글자 크기 조절"
        >
          <p className="text-xs font-semibold text-sacred-900 mb-2 px-1">글자 크기 조절</p>
          <div className="grid grid-cols-2 gap-2">
            {sizes.map((opt, idx) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => apply(opt.value)}
                className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                  size === opt.value
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-white text-sacred-800 border-primary-200 hover:bg-primary-50"
                }`}
                aria-pressed={size === opt.value}
              >
                <span style={{ fontSize: `${0.85 + idx * 0.1}rem` }}>{opt.abbr}</span>
                <span className="block text-[10px] opacity-80 mt-0.5">{opt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="bg-white border-2 border-primary-500 hover:bg-primary-50 text-primary-700 rounded-full px-4 py-3 shadow-lg flex items-center gap-2 font-semibold"
        aria-expanded={open}
        aria-label="글자 크기 조절 도구 열기"
      >
        <span className="text-lg" aria-hidden="true">🔍</span>
        <span className="hidden sm:inline text-sm">글자크기</span>
      </button>
    </div>
  );
}
