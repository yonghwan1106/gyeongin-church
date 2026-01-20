const worshipSchedule = [
  {
    title: "주일예배",
    time: "오전 11:00",
    description: "주일에 드리는 성도의 예배",
    icon: "☀️",
  },
  {
    title: "수요예배",
    time: "저녁 7:00",
    description: "말씀을 통한 은혜의 시간",
    icon: "🌙",
  },
];

export default function WorshipTimes() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          예배 시간 안내
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {worshipSchedule.map((worship) => (
            <div
              key={worship.title}
              className="bg-warm-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl mb-4 block">{worship.icon}</span>
              <h3 className="text-xl font-semibold text-primary-800 mb-2">
                {worship.title}
              </h3>
              <p className="text-2xl font-bold text-primary-600 mb-2">
                {worship.time}
              </p>
              <p className="text-gray-600 text-sm">{worship.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
