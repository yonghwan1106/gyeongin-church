import type { Metadata } from "next";

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
  },
  {
    id: 2,
    title: "주일예배 안내",
    date: "2026-01-19",
    category: "예배",
    content: "매주 주일 오전 11시에 주일예배가 있습니다. 모든 성도님들의 참석을 바랍니다.",
  },
  {
    id: 3,
    title: "수요예배 안내",
    date: "2026-01-18",
    category: "예배",
    content: "매주 수요일 저녁 7시에 수요예배가 있습니다.",
  },
];

export default function NewsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">교회소식</h1>
          <p className="text-primary-200 text-lg">
            경인교회의 소식을 전합니다
          </p>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">공지사항</h2>
          <div className="space-y-4">
            {announcements.map((item) => (
              <article
                key={item.id}
                className="bg-warm-50 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <time className="text-sm text-gray-500 whitespace-nowrap">
                    {item.date}
                  </time>
                </div>
                <p className="text-gray-600">{item.content}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Bulletin */}
      <section className="py-16 bg-warm-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">주보</h2>
          <div className="bg-white rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">📄</div>
            <p className="text-gray-600 mb-4">
              주보는 매주 주일예배 시간에 배포됩니다.
            </p>
            <p className="text-sm text-gray-500">
              온라인 주보 서비스는 준비 중입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">갤러리</h2>
          <div className="bg-warm-50 rounded-xl p-8 text-center">
            <div className="text-6xl mb-4">📷</div>
            <p className="text-gray-600">
              교회 사진 갤러리는 준비 중입니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
