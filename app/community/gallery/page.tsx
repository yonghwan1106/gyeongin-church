"use client";

import { useState } from "react";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";

// ─── 데이터 ────────────────────────────────────────────────────────────────────

type Category = "전체" | "교육" | "푸드뱅크" | "행사";

type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: Exclude<Category, "전체">;
  date: string; // "YYYY.MM"
};

const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/gallery_sample_01_korean_1768879073401.png",
    alt: "어르신들이 함께 디지털 교육을 받는 모습",
    caption: "스마트폰과 함께 열리는 새 세계",
    category: "교육",
    date: "2024.03",
  },
  {
    id: "g2",
    src: "/images/gallery_sample_02_korean_1768879090680.png",
    alt: "푸드뱅크 자원봉사자들이 식품을 정리하는 모습",
    caption: "이웃의 식탁을 채우는 손길들",
    category: "푸드뱅크",
    date: "2024.05",
  },
  {
    id: "g3",
    src: "/images/gallery_sample_03_korean_1768879106608.png",
    alt: "센터 공간에서 함께 모인 공동체",
    caption: "14평이 품은 따뜻한 공동체",
    category: "행사",
    date: "2024.07",
  },
  {
    id: "g4",
    src: "/images/hero_foodbank.jpg",
    alt: "푸드뱅크 박스를 든 봉사자",
    caption: "나눔은 매주 수요일 이어집니다",
    category: "푸드뱅크",
    date: "2024.09",
  },
  {
    id: "g5",
    src: "/images/hero_community_korean_1768879054545.png",
    alt: "공동체 모임 전경",
    caption: "함께여서 가능했던 시간",
    category: "행사",
    date: "2024.11",
  },
  {
    id: "g6",
    src: "/images/header_about_bible_1768878741549.png",
    alt: "신앙 공동체 말씀 나눔",
    caption: "말씀 위에 세운 배움의 자리",
    category: "교육",
    date: "2025.02",
  },
  {
    id: "g7",
    src: "/images/hero_interior_1768878700835.png",
    alt: "센터 내부 전경",
    caption: "작은 공간, 큰 이야기가 시작되다",
    category: "행사",
    date: "2025.04",
  },
  {
    id: "g8",
    src: "/images/content_vision_1768878800425.png",
    alt: "비전을 나누는 모임",
    caption: "다음 세대를 위한 비전 선포",
    category: "교육",
    date: "2025.07",
  },
  {
    id: "g9",
    src: "/images/hero_exterior_1768878683608.png",
    alt: "경인교회 외관",
    caption: "지역사회 안에 뿌리내린 공간",
    category: "행사",
    date: "2026.01",
  },
];

// ─── 행사 하이라이트 데이터 ──────────────────────────────────────────────────────

const highlights = [
  {
    no: "No.01",
    title: "2024 어르신 디지털 교육 수료식",
    date: "2024년 12월 15일",
    place: "우리함께 평생교육센터",
    body: "총 32명의 어르신이 12주 과정을 마쳤습니다. 스마트폰 활용부터 키오스크 실습까지, 14평 안에서 작은 혁명이 일어났습니다.",
  },
  {
    no: "No.02",
    title: "경인 푸드뱅크 2,000회 나눔 기념",
    date: "2025년 3월 8일",
    place: "경인교회 푸드뱅크",
    body: "2020년 첫 나눔부터 2,000번째 배분까지. 지역 72가정에 식료품을 전달하며 쌓아온 신뢰의 기록입니다.",
  },
  {
    no: "No.03",
    title: "봄맞이 공동체 나들이",
    date: "2026년 4월 5일",
    place: "용인 문수산 근린공원",
    body: "교육생, 봉사자, 교인이 함께한 봄 소풍. 14평 밖으로 나온 우리함께의 풍경을 기록했습니다.",
  },
];

// ─── 컴포넌트 ──────────────────────────────────────────────────────────────────

const CATEGORIES: Category[] = ["전체", "교육", "푸드뱅크", "행사"];

export default function GalleryPage() {
  const [active, setActive] = useState<Category>("전체");

  const filtered =
    active === "전체"
      ? galleryItems
      : galleryItems.filter((g) => g.category === active);

  const [feature, ...rest] = filtered;

  return (
    <>
      {/* 1. PageHeader */}
      <PageHeader
        eyebrow="Gallery · 2024–2026"
        title="14평 공간에서 자라난 장면들"
        subtitle="교육·나눔·공동체 활동의 기록 — 매 순간이 우리의 역사입니다"
        backgroundImage="/images/gallery_sample_01_1768878833514.png"
      />

      {/* 2. 필터 바 */}
      <section className="bg-paper border-b border-line sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4">
          <nav
            aria-label="갤러리 카테고리 필터"
            className="flex items-center gap-8 overflow-x-auto py-4 scrollbar-hide"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={[
                  "relative shrink-0 text-[17px] font-medium tracking-tight transition-colors duration-200 pb-1",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-sm",
                  active === cat
                    ? "text-sacred-900 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-sacred-900"
                    : "text-ink-400 hover:text-ink-700",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* 3. 갤러리 그리드 */}
      <section className="bg-paper py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4 space-y-6">

          {/* Feature 이미지 */}
          {feature && (
            <figure className="relative w-full overflow-hidden rounded-[var(--radius-lg)] group aspect-[16/9] md:aspect-[21/9]">
              <Image
                src={feature.src}
                alt={feature.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sacred-900/80 via-sacred-900/20 to-transparent" />
              {/* 카테고리 태그 */}
              <div className="absolute top-5 left-5">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/90 border border-white/30 px-3 py-1 rounded-full backdrop-blur-sm">
                  {feature.category}
                </span>
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                <p className="font-serif italic text-[13px] md:text-[15px] text-white/70 mb-1 kr">
                  [{feature.category}] · {feature.date}
                </p>
                <p className="font-serif text-xl md:text-2xl font-semibold leading-snug kr-tight">
                  {feature.caption}
                </p>
              </figcaption>
            </figure>
          )}

          {/* 나머지 3열 그리드 */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {rest.map((item, i) => (
                <figure
                  key={item.id}
                  className="relative overflow-hidden rounded-[var(--radius-md)] group aspect-[4/3] animate-fade-in-up"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sacred-900/80 via-sacred-900/20 to-transparent" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-serif italic text-[13px] text-white/65 mb-0.5 kr">
                      [{item.category}] · {item.date}
                    </p>
                    <p className="font-serif text-[17px] font-medium leading-snug kr-tight">
                      {item.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p className="text-center text-ink-400 text-[17px] py-20 kr">
              해당 카테고리의 사진이 준비 중입니다.
            </p>
          )}
        </div>
      </section>

      {/* 4. 최근 행사 하이라이트 */}
      <section className="bg-paper-warm border-t border-line py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* 섹션 헤더 */}
          <div className="mb-10 md:mb-14">
            <p className="text-primary-600 text-sm tracking-[0.3em] uppercase mb-3">
              Recent Events
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-sacred-900 kr-tight">
              최근 행사 하이라이트
            </h2>
            <div className="mt-4 w-16 h-px bg-primary-400/60" />
          </div>

          {/* 3열 아티클 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {highlights.map((h, i) => (
              <article
                key={h.no}
                className="flex flex-col gap-4 p-6 md:p-7 bg-paper rounded-[var(--radius-md)] border border-line animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="font-serif text-[13px] text-primary-600 tracking-widest font-semibold">
                  {h.no}
                </span>
                <h3 className="font-serif text-[19px] md:text-[21px] font-bold text-sacred-900 leading-snug kr-tight">
                  {h.title}
                </h3>
                <dl className="flex flex-col gap-1 text-[14px] text-ink-500 kr">
                  <div className="flex gap-2">
                    <dt className="sr-only">날짜</dt>
                    <dd>{h.date}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="sr-only">장소</dt>
                    <dd className="text-ink-400">{h.place}</dd>
                  </div>
                </dl>
                <p className="text-[17px] text-ink-700 leading-[1.8] kr border-t border-line-soft pt-4">
                  {h.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 더 많은 사진 보기 */}
      <section className="bg-paper border-t border-line py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl md:text-2xl font-semibold text-sacred-900 kr-tight mb-1">
              더 많은 사진을 보시겠어요?
            </p>
            <p className="text-[15px] text-ink-500 kr">
              인스타그램에서 실시간 활동 사진을 확인하세요.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="https://instagram.com" /* placeholder */
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sacred-900 text-white text-[15px] font-medium transition-opacity hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              인스타그램 보기
            </a>
            <a
              href="tel:031-000-0000" /* placeholder */
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line text-sacred-900 text-[15px] font-medium transition-colors hover:bg-warm-100"
            >
              문의 전화
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
