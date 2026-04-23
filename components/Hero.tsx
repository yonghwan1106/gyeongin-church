import Image from "next/image";
import Link from "next/link";
import { siteIdentity } from "@/lib/navigation";
import HeroDesktopSlider from "./HeroDesktopSlider";

/* ------------------------------------------------------------------ */
/*  Variant B (Mobile) — 기존 masthead 데이터                           */
/* ------------------------------------------------------------------ */

const mastFootCols = [
  {
    num: "01 · 디지털 교육",
    title: "종교·연령·장애 무관",
    body: "40~60대, 어르신, 장애인 이웃. 진입 장벽 없이 누구나 함께하는 공간입니다.",
  },
  {
    num: "02 · 푸드뱅크",
    title: "이웃과 온기를 나눕니다",
    body: "지역 취약계층에게 정기적으로 식품을 전달합니다. 자원봉사·기탁 모두 환영합니다.",
  },
  {
    num: "03 · 공동체",
    title: "종교를 넘어 모든 이웃과",
    body: "시민기자단·공간 공유·봉사활동. 함께 만들어가는 14평의 기적.",
  },
];

const stripImages = [
  {
    src: "/images/hero_education_ai.png",
    alt: "40~60대 성인들이 교육실에서 AI를 배우는 모습",
    label: "Photo 01 · Education",
    caption: "디지털 수업 풍경",
    wide: true,
  },
  {
    src: "/images/hero_foodbank.jpg",
    alt: "푸드뱅크 식품 박스를 든 자원봉사자",
    label: "Photo 02 · Foodbank",
    caption: "푸드뱅크 현장",
    wide: false,
  },
  {
    src: "/images/hero_interior_1768878700835.png",
    alt: "센터 내부 14평의 공간",
    label: "Photo 03 · Community",
    caption: "시민기자단",
    wide: false,
  },
];

/* ------------------------------------------------------------------ */
/*  Variant A (Desktop) — identity strip 데이터                        */
/* ------------------------------------------------------------------ */

const identityCells = [
  {
    num: "14평",
    eyebrow: "작은 공간, 큰 기적",
    desc: "용인 동백, 단 14평에서 시작된 교육과 나눔",
  },
  {
    num: "100%",
    eyebrow: "무료 · 종교·연령·장애 무관",
    desc: "전 과정 완전 무료, 어떤 비용도 받지 않습니다",
  },
  {
    num: "3",
    eyebrow: "나눔 사역 · 교육·푸드뱅크·공동체",
    desc: "디지털교육, 푸드뱅크, 공동체. 함께 만드는 기적.",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Hero() {
  return (
    <>
      {/* ============================================================ */}
      {/* MOBILE: Variant B Masthead (기존 구현 그대로)                  */}
      {/* ============================================================ */}
      <div className="md:hidden">
        {/* MASTHEAD */}
        <section
          className="kr-tight"
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "56px 32px 40px",
            borderBottom: "1px solid var(--color-line)",
          }}
          aria-label="센터 소개 마스트헤드"
        >
          {/* eyebrow / mast-top */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              paddingBottom: "28px",
              borderBottom: "1px solid var(--color-line)",
              fontSize: "12px",
              letterSpacing: "0.3em",
              color: "var(--color-primary-700)",
              textTransform: "uppercase",
              fontWeight: 700,
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            <span>VOL.XIV · 용인 동백 · 2026</span>
            <span
              className="font-serif"
              style={{
                fontSize: "14px",
                letterSpacing: "0.1em",
                fontStyle: "italic",
                color: "var(--color-ink-600)",
                textTransform: "none",
              }}
            >
              {siteIdentity.legalShort}
            </span>
            <span>Since Day One · Free · For Everyone</span>
          </div>

          {/* giant serif title */}
          <h1
            className="font-serif kr-tight"
            style={{
              fontSize: "clamp(64px, 10vw, 148px)",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              lineHeight: 0.92,
              color: "var(--color-sacred-900)",
              margin: "48px 0 14px",
              wordBreak: "keep-all",
            }}
          >
            배우고 나누며,
            <br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--color-primary-600)",
              }}
            >
              일자리
            </em>
            까지.
          </h1>

          {/* mast-foot — 3-column */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px",
              paddingTop: "36px",
              borderTop: "1px solid var(--color-line)",
              marginTop: "36px",
            }}
          >
            {mastFootCols.map((col) => (
              <div key={col.num}>
                <div
                  className="font-serif"
                  style={{
                    fontSize: "13px",
                    color: "var(--color-primary-700)",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                    marginBottom: "6px",
                  }}
                >
                  {col.num}
                </div>
                <h4
                  className="font-serif kr-tight"
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "var(--color-sacred-900)",
                    margin: "0 0 10px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {col.title}
                </h4>
                <p
                  className="kr"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "var(--color-ink-700)",
                    margin: 0,
                    wordBreak: "keep-all",
                  }}
                >
                  {col.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3-PHOTO STRIP */}
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "0 32px 72px",
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr",
            gap: "4px",
          }}
          aria-label="센터 사진 모음"
        >
          {stripImages.map((img) => (
            <div
              key={img.src}
              style={{
                position: "relative",
                aspectRatio: "4/3",
                overflow: "hidden",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={
                  img.wide
                    ? "(max-width: 768px) 100vw, 55vw"
                    : "(max-width: 768px) 100vw, 25vw"
                }
                style={{ objectFit: "cover", objectPosition: "center" }}
                priority={false}
              />
              {/* caption overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "18px 20px 14px",
                  color: "#fff",
                  background:
                    "linear-gradient(180deg, transparent, rgba(26,22,18,0.85))",
                  fontFamily: "var(--font-family-serif)",
                  fontSize: "13px",
                  letterSpacing: "0.05em",
                }}
              >
                <div
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.25em",
                    color: "var(--color-primary-300)",
                    textTransform: "uppercase",
                    marginBottom: "3px",
                  }}
                >
                  {img.label}
                </div>
                {img.caption}
              </div>
            </div>
          ))}
        </div>

        {/* CTA ROW */}
        <div
          style={{
            maxWidth: "1180px",
            margin: "-40px auto 0",
            padding: "0 32px 80px",
            display: "flex",
            gap: "14px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link href="/education" className="hero-cta-primary">
            무료 교육 신청 →
          </Link>
          <Link href="/about" className="hero-cta-secondary">
            센터 비전 보기
          </Link>
          <span
            style={{
              marginLeft: "auto",
              fontSize: "13px",
              color: "var(--color-ink-500)",
              letterSpacing: "0.08em",
            }}
          >
            SCROLL ↓ &nbsp;다음 장 읽기
          </span>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP: Variant A Hero (슬라이더 Client Component)          */}
      {/* ============================================================ */}
      <div className="hidden md:block">
        <HeroDesktopSlider />
      </div>
    </>
  );
}
