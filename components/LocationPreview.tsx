import Link from "next/link";

export default function LocationPreview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          오시는 길
        </h2>
        <div className="bg-warm-100 rounded-2xl p-8 max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-4">
                교회 위치
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">📍</span>
                  <span>주소: 추후 안내 예정</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-600">📞</span>
                  <span>전화: 추후 안내 예정</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-primary-800 mb-4">
                대중교통 안내
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">🚇</span>
                  <span>지하철: 추후 안내 예정</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">🚌</span>
                  <span>버스: 추후 안내 예정</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/location"
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              자세히 보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
