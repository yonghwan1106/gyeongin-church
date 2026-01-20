import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "교회소개 | 경인교회",
  description: "경인교회의 비전과 역사, 담임 전도사를 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="py-16">
      {/* Page Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">교회소개</h1>
          <p className="text-primary-200 text-lg">
            경인교회의 비전과 역사를 소개합니다
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            교회 비전
          </h2>
          <div className="bg-warm-100 rounded-2xl p-8">
            <div className="text-center space-y-6">
              <p className="text-xl text-primary-700 font-semibold">
                "사랑으로 하나되어, 세상을 섬기는 교회"
              </p>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  경인교회는 하나님의 말씀을 중심으로 믿음의 공동체를 이루며,
                  서로를 사랑하고 섬기는 교회가 되기를 소망합니다.
                </p>
                <p>
                  우리는 예배를 통해 하나님께 영광을 돌리고,
                  교제를 통해 성도의 교통을 나누며,
                  봉사를 통해 이웃과 지역사회를 섬깁니다.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-warm-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">말씀 중심</h3>
              <p className="text-gray-600 text-sm">
                하나님의 말씀을 중심으로 믿음을 세워갑니다
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">사랑의 교제</h3>
              <p className="text-gray-600 text-sm">
                서로 사랑하고 섬기는 따뜻한 공동체입니다
              </p>
            </div>
            <div className="bg-warm-50 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-lg font-semibold text-primary-800 mb-2">함께 성장</h3>
              <p className="text-gray-600 text-sm">
                믿음 안에서 함께 성장해 나갑니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="py-16 bg-warm-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            담임 전도사 소개
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center">
                <div className="w-64 h-80 rounded-xl overflow-hidden shadow-md bg-primary-200 flex items-center justify-center">
                  <div className="text-center text-primary-700">
                    <div className="text-6xl mb-2">👤</div>
                    <p className="text-sm">김재완 전도사</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  김재완 전도사
                </h3>
                <p className="text-primary-600 mb-6">담임 전도사</p>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    경인교회의 담임 전도사로서 성도들과 함께
                    신앙의 여정을 걸어가고 있습니다.
                  </p>
                  <p>
                    하나님의 말씀을 통해 성도들이 믿음 안에서 성장하고,
                    서로 사랑하며 섬기는 공동체가 되도록
                    섬기고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Church History */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            교회 연혁
          </h2>
          <div className="bg-warm-50 rounded-xl p-8">
            <p className="text-gray-600 text-center">
              교회 연혁은 추후 업데이트될 예정입니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
