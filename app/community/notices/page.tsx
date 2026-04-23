import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import NoticeList from "@/components/NoticeList";
import { notices } from "@/lib/content/notices";

export const metadata: Metadata = {
  title: "공지사항",
  description: "센터 소식, 교육 모집, 나눔 활동, 시민기자단 보도, 예배 안내 — 모든 공지를 한곳에서.",
};

// Pagination (static, page 1 of computed total)
const PAGE_SIZE = 6;
const totalPages = Math.ceil(notices.length / PAGE_SIZE);
const currentPage = 1;
const pagedNotices = notices.slice(0, PAGE_SIZE);

// Top-5 popular notices for sidebar (by most-recent + isNew priority)
const popularNotices = [...notices]
  .sort((a, b) => {
    if (a.isNew && !b.isNew) return -1;
    if (!a.isNew && b.isNew) return 1;
    return b.date.localeCompare(a.date);
  })
  .slice(0, 5);

// Monthly count for mast-rule
const currentMonth = "2026.04";
const monthlyCount = notices.filter((n) => n.date.startsWith("2026-04")).length;

export default function NoticesPage() {
  return (
    <>
      {/* ── Page Header ─────────────────────────────────────────────── */}
      <PageHeader
        eyebrow="Notices · VOL.XIV"
        title="센터·교회 공지사항"
        subtitle="우리함께 평생교육·나눔센터가 전하는 모든 소식과 안내"
        backgroundImage="/images/header_news_bulletin_1768878759923.png"
      />

      <div className="bg-paper-warm min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-14 md:py-20">
          {/* ── Mast Rule ───────────────────────────────────────────── */}
          <div className="bg-paper border border-line rounded-sm px-6 py-4 mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-[13px] font-semibold tracking-[0.18em] uppercase text-ink-500 kr">
              최근 업데이트
            </p>
            <div className="flex items-center gap-3 text-[13px] text-ink-500 tracking-wide">
              <span>{currentMonth}</span>
              <span className="text-line-strong select-none">·</span>
              <span>월간 {monthlyCount}건</span>
              <span className="text-line-strong select-none">·</span>
              <span className="text-primary-700 font-medium">VOL.XIV</span>
            </div>
          </div>

          {/* ── Main Grid: List + Sidebar ────────────────────────────── */}
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

            {/* ── Notice List ─────────────────────────────────────── */}
            <main className="flex-1 min-w-0">
              <div className="bg-paper border border-line rounded-sm px-6 md:px-8 py-2">
                {/* Override: render only paged slice via editorial mode */}
                <EditorialNoticeList />
              </div>

              {/* ── Pagination ──────────────────────────────────── */}
              <nav
                aria-label="페이지 탐색"
                className="mt-8 bg-paper border border-line rounded-sm px-6 py-4 flex items-center justify-center gap-1"
              >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={`/community/notices?page=${page}`}
                    aria-current={page === currentPage ? "page" : undefined}
                    className={[
                      "inline-flex items-center justify-center w-9 h-9 text-[13px] font-mono font-semibold tracking-widest transition-colors rounded-sm",
                      page === currentPage
                        ? "bg-primary-700 text-paper"
                        : "text-ink-500 hover:text-primary-700 hover:bg-primary-50",
                    ].join(" ")}
                  >
                    {String(page).padStart(2, "0")}
                  </Link>
                ))}
                <span className="mx-1 text-ink-400 select-none text-[13px]">·</span>
                <Link
                  href="/community/notices?page=2"
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-primary-700 hover:text-primary-600 transition-colors px-2"
                >
                  다음 <span aria-hidden="true">→</span>
                </Link>
              </nav>
            </main>

            {/* ── Sidebar: Popular Notices ─────────────────────── */}
            <aside className="lg:w-64 xl:w-72 shrink-0 w-full">
              <div className="bg-paper border border-line rounded-sm px-5 py-5">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-primary-700 mb-4 border-b border-line pb-3">
                  인기 공지
                </p>
                <ol className="space-y-4">
                  {popularNotices.map((n, i) => (
                    <li key={n.id} className="flex gap-3 items-start">
                      <span className="font-mono text-[12px] font-bold text-primary-400 shrink-0 mt-[3px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Link
                        href={`/community/notices/${n.id}`}
                        className="font-serif text-[15px] text-ink-800 leading-snug kr-tight hover:text-primary-700 transition-colors line-clamp-2"
                      >
                        {n.title}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

// Inline sub-component: renders only the paged slice in editorial mode.
// Avoids a separate file for single-use logic.
function EditorialNoticeList() {
  return (
    <ul>
      {pagedNotices.map((n) => {
        const eyebrowMap: Record<string, string> = {
          "센터 소식": "운영",
          "교육 모집": "교육",
          "나눔 활동": "푸드뱅크",
          "시민기자단": "시민기자",
          "예배 안내": "예배",
        };
        return (
          <li key={n.id} className="border-t border-line first:border-t-0">
            <article className="py-7 group">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-primary-700 mb-2 kr">
                [{eyebrowMap[n.category] ?? n.category}]
              </p>
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
              <p className="text-[12px] text-ink-500 mb-3 tracking-wide">
                편집부 · {n.date}
              </p>
              <p className="text-[17px] text-ink-700 leading-[1.8] kr line-clamp-2 mb-4">
                {n.excerpt}
              </p>
              <Link
                href={`/community/notices/${n.id}`}
                className="inline-flex items-center gap-1 text-[14px] font-medium text-primary-700 hover:text-primary-600 transition-colors"
              >
                자세히 보기 <span aria-hidden="true">→</span>
              </Link>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
