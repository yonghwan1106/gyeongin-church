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
  },
  {
    title: "수요예배",
    time: "저녁 7:00",
    description: "말씀을 통해 은혜를 나누는 예배입니다.",
    icon: "🌙",
    location: "본당",
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
    <div>
      {/* Page Header */}
      <section className="bg-primary-700 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">예배안내</h1>
          <p className="text-primary-200 text-lg">
            경인교회 예배 시간을 안내합니다
          </p>
        </div>
      </section>

      {/* Worship Times */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            예배 시간
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {worshipSchedule.map((worship) => (
              <div
                key={worship.title}
                className="bg-warm-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-5xl mb-6 block">{worship.icon}</span>
                <h3 className="text-2xl font-bold text-primary-800 mb-2">
                  {worship.title}
                </h3>
                <p className="text-3xl font-bold text-primary-600 mb-4">
                  {worship.time}
                </p>
                <p className="text-gray-600 mb-2">{worship.description}</p>
                <p className="text-sm text-primary-500">장소: {worship.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Worship Order */}
      <section className="py-16 bg-warm-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            예배 순서
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-4">
              {worshipOrder.map((item, index) => (
                <div
                  key={item.step}
                  className="flex items-center gap-4 py-3 border-b border-gray-100 last:border-0"
                >
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <span className="font-medium text-gray-800">{item.step}</span>
                  </div>
                  {item.description && (
                    <div className="text-gray-500 text-sm">{item.description}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-primary-50 border border-primary-200 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-primary-800 mb-2">
              안내사항
            </h3>
            <p className="text-gray-600">
              예배 시간에 맞춰 오셔서 함께 은혜로운 예배를 드리시기 바랍니다.<br />
              처음 방문하시는 분은 환영합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
