import Link from "next/link";
import { siteIdentity } from "@/lib/navigation";

export default function EducationCTA() {
  return (
    <>
      {/* ===== Variant A — Desktop (md+) ===== */}
      <section className="hidden md:block bg-gradient-to-br from-care-600 to-care-700 py-24 px-8">
        <div className="max-w-[760px] mx-auto text-center">
          {/* Eyebrow */}
          <p
            className="text-primary-300 font-bold uppercase mb-4"
            style={{ fontSize: "11px", letterSpacing: "0.3em" }}
          >
            Apply Now
          </p>

          {/* Heading */}
          <h2
            className="font-serif text-white font-bold tracking-[-0.02em] leading-tight mb-4"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            함께 시작해 볼까요
          </h2>

          {/* Description */}
          <p
            className="text-white/[0.88] leading-[1.7] kr"
            style={{ fontSize: "18px", wordBreak: "keep-all" }}
          >
            전화 한 통이면 됩니다. 상담부터 수업 시작까지 모두 무료로 진행됩니다.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex gap-3.5 justify-center flex-wrap">
            <a
              href={`tel:${siteIdentity.phonePrimary}`}
              className="bg-white text-care-700 px-7 py-4 rounded-full font-bold min-h-[56px] inline-flex items-center hover:bg-paper-warm transition-colors duration-200"
              aria-label={`전화하기 ${siteIdentity.phonePrimary}`}
            >
              📞 {siteIdentity.phonePrimary}
            </a>
            <Link
              href="/education"
              className="bg-transparent text-white border border-white/50 px-7 py-4 rounded-full font-semibold min-h-[56px] inline-flex items-center hover:bg-white/10 transition-colors duration-200"
            >
              교육 프로그램 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Variant B — Mobile (below md) ===== */}
      <section className="md:hidden py-[140px] px-8 bg-paper border-y border-line text-center">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p
            className="text-primary-700 kr"
            style={{ fontSize: "11px", letterSpacing: "0.2em", fontWeight: 700 }}
          >
            전화 한 통이면 됩니다
          </p>

          {/* Giant phone number as typography */}
          <a
            href={`tel:${siteIdentity.phonePrimary}`}
            className="group inline-flex items-center gap-6 text-sacred-900 hover:text-care-600 transition-colors duration-300 mt-8 mb-6"
            style={{
              fontFamily: "var(--font-serif, Georgia, serif)",
              fontSize: "clamp(56px, 10vw, 128px)",
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 0.95,
              textDecoration: "none",
            }}
            aria-label={`전화하기 ${siteIdentity.phonePrimary}`}
          >
            {/* Circle icon */}
            <span
              className="inline-grid place-items-center shrink-0 rounded-full bg-care-500 text-white"
              style={{ width: "4rem", height: "4rem", fontSize: "1.75rem" }}
              aria-hidden="true"
            >
              📞
            </span>
            {siteIdentity.phonePrimary}
          </a>

          {/* Sub-description */}
          <p
            className="text-ink-700 kr mx-auto"
            style={{ fontSize: "17px", lineHeight: 1.8, maxWidth: "48ch" }}
          >
            어르신·장애인 · 교재비도 받지 않습니다 · 대기 없이 바로 상담
          </p>

          {/* Secondary link */}
          <Link
            href="/education"
            className="inline-block mt-6 text-primary-700 hover:underline transition-all"
            style={{ fontSize: "14px", letterSpacing: "0.02em" }}
          >
            교육 프로그램 보기 →
          </Link>
        </div>
      </section>
    </>
  );
}
