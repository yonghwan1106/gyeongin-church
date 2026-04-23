import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { siteIdentity } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "푸드뱅크 | 경인교회 우리함께 나눔센터",
  description:
    "경기도 용인시 기흥구 경인교회 푸드뱅크 — 취약계층·고령 1인가구·장애인 가정에 식품을 무료로 지원합니다. 종교를 떠나 누구나 이용할 수 있습니다.",
};

/* ─────────────────────────────────────────
   Section 4: 함께하는 분께 — 후원·봉사 카드 데이터
───────────────────────────────────────── */
const participateCards = [
  {
    no: "No.01",
    title: "식품 기탁",
    desc: "유통기한 1개월 이상 남은 가공식품·주식류·조미료·생활용품을 직접 가져오시거나 사전 연락 후 수거를 요청하실 수 있습니다.",
    action: "기탁 문의",
    href: `tel:${siteIdentity.phonePrimary}`,
  },
  {
    no: "No.02",
    title: "정기 후원",
    desc: "월 1만 원의 정기 후원이 한 가정의 한 달 식탁을 채웁니다. 후원금은 100% 식품 구입과 운영에 사용되며 영수증을 발급합니다.",
    action: "후원 계좌 안내",
    href: "#cta",
  },
  {
    no: "No.03",
    title: "자원봉사",
    desc: "식품 분류·포장·배분 보조·수거 지원 등 다양한 역할이 있습니다. 1365 자원봉사 인증이 가능하며 단체 봉사도 환영합니다.",
    action: "봉사 신청",
    href: `tel:${siteIdentity.phonePrimary}`,
  },
] as const;

/* ─────────────────────────────────────────
   Section 5: 실적 Ledger 데이터
───────────────────────────────────────── */
const ledgerStats = [
  { value: "500", unit: "가구", label: "연간 식품 지원 가구 수", care: false },
  { value: "120", unit: "kg", label: "월평균 식품 처리량", care: false },
  { value: "40", unit: "명", label: "활동 자원봉사자", care: true },
  { value: "100", unit: "% 무료", label: "이용 비용 — 단 한 푼도 받지 않습니다", care: true },
] as const;

export default function FoodbankDetailPage() {
  return (
    <>
      {/* ① PageHeader — 배경 이미지 없음 */}
      <PageHeader
        eyebrow="Food Bank · 이웃과 나누는 한 끼"
        title="종교를 떠나, 누구나"
        subtitle={`용인시 기흥구 동백동에서 운영하는 경인교회 푸드뱅크입니다.\n종교와 무관하게 도움이 필요한 분이라면 누구든 이용하실 수 있습니다.`}
        backgroundImage="/images/hero_foodbank.jpg"
      />

      {/* ② 미션 에디토리얼 히어로 — paper, 2열 */}
      <section className="bg-paper border-b border-line py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            {/* 좌: 거대 serif 타이틀 */}
            <div>
              <p
                className="text-[11px] tracking-[0.3em] uppercase font-bold text-primary-700 mb-6"
              >
                Mission · 왜 지금, 여기서
              </p>
              <h2
                className="font-serif font-bold text-sacred-900 leading-[1.0] tracking-tight kr-tight"
                style={{ fontSize: "clamp(44px, 5.5vw, 80px)", wordBreak: "keep-all" }}
              >
                왜
                <br />
                푸드뱅크인가
              </h2>
              <div className="mt-8 w-16 h-px bg-primary-400" />
            </div>

            {/* 우: lede 본문 */}
            <div className="pt-2 md:pt-14">
              <p
                className="text-[18px] leading-[1.9] text-ink-700 kr mb-6"
                style={{ wordBreak: "keep-all" }}
              >
                용인시 기흥구에는 복지 사각지대에 놓인 고령 1인가구와
                장애인 가정이 적지 않습니다. 공공 급식 서비스가 닿지
                않는 시간, 경인교회 푸드뱅크가 그 자리를 채웁니다.
              </p>
              <p
                className="text-[17px] leading-[1.85] text-ink-600 kr"
                style={{ wordBreak: "keep-all" }}
              >
                2014년 우리함께 나눔센터 설립 이후 꾸준히 이어온 식품
                나눔 사업은 현재 연간 500여 가구를 지원합니다. 종교적
                조건 없이, 신청하면 누구나 받을 수 있습니다.
              </p>
              <div className="mt-8 p-5 border-l-2 border-primary-400 bg-paper-warm rounded-r-lg">
                <p className="text-[15px] text-ink-700 leading-[1.75] kr">
                  <span className="font-semibold text-sacred-900">경기도 용인특례시 기흥구</span>{" "}
                  동백죽전대로 341, 213호 (동백역 1번 출구 메디컬빌딩)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ③ 이용하는 분께 — paper-warm, 수혜자 안내 에디토리얼 */}
      <section className="bg-paper-warm border-b border-line py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          {/* 섹션 헤더 */}
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-primary-700 mb-4">
              For Recipients · 이용하는 분께
            </p>
            <h2
              className="font-serif font-bold text-sacred-900 leading-tight kr-tight"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", wordBreak: "keep-all" }}
            >
              신청은 전화 한 통으로 충분합니다
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* 좌: 대상 + 3단계 */}
            <div>
              {/* 지원 대상 */}
              <div className="mb-10">
                <h3 className="text-[13px] tracking-[0.2em] uppercase font-bold text-ink-500 mb-5">
                  지원 대상
                </h3>
                <ul className="space-y-3">
                  {[
                    "기초생활수급자 및 차상위계층 가정",
                    "고령 1인가구 (만 65세 이상)",
                    "장애인 가정",
                    "한부모 가족",
                    "긴급 복지 대상자",
                    "기타 도움이 필요한 이웃 (상담 후 결정)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[17px] text-ink-700 leading-[1.7] kr">
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3단계 Ledger 숫자 */}
              <div>
                <h3 className="text-[13px] tracking-[0.2em] uppercase font-bold text-ink-500 mb-6">
                  신청 절차
                </h3>
                <div className="flex items-stretch gap-0 border border-line rounded-xl overflow-hidden">
                  {[
                    { n: "1", label: "전화 상담", sub: "상담 후 일정 조율" },
                    { n: "2", label: "방문 등록", sub: "서류 지참 방문" },
                    { n: "3", label: "식품 수령", sub: "배분일 현장 수령" },
                  ].map((step, i) => (
                    <div
                      key={step.n}
                      className={`flex-1 px-4 py-6 text-center bg-paper${i > 0 ? " border-l border-line" : ""}`}
                    >
                      <div
                        className="font-serif font-bold text-sacred-900 leading-none mb-2"
                        style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
                      >
                        {step.n}
                      </div>
                      <p className="text-[14px] font-semibold text-sacred-900 mb-1 kr">{step.label}</p>
                      <p className="text-[12px] text-ink-500 kr">{step.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 우: 운영 시간·장소 dl */}
            <div>
              <h3 className="text-[13px] tracking-[0.2em] uppercase font-bold text-ink-500 mb-6">
                운영 정보
              </h3>
              <dl className="space-y-0 border border-line rounded-xl overflow-hidden bg-paper">
                {[
                  { dt: "운영 시간", dd: "평일 09:00 – 18:00\n토요일 09:00 – 13:00" },
                  { dt: "휴무", dd: "일요일 및 법정 공휴일" },
                  { dt: "장소", dd: `경기도 용인특례시 기흥구\n동백죽전대로 341, 213호` },
                  { dt: "교통", dd: "동백역(에버라인) 1번 출구\n도보 약 5분, 메디컬빌딩 2층" },
                  { dt: "접근성", dd: "휠체어·보행 보조기 이용 가능\n턱 없는 무장애 환경" },
                  { dt: "전화", dd: siteIdentity.phonePrimary },
                ].map((row, i) => (
                  <div
                    key={row.dt}
                    className={`grid grid-cols-[100px_1fr] gap-4 px-6 py-4${i > 0 ? " border-t border-line" : ""}`}
                  >
                    <dt className="text-[13px] font-semibold text-ink-500 pt-[2px] kr">{row.dt}</dt>
                    <dd className="text-[15px] text-ink-800 leading-[1.75] whitespace-pre-line kr">{row.dd}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ④ 함께하는 분께 — sacred-900 다크, 후원자/자원봉사 3열 */}
      <section className="bg-sacred-900 border-b border-sacred-800 py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          {/* 섹션 헤더 */}
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-primary-400 mb-4">
              For Supporters · 함께하는 분께
            </p>
            <h2
              className="font-serif font-bold text-paper-warm leading-tight kr-tight"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", wordBreak: "keep-all" }}
            >
              나눔의 세 가지 방법
            </h2>
          </div>

          {/* 3열 카드 */}
          <div className="grid md:grid-cols-3 gap-0 border border-sacred-800 rounded-xl overflow-hidden">
            {participateCards.map((card, i) => (
              <div
                key={card.no}
                className={`px-8 py-10 flex flex-col gap-5${i > 0 ? " border-t md:border-t-0 md:border-l border-sacred-800" : ""}`}
              >
                <span
                  className="text-primary-400 font-bold tracking-widest"
                  style={{ fontSize: "11px" }}
                >
                  {card.no}
                </span>
                <h3
                  className="font-serif font-bold text-paper-warm leading-tight kr-tight"
                  style={{ fontSize: "clamp(22px, 2.5vw, 30px)" }}
                >
                  {card.title}
                </h3>
                <p className="text-[15px] leading-[1.8] text-primary-200 kr flex-1" style={{ wordBreak: "keep-all" }}>
                  {card.desc}
                </p>
                <a
                  href={card.href}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary-400 hover:text-primary-300 transition-colors"
                >
                  {card.action}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ⑤ 실적 Ledger — paper-warm, 4열 */}
      <section className="bg-paper-warm border-b border-line py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          {/* 헤더 */}
          <div className="mb-14 text-center">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-primary-700 mb-4">
              LEDGER · 운영 실적
            </p>
            <h2
              className="font-serif font-bold text-sacred-900 leading-tight kr-tight"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)", wordBreak: "keep-all" }}
            >
              숫자로 증명하는 나눔
            </h2>
          </div>

          {/* 4열 ledger */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 items-end">
            {ledgerStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`relative px-6 md:px-8 animate-fade-in-up${i > 0 ? " border-l border-line" : " pl-0"}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* 숫자 + 단위 */}
                <div
                  className={`font-serif font-bold leading-[0.95] tracking-[-0.04em]${stat.care ? " text-care-600" : " text-sacred-900"}`}
                  style={{ fontSize: "clamp(64px, 7vw, 110px)" }}
                >
                  {stat.value}
                  <span
                    className="text-primary-600 font-semibold"
                    style={{ fontSize: "0.28em", marginLeft: "4px", verticalAlign: "0.45em" }}
                  >
                    {stat.unit}
                  </span>
                </div>
                {/* 라벨 */}
                <p
                  className="text-[13px] leading-[1.65] text-ink-700 mt-4 pt-[14px] border-t border-line"
                  style={{ wordBreak: "keep-all" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-[13px] text-ink-400 text-center kr">
            * 수치는 연간 추정치입니다. 실제 현황은 전화로 문의해 주세요.
          </p>
        </div>
      </section>

      {/* ⑥ 경인블루저널 연계 — paper */}
      <section className="bg-paper border-b border-line py-20 md:py-28">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          {/* 헤더 */}
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-primary-700 mb-4">
              Press · 경인블루저널
            </p>
            <h2
              className="font-serif font-bold text-sacred-900 leading-tight kr-tight"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)", wordBreak: "keep-all" }}
            >
              이웃의 이야기를 함께 전합니다
            </h2>
          </div>

          {/* 시민기자단 안내 카드 3열 */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* 카드 1: 기자단 소개 */}
            <div className="border border-line rounded-xl p-8 bg-paper-warm flex flex-col gap-4">
              <p className="text-[11px] tracking-[0.25em] uppercase font-bold text-primary-600">
                시민기자단
              </p>
              <h3 className="font-serif text-[20px] font-bold text-sacred-900 kr-tight leading-tight" style={{ wordBreak: "keep-all" }}>
                푸드뱅크 현장을 직접 취재하는 시민기자
              </h3>
              <p className="text-[15px] leading-[1.8] text-ink-700 kr flex-1" style={{ wordBreak: "keep-all" }}>
                경인블루저널 시민기자단이 푸드뱅크 운영 현장을 정기적으로
                취재하고 보도합니다. 실제 수혜자 인터뷰와 봉사자 이야기가
                담긴 기사를 채널에서 확인할 수 있습니다.
              </p>
            </div>

            {/* 카드 2: 기자단 참여 */}
            <div className="border border-line rounded-xl p-8 bg-paper-warm flex flex-col gap-4">
              <p className="text-[11px] tracking-[0.25em] uppercase font-bold text-primary-600">
                참여 안내
              </p>
              <h3 className="font-serif text-[20px] font-bold text-sacred-900 kr-tight leading-tight" style={{ wordBreak: "keep-all" }}>
                누구나 시민기자로 참여할 수 있습니다
              </h3>
              <ul className="space-y-2 flex-1">
                {[
                  "AI 작가반 수료자 우선 추천",
                  "미수료자도 전화 상담 후 신청 가능",
                  "자체 기자증 발급",
                  "정기 활동 시 활동비 지원",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[15px] text-ink-700 leading-[1.7] kr">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-care-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 카드 3: 기사 채널 링크 */}
            <div className="border border-line rounded-xl p-8 bg-paper-warm flex flex-col gap-4">
              <p className="text-[11px] tracking-[0.25em] uppercase font-bold text-primary-600">
                채널
              </p>
              <h3 className="font-serif text-[20px] font-bold text-sacred-900 kr-tight leading-tight" style={{ wordBreak: "keep-all" }}>
                경인블루저널에서 지역 소식을 전합니다
              </h3>
              <p className="text-[15px] leading-[1.8] text-ink-700 kr flex-1" style={{ wordBreak: "keep-all" }}>
                용인시 기흥구·동백동 일대의 복지·교육·커뮤니티 소식을
                경인블루저널 시민기자단이 직접 취재·편집합니다. 구독하고
                이웃 이야기를 가장 먼저 받아보세요.
              </p>
              <a
                href={`tel:${siteIdentity.phonePrimary}`}
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary-700 hover:text-primary-600 transition-colors"
              >
                시민기자단 신청 문의
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ⑦ CTA — paper, phone + 카카오톡 + 후원 계좌 */}
      <section id="cta" className="bg-paper py-20 md:py-28 scroll-mt-24">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8">
          {/* 헤더 */}
          <div className="mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-primary-700 mb-4">
              Contact · 지금 바로
            </p>
            <h2
              className="font-serif font-bold text-sacred-900 leading-tight kr-tight"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)", wordBreak: "keep-all" }}
            >
              궁금하면 전화 한 통이면 됩니다
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* 전화 CTA */}
            <div className="border border-line rounded-xl p-8 bg-paper-warm flex flex-col gap-4">
              <p className="text-[11px] tracking-[0.25em] uppercase font-bold text-primary-600">전화 문의</p>
              <a
                href={`tel:${siteIdentity.phonePrimary}`}
                className="font-serif font-bold text-sacred-900 leading-none tracking-tight hover:text-primary-700 transition-colors"
                style={{ fontSize: "clamp(28px, 3vw, 40px)" }}
              >
                {siteIdentity.phonePrimary}
              </a>
              <p className="text-[15px] leading-[1.75] text-ink-700 kr flex-1" style={{ wordBreak: "keep-all" }}>
                이용 신청, 식품 기탁, 자원봉사 참여 — 어떤 문의도
                전화로 바로 연결됩니다.
              </p>
              <p className="text-[13px] text-ink-400 kr">
                평일 09:00–18:00 · 토요일 09:00–13:00
              </p>
              <a
                href={`tel:${siteIdentity.phonePrimary}`}
                className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] bg-primary-700 hover:bg-primary-800 text-white font-bold rounded-lg transition-colors text-[15px] w-full"
              >
                지금 전화하기
              </a>
            </div>

            {/* 카카오톡 채널 */}
            <div className="border border-line rounded-xl p-8 bg-paper-warm flex flex-col gap-4">
              <p className="text-[11px] tracking-[0.25em] uppercase font-bold text-primary-600">카카오톡 채널</p>
              <h3 className="font-serif font-bold text-sacred-900 leading-tight kr-tight" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", wordBreak: "keep-all" }}>
                카카오로 편하게 문의하세요
              </h3>
              <p className="text-[15px] leading-[1.75] text-ink-700 kr flex-1" style={{ wordBreak: "keep-all" }}>
                카카오톡 채널 <strong className="text-sacred-900">@우리함께나눔센터</strong>로
                메시지를 보내시면 운영 시간 내 빠르게 답변드립니다.
              </p>
              <a
                href="https://pf.kakao.com/_xnZxcxb"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] bg-[#FEE500] hover:bg-[#fdd800] text-[#3C1E1E] font-bold rounded-lg transition-colors text-[15px] w-full"
              >
                카카오톡 채널 바로가기
              </a>
            </div>

            {/* 후원 계좌 */}
            <div className="border border-line rounded-xl p-8 bg-paper-warm flex flex-col gap-4">
              <p className="text-[11px] tracking-[0.25em] uppercase font-bold text-primary-600">후원 계좌</p>
              <h3 className="font-serif font-bold text-sacred-900 leading-tight kr-tight" style={{ fontSize: "clamp(20px, 2.5vw, 30px)", wordBreak: "keep-all" }}>
                정기·일시 후원 모두 환영합니다
              </h3>
              <dl className="space-y-3 flex-1">
                {[
                  { dt: "은행", dd: "국민은행" },
                  { dt: "계좌번호", dd: "문의 후 안내" },
                  { dt: "예금주", dd: "경인교회 (우리함께 나눔센터)" },
                  { dt: "영수증", dd: "기부금 영수증 발급 가능" },
                ].map((row) => (
                  <div key={row.dt} className="flex gap-3 text-[14px]">
                    <dt className="text-ink-500 font-semibold shrink-0 w-20 kr">{row.dt}</dt>
                    <dd className="text-ink-800 kr">{row.dd}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={`tel:${siteIdentity.phonePrimary}`}
                className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] bg-care-500 hover:bg-care-600 text-white font-bold rounded-lg transition-colors text-[15px] w-full"
              >
                후원 계좌 전화 문의
              </a>
            </div>
          </div>

          {/* 하단 법적 표기 */}
          <p className="mt-10 text-[13px] text-ink-400 text-center kr leading-[1.8]">
            {siteIdentity.legalName} 부설 {siteIdentity.centerName}
            &ensp;|&ensp;{siteIdentity.address}
            &ensp;|&ensp;{siteIdentity.phonePrimary}
          </p>
        </div>
      </section>
    </>
  );
}
