import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "예배안내 | 경인교회",
  description: "경인교회 예배 시간 및 예배 순서를 안내합니다.",
};

const worshipSchedule = [
  {
    title: "주일예배",
    time: "오전 11:00",
    description: "주일에 모든 성도가 함께 드리는 예배입니다.",
    icon: "☀️",
    location: "본당",
    gradient: "from-amber-50 to-orange-50",
    iconBg: "from-amber-100 to-orange-200",
  },
  {
    title: "수요예배",
    time: "저녁 7:00",
    description: "말씀을 통해 은혜를 나누는 예배입니다.",
    icon: "🌙",
    location: "본당",
    gradient: "from-indigo-50 to-purple-50",
    iconBg: "from-indigo-100 to-purple-200",
  },
];

const worshipOrder = [
  { step: "예배의 부름", description: "사회자의 인도" },
  { step: "찬송", description: "다함께" },
  { step: "기도", description: "대표기도" },
  { step: "성경봉독", description: "다함께" },
  { step: "설교", description: "김재완 전도사" },
  { step: "찬송", description: "다함께" },
  { step: "헌금", description: "감사의 응답" },
  { step: "광고", description: "교회 소식" },
  { step: "축도/폐회", description: "" },
];

export default function WorshipPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-24 bg-gradient-to-br from-sacred-800 via-sacred-900 to-sacred-800 text-white overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-500/10 rounded-full" />

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <span className="text-primary-400 text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-in-up">
            Worship
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-100">
            예배안내
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in delay-200">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto animate-fade-in-up delay-300">
            경인교회 예배 시간과 순서를 안내합니다
          </p>
        </div>
      </section>

      {/* Worship Times */}
      <section className="py-24 bg-gradient-to-b from-warm-100 to-warm-200 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 border border-primary-300/30 rounded-full" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Schedule
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              예배 시간
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {worshipSchedule.map((worship, index) => (
              <div
                key={worship.title}
                className="sacred-card rounded-3xl p-10 text-center hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-24 h-24 mx-auto mb-8 bg-gradient-to-br ${worship.iconBg} rounded-3xl flex items-center justify-center shadow-lg`}>
                  <span className="text-5xl">{worship.icon}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-sacred-900 mb-3">
                  {worship.title}
                </h3>
                <p className="text-4xl font-bold text-primary-600 mb-6">
                  {worship.time}
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">{worship.description}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full">
                  <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm text-primary-700">장소: {worship.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Order */}
      <section className="py-24 bg-gradient-to-b from-warm-200 to-warm-100 relative overflow-hidden">
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-200/30 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Order
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              예배 순서
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="sacred-card rounded-3xl p-8 md:p-12">
            <div className="space-y-0">
              {worshipOrder.map((item, index) => (
                <div
                  key={item.step}
                  className="flex items-center gap-6 py-5 border-b border-primary-100 last:border-0 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold flex-shrink-0 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <span className="font-serif text-lg font-semibold text-sacred-900">{item.step}</span>
                  </div>
                  {item.description && (
                    <div className="text-primary-600 text-sm bg-primary-50 px-4 py-1.5 rounded-full">
                      {item.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-24 bg-gradient-to-b from-warm-100 to-warm-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="sacred-card rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400" />

            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-2xl font-bold text-sacred-900 mb-4">
              안내사항
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-xl mx-auto">
              예배 시간에 맞춰 오셔서 함께 은혜로운 예배를 드리시기 바랍니다.<br />
              처음 방문하시는 분은 환영합니다.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-400">✦</span>
              <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
