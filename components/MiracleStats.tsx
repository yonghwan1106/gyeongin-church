const stats = [
  {
    value: "14",
    unit: "평",
    label: "작은 공간에서 시작된 큰 기적",
    care: false,
  },
  {
    value: "4",
    unit: "단계",
    label: "왕초보부터 수익창출까지 디지털 교육",
    care: false,
  },
  {
    value: "3",
    unit: "사역",
    label: "푸드뱅크·공간 공유·시민기자단",
    care: true,
  },
  {
    value: "100",
    unit: "% 무료",
    label: "교재비도 받지 않습니다",
    care: true,
  },
] as const;

export default function MiracleStats() {
  return (
    <section className="py-16 md:py-20 border-y border-line bg-paper-warm">
      {/* 헤더 (공통) */}
      <div className="max-w-[1180px] mx-auto px-8 mb-12 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase font-bold text-primary-700">
          LEDGER · 2026
        </p>
        <h2
          className="font-serif text-3xl md:text-4xl font-bold text-sacred-900 mt-3 leading-tight tracking-tight"
          style={{ wordBreak: "keep-all" }}
        >
          14평의 기적, 숫자로 증언합니다
        </h2>
      </div>

      {/* MOBILE: B ledger (border-l, clamp 72~120px, border-t 라벨) */}
      <div className="md:hidden max-w-[1180px] mx-auto px-8 grid grid-cols-2 gap-0 items-end">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`relative px-7 animate-fade-in-up${
              i === 0 ? "" : " border-l border-line"
            }${i === 0 ? " pl-0" : ""}`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* 숫자 + 단위 */}
            <div
              className={`font-serif font-bold leading-[0.95] tracking-[-0.04em]${
                stat.care ? " text-care-600" : " text-sacred-900"
              }`}
              style={{
                fontSize: "clamp(72px, 8vw, 120px)",
              }}
            >
              {stat.value}
              <span
                className="text-primary-600 font-semibold"
                style={{
                  fontSize: "0.3em",
                  marginLeft: "4px",
                  verticalAlign: "0.45em",
                }}
              >
                {stat.unit}
              </span>
            </div>

            {/* 라벨 */}
            <p
              className="text-[14px] leading-[1.65] text-ink-700 mt-4 pt-[14px] border-t border-line"
              style={{ wordBreak: "keep-all" }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* DESKTOP: A bordered grid */}
      <div className="hidden md:block max-w-[1180px] mx-auto px-8">
        <div className="grid grid-cols-4 border-t border-l border-line mt-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="border-r border-b border-line p-9 bg-paper hover:bg-paper-warm transition-colors animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* 숫자 + 단위 */}
              <div
                className={`font-serif font-bold leading-none tracking-[-0.04em]${
                  stat.care ? " text-care-600" : " text-sacred-900"
                }`}
                style={{ fontSize: "72px" }}
              >
                {stat.value}
                <span
                  className="text-primary-600 font-semibold ml-1"
                  style={{ fontSize: "24px" }}
                >
                  {stat.unit}
                </span>
              </div>

              {/* 라벨 */}
              <p
                className="text-[14px] text-ink-700 mt-3.5 leading-relaxed"
                style={{ wordBreak: "keep-all" }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
