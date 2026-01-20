import Link from "next/link";

export default function LocationPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-warm-200 to-warm-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-300/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            Location
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
            오시는 길
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-500">✦</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
        </div>

        {/* Content Card */}
        <div className="sacred-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto animate-scale-in">
          <div className="grid md:grid-cols-2 gap-10">
            {/* 교회 위치 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-sacred-900">교회 위치</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">•</span>
                  <div>
                    <p className="font-medium text-sacred-900">주소</p>
                    <p className="text-sm">추후 안내 예정</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">•</span>
                  <div>
                    <p className="font-medium text-sacred-900">전화</p>
                    <p className="text-sm">추후 안내 예정</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* 대중교통 안내 */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold text-sacred-900">대중교통 안내</h3>
              </div>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1">🚇</span>
                  <div>
                    <p className="font-medium text-sacred-900">지하철</p>
                    <p className="text-sm">추후 안내 예정</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">🚌</span>
                  <div>
                    <p className="font-medium text-sacred-900">버스</p>
                    <p className="text-sm">추후 안내 예정</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <Link
              href="/location"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-medium transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,168,85,0.4)] hover-lift"
            >
              자세히 보기
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
