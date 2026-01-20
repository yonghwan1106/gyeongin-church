import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "오시는길 | 경인교회",
  description: "경인교회 위치 및 오시는 방법을 안내합니다.",
};

export default function LocationPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">오시는길</h1>
          <p className="text-primary-200 text-lg">
            경인교회 위치를 안내합니다
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            교회 위치
          </h2>

          {/* Map Placeholder */}
          <div className="bg-warm-100 rounded-2xl h-80 flex items-center justify-center mb-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="text-gray-600">
                지도는 주소 확정 후 표시됩니다.
              </p>
            </div>
          </div>

          {/* Address Info */}
          <div className="bg-warm-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-800 mb-4 flex items-center gap-2">
                  <span className="text-primary-600">📍</span>
                  주소
                </h3>
                <p className="text-gray-600">
                  추후 안내 예정
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-800 mb-4 flex items-center gap-2">
                  <span className="text-primary-600">📞</span>
                  연락처
                </h3>
                <ul className="text-gray-600 space-y-2">
                  <li>전화: 추후 안내 예정</li>
                  <li>이메일: 추후 안내 예정</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 bg-warm-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            대중교통 안내
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Subway */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚇</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">지하철</h3>
              </div>
              <p className="text-gray-600">
                추후 안내 예정
              </p>
            </div>

            {/* Bus */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚌</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">버스</h3>
              </div>
              <p className="text-gray-600">
                추후 안내 예정
              </p>
            </div>

            {/* Car */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🚗</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">자가용</h3>
              </div>
              <p className="text-gray-600">
                추후 안내 예정
              </p>
            </div>

            {/* Parking */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🅿️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">주차</h3>
              </div>
              <p className="text-gray-600">
                추후 안내 예정
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-primary-700 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">문의하기</h3>
            <p className="text-primary-200 mb-6">
              교회 방문에 대한 문의사항이 있으시면 언제든지 연락주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:000-0000-0000"
                className="bg-white text-primary-700 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                전화 문의
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
