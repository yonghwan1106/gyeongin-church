import Link from "next/link";
import { ministries } from "@/lib/content/ministry";

const numbers = ["No.01", "No.02", "No.03"];

const ctaHrefs: Record<string, string> = {
  foodbank: "/ministry/foodbank",
  "space-sharing": "/ministry",
  "citizen-press": "/news",
};

/* ── Desktop-only inline SVG icons keyed by ministry id ── */
const desktopIcons: Record<string, React.ReactNode> = {
  foodbank: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24" aria-hidden="true">
      <path d="M4 8h16l-1.5 11a2 2 0 01-2 1.8H7.5A2 2 0 015.5 19L4 8z" />
      <path d="M8 8V6a4 4 0 018 0v2" />
      <circle cx="9" cy="13" r="1" fill="currentColor" />
      <circle cx="15" cy="13" r="1" fill="currentColor" />
    </svg>
  ),
  "space-sharing": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24" aria-hidden="true">
      <path d="M3 10l9-6 9 6v10a1 1 0 01-1 1H4a1 1 0 01-1-1V10z" />
      <path d="M9 21v-7h6v7" />
    </svg>
  ),
  "citizen-press": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="24" height="24" aria-hidden="true">
      <path d="M4 4h16v12H8l-4 4V4z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  ),
};

export default function OutreachOverview() {
  return (
    <>
      {/* ── MOBILE B: sacred-900 dark section ── */}
      <section className="md:hidden bg-sacred-900" aria-labelledby="outreach-heading-mobile">
        <div
          className="max-w-[1180px] mx-auto px-8"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          {/* Editorial header */}
          <h2
            id="outreach-heading-mobile"
            className="font-serif text-white kr-tight"
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "56px",
              maxWidth: "16ch",
            }}
          >
            이웃과 함께하는{" "}
            <em
              className="not-italic"
              style={{ color: "var(--color-primary-300)" }}
            >
              세 가지 사역
            </em>
          </h2>

          {/* 3-column article grid */}
          <div className="grid grid-cols-1 gap-8">
            {ministries.map((m, idx) => (
              <article
                key={m.id}
                className="flex flex-col"
                style={{
                  paddingTop: "28px",
                  borderTop: "1px solid rgba(212,168,85,0.25)",
                  position: "relative",
                }}
              >
                {/* primary-400 accent line at top */}
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "-1px",
                    width: "40px",
                    height: "3px",
                    background: "var(--color-primary-400)",
                    display: "block",
                  }}
                />

                {/* Serial number */}
                <span
                  className="font-serif"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.25em",
                    color: "var(--color-primary-300)",
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}
                >
                  {numbers[idx]}
                </span>

                {/* Title */}
                <h3
                  className="font-serif text-white kr-tight"
                  style={{
                    fontSize: "30px",
                    fontWeight: 700,
                    margin: "14px 0 10px",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                  }}
                >
                  {m.title}
                </h3>

                {/* Body */}
                <p
                  className="kr flex-grow"
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.8,
                    color: "rgba(243,235,216,0.75)",
                    margin: 0,
                  }}
                >
                  {m.description}
                </p>

                {/* Bullets — max 2, joined with middle dot */}
                {m.bullets && m.bullets.length > 0 && (
                  <p
                    style={{
                      marginTop: "10px",
                      fontSize: "13px",
                      color: "var(--color-primary-300)",
                      lineHeight: 1.7,
                    }}
                  >
                    {m.bullets.slice(0, 2).join(" · ")}
                  </p>
                )}

                {/* CTA arrow link */}
                <div
                  style={{
                    marginTop: "24px",
                    paddingTop: "20px",
                    borderTop: "1px solid rgba(212,168,85,0.15)",
                  }}
                >
                  <Link
                    href={ctaHrefs[m.id] ?? "/ministry"}
                    className="font-serif"
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.12em",
                      color: "var(--color-primary-400)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontWeight: 700,
                      transition: "color 0.2s",
                    }}
                  >
                    → 자세히 보기
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESKTOP A: paper light cards ── */}
      <section
        className="hidden md:block border-y border-line"
        style={{
          background: "var(--color-paper-warm)",
          paddingTop: "96px",
          paddingBottom: "96px",
          paddingLeft: "32px",
          paddingRight: "32px",
        }}
        aria-labelledby="outreach-heading-desktop"
      >
        <div className="max-w-[1180px] mx-auto">
          {/* Editorial header */}
          <div style={{ maxWidth: "720px", marginBottom: "40px" }}>
            <span
              className="font-serif"
              style={{
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-primary-700)",
                fontWeight: 700,
                display: "block",
                marginBottom: "12px",
              }}
            >
              Three Outreach · 3 Ministries
            </span>
            <h2
              id="outreach-heading-desktop"
              className="font-serif kr-tight"
              style={{
                fontSize: "clamp(32px, 3.5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "var(--color-sacred-900)",
              }}
            >
              이웃과 온기를 나누는,{" "}
              <br />
              가장 가까운 손길
            </h2>
          </div>

          {/* 3-column card grid */}
          <div className="grid grid-cols-3 gap-5">
            {ministries.map((m) => (
              <article
                key={m.id}
                className="outreach-card group flex flex-col"
                style={{
                  background: "#fff",
                  border: "1px solid var(--color-line)",
                  borderRadius: "28px",
                  padding: "32px",
                }}
              >
                {/* Icon box */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "14px",
                    background: "var(--color-primary-100)",
                    color: "var(--color-primary-700)",
                    display: "grid",
                    placeItems: "center",
                    marginBottom: "18px",
                    flexShrink: 0,
                  }}
                >
                  {desktopIcons[m.id]}
                </div>

                {/* Title */}
                <h3
                  className="font-serif kr-tight"
                  style={{
                    fontSize: "22px",
                    fontWeight: 700,
                    color: "var(--color-sacred-900)",
                    letterSpacing: "-0.02em",
                    marginBottom: "6px",
                  }}
                >
                  {m.title}
                </h3>

                {/* Tag */}
                {m.tag && (
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--color-primary-700)",
                      marginBottom: "14px",
                    }}
                  >
                    {m.tag}
                  </p>
                )}

                {/* Description */}
                <p
                  className="kr flex-grow"
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.75,
                    color: "var(--color-ink-700)",
                    wordBreak: "keep-all",
                  }}
                >
                  {m.description}
                </p>

                {/* Bullet list */}
                <ul
                  style={{
                    marginTop: "18px",
                    padding: 0,
                    listStyle: "none",
                  }}
                >
                  {m.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        position: "relative",
                        paddingLeft: "20px",
                        fontSize: "14px",
                        color: "var(--color-ink-700)",
                        lineHeight: 1.7,
                        margin: "6px 0",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          left: "2px",
                          top: "12px",
                          width: "10px",
                          height: "1px",
                          background: "var(--color-primary-500)",
                          display: "block",
                        }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* CTA link */}
                <div style={{ marginTop: "24px" }}>
                  <Link
                    href={ctaHrefs[m.id] ?? "/ministry"}
                    className="font-serif"
                    style={{
                      fontSize: "13px",
                      letterSpacing: "0.12em",
                      color: "var(--color-primary-700)",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      fontWeight: 700,
                    }}
                  >
                    → 자세히 보기
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
