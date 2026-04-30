import Link from "next/link";
import { footerQuickLinks, siteIdentity } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="bg-sacred-900 text-white relative overflow-hidden">
      {/* 상단 골드 헤어라인 */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        {/* 무장애 안내 배너 */}
        <div className="mb-12 bg-care-500/10 border border-care-300/20 px-5 py-4 flex items-start gap-3">
          <svg
            className="w-5 h-5 text-care-300 mt-0.5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle cx="12" cy="5" r="1.5" strokeWidth={1.5} />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 10h6M12 10v5m-3 4h6"
            />
          </svg>
          <p className="text-care-100 text-sm md:text-base leading-relaxed kr">
            <strong className="text-white font-semibold">무장애 출입 :</strong>{" "}
            {siteIdentity.accessibility}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {/* 센터·교회 정보 (2-col) */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <p className="text-primary-500/70 text-xs tracking-widest uppercase mb-2">
                {siteIdentity.legalShort}
              </p>
              <h3 className="text-xl font-semibold leading-tight text-white">
                {siteIdentity.centerName}
              </h3>
            </div>
            <p className="text-ink-400 leading-relaxed max-w-md text-sm kr">
              14평 작은 공간에서 시작된 큰 기적.
              어르신·장애인 이웃의 디지털 자립을 돕고,
              이웃과 온기를 나누는 평생교육·나눔센터입니다.
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <h3 className="text-sm font-semibold mb-6 flex items-center gap-2 text-white tracking-wide">
              <span className="w-8 h-px bg-primary-500 flex-shrink-0" aria-hidden="true" />
              바로가기
            </h3>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-400 hover:text-primary-300 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span
                      className="w-0 group-hover:w-2 h-px bg-primary-400 transition-all duration-200 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-sm font-semibold mb-6 flex items-center gap-2 text-white tracking-wide">
              <span className="w-8 h-px bg-primary-500 flex-shrink-0" aria-hidden="true" />
              연락처
            </h3>
            <ul className="space-y-4 text-ink-400 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-primary-500/70 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  {siteIdentity.address}
                  <br />
                  <span className="text-ink-400/60 text-xs">
                    {siteIdentity.addressDetail}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-primary-500/70 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>
                  <a
                    href={`tel:${siteIdentity.phonePrimary}`}
                    className="hover:text-primary-300 transition-colors"
                  >
                    상담 전용 {siteIdentity.phonePrimary}
                  </a>
                  <br />
                  <span className="text-ink-400/60 text-xs">
                    {siteIdentity.phoneSecondary}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-4 h-4 text-primary-500/70 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${siteIdentity.email}`}
                  className="hover:text-primary-300 transition-colors"
                >
                  {siteIdentity.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-3 border-t border-white/8">
                <svg
                  className="w-4 h-4 text-primary-500/70 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="leading-relaxed">
                  <span className="text-ink-400/70 text-xs">고유번호증</span>{" "}
                  <span className="text-white font-medium">{siteIdentity.businessNumber}</span>
                  <br />
                  <span className="text-ink-400/70 text-xs">홈페이지</span>{" "}
                  <a
                    href={siteIdentity.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-primary-300 transition-colors"
                  >
                    {siteIdentity.domain}
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-ink-400/70 text-xs">
              © {new Date().getFullYear()} {siteIdentity.legalName}. All rights reserved.
            </p>
            <div className="flex items-center gap-3 text-ink-400/50 text-xs tracking-widest">
              <span>비영리 교육·복지 공간</span>
              <span aria-hidden="true">·</span>
              <span>{siteIdentity.legalShort}</span>
            </div>
          </div>
          {/* 마스트헤드 푸터 서명 */}
          <p className="mt-4 text-center text-primary-500/30 text-[10px] tracking-[0.25em] uppercase select-none" aria-hidden="true">
            우리함께 · 경기도 용인 · 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
