import Link from "next/link";
import { notices, type Notice } from "@/lib/content/notices";

const categoryClass: Record<Notice["category"], string> = {
  "센터 소식": "bg-primary-100 text-primary-800",
  "교육 모집": "bg-care-100 text-care-700",
  "나눔 활동": "bg-amber-100 text-amber-800",
  "시민기자단": "bg-purple-100 text-purple-800",
  "예배 안내": "bg-blue-100 text-blue-800",
};

// Editorial eyebrow label per category (Variant B)
const categoryEyebrow: Record<Notice["category"], string> = {
  "센터 소식": "운영",
  "교육 모집": "교육",
  "나눔 활동": "푸드뱅크",
  "시민기자단": "시민기자",
  "예배 안내": "예배",
};

type Props = { limit?: number; editorial?: boolean };

export default function NoticeList({ limit, editorial }: Props) {
  const items = limit ? notices.slice(0, limit) : notices;

  // ── Variant B: editorial newspaper-row style ──────────────────────────
  if (editorial) {
    return (
      <ul>
        {items.map((n) => (
          <li key={n.id} className="border-t border-line first:border-t-0">
            <article className="py-7 group">
              {/* Eyebrow */}
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-primary-700 mb-2 kr">
                [{categoryEyebrow[n.category]}]
              </p>

              {/* Title row */}
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-serif text-[20px] md:text-[22px] font-bold text-ink-900 leading-snug kr-tight flex-1">
                  {n.title}
                </h3>
                {n.isNew && (
                  <span className="shrink-0 text-[11px] font-bold px-2 py-0.5 rounded border border-primary-500 text-primary-700 tracking-wide">
                    NEW
                  </span>
                )}
              </div>

              {/* Meta */}
              <p className="text-[12px] text-ink-500 mb-3 tracking-wide">
                편집부 · {n.date}
              </p>

              {/* Excerpt */}
              <p className="text-[17px] text-ink-700 leading-[1.8] kr line-clamp-2 mb-4">
                {n.excerpt}
              </p>

              {/* Read more */}
              <Link
                href={`/community/notices/${n.id}`}
                className="inline-flex items-center gap-1 text-[14px] font-medium text-primary-700 hover:text-primary-600 transition-colors"
              >
                자세히 보기 <span aria-hidden="true">→</span>
              </Link>
            </article>
          </li>
        ))}
      </ul>
    );
  }

  // ── Default: original card style ─────────────────────────────────────
  return (
    <ul className="space-y-4">
      {items.map((n, i) => (
        <li
          key={n.id}
          className="sacred-card rounded-2xl p-6 md:p-7 hover-lift animate-fade-in-up"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryClass[n.category]}`}>
                {n.category}
              </span>
              {n.isNew && (
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-rose-500 to-red-500 text-white">
                  NEW
                </span>
              )}
              <h3 className="font-serif text-lg md:text-xl font-bold text-sacred-900 leading-snug">
                {n.title}
              </h3>
            </div>
            <time className="text-sm text-primary-700 bg-primary-50 px-3 py-1 rounded-full whitespace-nowrap">
              {n.date}
            </time>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">{n.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}
