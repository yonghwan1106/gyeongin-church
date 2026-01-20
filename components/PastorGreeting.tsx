import Image from "next/image";

export default function PastorGreeting() {
  return (
    <section className="py-24 bg-gradient-to-b from-warm-100 to-warm-200 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-300/20 rounded-full blur-3xl" />

      {/* Decorative Quote Mark */}
      <div className="absolute top-32 left-1/4 text-[200px] font-serif text-primary-200/30 leading-none select-none hidden lg:block">
        "
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-slide-left">
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl rotate-3 opacity-50" />
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-100 to-primary-200 rounded-3xl -rotate-3 opacity-50" />

              {/* Image Container */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/20">
                <Image
                  src="/img/kim01.PNG"
                  alt="김재완 전도사"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 320px"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sacred-900/30 via-transparent to-transparent" />
              </div>

              {/* Name Badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-6 py-3 shadow-xl">
                <p className="text-primary-600 text-xs mb-0.5">담임 전도사</p>
                <p className="font-serif text-xl font-bold text-sacred-900">김재완</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-right">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Pastor&apos;s Message
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-8">
              담임 전도사
              <br />
              <span className="text-gradient-gold bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 bg-clip-text text-transparent">
                인사말
              </span>
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p className="text-lg">
                안녕하세요, 경인교회 담임 <strong className="text-sacred-900">김재완</strong> 전도사입니다.
              </p>
              <p>
                경인교회는 하나님의 말씀을 중심으로 성도들이 서로 사랑하고
                섬기며 함께 성장해 나가는 따뜻한 공동체입니다.
              </p>
              <p>
                우리 교회는 작지만 큰 사랑으로 서로를 품고,
                지역사회와 함께 나누며 살아가는 교회가 되기를 소망합니다.
              </p>
              <p>
                언제든지 경인교회에 방문해 주시면 진심으로 환영하겠습니다.
                함께 예배하고 교제하며 하나님의 은혜를 경험하시기를 바랍니다.
              </p>
            </div>

            {/* Decorative Line */}
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-primary-400 to-transparent" />
              <span className="text-primary-400">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
