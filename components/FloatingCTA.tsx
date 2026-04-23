"use client";

import { siteIdentity } from "@/lib/navigation";

export default function FloatingCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-sacred-900 py-3 px-4 flex items-center justify-between"
      role="complementary"
      aria-label="전화 상담 안내"
    >
      <span className="font-serif text-primary-300" style={{ fontSize: "14px" }}>
        📞 전화 한 통이면 됩니다
      </span>
      <a
        href={`tel:${siteIdentity.phonePrimary}`}
        className="bg-primary-500 text-sacred-900 rounded-full px-5 font-bold flex items-center justify-center min-h-[44px]"
      >
        {siteIdentity.phonePrimary}
      </a>
    </div>
  );
}
