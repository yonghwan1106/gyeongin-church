import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { siteIdentity } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "찾아오시는 길",
  description:
    "동백역 1번 출구 메디컬빌딩 213호. 휠체어·보행 보조기 이용자도 편하게 출입 가능한 무장애 평생교육·나눔센터.",
};

/* ─── 대중교통 3열 데이터 ─────────────────────────────── */
const transport = [
  {
    id: "subway",
    eyebrow: "지하철",
    title: "분당선 동백역",
    body: "1번 출구 도보 약 3분\n메디컬빌딩 정면 입구",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <path d="M3 10h18M7 15h1m8 0h1" />
        <path d="M7 20l-1 2m12-2 1 2" />
      </svg>
    ),
  },
  {
    id: "bus",
    eyebrow: "버스",
    title: "5001 · 5002 · 66 등",
    body: "동백죽전대로 정류장 하차\n도보 2분 이내",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 17V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11" />
        <path d="M4 11h16" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="16.5" cy="17.5" r="1.5" />
        <path d="M4 17H2m20 0h-2" />
      </svg>
    ),
  },
  {
    id: "car",
    eyebrow: "자가용 · 주차",
    title: "메디컬빌딩 주차장",
    body: "용인세브란스병원 입구 방면\n빌딩 지하 주차장 무료 이용",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 17H3v-5l2.5-6H18.5l2.5 6v5h-2" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="16.5" cy="17.5" r="1.5" />
        <path d="M5 12h14" />
      </svg>
    ),
  },
];

/* ─── 주변 편의시설 2열 ───────────────────────────────── */
const amenities = [
  { label: "용인세브란스병원", note: "도보 1분, 의료 접근 최적" },
  { label: "동백 CGV · 롯데마트", note: "도보 5분, 쇼핑·문화시설" },
  { label: "카카오뱅크 ATM · 우리은행", note: "빌딩 1층 내 금융 창구" },
  { label: "스타벅스 동백역점", note: "도보 3분, 미팅·대기 공간" },
  { label: "동백 주민센터", note: "도보 7분, 행정 원스톱" },
  { label: "동백어린이공원", note: "도보 4분, 동반 가족 휴식" },
];

export default function LocationPage() {
  return (
    <div className="pt-20">

      {/* ① PageHeader */}
      <PageHeader
        eyebrow="Location · 용인 동백"
        title="찾아오시는 길"
        subtitle={`${siteIdentity.address}\n${siteIdentity.addressDetail}`}
        backgroundImage="/images/hero_exterior_1768878683608.png"
      />

      {/* ② 위치 안내 — dl 좌 + 가상지도 우 */}
      <section className="bg-paper-warm py-24 px-4 border-t border-line">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* 좌: Description list */}
          <div>
            <dl className="space-y-0">
              <div>
                <dt className="text-[11px] tracking-[0.2em] text-primary-700 uppercase font-bold font-serif kr-tight">
                  주소
                </dt>
                <dd className="mt-1.5 font-serif text-sacred-900 kr leading-[1.8]" style={{ fontSize: "clamp(17px, 1.4vw, 21px)" }}>
                  {siteIdentity.address}
                  <span className="block text-[15px] text-ink-600 font-sans mt-0.5">
                    ({siteIdentity.addressDetail})
                  </span>
                </dd>
              </div>

              <div className="mt-7">
                <dt className="text-[11px] tracking-[0.2em] text-primary-700 uppercase font-bold font-serif kr-tight">
                  가장 가까운 역
                </dt>
                <dd className="mt-1.5 font-serif text-sacred-900 kr leading-[1.8]" style={{ fontSize: "clamp(17px, 1.4vw, 21px)" }}>
                  분당선 동백역 1번 출구 도보 3분
                </dd>
              </div>

              <div className="mt-7">
                <dt className="text-[11px] tracking-[0.2em] text-primary-700 uppercase font-bold font-serif kr-tight">
                  전화
                </dt>
                <dd className="mt-1.5 font-serif text-sacred-900 kr leading-[1.8]" style={{ fontSize: "clamp(17px, 1.4vw, 21px)" }}>
                  <a href={`tel:${siteIdentity.phonePrimary}`} className="hover:underline underline-offset-4">
                    {siteIdentity.phonePrimary}
                  </a>
                </dd>
              </div>

              <div className="mt-7">
                <dt className="text-[11px] tracking-[0.2em] text-primary-700 uppercase font-bold font-serif kr-tight">
                  대중교통
                </dt>
                <dd className="mt-1.5 font-serif text-sacred-900 kr leading-[1.8]" style={{ fontSize: "clamp(17px, 1.4vw, 21px)" }}>
                  버스 · 동백죽전대로 정류장 하차
                  <span className="block text-[15px] text-ink-600 font-sans mt-0.5">
                    자가용 이용 시 메디컬빌딩 주차장 이용
                  </span>
                </dd>
              </div>
            </dl>

            {/* CTA 버튼 행 */}
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`tel:${siteIdentity.phonePrimary}`}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-full bg-care-500 text-paper-warm font-semibold text-[15px] transition-opacity hover:opacity-85"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.45 5.45l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                전화하기
              </a>
              <a
                href="https://map.kakao.com/link/search/경기도 용인특례시 기흥구 동백죽전대로 341"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-full border border-primary-700 text-primary-700 font-semibold text-[15px] transition-colors hover:bg-primary-50"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                카카오맵 열기
              </a>
            </div>
          </div>

          {/* 우: 구글 지도 임베드 */}
          <div>
            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-line shadow-md">
              <iframe
                src="https://www.google.com/maps?q=37.270468,127.150520&hl=ko&z=18&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="우리함께 평생교육·나눔센터 위치 지도"
                allowFullScreen
                className="absolute inset-0"
              />
              <a
                href="https://www.google.com/maps/place/메디슨타워+경인교회/@37.270468,127.150520,18z"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-sacred-900 text-[12px] font-semibold tracking-wide px-3 py-2 rounded-full shadow-md hover:bg-white transition"
              >
                Google 지도 열기 →
              </a>
            </div>
            <a
              href="https://map.kakao.com/link/search/경기도 용인특례시 기흥구 동백죽전대로 341"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-3 text-[13px] text-primary-700 hover:text-primary-600 font-medium"
            >
              카카오맵에서도 보기 →
            </a>
          </div>
        </div>
      </section>

      {/* ③ 대중교통 3열 */}
      <section className="bg-paper-warm py-24 px-4 border-t border-line">
        <div className="max-w-[1180px] mx-auto">
          <p className="text-[11px] tracking-[0.2em] text-primary-700 uppercase font-bold kr-tight mb-3">
            Transportation
          </p>
          <h2
            className="font-serif font-bold text-sacred-900 kr-tight mb-12"
            style={{ fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.02em" }}
          >
            대중교통 안내
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transport.map((item) => (
              <div
                key={item.id}
                className="sacred-card rounded-[14px] p-8 flex flex-col gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center text-primary-700 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.18em] text-primary-700 uppercase font-bold kr-tight mb-1">
                    {item.eyebrow}
                  </p>
                  <h3
                    className="font-serif font-bold text-sacred-900 kr-tight mb-2"
                    style={{ fontSize: "clamp(17px, 1.4vw, 20px)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-ink-600 kr leading-[1.8] whitespace-pre-line">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ 주변 편의시설 2열 */}
      <section className="bg-paper py-24 px-4 border-t border-line">
        <div className="max-w-[1180px] mx-auto">
          <p className="text-[11px] tracking-[0.2em] text-primary-700 uppercase font-bold kr-tight mb-3">
            Nearby
          </p>
          <h2
            className="font-serif font-bold text-sacred-900 kr-tight mb-4"
            style={{ fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.02em" }}
          >
            주변 편의시설
          </h2>
          <p className="text-[17px] text-ink-600 kr leading-[1.8] mb-12 max-w-prose">
            센터 주변에는 의료·금융·생활 편의시설이 도보권에 집중되어 있어
            방문 전후 다양한 용무를 함께 처리하시기 편합니다.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {amenities.map((a) => (
              <li
                key={a.label}
                className="flex items-start gap-4 p-5 rounded-[14px] border border-line bg-paper-warm"
              >
                <span
                  className="mt-1 w-2 h-2 rounded-full bg-primary-500 flex-shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p
                    className="font-serif font-semibold text-sacred-900 kr-tight"
                    style={{ fontSize: "clamp(16px, 1.2vw, 18px)" }}
                  >
                    {a.label}
                  </p>
                  <p className="text-[14px] text-ink-500 kr mt-0.5">{a.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ⑤ 무장애 안내 — sacred-900 다크, 에디토리얼 인용문 */}
      <section className="py-24 px-4 border-t border-line" style={{ background: "var(--color-sacred-900)" }}>
        <div className="max-w-[880px] mx-auto text-center">
          <p
            className="text-primary-400 text-[11px] tracking-[0.25em] uppercase font-bold kr-tight mb-8"
          >
            Accessibility · 무장애 안내
          </p>

          {/* 큰 인용문 */}
          <blockquote
            className="font-serif font-bold text-paper-warm kr-tight mb-8 leading-[1.35]"
            style={{ fontSize: "clamp(22px, 3.2vw, 42px)", letterSpacing: "-0.025em" }}
          >
            &ldquo;휠체어·보행 보조기 사용자도<br className="hidden sm:block" />
            편하게 출입 가능합니다.&rdquo;
          </blockquote>

          <p className="text-[17px] text-primary-200 kr leading-[1.8] max-w-prose mx-auto mb-6">
            {siteIdentity.accessibility} 메디컬빌딩 1층 입구부터 213호까지
            엘리베이터 이용이 가능하며, 안내 직원이 도움을 드립니다.
          </p>

          <div className="flex items-center justify-center gap-4" aria-hidden="true">
            <span className="w-16 h-px bg-primary-700" />
            <span className="text-primary-600 text-[18px]">♿</span>
            <span className="w-16 h-px bg-primary-700" />
          </div>
        </div>
      </section>

      {/* ⑥ 맨 하단 CTA — 전화 타입 strong */}
      <section className="bg-paper-warm py-20 px-4 border-t border-line">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-[11px] tracking-[0.2em] text-primary-700 uppercase font-bold kr-tight mb-4">
            Contact
          </p>
          <h2
            className="font-serif font-bold text-sacred-900 kr-tight mb-4"
            style={{ fontSize: "clamp(24px, 2.8vw, 38px)", letterSpacing: "-0.02em" }}
          >
            길이 헷갈리시면 전화 한 통
          </h2>
          <p className="text-[17px] text-ink-600 kr leading-[1.8] mb-8">
            언제든지 편하게 연락주세요. 친절하게 안내해 드리겠습니다.
          </p>

          <a
            href={`tel:${siteIdentity.phonePrimary}`}
            className="inline-flex items-center gap-3 group"
            aria-label={`전화 걸기 ${siteIdentity.phonePrimary}`}
          >
            <span
              className="w-12 h-12 rounded-full bg-care-500 flex items-center justify-center text-paper-warm transition-transform group-hover:scale-110"
              aria-hidden="true"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.45 5.45l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <strong
              className="font-serif text-sacred-900 kr-tight tabular-nums"
              style={{ fontSize: "clamp(26px, 3.5vw, 48px)", letterSpacing: "-0.02em" }}
            >
              {siteIdentity.phonePrimary}
            </strong>
          </a>

          <p className="mt-4 text-[14px] text-ink-400 kr">
            상담 전용 직통 번호 · 평일 09:00 – 18:00
          </p>
        </div>
      </section>

    </div>
  );
}
