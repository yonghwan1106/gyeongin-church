import Image from "next/image";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
}: PageHeaderProps) {
  if (backgroundImage) {
    return (
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-sacred-900/60" aria-hidden="true" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
          <p className="text-primary-300 text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
            {eyebrow}
          </p>
          <h1
            className="font-serif font-bold mb-6 leading-[1.1] tracking-tight kr-tight text-white animate-fade-in-up delay-100"
            style={{ fontSize: "clamp(40px, 6vw, 88px)", letterSpacing: "-0.03em" }}
          >
            {title}
          </h1>
          <div className="flex justify-center mb-6 animate-fade-in-up delay-200" aria-hidden="true">
            <span className="w-24 h-px bg-primary-400/60" />
          </div>
          {subtitle && (
            <p className="text-[17px] leading-[1.8] text-paper-warm max-w-prose mx-auto whitespace-pre-line animate-fade-in-up delay-300">
              {subtitle}
            </p>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-paper-warm border-y border-line">
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <p className="text-primary-600 text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
          {eyebrow}
        </p>
        <h1
          className="font-serif font-bold text-sacred-900 mb-6 leading-[1.1] tracking-tight kr-tight animate-fade-in-up delay-100"
          style={{ fontSize: "clamp(40px, 6vw, 88px)", letterSpacing: "-0.03em" }}
        >
          {title}
        </h1>
        <div className="flex justify-center mb-6 animate-fade-in-up delay-200" aria-hidden="true">
          <span className="w-24 h-px bg-primary-400/60" />
        </div>
        {subtitle && (
          <p className="text-[17px] leading-[1.8] text-ink-700 max-w-prose mx-auto whitespace-pre-line animate-fade-in-up delay-300">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
