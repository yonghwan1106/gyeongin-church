import type { EducationLevel } from "@/lib/content/education";

type Props = { level: EducationLevel; index: number };

export default function EducationLevelCard({ level, index }: Props) {
  return (
    <article
      id={level.id}
      className={`sacred-card rounded-3xl p-8 md:p-10 scroll-mt-24 ${
        level.highlight ? "ring-2 ring-care-500/40 bg-gradient-to-br from-care-50 to-warm-50" : ""
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
        <div
          className={`flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white font-bold text-base ${
            level.highlight
              ? "bg-gradient-to-br from-care-500 to-care-600"
              : "bg-gradient-to-br from-primary-500 to-primary-700"
          }`}
          aria-hidden="true"
        >
          {level.badge.split("").map((c, i) => (
            <span key={i} className="leading-none">{c}</span>
          ))}
        </div>
        <div className="flex-grow">
          <p className={`text-sm tracking-widest uppercase font-semibold ${level.highlight ? "text-care-600" : "text-primary-600"}`}>
            {level.badge}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-sacred-900 mb-1">
            {level.title}
          </h3>
          <p className="text-base md:text-lg text-gray-700">{level.subtitle}</p>
        </div>
      </div>

      <dl className="grid sm:grid-cols-2 gap-4 mb-6 text-sm">
        <div className="bg-warm-100 rounded-xl px-4 py-3">
          <dt className="text-primary-700 font-semibold mb-1">대상</dt>
          <dd className="text-gray-700">{level.target}</dd>
        </div>
        <div className="bg-warm-100 rounded-xl px-4 py-3">
          <dt className="text-primary-700 font-semibold mb-1">목표</dt>
          <dd className="text-gray-700">{level.goal}</dd>
        </div>
        <div className="bg-warm-100 rounded-xl px-4 py-3">
          <dt className="text-primary-700 font-semibold mb-1">운영</dt>
          <dd className="text-gray-700">{level.duration}</dd>
        </div>
        <div className="bg-warm-100 rounded-xl px-4 py-3">
          <dt className="text-primary-700 font-semibold mb-1">정원</dt>
          <dd className="text-gray-700">{level.capacity}</dd>
        </div>
      </dl>

      <div>
        <h4 className="font-serif text-lg font-semibold text-sacred-900 mb-3">📚 주요 모듈</h4>
        <ul className="space-y-3">
          {level.modules.map((m, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/70">
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  level.highlight
                    ? "bg-care-100 text-care-700"
                    : "bg-primary-100 text-primary-800"
                }`}
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-sacred-900">{m.title}</p>
                <p className="text-sm text-gray-700 mt-1 leading-relaxed">{m.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
