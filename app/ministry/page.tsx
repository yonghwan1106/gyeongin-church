import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import OutreachOverview from "@/components/OutreachOverview";
import { siteIdentity } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "나눔 사역",
  description:
    "푸드뱅크, 공간 공유, 시민기자단 — 우리함께 나눔센터의 세 가지 사역으로 이웃과 함께합니다.",
};

export default function MinistryPage() {
  return (
    <>
      {/* 1. PageHeader */}
      <PageHeader
        eyebrow="Ministry · 3 Outreach Programs"
        title="이웃과 온기를 나누는, 가장 가까운 손길"
        subtitle="푸드뱅크로 식탁을 나누고, 공간 공유로 동역자와 함께하며, 시민기자단으로 이웃의 목소리를 전합니다."
        backgroundImage="/images/hero_foodbank.jpg"
      />

      {/* 2. OutreachOverview — sacred-900 다크 3열 에디토리얼 카드 */}
      <OutreachOverview />

      {/* 3. #foodbank — 푸드뱅크 상세 */}
      <section
        id="foodbank"
        className="scroll-mt-24 py-20 md:py-28"
        style={{ background: "var(--color-paper)" }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          {/* Section eyebrow */}
          <p
            className="font-serif uppercase tracking-[0.3em] mb-4"
            style={{ fontSize: "11px", color: "var(--color-primary-600)", fontWeight: 700 }}
          >
            No.01 — Food Bank
          </p>
          <h2
            className="font-serif kr-tight"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "var(--color-sacred-900)",
              marginBottom: "16px",
            }}
          >
            푸드뱅크
          </h2>
          <p
            className="kr"
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "var(--color-ink-700)",
              maxWidth: "52ch",
              marginBottom: "48px",
            }}
          >
            기부받은 식품을 분류·검수하여 형편이 어려운 이웃에게 정성껏 전달합니다.
            작은 나눔이 14평의 기적을 함께 만드는 출발점입니다.
          </p>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {/* 운영 시간 */}
            <div
              style={{
                paddingTop: "24px",
                borderTop: "2px solid var(--color-primary-400)",
              }}
            >
              <p
                className="font-serif uppercase tracking-[0.2em]"
                style={{ fontSize: "11px", color: "var(--color-primary-600)", fontWeight: 700, marginBottom: "12px" }}
              >
                운영 시간
              </p>
              <dl className="space-y-3">
                {[
                  { dt: "평일", dd: "오전 10시 – 오후 5시" },
                  { dt: "토요일", dd: "오전 10시 – 오후 2시" },
                  { dt: "일요일·공휴일", dd: "휴무" },
                ].map(({ dt, dd }) => (
                  <div key={dt} className="flex flex-col gap-0.5">
                    <dt
                      className="font-serif"
                      style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-ink-700)" }}
                    >
                      {dt}
                    </dt>
                    <dd
                      className="kr"
                      style={{ fontSize: "16px", lineHeight: 1.6, color: "var(--color-ink-600)" }}
                    >
                      {dd}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* 이용 방법 */}
            <div
              style={{
                paddingTop: "24px",
                borderTop: "2px solid var(--color-primary-400)",
              }}
            >
              <p
                className="font-serif uppercase tracking-[0.2em]"
                style={{ fontSize: "11px", color: "var(--color-primary-600)", fontWeight: 700, marginBottom: "12px" }}
              >
                이용 방법
              </p>
              <ol className="space-y-4">
                {[
                  { step: "01", text: "전화 또는 방문으로 사전 신청" },
                  { step: "02", text: "담당자 확인 및 대상 여부 검토" },
                  { step: "03", text: "수령 일정 안내 후 물품 전달" },
                ].map(({ step, text }) => (
                  <li key={step} className="flex items-start gap-3">
                    <span
                      className="font-serif shrink-0"
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: "var(--color-primary-500)",
                        paddingTop: "3px",
                      }}
                    >
                      {step}
                    </span>
                    <span
                      className="kr"
                      style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-ink-700)" }}
                    >
                      {text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* 기탁 방법 */}
            <div
              style={{
                paddingTop: "24px",
                borderTop: "2px solid var(--color-care-500)",
              }}
            >
              <p
                className="font-serif uppercase tracking-[0.2em]"
                style={{ fontSize: "11px", color: "var(--color-care-500)", fontWeight: 700, marginBottom: "12px" }}
              >
                기탁 방법
              </p>
              <dl className="space-y-4">
                {[
                  { dt: "직접 방문", dd: "센터로 물품을 직접 가져오실 수 있습니다." },
                  { dt: "전화 예약", dd: "사전 전화 후 수거 일정을 협의합니다." },
                  { dt: "가능 품목", dd: "가공식품, 주식류, 신선식품, 생활용품" },
                ].map(({ dt, dd }) => (
                  <div key={dt} className="flex flex-col gap-0.5">
                    <dt
                      className="font-serif"
                      style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-care-600)" }}
                    >
                      {dt}
                    </dt>
                    <dd
                      className="kr"
                      style={{ fontSize: "15px", lineHeight: 1.7, color: "var(--color-ink-600)" }}
                    >
                      {dd}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-12">
            <a
              href={`tel:${siteIdentity.phonePrimary}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-colors"
              style={{
                minHeight: "56px",
                background: "var(--color-primary-700)",
                color: "#fff",
                fontSize: "16px",
              }}
            >
              푸드뱅크 문의 · {siteIdentity.phonePrimary}
            </a>
          </div>
        </div>
      </section>

      {/* 4. #space-sharing — 공간 공유 상세 */}
      <section
        id="space-sharing"
        className="scroll-mt-24 py-20 md:py-28"
        style={{ background: "var(--color-paper-warm)" }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <p
            className="font-serif uppercase tracking-[0.3em] mb-4"
            style={{ fontSize: "11px", color: "var(--color-primary-600)", fontWeight: 700 }}
          >
            No.02 — Space Sharing
          </p>
          <h2
            className="font-serif kr-tight"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "var(--color-sacred-900)",
              marginBottom: "16px",
            }}
          >
            공간 공유
          </h2>
          <p
            className="kr"
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "var(--color-ink-700)",
              maxWidth: "52ch",
              marginBottom: "48px",
            }}
          >
            14평 다목적실과 교육 인프라를 개척교회·비영리 단체에 무료로 개방합니다.
            함께 성장하는 사역을 위해 공간과 시설을 나눕니다.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* 대상 */}
            <div
              style={{
                paddingTop: "24px",
                borderTop: "2px solid var(--color-primary-400)",
              }}
            >
              <p
                className="font-serif uppercase tracking-[0.2em]"
                style={{ fontSize: "11px", color: "var(--color-primary-600)", fontWeight: 700, marginBottom: "16px" }}
              >
                이용 대상
              </p>
              <ul className="space-y-3">
                {[
                  "개척교회 목사님",
                  "비영리 단체 / 마을 공동체",
                  "평생학습 강사 / 시니어·장애인 교육 담당자",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="font-serif shrink-0"
                      style={{ color: "var(--color-primary-500)", fontWeight: 700, paddingTop: "2px" }}
                      aria-hidden="true"
                    >
                      –
                    </span>
                    <span
                      className="kr"
                      style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-ink-700)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 제공 시설 */}
            <div
              style={{
                paddingTop: "24px",
                borderTop: "2px solid var(--color-primary-400)",
              }}
            >
              <p
                className="font-serif uppercase tracking-[0.2em]"
                style={{ fontSize: "11px", color: "var(--color-primary-600)", fontWeight: 700, marginBottom: "16px" }}
              >
                제공 시설·인프라
              </p>
              <ul className="space-y-3">
                {[
                  "다목적실 14평 (정원 약 12명)",
                  "빔프로젝터 / 화이트보드 / 와이파이",
                  "구글 워크스페이스 교육 계정 지원",
                  "휠체어 접근 가능한 무장애 환경",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="font-serif shrink-0"
                      style={{ color: "var(--color-care-500)", fontWeight: 700, paddingTop: "2px" }}
                      aria-hidden="true"
                    >
                      –
                    </span>
                    <span
                      className="kr"
                      style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-ink-700)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 신청 절차 */}
          <div className="mt-12">
            <p
              className="font-serif uppercase tracking-[0.2em] mb-6"
              style={{ fontSize: "11px", color: "var(--color-primary-600)", fontWeight: 700 }}
            >
              신청 절차
            </p>
            <ol className="flex flex-col md:flex-row gap-6 md:gap-0">
              {[
                { step: "01", text: "전화 또는 방문 상담" },
                { step: "02", text: "일정 및 목적 협의" },
                { step: "03", text: "사용 확정 및 안내" },
              ].map(({ step, text }, i) => (
                <li key={step} className="flex items-center gap-4 md:flex-1">
                  <span
                    className="font-serif shrink-0 flex items-center justify-center rounded-full"
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "var(--color-primary-200)",
                      color: "var(--color-primary-900)",
                      fontSize: "13px",
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {step}
                  </span>
                  <span
                    className="kr"
                    style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-ink-700)" }}
                  >
                    {text}
                  </span>
                  {i < 2 && (
                    <span
                      className="hidden md:block ml-auto pr-4"
                      style={{ color: "var(--color-primary-300)", fontSize: "20px" }}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10">
            <a
              href={`tel:${siteIdentity.phonePrimary}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-colors"
              style={{
                minHeight: "56px",
                background: "var(--color-primary-700)",
                color: "#fff",
                fontSize: "16px",
              }}
            >
              공간 사용 문의 · {siteIdentity.phonePrimary}
            </a>
            <p
              className="kr mt-3"
              style={{ fontSize: "14px", color: "var(--color-ink-500)" }}
            >
              사전 협의 후 일정 조율로 진행합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 5. #citizen-press — 시민기자단 상세 */}
      <section
        id="citizen-press"
        className="scroll-mt-24 py-20 md:py-28"
        style={{ background: "var(--color-paper)" }}
      >
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <p
            className="font-serif uppercase tracking-[0.3em] mb-4"
            style={{ fontSize: "11px", color: "var(--color-primary-600)", fontWeight: 700 }}
          >
            No.03 — Citizen Press
          </p>
          <h2
            className="font-serif kr-tight"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "var(--color-sacred-900)",
              marginBottom: "16px",
            }}
          >
            시민기자단
          </h2>
          <p
            className="kr"
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "var(--color-ink-700)",
              maxWidth: "52ch",
              marginBottom: "48px",
            }}
          >
            경인블루저널과 협업하여 어르신·장애인·다문화 이웃의 이야기를 직접 취재·보도합니다.
            미디어 선교의 현장에 함께하세요.
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
            {/* 활동 내용 */}
            <div
              style={{
                paddingTop: "24px",
                borderTop: "2px solid var(--color-primary-400)",
              }}
            >
              <p
                className="font-serif uppercase tracking-[0.2em]"
                style={{ fontSize: "11px", color: "var(--color-primary-600)", fontWeight: 700, marginBottom: "16px" }}
              >
                활동 내용
              </p>
              <ul className="space-y-3">
                {[
                  "지역 이웃 인터뷰 및 기사 작성",
                  "공공기관·복지시설 정책 보도",
                  "경인블루저널 채널에 기사 게시",
                  "AI 글쓰기 도구 활용 취재 지원",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="font-serif shrink-0"
                      style={{ color: "var(--color-primary-500)", fontWeight: 700, paddingTop: "2px" }}
                      aria-hidden="true"
                    >
                      –
                    </span>
                    <span
                      className="kr"
                      style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-ink-700)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 모집 안내 */}
            <div
              style={{
                paddingTop: "24px",
                borderTop: "2px solid var(--color-primary-400)",
              }}
            >
              <p
                className="font-serif uppercase tracking-[0.2em]"
                style={{ fontSize: "11px", color: "var(--color-primary-600)", fontWeight: 700, marginBottom: "16px" }}
              >
                모집 안내
              </p>
              <ul className="space-y-3">
                {[
                  "AI 작가반 수료자 우선 추천",
                  "미수료자도 전화 상담 후 신청 가능",
                  "자체 기자증 발급",
                  "정기 활동 시 활동비 지원",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="font-serif shrink-0"
                      style={{ color: "var(--color-care-500)", fontWeight: 700, paddingTop: "2px" }}
                      aria-hidden="true"
                    >
                      –
                    </span>
                    <span
                      className="kr"
                      style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--color-ink-700)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 최근 기사 미리보기 3건 */}
          <div
            style={{
              paddingTop: "32px",
              borderTop: "1px solid var(--color-line)",
              marginBottom: "40px",
            }}
          >
            <p
              className="font-serif uppercase tracking-[0.2em] mb-8"
              style={{ fontSize: "11px", color: "var(--color-primary-600)", fontWeight: 700 }}
            >
              최근 기사 미리보기
            </p>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  label: "경인블루저널",
                  date: "2026.04",
                  title: "동백동 어르신들의 디지털 첫걸음, AI 작가반 현장 르포",
                  href: "https://www.gyeonginblue.kr",
                },
                {
                  label: "시민기자단 기사",
                  date: "2026.04",
                  title: "용인시의회 웹 보안 사각지대 — 개인정보 노출 취약점 실태",
                  href: "https://www.gyeonginblue.kr",
                },
                {
                  label: "경인블루저널",
                  date: "2026.03",
                  title: "14평 안에서 피어난 기적 — 우리함께 나눔센터 3년의 기록",
                  href: "https://www.gyeonginblue.kr",
                },
              ].map(({ label, date, title, href }) => (
                <article
                  key={title}
                  style={{
                    paddingTop: "20px",
                    borderTop: "1px solid var(--color-line-soft)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="font-serif uppercase tracking-[0.15em]"
                      style={{ fontSize: "10px", color: "var(--color-primary-500)", fontWeight: 700 }}
                    >
                      {label}
                    </span>
                    <span
                      style={{ fontSize: "10px", color: "var(--color-ink-400)" }}
                    >
                      {date}
                    </span>
                  </div>
                  <h3
                    className="font-serif kr-tight"
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: 1.4,
                      letterSpacing: "-0.01em",
                      color: "var(--color-sacred-900)",
                      marginBottom: "12px",
                    }}
                  >
                    {title}
                  </h3>
                  <Link
                    href={href}
                    className="font-serif"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.1em",
                      color: "var(--color-primary-600)",
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    기사 읽기 →
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div>
            <a
              href={`tel:${siteIdentity.phonePrimary}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-colors"
              style={{
                minHeight: "56px",
                background: "var(--color-care-500)",
                color: "#fff",
                fontSize: "16px",
              }}
            >
              시민기자단 신청 문의 · {siteIdentity.phonePrimary}
            </a>
          </div>
        </div>
      </section>

      {/* 6. 하단 CTA */}
      <section
        className="py-20 md:py-28"
        style={{ background: "var(--color-paper-warm)" }}
      >
        <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
          <p
            className="font-serif uppercase tracking-[0.3em] mb-4"
            style={{ fontSize: "11px", color: "var(--color-primary-600)", fontWeight: 700 }}
          >
            Join Us
          </p>
          <h2
            className="font-serif kr-tight"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.15,
              color: "var(--color-sacred-900)",
              marginBottom: "16px",
            }}
          >
            함께 참여하기
          </h2>
          <p
            className="kr"
            style={{
              fontSize: "17px",
              lineHeight: 1.8,
              color: "var(--color-ink-700)",
              maxWidth: "44ch",
              margin: "0 auto 40px",
            }}
          >
            나눔, 공간, 미디어 — 어느 한 가지라도 마음에 닿는다면 언제든지 연락주세요.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteIdentity.phonePrimary}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-colors"
              style={{
                minHeight: "56px",
                background: "var(--color-care-500)",
                color: "#fff",
                fontSize: "16px",
              }}
            >
              전화 문의 · {siteIdentity.phonePrimary}
            </a>
            <Link
              href="/location"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-full transition-colors border"
              style={{
                minHeight: "56px",
                borderColor: "var(--color-line-strong)",
                color: "var(--color-ink-700)",
                fontSize: "16px",
                background: "transparent",
              }}
            >
              오시는길 보기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
