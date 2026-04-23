import Link from "next/link";
import { siteIdentity } from "@/lib/navigation";

/* ------------------------------------------------------------------ */
/* Variant A — Desktop (md+)                                           */
/* ------------------------------------------------------------------ */
function VariantA() {
  return (
    <section className="bg-paper py-24 px-8 border-t border-line">
      <div className="max-w-[1180px] mx-auto grid grid-cols-2 gap-14 items-start">

        {/* Left: dl info */}
        <div>
          <p className="text-primary-700 text-[11px] tracking-[0.2em] uppercase font-bold kr-tight mb-3">
            Location · 용인 동백
          </p>
          <h2
            className="font-serif font-bold text-sacred-900 kr-tight mb-8"
            style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-0.02em" }}
          >
            찾아오시는 길
          </h2>

          <dl>
            {/* 주소 */}
            <div>
              <dt className="text-[12px] tracking-[0.2em] uppercase text-primary-700 font-bold mt-0">
                주소
              </dt>
              <dd className="mt-1.5 text-[17px] text-ink-700 leading-[1.7] [word-break:keep-all]">
                <strong className="text-sacred-900">{siteIdentity.address}</strong>
                <span className="block text-[15px] text-ink-600 mt-0.5">
                  ({siteIdentity.addressDetail})
                </span>
              </dd>
            </div>

            {/* 가장 가까운 역 */}
            <div>
              <dt className="text-[12px] tracking-[0.2em] uppercase text-primary-700 font-bold mt-[22px]">
                가장 가까운 역
              </dt>
              <dd className="mt-1.5 text-[17px] text-ink-700 leading-[1.7] [word-break:keep-all]">
                동백역 1번 출구 도보 5분
              </dd>
            </div>

            {/* 연락처 */}
            <div>
              <dt className="text-[12px] tracking-[0.2em] uppercase text-primary-700 font-bold mt-[22px]">
                연락처
              </dt>
              <dd className="mt-1.5 text-[17px] text-ink-700 leading-[1.7] [word-break:keep-all]">
                <strong className="text-sacred-900">{siteIdentity.phonePrimary}</strong>
                {siteIdentity.phoneSecondary && (
                  <span className="text-ink-500"> · {siteIdentity.phoneSecondary}</span>
                )}
              </dd>
            </div>

            {/* 대중교통 */}
            <div>
              <dt className="text-[12px] tracking-[0.2em] uppercase text-primary-700 font-bold mt-[22px]">
                대중교통
              </dt>
              <dd className="mt-1.5 text-[17px] text-ink-700 leading-[1.7] [word-break:keep-all]">
                버스 · 동백죽전대로 정류장 하차
                <span className="block text-[15px] text-ink-600 mt-0.5">
                  자가용 이용 시 메디컬빌딩 주차장 이용
                </span>
              </dd>
            </div>
          </dl>

          {/* Accessibility note */}
          <div className="mt-[30px] p-[18px_22px] bg-care-50 border border-care-200 rounded-[14px] flex gap-3.5">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-[10px] bg-care-500 text-white grid place-items-center font-bold"
              aria-hidden="true"
            >
              ♿
            </div>
            <p className="text-[15px] leading-[1.7] text-care-800 m-0">
              <strong className="text-care-800">무장애 출입</strong>
              {" · "}
              {siteIdentity.accessibility}
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`tel:${siteIdentity.phonePrimary}`}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-full bg-care-500 text-paper-warm font-semibold text-[15px] transition-opacity hover:opacity-85"
            >
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.45 5.45l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              전화하기
            </a>
            <a
              href="https://map.kakao.com/link/search/경기도 용인특례시 기흥구 동백죽전대로 341"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-full border border-primary-700 text-primary-700 font-semibold text-[15px] transition-colors hover:bg-primary-50"
            >
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              카카오맵 열기
            </a>
          </div>
        </div>

        {/* Right: Google Maps embed */}
        <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden border border-line shadow-md">
          <iframe
            src="https://www.google.com/maps?q=37.270468,127.150520&hl=ko&z=18&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="우리함께 평생교육·나눔센터 위치 지도"
            allowFullScreen
            className="absolute inset-0"
          />
          <a
            href="https://www.google.com/maps/place/메디슨타워+경인교회/@37.270468,127.150520,18z"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-sacred-900 text-[12px] font-semibold tracking-wide px-3 py-2 rounded-full shadow-md hover:bg-white transition"
          >
            Google 지도 열기 →
          </a>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
            <Link
              href="/location"
              className="pointer-events-auto px-5 py-2 rounded-full bg-paper/90 backdrop-blur-sm border border-line text-ink-700 text-[13px] font-semibold tracking-wide hover:bg-paper-warm transition-colors shadow-sm"
            >
              상세 오시는 길 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Variant B — Mobile (below md)  — original dark map + pulse pin     */
/* ------------------------------------------------------------------ */
function VariantB() {
  return (
    <section className="bg-paper-warm py-[120px] px-8 border-t border-line">
      <div className="max-w-[1180px] mx-auto grid grid-cols-1 gap-16 items-start">

        {/* Left: Description list */}
        <div>
          <p className="text-primary-700 text-[11px] tracking-[0.2em] uppercase font-bold kr-tight mb-3">
            LOCATION · 용인 동백
          </p>
          <h2
            className="font-serif font-bold text-sacred-900 kr-tight mb-8"
            style={{ fontSize: "clamp(36px, 4vw, 56px)", letterSpacing: "-0.02em" }}
          >
            찾아오시는 길
          </h2>

          <dl className="space-y-0">
            {/* 주소 */}
            <div className="mt-0">
              <dt className="text-[11px] tracking-[0.2em] text-primary-700 uppercase font-bold font-serif kr-tight">
                주소
              </dt>
              <dd
                className="mt-1.5 font-serif text-sacred-900 kr leading-[1.8]"
                style={{ fontSize: "clamp(18px, 1.5vw, 22px)" }}
              >
                {siteIdentity.address}
                <span className="block text-[15px] text-ink-600 font-sans mt-0.5">
                  ({siteIdentity.addressDetail})
                </span>
              </dd>
            </div>

            {/* 가장 가까운 역 */}
            <div className="mt-6">
              <dt className="text-[11px] tracking-[0.2em] text-primary-700 uppercase font-bold font-serif kr-tight">
                가장 가까운 역
              </dt>
              <dd
                className="mt-1.5 font-serif text-sacred-900 kr leading-[1.8]"
                style={{ fontSize: "clamp(18px, 1.5vw, 22px)" }}
              >
                동백역 1번 출구 도보 5분
              </dd>
            </div>

            {/* 전화 */}
            <div className="mt-6">
              <dt className="text-[11px] tracking-[0.2em] text-primary-700 uppercase font-bold font-serif kr-tight">
                전화
              </dt>
              <dd
                className="mt-1.5 font-serif text-sacred-900 kr leading-[1.8]"
                style={{ fontSize: "clamp(18px, 1.5vw, 22px)" }}
              >
                {siteIdentity.phonePrimary}
                {siteIdentity.phoneSecondary && (
                  <span className="text-ink-500 text-[15px] font-sans"> · {siteIdentity.phoneSecondary}</span>
                )}
              </dd>
            </div>

            {/* 대중교통 */}
            <div className="mt-6">
              <dt className="text-[11px] tracking-[0.2em] text-primary-700 uppercase font-bold font-serif kr-tight">
                대중교통
              </dt>
              <dd
                className="mt-1.5 font-serif text-sacred-900 kr leading-[1.8]"
                style={{ fontSize: "clamp(18px, 1.5vw, 22px)" }}
              >
                버스 · 동백죽전대로 정류장 하차
                <span className="block text-[15px] text-ink-600 font-sans mt-0.5">
                  자가용 이용 시 메디컬빌딩 주차장 이용
                </span>
              </dd>
            </div>
          </dl>

          {/* Accessibility note */}
          <div className="mt-6 p-4 bg-care-50 border border-care-200 rounded-[14px] flex gap-3">
            <div
              className="w-10 h-10 rounded-[10px] bg-care-500 text-white grid place-items-center font-bold flex-shrink-0"
              aria-hidden="true"
            >
              ♿
            </div>
            <p className="text-[14px] leading-[1.7] text-care-800 kr m-0">
              <strong className="text-care-800">무장애 출입</strong>
              {" · "}
              {siteIdentity.accessibility}
            </p>
          </div>

          {/* CTA row */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`tel:${siteIdentity.phonePrimary}`}
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-full bg-care-500 text-paper-warm font-semibold text-[15px] transition-opacity hover:opacity-85"
            >
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 5.45 5.45l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              전화하기
            </a>
            <a
              href="https://map.kakao.com/link/search/경기도 용인특례시 기흥구 동백죽전대로 341"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[48px] rounded-full border border-primary-700 text-primary-700 font-semibold text-[15px] transition-colors hover:bg-primary-50"
            >
              <svg
                width="18" height="18" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              카카오맵 열기
            </a>
          </div>
        </div>

        {/* Right: Google Maps embed */}
        <div className="relative overflow-hidden rounded-[14px] border border-line shadow-md" style={{ aspectRatio: "4/3" }}>
          <iframe
            src="https://www.google.com/maps?q=37.270468,127.150520&hl=ko&z=18&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="우리함께 평생교육·나눔센터 위치 지도"
            allowFullScreen
            className="absolute inset-0"
          />
          <a
            href="https://www.google.com/maps/place/메디슨타워+경인교회/@37.270468,127.150520,18z"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-sacred-900 text-[12px] font-semibold tracking-wide px-3 py-2 rounded-full shadow-md hover:bg-white transition"
          >
            Google 지도 열기 →
          </a>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
            <Link
              href="/location"
              className="pointer-events-auto px-5 py-2 rounded-full bg-paper/90 backdrop-blur-sm border border-line text-ink-700 text-[13px] font-semibold tracking-wide hover:bg-paper-warm transition-colors shadow-sm"
            >
              상세 오시는 길 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Export: A on desktop (md+), B on mobile (below md)                  */
/* ------------------------------------------------------------------ */
export default function LocationPreview() {
  return (
    <>
      {/* Desktop: Variant A */}
      <div className="hidden md:block">
        <VariantA />
      </div>

      {/* Mobile: Variant B */}
      <div className="md:hidden">
        <VariantB />
      </div>
    </>
  );
}
