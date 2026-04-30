import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PastorGreeting from "@/components/PastorGreeting";
import { siteIdentity } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "센터·교회 소개",
  description:
    "사단법인 예수교장로회 경인교회 부설 우리함께 평생교육·나눔센터의 비전, 14평의 기적, 담임 전도사 인사말, 예배 안내까지.",
};

/* ── 연혁 데이터 ─────────────────────────────────── */
const history = [
  {
    year: "2021",
    items: [
      "사단법인 예수교장로회 경인교회 설립",
      "우리함께 평생교육·나눔센터 개소 (14평)",
      "디지털 기초 교육 1기 시작",
    ],
  },
  {
    year: "2022",
    items: [
      "푸드뱅크 사역 개시 — 지역 이웃에게 첫 나눔",
      "디지털 교육 수강생 100인 돌파",
      "개척교회 공간 공유 프로그램 운영",
    ],
  },
  {
    year: "2023",
    items: [
      "수익창출반 개설 — 4단계 커리큘럼 완성",
      "시민기자단 창단",
      "사단법인 명의 수료증 발급 제도화",
    ],
  },
  {
    year: "2024",
    items: [
      "장애인 전용 1:1 자원봉사 동석 과정 운영",
      "나눔 사역 3대 축(푸드뱅크·공간·기자단) 정립",
      "협동조합 모델 연구 착수",
    ],
  },
];

/* ── 예배 안내 데이터 ─────────────────────────────── */
const worshipServices = [
  {
    name: "주일예배",
    time: "오전 11:00",
    day: "매주 일요일",
    note: "모든 성도가 함께 드리는 정규 예배",
  },
  {
    name: "수요기도회",
    time: "저녁 7:00",
    day: "매주 수요일",
    note: "말씀과 기도로 한 주 중반을 채웁니다",
  },
  {
    name: "새벽기도",
    time: "오전 5:30",
    day: "화·목·토",
    note: "조용한 새벽, 하루를 열어가는 기도 시간",
  },
];

/* ── 법인 등록 정보 ──────────────────────────────── */
const legalMeta = [
  { label: "법인 정식 명칭", value: siteIdentity.legalName },
  { label: "부설 기관", value: siteIdentity.centerName },
  { label: "담임·센터장", value: `${siteIdentity.pastor} ${siteIdentity.pastorRole}` },
  { label: "소재지", value: siteIdentity.address },
  { label: "상세 위치", value: siteIdentity.addressDetail },
  { label: "대표 전화", value: siteIdentity.phonePrimary },
  { label: "이메일", value: siteIdentity.email },
  { label: "웹사이트", value: siteIdentity.url },
];

export default function AboutPage() {
  return (
    <>
      {/* ① PageHeader */}
      <PageHeader
        eyebrow="About · Est. 2021"
        title="14평의 기적, 우리의 발자취"
        backgroundImage="/images/header_about_bible_1768878741549.png"
      />

      {/* ② 비전 — paper, 좌우 2열 */}
      <section className="bg-paper py-[100px] md:py-[120px] border-b border-[color:var(--color-line)]">
        <div className="max-w-[1180px] mx-auto px-8">
          {/* 섹션 헤더 룰 */}
          <div className="flex items-center gap-4 mb-12">
            <span
              className="font-serif text-[11px] tracking-[0.3em] text-primary-700 uppercase font-bold"
            >
              Chapter 01 &middot; Vision
            </span>
            <span className="flex-1 h-px bg-[color:var(--color-line)]" aria-hidden="true" />
          </div>

          {/* 2열 레이아웃 */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-end pb-14 border-b border-[color:var(--color-line)]">
            {/* 좌: 거대 serif 타이틀 */}
            <div>
              <h2
                className="font-serif font-bold text-sacred-900 kr-tight leading-[1.1] tracking-[-0.03em]"
                style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
              >
                작지만 큰<br />
                <em className="not-italic text-primary-600">14평의 기적</em>
              </h2>
            </div>

            {/* 우: lede 텍스트 */}
            <div className="space-y-5">
              <p
                className="kr font-serif text-[22px] leading-[1.7] text-sacred-900 tracking-[-0.01em]"
                style={{ wordBreak: "keep-all" }}
              >
                &ldquo;배움과 나눔으로 이웃의 다리가 되겠습니다&rdquo;
              </p>
              <p
                className="kr text-[17px] leading-[1.9] text-[color:var(--color-ink-700)]"
                style={{ wordBreak: "keep-all" }}
              >
                <strong className="text-sacred-900">{siteIdentity.centerName}</strong>는{" "}
                {siteIdentity.legalName}의 부설 비영리 공간입니다. 종교를 떠나 어르신과 장애인
                이웃이 디지털 세상의 주인이 되고, 새로운 일자리까지 이어지는 자립의 다리를
                놓고자 합니다.
              </p>
              <p
                className="kr text-[17px] leading-[1.9] text-[color:var(--color-ink-700)]"
                style={{ wordBreak: "keep-all" }}
              >
                14평 작은 공간에서 시작된 큰 기적. 함께 만들어 가시겠습니까?
              </p>
            </div>
          </div>

          {/* 핵심 가치 3열 */}
          <div className="grid md:grid-cols-3 gap-0 mt-14">
            {[
              {
                no: "01",
                title: "배움",
                body: "디지털 자립을 위한 4단계 평생교육으로 어르신과 장애인의 첫 걸음을 함께합니다.",
              },
              {
                no: "02",
                title: "나눔",
                body: "푸드뱅크와 공간 공유로 이웃에게 따뜻한 손길을 전합니다.",
              },
              {
                no: "03",
                title: "자립",
                body: "수익창출반과 협동조합 모델로 새로운 일자리를 만들어갑니다.",
              },
            ].map((v, i) => (
              <div
                key={v.no}
                className={`pt-8 border-t border-[color:var(--color-line-strong)] ${
                  i > 0 ? "md:border-l md:border-t-0 md:pl-10 md:pt-0" : ""
                }`}
              >
                <span className="block font-serif text-[11px] tracking-[0.25em] text-primary-700 uppercase font-bold mb-4">
                  {v.no}
                </span>
                <h3
                  className="font-serif text-[28px] font-bold text-sacred-900 tracking-[-0.02em] mb-3 kr-tight"
                  style={{ wordBreak: "keep-all" }}
                >
                  {v.title}
                </h3>
                <p
                  className="kr text-[15px] leading-[1.8] text-[color:var(--color-ink-700)]"
                  style={{ wordBreak: "keep-all" }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ③ 연혁 — paper-warm, 신문 연표 */}
      <section className="bg-[color:var(--color-paper-warm)] py-[100px] md:py-[120px] border-b border-[color:var(--color-line)]">
        <div className="max-w-[1180px] mx-auto px-8">
          {/* 섹션 헤더 룰 */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-serif text-[11px] tracking-[0.3em] text-primary-700 uppercase font-bold">
              Chapter 02 &middot; History
            </span>
            <span className="flex-1 h-px bg-[color:var(--color-line)]" aria-hidden="true" />
          </div>

          <h2
            className="font-serif font-bold text-sacred-900 kr-tight tracking-[-0.03em] mb-16"
            style={{ fontSize: "clamp(40px, 5vw, 64px)", wordBreak: "keep-all" }}
          >
            발자취를 따라,<br />
            <em className="not-italic text-primary-600">함께 걸어온 길</em>
          </h2>

          {/* 연표 그리드 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {history.map((h, i) => (
              <div
                key={h.year}
                className={`pt-8 border-t-2 border-[color:var(--color-primary-500)] ${
                  i > 0 ? "md:border-l md:border-t-2 md:border-l-[color:var(--color-line)] md:pl-8 lg:pl-10" : ""
                }`}
              >
                {/* 연도 — 거대 serif */}
                <div
                  className="font-serif font-bold text-[color:var(--color-primary-400)] leading-none tracking-[-0.04em] mb-6 select-none"
                  style={{ fontSize: "clamp(48px, 6vw, 72px)" }}
                  aria-hidden="true"
                >
                  {h.year}
                </div>
                <ul className="space-y-3">
                  {h.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span
                        className="mt-[7px] flex-shrink-0 w-[5px] h-[5px] rounded-full bg-primary-500"
                        aria-hidden="true"
                      />
                      <span
                        className="kr text-[14px] leading-[1.75] text-[color:var(--color-ink-700)]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ④ 인사말 — PastorGreeting 재사용 (자체 bg-paper 포함) */}
      <PastorGreeting />

      {/* ⑤ 예배 안내 — sacred-900 다크, #worship anchor */}
      <section
        id="worship"
        className="bg-[color:var(--color-sacred-900)] py-[100px] md:py-[120px] scroll-mt-24"
      >
        <div className="max-w-[1180px] mx-auto px-8">
          {/* 섹션 헤더 룰 — 다크 */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-serif text-[11px] tracking-[0.3em] text-primary-300 uppercase font-bold">
              Chapter 04 &middot; Worship
            </span>
            <span className="flex-1 h-px bg-[rgba(212,168,85,0.25)]" aria-hidden="true" />
          </div>

          {/* 타이틀 */}
          <div className="grid md:grid-cols-2 gap-14 items-end mb-16 pb-14 border-b border-[rgba(212,168,85,0.2)]">
            <h2
              className="font-serif font-bold text-white kr-tight tracking-[-0.03em] leading-[1.1]"
              style={{ fontSize: "clamp(40px, 5vw, 64px)", wordBreak: "keep-all" }}
            >
              예배로<br />
              <em className="not-italic text-primary-300">하나 되는</em> 공동체
            </h2>
            <p
              className="kr text-[17px] leading-[1.9] text-[rgba(243,235,216,0.8)]"
              style={{ wordBreak: "keep-all" }}
            >
              신앙 공동체로 함께하실 분들을 환영합니다. 종교 활동을 강요하지 않으며,
              디지털 교육·나눔 사역은 종교와 무관하게 누구나 참여 가능합니다.
            </p>
          </div>

          {/* 에디토리얼 예배 테이블 */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[rgba(212,168,85,0.35)]">
                  <th className="text-left pb-4 font-serif text-[11px] tracking-[0.25em] text-primary-300 uppercase font-bold w-1/3">
                    예배
                  </th>
                  <th className="text-left pb-4 font-serif text-[11px] tracking-[0.25em] text-primary-300 uppercase font-bold w-1/4">
                    시간
                  </th>
                  <th className="text-left pb-4 font-serif text-[11px] tracking-[0.25em] text-primary-300 uppercase font-bold w-1/4">
                    일정
                  </th>
                  <th className="text-left pb-4 font-serif text-[11px] tracking-[0.25em] text-primary-300 uppercase font-bold hidden md:table-cell">
                    비고
                  </th>
                </tr>
              </thead>
              <tbody>
                {worshipServices.map((w, i) => (
                  <tr
                    key={w.name}
                    className={`border-b border-[rgba(212,168,85,0.12)] ${
                      i === 0 ? "border-t border-t-[rgba(212,168,85,0.2)]" : ""
                    }`}
                  >
                    <td className="py-6 pr-4">
                      <span
                        className="font-serif text-[22px] font-bold text-white tracking-[-0.02em] kr-tight"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {w.name}
                      </span>
                    </td>
                    <td className="py-6 pr-4">
                      <span className="font-serif text-[28px] font-bold text-primary-300 tracking-[-0.03em] leading-none">
                        {w.time}
                      </span>
                    </td>
                    <td className="py-6 pr-4">
                      <span className="kr text-[15px] text-[rgba(243,235,216,0.75)] leading-[1.6]">
                        {w.day}
                      </span>
                    </td>
                    <td className="py-6 hidden md:table-cell">
                      <span
                        className="kr text-[14px] text-[rgba(243,235,216,0.55)] leading-[1.7]"
                        style={{ wordBreak: "keep-all" }}
                      >
                        {w.note}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 위치 안내 보조 */}
          <p className="mt-10 kr text-[14px] leading-[1.8] text-[rgba(243,235,216,0.55)]">
            {siteIdentity.address} &nbsp;·&nbsp; {siteIdentity.addressDetail} &nbsp;·&nbsp;{" "}
            <a
              href={`tel:${siteIdentity.phonePrimary}`}
              className="text-primary-300 hover:text-primary-200 transition-colors underline underline-offset-2"
            >
              {siteIdentity.phonePrimary}
            </a>
          </p>
        </div>
      </section>

      {/* ⑥ 사단법인 등록 정보 — paper, 법적 고지 메타 테이블 */}
      <section className="bg-paper py-[80px] md:py-[100px] border-t border-[color:var(--color-line)]">
        <div className="max-w-[820px] mx-auto px-8">
          {/* 섹션 헤더 룰 */}
          <div className="flex items-center gap-4 mb-10">
            <span className="font-serif text-[11px] tracking-[0.3em] text-primary-700 uppercase font-bold">
              Chapter 05 &middot; Legal Info
            </span>
            <span className="flex-1 h-px bg-[color:var(--color-line)]" aria-hidden="true" />
          </div>

          <h2
            className="font-serif font-bold text-sacred-900 kr-tight tracking-[-0.02em] mb-10"
            style={{ fontSize: "clamp(28px, 3vw, 40px)", wordBreak: "keep-all" }}
          >
            사단법인 등록 정보
          </h2>

          {/* 메타 테이블 */}
          <dl className="divide-y divide-[color:var(--color-line)]">
            {legalMeta.map((m) => (
              <div key={m.label} className="grid grid-cols-[140px_1fr] gap-6 py-4 items-baseline">
                <dt className="font-serif text-[12px] tracking-[0.15em] text-primary-700 uppercase font-bold leading-[1.6]">
                  {m.label}
                </dt>
                <dd className="kr text-[15px] leading-[1.8] text-[color:var(--color-ink-700)]">
                  {m.value.startsWith("http") ? (
                    <a
                      href={m.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors"
                    >
                      {m.value}
                    </a>
                  ) : (
                    m.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          {/* 나눔 사역 CTA */}
          <div className="mt-12 pt-10 border-t border-[color:var(--color-line)]">
            <Link
              href="/ministry"
              className="inline-flex items-center gap-2 px-7 py-3.5 min-h-[48px] bg-sacred-900 hover:bg-[color:var(--color-sacred-800)] text-[color:var(--color-paper-warm)] font-semibold text-[15px] tracking-[0.02em] transition-colors"
            >
              나눔 사역 더 보기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
