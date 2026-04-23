type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-primary-600 text-sm tracking-[0.3em] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-sacred-900 mb-4 leading-tight kr-tight">
        {title}
      </h2>
      {centered && (
        <div className="flex items-center justify-center mb-4" aria-hidden="true">
          <span className="w-24 h-px bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
        </div>
      )}
      {description && (
        <p className={`text-base md:text-lg text-gray-700 leading-relaxed kr ${centered ? "max-w-2xl mx-auto" : "max-w-3xl"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
