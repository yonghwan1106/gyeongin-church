import Link from "next/link";

const steps = [
  {
    num: "01",
    eyebrow: "STEP 01",
    title: "왕초보 기초반",
    subtitle: "스마트폰·PC 첫걸음",
    desc: "스마트폰을 처음 만나는 어르신도 괜찮습니다. 전원 켜기부터 카카오톡·카메라까지, 두려움 없이 시작합니다.",
    href: "/education#level-1",
    hl: false,
  },
  {
    num: "02",
    eyebrow: "STEP 02",
    title: "중급 활용반",
    subtitle: "은행·쇼핑·예약",
    desc: "병원 예약, 모바일 뱅킹, 배달앱까지 스마트폰 하나로 일상을 자립하는 10주 과정입니다.",
    href: "/education#level-2",
    hl: false,
  },
  {
    num: "03",
    eyebrow: "STEP 03",
    title: "AI 실무반",
    subtitle: "챗GPT·Gemini·자서전 쓰기",
    desc: "AI를 도구로 삼아 글쓰기·문서 작업·창작에 도전합니다. 내 인생을 책으로 남길 수 있습니다.",
    href: "/education#level-3",
    hl: false,
  },
  {
    num: "04",
    eyebrow: "STEP 04",
    title: "수익창출반",
    subtitle: "플랫폼 수익, 유튜브, 스마트스토어",
    desc: "배운 기술로 실제 수익을 만듭니다. 데이터 라벨링·디지털 굿즈·스마트스토어 입점까지 단계별로 안내합니다.",
    href: "/education#level-special",
    hl: true,
  },
];

export default function EducationPrograms() {
  return (
    <section className="py-[120px] px-8 bg-paper border-t border-line">
      <div className="max-w-[1180px] mx-auto">

        {/* ── Editorial head: 2-column (공통) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-end mb-16 pb-12 border-b border-line">
          <h2
            className="font-serif font-bold text-sacred-900 kr-tight"
            style={{ fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.1 }}
          >
            배우고 나누며{" "}
            <em className="not-italic italic text-primary-600">일자리까지</em>
            {" "}—{" "}
            <br className="hidden lg:block" />
            디지털 교육{" "}
            <em className="not-italic italic text-primary-600">4단계</em>
          </h2>

          <p
            className="text-ink-700 kr"
            style={{ fontSize: 17, lineHeight: 1.8, maxWidth: "50ch" }}
          >
            스마트폰을 처음 만나는 어르신부터, 디지털 플랫폼으로 수익을 만드는
            전문가까지. 누구든 자신의 속도로 시작할 수 있는 무료 교육 과정입니다.
          </p>
        </div>

        {/* ── Variant B: 모바일 (md 미만) — step ledger ── */}
        <div className="md:hidden">
          <div
            className="edu-steps grid gap-0 items-stretch"
            style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
          >
            {steps.map((step) => [
              /* Step number — hidden on mobile */
              <div
                key={`num-${step.num}`}
                className="edu-step-num hidden font-serif font-bold text-primary-400"
                aria-hidden="true"
                style={{
                  fontSize: 56,
                  lineHeight: 1,
                  paddingTop: 8,
                  borderTop: "3px solid var(--color-primary-500)",
                  letterSpacing: "-0.04em",
                }}
              >
                {step.num}
              </div>,

              /* Step content */
              <div
                key={`step-${step.num}`}
                style={{
                  borderTop: "1px solid var(--color-line-strong)",
                  marginTop: 8,
                  padding: step.hl ? "16px 24px 18px 20px" : "16px 24px 0 0",
                  ...(step.hl
                    ? {
                        background:
                          "linear-gradient(180deg, var(--color-care-50), transparent)",
                      }
                    : {}),
                }}
              >
                <div className="flex items-center gap-1.5 flex-wrap" style={{ marginBottom: 14 }}>
                  <span
                    className="font-bold uppercase text-primary-700"
                    style={{ fontSize: 11, letterSpacing: "0.2em" }}
                  >
                    {step.eyebrow}
                  </span>
                  <span
                    className={`font-bold tracking-wider px-2 py-0.5 rounded-full border ${
                      step.hl
                        ? "bg-care-100 text-care-800 border-care-300"
                        : "bg-care-50 text-care-700 border-care-200"
                    }`}
                    style={{ fontSize: 10 }}
                    aria-label="100퍼센트 무료 과정"
                  >
                    100% 무료
                  </span>
                </div>

                <h4
                  className={`font-serif font-bold kr-tight ${
                    step.hl ? "text-care-700" : "text-sacred-900"
                  }`}
                  style={{ fontSize: 22, letterSpacing: "-0.02em", margin: "0 0 4px" }}
                >
                  {step.title}
                </h4>

                <p
                  className="font-semibold text-primary-600"
                  style={{ fontSize: 13, marginBottom: 8 }}
                >
                  {step.subtitle}
                </p>

                <p
                  className="text-ink-700 kr"
                  style={{ fontSize: 14, lineHeight: 1.75, margin: 0 }}
                >
                  {step.desc}
                </p>

                <Link
                  href={step.href}
                  className={`inline-flex items-center gap-1 mt-4 text-sm font-semibold transition-colors ${
                    step.hl
                      ? "text-care-700 hover:text-care-600"
                      : "text-primary-700 hover:text-primary-600"
                  }`}
                >
                  프로그램 보기 <span aria-hidden="true">→</span>
                </Link>
              </div>,
            ])}
          </div>
        </div>

        {/* ── Variant A: 데스크탑 (md 이상) — 카드 그리드 ── */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className={`relative overflow-hidden rounded-[20px] border p-7 flex flex-col gap-2 transition-all duration-300 group ${
                  step.hl
                    ? "bg-gradient-to-br from-care-700 to-care-800 text-white border-care-700"
                    : "bg-white border-line hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                {/* Left 3px bar — scaleY(0→1) on hover */}
                <span
                  className={`absolute left-0 top-0 bottom-0 w-[3px] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ${
                    step.hl ? "bg-primary-300" : "bg-primary-400"
                  }`}
                  aria-hidden="true"
                />

                {/* Badge row */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[11px] tracking-[0.18em] uppercase font-bold ${
                      step.hl ? "text-primary-300" : "text-primary-700"
                    }`}
                  >
                    {step.eyebrow}
                  </span>
                  <span
                    className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full ${
                      step.hl
                        ? "bg-white/15 text-white border border-white/20"
                        : "bg-care-50 text-care-700 border border-care-200"
                    }`}
                    aria-label="100퍼센트 무료 과정"
                  >
                    100% 무료
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-serif text-[20px] font-bold leading-tight tracking-[-0.02em] ${
                    step.hl ? "text-white" : "text-sacred-900"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Subtitle / desc */}
                <p
                  className={`text-[14px] leading-[1.7] flex-grow kr ${
                    step.hl ? "text-white/85" : "text-ink-600"
                  }`}
                  style={{ wordBreak: "keep-all" }}
                >
                  {step.subtitle} — {step.desc}
                </p>

                {/* Link */}
                <Link
                  href={step.href}
                  className={`inline-flex items-center gap-1.5 mt-4 text-[14px] font-semibold transition-colors ${
                    step.hl
                      ? "text-primary-300 hover:text-primary-200"
                      : "text-primary-700 hover:text-primary-600"
                  }`}
                >
                  프로그램 보기 <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-16 text-center">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 px-8 py-4 min-h-[56px] bg-primary-700 hover:bg-primary-800 text-white font-semibold text-base rounded-full transition-colors"
          >
            전체 교육 과정 보기 <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
