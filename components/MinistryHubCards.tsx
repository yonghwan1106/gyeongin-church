import Link from "next/link";
import { ministries } from "@/lib/content/ministry";

export default function MinistryHubCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {ministries.map((m, idx) => (
        <article
          key={m.id}
          className="sacred-card rounded-3xl p-8 hover-lift flex flex-col animate-fade-in-up"
          style={{ animationDelay: `${idx * 120}ms` }}
        >
          <div
            className="w-16 h-16 mb-5 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center text-3xl"
            aria-hidden="true"
          >
            {m.icon}
          </div>
          <h3 className="font-serif text-2xl font-bold text-sacred-900 mb-2">
            {m.title}
          </h3>
          <p className="text-primary-700 text-sm font-medium mb-4 leading-relaxed">
            {m.tagline}
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-5">
            {m.description}
          </p>
          <ul className="space-y-2 text-sm text-gray-700 mb-6 flex-grow">
            {m.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <span
                  className="text-primary-400 mt-1 font-bold"
                  aria-hidden="true"
                >
                  –
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <Link
            href={m.ctaHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 min-h-[48px] bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-colors text-sm"
          >
            {m.ctaLabel}
            <span aria-hidden="true">→</span>
          </Link>
        </article>
      ))}
    </div>
  );
}
