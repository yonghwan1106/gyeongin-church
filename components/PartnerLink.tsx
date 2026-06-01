export default function PartnerLink() {
  return (
    <section className="bg-warm-50 py-12 md:py-16" aria-labelledby="partner-heading">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-primary-200 bg-white shadow-xl">
          {/* 상단 골드·케어 헤어라인 */}
          <div
            className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary-400 via-care-500 to-primary-400"
            aria-hidden="true"
          />

          <div className="flex flex-col items-center gap-6 p-7 text-center md:flex-row md:items-center md:gap-8 md:p-10 md:text-left">
            {/* 아이콘 */}
            <div
              className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-care-500 to-care-700 text-white shadow-lg md:h-20 md:w-20"
              aria-hidden="true"
            >
              <svg
                className="h-8 w-8 md:h-10 md:w-10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s-6.7-4.35-9.16-8.6C1.2 9.3 3 6 6.3 6c1.9 0 3.3 1.2 5.7 3.6C14.4 7.2 15.8 6 17.7 6 21 6 22.8 9.3 21.16 12.4 18.7 16.65 12 21 12 21z" />
              </svg>
            </div>

            {/* 텍스트 */}
            <div className="min-w-0 flex-1">
              <p className="mb-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-700">함께하는 단체</p>
              <h2 id="partner-heading" className="font-serif text-2xl font-bold leading-tight text-sacred-900 md:text-[28px]">
                경인장애인선교회
              </h2>
              <p className="kr mx-auto mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-700 md:mx-0 md:text-base">
                장애인·어르신의 디지털 자립과 무상 AI 교육을 함께 만들어가는 비영리 단체입니다.
                교육·복지·나눔으로 이웃과 동행하는 경인 공익네트워크의 자매기관입니다.
              </p>
            </div>

            {/* 버튼 */}
            <div className="flex-shrink-0">
              <a
                href="https://a365center.or.kr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] items-center gap-2 rounded-full bg-care-600 px-7 py-4 font-bold text-white shadow-lg transition-colors duration-200 hover:bg-care-700"
                aria-label="경인장애인선교회 홈페이지를 새 창에서 엽니다 (a365center.or.kr)"
              >
                경인장애인선교회 방문
                <span aria-hidden="true" className="text-lg leading-none">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
