import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "교회소개 | 경인교회",
  description: "대한예수교장로회 예원총회 경인교회의 비전과 역사, 담임 전도사를 소개합니다.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/header_about_bible_1768878741549.png"
            alt="교회소개 배경"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sacred-900/70" />
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10 text-white">
          <span className="text-primary-300 text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-in-up">
            About Us
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-100 text-white drop-shadow-lg">
            교회소개
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in delay-200">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto animate-fade-in-up delay-300 drop-shadow-md">
            대한예수교장로회 예원총회 소속<br />
            경인교회의 비전과 역사를 소개합니다
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-b from-warm-100 to-warm-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/images/content_vision_1768878800425.png"
            alt="Vision Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute top-20 right-10 w-32 h-32 border border-primary-300/30 rounded-full" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Vision
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              교회 비전
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="sacred-card rounded-3xl p-10 md:p-14 text-center mb-16">
            <p className="font-serif text-2xl md:text-3xl text-primary-700 font-semibold mb-8 leading-relaxed">
              "사랑으로 하나되어,<br />세상을 섬기는 교회"
            </p>
            <div className="text-gray-600 leading-relaxed space-y-4 max-w-2xl mx-auto">
              <p>
                경인교회는 하나님의 말씀을 중심으로 믿음의 공동체를 이루며,
                서로를 사랑하고 섬기는 교회가 되기를 소망합니다.
              </p>
              <p>
                우리는 예배를 통해 하나님께 영광을 돌리고,
                교제를 통해 성도의 교통을 나누며,
                봉사를 통해 이웃과 지역사회를 섬깁니다.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📖", title: "말씀 중심", desc: "하나님의 말씀을 중심으로 믿음을 세워갑니다" },
              { icon: "🤝", title: "사랑의 교제", desc: "서로 사랑하고 섬기는 따뜻한 공동체입니다" },
              { icon: "🌱", title: "함께 성장", desc: "믿음 안에서 함께 성장해 나갑니다" },
            ].map((item, index) => (
              <div
                key={item.title}
                className="sacred-card rounded-2xl p-8 text-center hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-sacred-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastor Section */}
      <section className="py-24 bg-gradient-to-b from-warm-200 to-warm-100 relative overflow-hidden">
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-200/30 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Pastor
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              담임 전도사 소개
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="sacred-card rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 to-primary-300 rounded-3xl rotate-3 opacity-50" />
                  <div className="absolute -inset-4 bg-gradient-to-tr from-primary-100 to-primary-200 rounded-3xl -rotate-3 opacity-50" />
                  <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-2xl shadow-primary-900/20">
                    <Image
                      src="/img/kim02.PNG"
                      alt="김재완 전도사"
                      fill
                      className="object-cover"
                      sizes="288px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-sacred-900/30 via-transparent to-transparent" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-6 py-3 shadow-xl">
                    <p className="text-primary-600 text-xs mb-0.5">담임 전도사</p>
                    <p className="font-serif text-xl font-bold text-sacred-900">김재완</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-bold text-sacred-900 mb-2">
                  김재완 전도사
                </h3>
                <p className="text-primary-600 mb-8 text-lg">담임 전도사</p>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  <p>
                    경인교회의 담임 전도사로서 성도들과 함께
                    신앙의 여정을 걸어가고 있습니다.
                  </p>
                  <p>
                    하나님의 말씀을 통해 성도들이 믿음 안에서 성장하고,
                    서로 사랑하며 섬기는 공동체가 되도록
                    섬기고 있습니다.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-16 h-px bg-gradient-to-r from-primary-400 to-transparent" />
                  <span className="text-primary-400">✦</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Church History */}
      <section className="py-24 bg-gradient-to-b from-warm-100 to-warm-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              History
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              교회 연혁
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="sacred-card rounded-3xl p-10 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
              <span className="text-primary-600 text-3xl">📜</span>
            </div>
            <p className="text-gray-600 text-lg">
              교회 연혁은 추후 업데이트될 예정입니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
