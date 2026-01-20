import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "교회소식 | 경인교회",
  description: "경인교회의 공지사항과 소식을 전합니다.",
};

const announcements = [
  {
    id: 1,
    title: "경인교회 홈페이지 오픈",
    date: "2026-01-20",
    category: "공지",
    content: "경인교회 홈페이지가 새롭게 오픈되었습니다. 많은 관심 부탁드립니다.",
    isNew: true,
  },
  {
    id: 2,
    title: "주일예배 안내",
    date: "2026-01-19",
    category: "예배",
    content: "매주 주일 오전 11시에 주일예배가 있습니다. 모든 성도님들의 참석을 바랍니다.",
    isNew: false,
  },
  {
    id: 3,
    title: "수요예배 안내",
    date: "2026-01-18",
    category: "예배",
    content: "매주 수요일 저녁 7시에 수요예배가 있습니다.",
    isNew: false,
  },
];

const getCategoryStyle = (category: string) => {
  switch (category) {
    case "공지":
      return "bg-gradient-to-r from-primary-500 to-primary-600 text-white";
    case "예배":
      return "bg-gradient-to-r from-blue-500 to-blue-600 text-white";
    default:
      return "bg-gradient-to-r from-gray-500 to-gray-600 text-white";
  }
};

export default function NewsPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      {/* Page Header */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header_news_bulletin_1768878759923.png"
            alt="교회소식 배경"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sacred-900/80" />
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10 text-white">
          <span className="text-primary-300 text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-in-up">
            News
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-100 text-white drop-shadow-lg">
            교회소식
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in delay-200">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto animate-fade-in-up delay-300 drop-shadow-md">
            경인교회의 소식을 전합니다
          </p>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-24 bg-gradient-to-b from-warm-100 to-warm-200 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 border border-primary-300/30 rounded-full" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Announcements
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              공지사항
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="space-y-6">
            {announcements.map((item, index) => (
              <article
                key={item.id}
                className="sacred-card rounded-2xl p-8 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${getCategoryStyle(item.category)}`}>
                      {item.category}
                    </span>
                    {item.isNew && (
                      <span className="text-xs px-3 py-1.5 rounded-full font-medium bg-gradient-to-r from-red-500 to-rose-500 text-white animate-pulse">
                        NEW
                      </span>
                    )}
                    <h3 className="font-serif text-xl font-bold text-sacred-900">
                      {item.title}
                    </h3>
                  </div>
                  <time className="text-sm text-primary-600 bg-primary-50 px-4 py-1.5 rounded-full whitespace-nowrap">
                    {item.date}
                  </time>
                </div>
                <p className="text-gray-600 leading-relaxed pl-0 md:pl-2">{item.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Bulletin */}
      <section className="py-24 bg-gradient-to-b from-warm-200 to-warm-100 relative overflow-hidden">
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-200/30 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Bulletin
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              주보
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="sacred-card rounded-3xl p-10 md:p-14 text-center">
            <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-3xl flex items-center justify-center">
              <svg className="w-12 h-12 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
              주보는 매주 주일예배 시간에 배포됩니다.
            </p>
            <p className="text-primary-500 text-sm">
              온라인 주보 서비스는 준비 중입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-gradient-to-b from-warm-100 to-warm-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Gallery
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              갤러리
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: "/images/gallery_sample_01_korean_1768879073401.png", alt: "찬양대" },
              { src: "/images/gallery_sample_02_korean_1768879090680.png", alt: "봉사활동" },
              { src: "/images/gallery_sample_03_korean_1768879106608.png", alt: "청년부" },
            ].map((item, index) => (
              <div
                key={index}
                className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-medium">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
