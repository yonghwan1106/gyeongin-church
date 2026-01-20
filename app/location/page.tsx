import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "오시는길 | 경인교회",
  description: "경인교회 위치 및 오시는 방법을 안내합니다.",
};

const transportInfo = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "지하철",
    description: "추후 안내 예정",
    bgColor: "from-blue-100 to-blue-200",
    iconColor: "text-blue-600",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: "버스",
    description: "추후 안내 예정",
    bgColor: "from-green-100 to-green-200",
    iconColor: "text-green-600",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "자가용",
    description: "추후 안내 예정",
    bgColor: "from-orange-100 to-orange-200",
    iconColor: "text-orange-600",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "주차",
    description: "추후 안내 예정",
    bgColor: "from-purple-100 to-purple-200",
    iconColor: "text-purple-600",
  },
];

export default function LocationPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_exterior_1768878683608.png"
            alt="오시는길 배경"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sacred-900/70" />
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10 text-white">
          <span className="text-primary-300 text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-in-up">
            Location
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-100 text-white drop-shadow-lg">
            오시는길
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in delay-200">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto animate-fade-in-up delay-300 drop-shadow-md">
            경인교회 위치를 안내합니다
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-b from-warm-100 to-warm-200 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 border border-primary-300/30 rounded-full" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Map
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              교회 위치
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          {/* Map Placeholder */}
          {/* Map Placeholder */}
          <div className="sacred-card rounded-3xl h-80 flex items-center justify-center mb-10 overflow-hidden relative">
            <Image
              src="/images/content_map_illustration_1768878816774.png"
              alt="Map Illustration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-white/30 backdrop-blur-[2px]">
              <div className="bg-white/90 px-8 py-4 rounded-2xl shadow-lg text-center">
                <p className="text-gray-800 font-semibold mb-1">
                  지도는 주소 확정 후 표시됩니다.
                </p>
                <p className="text-primary-600 text-sm">
                  (현재 일러스트 이미지)
                </p>
              </div>
            </div>
          </div>

          {/* Address Info */}
          <div className="sacred-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sacred-900 mb-3">주소</h3>
                  <p className="text-gray-600 leading-relaxed">
                    추후 안내 예정
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-sacred-900 mb-3">연락처</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>전화: 추후 안내 예정</li>
                    <li>이메일: 추후 안내 예정</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-24 bg-gradient-to-b from-warm-200 to-warm-100 relative overflow-hidden">
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-200/30 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Transportation
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              대중교통 안내
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {transportInfo.map((item, index) => (
              <div
                key={item.title}
                className="sacred-card rounded-2xl p-8 hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-5">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.bgColor} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <span className={item.iconColor}>{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-sacred-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-b from-warm-100 to-warm-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sacred-800 via-sacred-900 to-sacred-800" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(212,168,85,0.15)_0%,transparent_50%)]" />

            <div className="relative z-10 p-10 md:p-14 text-center text-white">
              <div className="w-16 h-16 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-serif text-3xl font-bold mb-4">문의하기</h3>
              <p className="text-primary-200 mb-8 max-w-md mx-auto leading-relaxed">
                교회 방문에 대한 문의사항이 있으시면 언제든지 연락주세요.
              </p>
              <a
                href="tel:000-0000-0000"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-medium transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,168,85,0.4)] hover-lift"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                전화 문의
              </a>
              <div className="mt-10 flex items-center justify-center gap-4">
                <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400" />
                <span className="text-primary-400">✦</span>
                <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
