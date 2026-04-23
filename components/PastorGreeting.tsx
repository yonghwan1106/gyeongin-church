import Image from "next/image";
import { siteIdentity } from "@/lib/navigation";

/* ── 본문 문단 공통 (A/B 모두 동일) ──────────────────────── */
function BodyParagraphs({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="kr text-[17px] leading-[2] text-[color:var(--color-ink-700)] [word-break:keep-all] my-[18px]">
        안녕하십니까, 경인교회와 우리함께 나눔센터의{" "}
        <strong className="text-sacred-900 font-bold">
          {siteIdentity.pastor} {siteIdentity.pastorRole}
        </strong>
        입니다.
      </p>

      <p className="kr text-[17px] leading-[2] text-[color:var(--color-ink-700)] [word-break:keep-all] my-[18px]">
        저희는{" "}
        <strong className="text-sacred-900 font-bold">
          <span className="bg-[linear-gradient(180deg,transparent_60%,var(--color-primary-200)_60%)] px-[2px]">
            14평 남짓한 아담한 공간
          </span>
        </strong>
        에서 시작했지만, 그 안에서 피어나는 꿈은 결코 작지 않습니다.
      </p>

      <p className="kr text-[17px] leading-[2] text-[color:var(--color-ink-700)] [word-break:keep-all] my-[18px]">
        기술은 차갑지만, 그 기술을 나누는 사람의 마음은 따뜻해야 한다는 믿음으로
        어르신과 장애인 이웃의 디지털 자립을 돕고 있습니다.
      </p>

      <p className="kr text-[17px] leading-[2] text-[color:var(--color-ink-700)] [word-break:keep-all] my-[18px]">
        배움의 즐거움이 곧 삶의 활력이 되고, 나아가 새로운 일자리로 이어지는
        <strong className="text-sacred-900 font-bold"> 기적의 현장</strong>에 여러분을 초대합니다.
      </p>
    </div>
  );
}

export default function PastorGreeting() {
  return (
    <section className="bg-paper py-24 px-8 relative">
      {/* ══════════════════════════════════════════════
          Variant A — 데스크탑 (md 이상)
          2-column: 폴라로이드 사진 | 텍스트+서명
      ══════════════════════════════════════════════ */}
      <div className="hidden md:block">
        <div
          className="
            grid gap-[72px] items-center
            max-w-[1180px] mx-auto
          "
          style={{ gridTemplateColumns: "400px 1fr" }}
        >
          {/* 좌측 — 폴라로이드 사진 */}
          <div
            className="
              relative bg-paper
              p-[18px_18px_60px]
              border border-[color:var(--color-line)]
              shadow-lg
            "
            style={{ transform: "rotate(-1.5deg)" }}
          >
            {/* washi tape */}
            <div
              className="absolute top-[-8px] left-[30px] right-[30px] h-4 opacity-40"
              style={{
                background:
                  "repeating-linear-gradient(90deg, var(--color-primary-200) 0 6px, transparent 6px 10px)",
              }}
              aria-hidden="true"
            />

            {/* 사진 */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/img/kim01.PNG"
                alt={`${siteIdentity.pastor} ${siteIdentity.pastorRole}`}
                fill
                className="object-cover object-top"
              />
            </div>

            {/* 캡션 */}
            <div className="text-center pt-[18px] font-serif">
              <div className="text-[18px] font-bold text-sacred-900">
                {siteIdentity.pastor}
              </div>
              <div className="text-[12px] text-primary-700 tracking-[0.1em] mt-1">
                {siteIdentity.pastorRole}
              </div>
            </div>
          </div>

          {/* 우측 — 텍스트 */}
          <div>
            {/* 거대 quote 마크 */}
            <span
              className="font-serif text-[56px] leading-[0.4] text-primary-400 mb-3 block"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <BodyParagraphs />

            {/* 서명 */}
            <div className="mt-8 pt-6 border-t border-[color:var(--color-line)] flex items-end gap-4">
              <div>
                <div className="font-serif text-[28px] font-semibold italic text-sacred-900 tracking-[-0.02em]">
                  {siteIdentity.pastor}
                </div>
                <div className="text-[13px] text-[color:var(--color-ink-600)] tracking-[0.05em] mt-1">
                  {siteIdentity.pastorRole}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          Variant B — 모바일 (md 미만)
          편지지 카드 (항공우편 스트라이프/스탬프/원형 사진 서명)
      ══════════════════════════════════════════════ */}
      <div className="md:hidden">
        <div
          className="
            max-w-[820px] mx-auto
            bg-letter
            border border-primary-200
            p-[72px_80px_60px]
            shadow-md
            relative
          "
        >
          {/* 항공 우편 봉투 스트라이프 — 상단 8px */}
          <div
            className="absolute top-[-1px] left-[-1px] right-[-1px] h-[8px]"
            style={{
              background:
                "repeating-linear-gradient(45deg, var(--color-primary-400) 0, var(--color-primary-400) 10px, var(--color-sacred-900) 10px, var(--color-sacred-900) 20px)",
            }}
            aria-hidden="true"
          />

          {/* letter-head: FROM 스탬프 + 원형 스탬프 */}
          <div className="flex justify-between items-start mb-8 pb-6 border-b border-dashed border-[color:var(--color-line-strong)]">
            {/* FROM 텍스트 */}
            <div className="font-serif text-[13px] tracking-[0.08em] text-primary-700 uppercase font-bold leading-relaxed">
              <div className="text-[10px] tracking-[0.2em] mb-1">FROM</div>
              <div>{siteIdentity.centerName}</div>
            </div>

            {/* 원형 스탬프 */}
            <div
              className="
                w-[86px] h-[86px]
                border-2 border-primary-600
                rounded-full
                grid place-items-center
                bg-[rgba(212,168,85,0.08)]
              "
              style={{ transform: "rotate(-6deg)" }}
              aria-hidden="true"
            >
              <div className="text-center font-serif text-primary-700">
                <div className="text-[10px] tracking-[0.15em] font-bold">KYUNGIN</div>
                <div className="text-[18px] font-bold mt-0.5">CENTER</div>
                <div className="text-[9px] tracking-[0.1em] mt-0.5">EST. 2021</div>
              </div>
            </div>
          </div>

          {/* letter-greeting */}
          <p className="kr font-serif text-[26px] font-semibold text-sacred-900 tracking-tight leading-[1.4] mb-6 [word-break:keep-all]">
            존경하는 이웃 여러분께
          </p>

          <BodyParagraphs />

          {/* 포인트 구분선 */}
          <div
            className="border-b border-dashed border-[color:var(--color-line-strong)] my-6"
            aria-hidden="true"
          />

          {/* letter-sign: 서명 영역 */}
          <div className="mt-10 pt-7 border-t border-[color:var(--color-line-strong)] flex justify-end items-end gap-6">
            {/* 서명 텍스트 */}
            <div className="text-right">
              <p className="text-[13px] text-[color:var(--color-ink-600)] tracking-[0.05em]">
                드림 · {siteIdentity.pastorRole}
              </p>
              <p className="font-serif text-[40px] font-semibold text-sacred-900 tracking-[-0.03em] italic leading-none mt-2">
                {siteIdentity.pastor}
              </p>
            </div>

            {/* 원형 사진 */}
            <div
              className="
                w-24 h-24
                rounded-full
                overflow-hidden
                border-[3px] border-[color:var(--color-paper)]
                shrink-0
              "
              style={{
                boxShadow: "0 0 0 1px var(--color-primary-300), var(--shadow-md)",
              }}
            >
              <Image
                src="/img/kim01.PNG"
                alt={`${siteIdentity.pastor} ${siteIdentity.pastorRole}`}
                width={96}
                height={96}
                className="object-cover object-top w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
