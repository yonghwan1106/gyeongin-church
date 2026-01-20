import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2071&auto=format&fit=crop")',
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sacred-900/70 via-sacred-800/60 to-sacred-900/80" />
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,85,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary-400/20 rounded-full animate-float opacity-50" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-primary-400/20 rounded-full animate-float delay-300 opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Denomination */}
        <p className="animate-fade-in-up delay-100 text-primary-300 text-sm tracking-[0.3em] uppercase mb-4">
          대한예수교장로회 예원총회
        </p>

        {/* Main Title */}
        <h1 className="animate-fade-in-up delay-200 font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          경인교회에 오신 것을
          <br />
          <span className="text-gradient-gold bg-gradient-to-r from-primary-300 via-primary-200 to-primary-300 bg-clip-text text-transparent">
            환영합니다
          </span>
        </h1>

        {/* Decorative Divider */}
        <div className="animate-fade-in delay-300 flex items-center justify-center gap-4 mb-8">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400" />
          <span className="text-primary-400 text-xl">✦</span>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary-400" />
        </div>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-400 text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl mx-auto">
          하나님의 사랑과 은혜가 넘치는 따뜻한 교회,
          <br className="hidden sm:block" />
          경인교회와 함께 신앙의 여정을 걸어가세요.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/worship"
            className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,168,85,0.4)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              예배안내
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <Link
            href="/location"
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium border border-white/30 transition-all duration-300 hover:bg-white/20 hover:border-primary-300/50"
          >
            <span className="flex items-center justify-center gap-2">
              오시는길
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-700">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
