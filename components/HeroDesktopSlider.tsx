"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  슬라이드 데이터                                                       */
/* ------------------------------------------------------------------ */

const slides = [
  {
    image: "/images/hero_education_ai.png",
    imageAlt: "40~60대 성인들이 교육실에서 AI를 배우는 모습",
    imagePosition: "center 38%",
    eyebrow: "사단법인 · Est. 경기도 용인 기흥",
    legalName: "우리함께 평생교육·나눔센터",
    title: (
      <>
        배우고 나누며,
        <br />
        <em style={{ fontStyle: "normal", color: "var(--color-primary-300)" }}>
          일자리까지.
        </em>
      </>
    ),
    lede: "“디지털 세상의 주인이 되어보세요.” 어르신·장애인도 100% 무료, 종교·연령 무관. 14평 공간에서 시작된 든든한 다리.",
    ctaPrimary: { label: "무료 교육 신청하기", href: "/education" },
    ctaSecondary: { label: "14평의 기적 보기", href: "/about" },
  },
  {
    image: "/images/hero_foodbank.jpg",
    imageAlt: "푸드뱅크 식품 박스를 든 자원봉사자",
    imagePosition: "center center",
    eyebrow: "Foodbank · 이웃과 나누는 한 끼",
    legalName: "우리함께 평생교육·나눔센터",
    title: (
      <>
        이웃과 온기를 나누는
        <br />
        <em style={{ fontStyle: "normal", color: "var(--color-primary-300)" }}>
          가장 가까운 손길.
        </em>
      </>
    ),
    lede: "푸드뱅크부터 시민기자단까지, 종교를 떠나 누구나 함께할 수 있는 나눔의 공간입니다.",
    ctaPrimary: { label: "푸드뱅크 안내", href: "/ministry/foodbank" },
    ctaSecondary: { label: "나눔 사역 전체", href: "/ministry" },
  },
  {
    image: "/images/hero_interior_1768878700835.png",
    imageAlt: "센터 내부 14평의 공간",
    imagePosition: "center center",
    eyebrow: "Community · 시민기자단",
    legalName: "우리함께 평생교육·나눔센터",
    title: (
      <>
        작지만 큰
        <br />
        <em style={{ fontStyle: "normal", color: "var(--color-primary-300)" }}>
          14평의 기적.
        </em>
      </>
    ),
    lede: "기술은 차갑지만, 그것을 나누는 마음은 따뜻해야 합니다. 어르신·장애인의 디지털 자립을 함께합니다.",
    ctaPrimary: { label: "센터 비전 보기", href: "/about" },
    ctaSecondary: { label: "커뮤니티 소식", href: "/community" },
  },
];

/* ------------------------------------------------------------------ */
/*  Identity strip 데이터                                               */
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

const INTERVAL_MS = 8000;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function HeroDesktopSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedMotion = useRef(false);

  // prefers-reduced-motion 체크
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      reducedMotion.current = true;
    }
  }, []);

  const goToSlide = useCallback((index: number) => {
    setVisible(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setVisible(true);
    }, 350);
  }, []);

  // 자동 전환 타이머 설정
  const startInterval = useCallback(() => {
    if (reducedMotion.current) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setVisible(true);
      }, 350);
    }, INTERVAL_MS);
  }, []);

  const stopInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // 자동 전환 실행/정지
  useEffect(() => {
    if (!paused) {
      startInterval();
    } else {
      stopInterval();
    }
    return () => stopInterval();
  }, [paused, startInterval, stopInterval]);

  // 수동 클릭 시 일시 정지 후 재개
  const handleManualSlide = (index: number) => {
    setPaused(true);
    goToSlide(index);
    // 12초 후 자동 전환 재개
    setTimeout(() => setPaused(false), 12000);
  };

  const slide = slides[currentSlide];

  return (
    <>
      {/* Hero A — full-bleed 슬라이더 */}
      <section
        aria-label="센터 소개 히어로 슬라이더"
        aria-live="polite"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{
          position: "relative",
          height: "720px",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        {/* Background images — 모든 이미지 사전 렌더, opacity로 전환 */}
        {slides.map((s, i) => (
          <div
            key={s.image}
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              opacity: i === currentSlide ? 1 : 0,
              transition: "opacity 700ms ease-in-out",
              zIndex: 0,
            }}
          >
            <Image
              src={s.image}
              alt={s.imageAlt}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: s.imagePosition,
              }}
            />
          </div>
        ))}

        {/* Dual scrim */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            background: [
              "linear-gradient(180deg, rgba(26,22,18,0.55) 0%, rgba(26,22,18,0.35) 40%, rgba(26,22,18,0.85) 100%)",
              "linear-gradient(90deg, rgba(26,22,18,0.45), transparent 60%)",
            ].join(", "),
          }}
        />

        {/* Inner content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1180px",
            margin: "0 auto",
            padding: "180px 32px 140px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 700ms ease-in-out, transform 700ms ease-in-out",
          }}
        >
          {/* Legal badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 14px 8px 12px",
              background: "rgba(26,22,18,0.5)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(232,196,125,0.35)",
              borderLeft: "3px solid var(--color-primary-400)",
              borderRadius: "4px",
              marginBottom: "26px",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "6px",
                height: "6px",
                background: "var(--color-primary-400)",
                borderRadius: "50%",
                boxShadow: "0 0 0 3px rgba(232,196,125,0.18)",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 700,
                color: "var(--color-primary-300)",
                textTransform: "uppercase",
              }}
            >
              {slide.eyebrow}
            </span>
            <span
              style={{
                fontSize: "12px",
                color: "rgba(255,255,255,0.88)",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}
            >
              {slide.legalName}
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-serif kr-tight"
            style={{
              fontSize: "clamp(44px, 5.5vw, 76px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.12,
              color: "#fff",
              wordBreak: "keep-all",
              maxWidth: "16ch",
              margin: 0,
            }}
          >
            {slide.title}
          </h1>

          {/* Lede */}
          <p
            className="kr"
            style={{
              color: "rgba(255,255,255,0.9)",
              maxWidth: "50ch",
              marginTop: "22px",
              fontSize: "17px",
              lineHeight: 1.7,
            }}
          >
            {slide.lede}
          </p>

          {/* CTA row */}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href={slide.ctaPrimary.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0 32px",
                minHeight: "52px",
                background: "var(--color-care-600)",
                color: "#fff",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {slide.ctaPrimary.label} →
            </Link>
            <Link
              href={slide.ctaSecondary.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0 28px",
                minHeight: "52px",
                background: "rgba(255,255,255,0.10)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {slide.ctaSecondary.label}
            </Link>
          </div>
        </div>

        {/* Slide rail — 인터랙티브 버튼 */}
        <nav
          aria-label="슬라이드 탐색"
          style={{
            position: "absolute",
            top: "50%",
            right: "36px",
            transform: "translateY(-50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            alignItems: "center",
          }}
        >
          {slides.map((_, i) => {
            const isActive = i === currentSlide;
            const label = `슬라이드 ${i + 1}로 이동`;
            const tick = String(i + 1).padStart(2, "0");
            return (
              <button
                key={i}
                onClick={() => handleManualSlide(i)}
                aria-label={label}
                aria-current={isActive ? "true" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 0",
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  fontFamily: "ui-monospace, monospace",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.7)",
                  transition: "color 300ms",
                }}
              >
                <span>{tick}</span>
                <span
                  style={{
                    display: "block",
                    width: isActive ? "48px" : "24px",
                    height: isActive ? "2px" : "1px",
                    background: isActive
                      ? "var(--color-primary-300)"
                      : "rgba(255,255,255,0.4)",
                    transition: "width 300ms, height 300ms, background 300ms",
                  }}
                />
              </button>
            );
          })}
        </nav>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "12px",
            color: "rgba(255,255,255,0.8)",
            fontSize: "10px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
          }}
        >
          <span>Scroll</span>
          <span
            style={{
              display: "block",
              width: "1px",
              height: "44px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.1), var(--color-primary-300), rgba(255,255,255,0.1))",
              animation: "heroScrollPulse 2.4s ease-in-out infinite",
            }}
          />
        </div>
      </section>

      {/* Identity strip */}
      <div
        style={{
          background: "var(--color-sacred-900)",
          color: "var(--color-paper-warm)",
          padding: "22px 32px",
          borderTop: "1px solid rgba(232,196,125,0.2)",
        }}
      >
        <div
          style={{
            maxWidth: "1180px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          {identityCells.map((cell, i) => (
            <div
              key={cell.num}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "0 24px",
                borderRight:
                  i < identityCells.length - 1
                    ? "1px solid rgba(232,196,125,0.15)"
                    : "none",
                paddingLeft: i === 0 ? 0 : undefined,
              }}
            >
              <div
                className="font-serif"
                style={{
                  fontSize: "32px",
                  color: "var(--color-primary-300)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                {cell.num}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--color-primary-300)",
                    fontWeight: 700,
                  }}
                >
                  {cell.eyebrow}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "rgba(243,235,216,0.8)",
                    marginTop: "3px",
                  }}
                >
                  {cell.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
