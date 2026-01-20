import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1438032005730-c779502df39b?q=80&w=2071&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          경인교회에 오신 것을<br />
          환영합니다
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
          하나님의 사랑과 은혜가 넘치는 따뜻한 교회,<br />
          경인교회와 함께 신앙의 여정을 걸어가세요.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/worship"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            예배안내
          </Link>
          <Link
            href="/location"
            className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium transition-colors backdrop-blur-sm"
          >
            오시는길
          </Link>
        </div>
      </div>
    </section>
  );
}
