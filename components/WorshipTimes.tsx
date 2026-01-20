const worshipSchedule = [
  {
    title: "주일예배",
    time: "오전 11:00",
    description: "주일에 드리는 성도의 예배",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "수요예배",
    time: "저녁 7:00",
    description: "말씀을 통한 은혜의 시간",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
];

export default function WorshipTimes() {
  return (
    <section className="py-24 bg-gradient-to-b from-warm-50 to-warm-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-300/50 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
            Worship Service
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
            예배 시간 안내
          </h2>
          <div className="flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-500">✦</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
        </div>

        {/* Worship Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {worshipSchedule.map((worship, index) => (
            <div
              key={worship.title}
              className={`group sacred-card rounded-3xl p-8 text-center hover-lift ${
                index === 0 ? "animate-slide-left" : "animate-slide-right"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                {worship.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-semibold text-sacred-900 mb-3">
                {worship.title}
              </h3>

              {/* Time */}
              <p className="text-4xl font-bold text-gradient-gold bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-clip-text text-transparent mb-4">
                {worship.time}
              </p>

              {/* Description */}
              <p className="text-gray-500 text-sm">{worship.description}</p>

              {/* Hover Accent */}
              <div className="mt-6 h-1 w-0 group-hover:w-16 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full mx-auto transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
