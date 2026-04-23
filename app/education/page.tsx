import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import EducationPrograms from "@/components/EducationPrograms";
import EducationCTA from "@/components/EducationCTA";
import { siteIdentity } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "디지털 교육",
  description:
    "왕초보 기초반부터 AI 실무반, 수익창출반까지. 어르신·장애인·중장년을 위한 무료 단계별 디지털 교육. 소그룹 4~6명, 전 과정 무료, 교재 무료.",
};

/* ─── 데이터 ─────────────────────────────────────────── */

const participants = [
  {
    id: "senior",
    title: "어르신",
    tag: "만 65세 이상",
    body:
      "스마트폰을 처음 켜는 순간도 괜찮습니다. 화면이 잘 보이도록 글자를 키우고, 자원봉사자가 1:1로 옆에서 도와드립니다. 카카오톡·카메라·병원 예약까지 천천히 함께합니다.",
  },
  {
    id: "disability",
    title: "장애인",
    tag: "지체·시각·청각 등",
    body:
      "손쉬운 사용 기능과 보조공학 기기를 활용해 수업을 진행합니다. 음성 안내·화면 확대·스위치 접근성을 기본으로 설정하며, 개인 맞춤 보조 방식을 상담 후 결정합니다.",
  },
  {
    id: "midlife",
    title: "일반 중장년",
    tag: "40~64세 재취업 준비",
    body:
      "AI 도구 활용법과 디지털 플랫폼 수익화 방법을 집중 교육합니다. 챗GPT·Gemini를 실무에 적용하고, 데이터 라벨링·스마트스토어·디지털 굿즈로 새로운 수입원을 만듭니다.",
  },
];

const operations = [
  { term: "정원", desc: "소그룹 4~6명" },
  { term: "주기", desc: "주 1~2회" },
  { term: "시간", desc: "회당 90분" },
  { term: "수강료", desc: "전 과정 무료" },
  { term: "교재비", desc: "교재 무료 제공" },
  { term: "장소", desc: siteIdentity.centerName },
];

const testimonials = [
  {
    quote:
      "처음엔 스마트폰이 너무 무서웠어요. 그런데 선생님이 옆에서 같이 눌러주니까 금방 카카오톡을 할 수 있게 됐어요. 손주한테 사진도 보냈답니다.",
    name: "박○○",
    role: "기초반 수료 · 78세",
  },
  {
    quote:
      "챗GPT로 내 인생 이야기를 정리했어요. 글을 못 쓴다고 생각했는데 AI가 도와주니 진짜 책처럼 나왔어요. 자식들한테 선물했습니다.",
    name: "이○○",
    role: "AI 실무반 수료 · 66세",
  },
  {
    quote:
      "재취업이 막막했는데 데이터 라벨링으로 월 수입이 생겼어요. 교육받기 전엔 이런 일이 있는지도 몰랐거든요. 정말 감사합니다.",
    name: "최○○",
    role: "수익창출반 수료 · 54세",
  },
];

const faqs = [
  {
    q: "컴퓨터나 스마트폰이 전혀 없어도 참여할 수 있나요?",
    a: "네, 가능합니다. 수업 중에는 센터 기기를 무료로 사용할 수 있습니다. 본인 기기가 있으면 가져오셔도 좋고, 없으셔도 수업 진행에 전혀 문제 없습니다.",
  },
  {
    q: "종교가 달라도 등록할 수 있나요?",
    a: "물론입니다. 저희 센터는 종교와 무관하게 누구나 참여할 수 있습니다. 교육 중 종교 활동을 강요하거나 권유하는 일은 일절 없습니다.",
  },
  {
    q: "중간에 수업을 놓치면 어떻게 되나요?",
    a: "소그룹 수업 특성상 이전 내용을 간략히 복습하고 진행합니다. 결석이 잦으면 담당 선생님과 개별 보충 일정을 잡아드리니 부담 갖지 않으셔도 됩니다.",
  },
  {
    q: "신청 후 대기 기간이 있나요?",
    a: "신청 후 빠르면 당일, 늦어도 1~2주 내에 수업 시작일을 안내드립니다. 소그룹 정원(4~6명)이 차면 다음 기수로 배정되며, 대기 기간을 최소화하고 있습니다.",
  },
  {
    q: "장애가 있어서 이동이 불편한데 출입이 가능한가요?",
    a: `네. 센터는 휠체어·보행 보조기 이용 시에도 턱이 없어 출입이 매우 편리합니다. 주소는 ${siteIdentity.address}(${siteIdentity.addressDetail})이며, 방문 전에 전화 주시면 안내해드립니다.`,
  },
];

/* ─── Page ───────────────────────────────────────────── */

export default function EducationPage() {
  return (
    <>
      {/* 1. PageHeader */}
      <PageHeader
        eyebrow="Digital Education · 4 Steps"
        title="배우고 나누며, 일자리까지"
        subtitle={
          "스마트폰 첫 화면부터 AI 수익 창출까지\n4단계 무료 교육으로 디지털 자립을 함께합니다."
        }
        backgroundImage="/images/hero_education_ai.png"
      />

      {/* 2. EducationPrograms — Variant B edu-edit 적용 컴포넌트 재사용 */}
      <EducationPrograms />

      {/* 3. 누가 참여하나요 */}
      <section className="py-[120px] px-8 bg-paper-warm border-t border-line">
        <div className="max-w-[1180px] mx-auto">
          {/* Editorial head */}
          <div className="mb-14 pb-10 border-b border-line">
            <p
              className="text-primary-700 kr"
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Participants
            </p>
            <h2
              className="font-serif font-bold text-sacred-900 kr-tight"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.15 }}
            >
              누가 참여하나요
            </h2>
          </div>

          {/* 3열 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {participants.map((p) => (
              <article key={p.id} className="flex flex-col gap-4">
                <span
                  className="inline-block text-primary-700 border border-primary-300 rounded-full px-3 py-1 self-start"
                  style={{ fontSize: 11, letterSpacing: "0.14em", fontWeight: 700 }}
                >
                  {p.tag}
                </span>
                <h3
                  className="font-serif font-bold text-sacred-900 kr-tight"
                  style={{ fontSize: 26, lineHeight: 1.2 }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-ink-700 kr"
                  style={{ fontSize: 17, lineHeight: 1.8 }}
                >
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 수업 운영 방식 */}
      <section className="py-[120px] px-8 bg-paper border-t border-line">
        <div className="max-w-[1180px] mx-auto">
          {/* 2-column layout: head left, dl right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px] items-start">
            {/* Left: editorial head */}
            <div className="lg:sticky lg:top-32">
              <p
                className="text-primary-700 kr"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                How It Works
              </p>
              <h2
                className="font-serif font-bold text-sacred-900 kr-tight"
                style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.15, marginBottom: 24 }}
              >
                수업 운영 방식
              </h2>
              <p
                className="text-ink-700 kr"
                style={{ fontSize: 17, lineHeight: 1.8, maxWidth: "40ch" }}
              >
                복잡한 절차나 비용 없이, 원하는 시간에 소그룹으로 진행합니다.
                처음 배우는 분도 부담 없이 참여할 수 있도록 설계했습니다.
              </p>
            </div>

            {/* Right: 2열 dl */}
            <dl
              className="grid grid-cols-1 sm:grid-cols-2 gap-0"
              style={{ borderTop: "1px solid var(--color-line-strong)" }}
            >
              {operations.map((op) => (
                <div
                  key={op.term}
                  className="flex flex-col gap-1 py-6 pr-6"
                  style={{ borderBottom: "1px solid var(--color-line)" }}
                >
                  <dt
                    className="text-ink-500 kr"
                    style={{ fontSize: 11, letterSpacing: "0.18em", fontWeight: 700, textTransform: "uppercase" }}
                  >
                    {op.term}
                  </dt>
                  <dd
                    className="font-serif font-bold text-sacred-900 kr-tight"
                    style={{ fontSize: 22, lineHeight: 1.2 }}
                  >
                    {op.desc}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 5. 후기·인터뷰 */}
      <section
        className="py-[120px] px-8 border-t border-line"
        style={{ background: "var(--color-sacred-900)" }}
      >
        <div className="max-w-[1180px] mx-auto">
          {/* Head */}
          <div className="mb-14 pb-10" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "var(--color-primary-400)",
                marginBottom: 16,
              }}
            >
              Voices
            </p>
            <h2
              className="font-serif font-bold kr-tight"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                lineHeight: 1.15,
                color: "var(--color-paper)",
              }}
            >
              후기·인터뷰
            </h2>
          </div>

          {/* 인용문 블록 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="flex flex-col gap-6">
                {/* 에디토리얼 큰 따옴표 */}
                <span
                  className="font-serif"
                  aria-hidden="true"
                  style={{
                    fontSize: 72,
                    lineHeight: 0.8,
                    color: "var(--color-primary-500)",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                  }}
                >
                  &ldquo;
                </span>
                <p
                  className="font-serif kr"
                  style={{
                    fontSize: 18,
                    lineHeight: 1.8,
                    color: "var(--color-paper-warm)",
                    fontStyle: "italic",
                    marginTop: -24,
                  }}
                >
                  {t.quote}
                </p>
                <footer>
                  <cite
                    className="not-italic font-bold kr"
                    style={{ fontSize: 13, color: "var(--color-primary-400)", letterSpacing: "0.04em" }}
                  >
                    {t.name}
                  </cite>
                  <p
                    className="kr"
                    style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}
                  >
                    {t.role}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 자주 묻는 질문 */}
      <section className="py-[120px] px-8 bg-paper border-t border-line">
        <div className="max-w-[860px] mx-auto">
          {/* Head */}
          <div className="mb-14 pb-10 border-b border-line">
            <p
              className="text-primary-700 kr"
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                fontWeight: 700,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              FAQ
            </p>
            <h2
              className="font-serif font-bold text-sacred-900 kr-tight"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.15 }}
            >
              자주 묻는 질문
            </h2>
          </div>

          {/* Q&A 목록 */}
          <dl className="divide-y divide-line">
            {faqs.map((item, i) => (
              <div key={i} className="py-10">
                <dt
                  className="font-serif font-bold text-sacred-900 kr-tight"
                  style={{ fontSize: 20, lineHeight: 1.35, marginBottom: 12 }}
                >
                  Q.&ensp;{item.q}
                </dt>
                <dd
                  className="text-ink-700 kr"
                  style={{ fontSize: 17, lineHeight: 1.8 }}
                >
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>

          {/* 하단 문의 유도 */}
          <div
            className="mt-16 pt-10 border-t border-line flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <p
              className="text-ink-700 kr"
              style={{ fontSize: 17, lineHeight: 1.6 }}
            >
              더 궁금한 점이 있으신가요?
            </p>
            <Link
              href={`tel:${siteIdentity.phonePrimary}`}
              className="inline-flex items-center gap-2 px-7 py-3 min-h-[52px] bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-full transition-colors kr"
              style={{ fontSize: 15 }}
            >
              {siteIdentity.phonePrimary} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <EducationCTA />
    </>
  );
}
