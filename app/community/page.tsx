import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import NoticeList from "@/components/NoticeList";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "커뮤니티",
  description: "공지사항·갤러리·이번 달 활동 실적·시민기자단 참여까지, 이웃과 나누는 일상의 조각들을 한곳에서 만나보세요.",
};

// ────────────────────────────────────────────────────────────
// 이번 달 활동 ledger 데이터
// ────────────────────────────────────────────────────────────
const ledgerStats = [
  { value: "23", unit: "명", label: "이번 달 교육 수료자", accent: false },
  { value: "187", unit: "kg", label: "식품 나눔 실적", accent: true },
  { value: "312", unit: "명", label: "센터 방문자 수", accent: false },
  { value: "8", unit: "건", label: "시민기자 보도 기사", accent: true },
] as const;

// ────────────────────────────────────────────────────────────
// 경인블루저널 참여 단계
// ────────────────────────────────────────────────────────────
const journalSteps = [
  { step: "01", title: "신청서 제출", desc: "온라인 또는 센터 방문 접수" },
  { step: "02", title: "오리엔테이션", desc: "취재 윤리·AI 작성 도구 교육" },
  { step: "03", title: "첫 기사 발행", desc: "편집팀 피드백과 함께 첫 보도" },
];

// ────────────────────────────────────────────────────────────
export default function CommunityPage() {
  return (
    <>
      {/* 1. PageHeader */}
      <PageHeader
        eyebrow="Community · 소식·활동"
        title="이웃과 나누는 일상의 조각들"
        subtitle="공지사항부터 갤러리, 이번 달 나눔 실적, 시민기자단 참여까지\n우리함께의 모든 소식이 이곳에 모입니다."
        backgroundImage="/images/header_news_bulletin_1768878759923.png"
      />

      {/* 2. 2-up 허브 카드 — 공지사항 + 갤러리 */}
      <section className="py-20 md:py-24 bg-paper-warm">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          {/* 섹션 eyebrow */}
          <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-primary-700 text-center mb-3">
            Hub · 소식과 기록
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold text-sacred-900 text-center mb-12 leading-tight kr-tight"
            style={{ wordBreak: "keep-all" }}
          >
            센터의 모든 소식을 한눈에
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">

            {/* 공지사항 카드 */}
            <article className="bg-paper rounded-[20px] border border-line shadow-md overflow-hidden flex flex-col">
              <header className="px-8 pt-8 pb-5 border-b border-line">
                <p className="text-[10px] tracking-[0.28em] uppercase font-bold text-primary-600 mb-2">
                  Notices · 공지사항
                </p>
                <h3
                  className="font-serif text-2xl md:text-3xl font-bold text-sacred-900 leading-tight kr-tight"
                  style={{ wordBreak: "keep-all" }}
                >
                  최근 소식
                </h3>
                <p className="text-[15px] text-ink-600 mt-2 kr" style={{ wordBreak: "keep-all" }}>
                  교육 모집·나눔 활동·예배 안내 등 최신 공지를 확인하세요.
                </p>
              </header>
              <div className="px-8 py-6 flex-1">
                <NoticeList limit={4} />
              </div>
              <footer className="px-8 pb-8">
                <Link
                  href="/community/notices"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-primary-700 hover:text-primary-900 transition-colors group"
                >
                  전체 공지사항 보기
                  <span
                    className="inline-block transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </footer>
            </article>

            {/* 갤러리 카드 */}
            <article className="bg-paper rounded-[20px] border border-line shadow-md overflow-hidden flex flex-col">
              <header className="px-8 pt-8 pb-5 border-b border-line">
                <p className="text-[10px] tracking-[0.28em] uppercase font-bold text-care-600 mb-2">
                  Gallery · 활동 사진
                </p>
                <h3
                  className="font-serif text-2xl md:text-3xl font-bold text-sacred-900 leading-tight kr-tight"
                  style={{ wordBreak: "keep-all" }}
                >
                  우리함께의 순간들
                </h3>
                <p className="text-[15px] text-ink-600 mt-2 kr" style={{ wordBreak: "keep-all" }}>
                  교육 현장, 나눔의 손길, 함께 모인 시간들을 사진으로 만나보세요.
                </p>
              </header>
              <div className="px-8 py-6 flex-1">
                <GalleryGrid limit={4} columns={2} />
              </div>
              <footer className="px-8 pb-8">
                <Link
                  href="/community/gallery"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-care-600 hover:text-care-700 transition-colors group"
                >
                  갤러리 전체 보기
                  <span
                    className="inline-block transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </footer>
            </article>

          </div>
        </div>
      </section>

      {/* 3. 이번 달 활동 ledger — sacred-900 다크 배경 */}
      <section className="py-20 md:py-24 bg-sacred-900 border-y border-line">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          {/* 헤더 */}
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-primary-400 mb-3">
              Ledger · 2026년 4월
            </p>
            <h2
              className="font-serif text-3xl md:text-4xl font-bold text-paper-warm leading-tight kr-tight"
              style={{ wordBreak: "keep-all" }}
            >
              이번 달, 우리가 함께 만든 숫자
            </h2>
            <p className="text-[16px] text-warm-300 mt-4 max-w-prose mx-auto kr" style={{ wordBreak: "keep-all" }}>
              작은 공간에서 시작된 나눔이 매달 쌓여갑니다.
            </p>
          </div>

          {/* Ledger 그리드 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 items-end">
            {ledgerStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`relative px-7 animate-fade-in-up${i === 0 ? " pl-0" : " border-l border-white/10"}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* 숫자 + 단위 */}
                <div
                  className={`font-serif font-bold leading-[0.95] tracking-[-0.04em]${
                    stat.accent ? " text-primary-400" : " text-paper-warm"
                  }`}
                  style={{ fontSize: "clamp(64px, 7vw, 108px)" }}
                >
                  {stat.value}
                  <span
                    className="text-primary-500 font-semibold"
                    style={{ fontSize: "0.3em", marginLeft: "4px", verticalAlign: "0.45em" }}
                  >
                    {stat.unit}
                  </span>
                </div>
                {/* 라벨 */}
                <p
                  className="text-[14px] leading-[1.65] text-warm-400 mt-4 pt-[14px] border-t border-white/10 kr"
                  style={{ wordBreak: "keep-all" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 경인블루저널 연계 — paper 배경 */}
      <section className="py-20 md:py-24 bg-paper border-b border-line">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* 좌측: serif 소개 */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-primary-700 mb-4">
                경인블루저널 · 시민기자단
              </p>
              <h2
                className="font-serif text-3xl md:text-[2.4rem] font-bold text-sacred-900 leading-tight kr-tight mb-6"
                style={{ wordBreak: "keep-all", letterSpacing: "-0.02em" }}
              >
                우리 이웃의 이야기를
                <br />
                세상에 전하는 목소리
              </h2>
              <div className="w-16 h-px bg-primary-400/60 mb-6" aria-hidden="true" />
              <p
                className="text-[17px] leading-[1.85] text-ink-700 mb-4 kr"
                style={{ wordBreak: "keep-all" }}
              >
                경인블루저널은 경인교회 우리함께 나눔센터와 함께하는 시민기자단 미디어입니다.
                디지털 교육 수료자들이 직접 취재하고, AI 도구로 기사를 써내며
                지역 사회의 소외된 이야기를 세상에 알립니다.
              </p>
              <p
                className="text-[17px] leading-[1.85] text-ink-700 kr"
                style={{ wordBreak: "keep-all" }}
              >
                특별한 자격이 필요하지 않습니다. 이웃을 향한 관심과
                이야기를 나누고자 하는 마음이면 충분합니다.
              </p>
            </div>

            {/* 우측: 참여 단계 */}
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-care-600 mb-6">
                참여 안내 · How to Join
              </p>
              <div className="space-y-0">
                {journalSteps.map((s, i) => (
                  <div
                    key={s.step}
                    className={`flex gap-5 py-6${i < journalSteps.length - 1 ? " border-b border-line" : ""}`}
                  >
                    {/* 단계 번호 */}
                    <span
                      className="font-serif font-bold text-primary-300 shrink-0 leading-none"
                      style={{ fontSize: "clamp(32px, 3vw, 44px)", letterSpacing: "-0.04em" }}
                      aria-hidden="true"
                    >
                      {s.step}
                    </span>
                    <div className="pt-1">
                      <h3
                        className="font-serif text-lg font-bold text-sacred-900 mb-1 kr-tight"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {s.title}
                      </h3>
                      <p className="text-[15px] text-ink-600 kr" style={{ wordBreak: "keep-all" }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* 소형 CTA */}
              <div className="mt-8 p-6 bg-warm-100 rounded-[16px] border border-line">
                <p
                  className="text-[15px] font-semibold text-sacred-900 mb-1 kr"
                  style={{ wordBreak: "keep-all" }}
                >
                  우리 소식을 알려주세요
                </p>
                <p
                  className="text-[14px] text-ink-600 mb-4 kr"
                  style={{ wordBreak: "keep-all" }}
                >
                  센터 이야기, 지역 소식, 나눔의 현장 — 무엇이든 기사가 됩니다.
                </p>
                <a
                  href="tel:031-000-0000"
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary-700 hover:text-primary-900 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  031-000-0000으로 문의하기
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. 하단 CTA — "참여하기" phone-type 소형 변형 */}
      <section className="py-16 md:py-20 bg-paper-warm">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-primary-600 mb-4">
            Join Us · 함께해요
          </p>
          <h2
            className="font-serif text-2xl md:text-3xl font-bold text-sacred-900 mb-3 kr-tight"
            style={{ wordBreak: "keep-all" }}
          >
            지금 바로 참여하세요
          </h2>
          <p
            className="text-[16px] text-ink-600 mb-8 max-w-sm mx-auto kr"
            style={{ wordBreak: "keep-all" }}
          >
            교육 수강, 봉사 활동, 시민기자단 — 모두 무료로 열려 있습니다.
          </p>
          <a
            href="tel:031-000-0000"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 min-h-[48px] rounded-full border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white font-semibold text-[16px] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            031-000-0000 · 참여하기
          </a>
        </div>
      </section>
    </>
  );
}
