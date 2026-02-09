import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "푸드뱅크 | 경인교회",
  description:
    "경인교회 푸드뱅크 - 나눔으로 따뜻한 세상을 만들어갑니다. 식품 기부, 수혜 안내, 자원봉사 참여 정보를 확인하세요.",
};

export default function FoodbankPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_foodbank.jpg"
            alt="푸드뱅크 배경"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-sacred-900/70" />
        </div>

        <div className="max-w-6xl mx-auto px-4 text-center relative z-10 text-white">
          <span className="text-primary-300 text-sm tracking-[0.3em] uppercase mb-4 block animate-fade-in-up">
            Food Bank
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up delay-100 text-white drop-shadow-lg">
            푸드뱅크
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in delay-200">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400">✦</span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto animate-fade-in-up delay-300 drop-shadow-md">
            나눔으로 따뜻한 세상을 만들어갑니다
            <br />
            여러분의 작은 나눔이 이웃에게 큰 희망이 됩니다
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-warm-100 to-warm-200 relative overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 border border-primary-300/30 rounded-full" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              About
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              푸드뱅크란?
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="sacred-card rounded-3xl p-10">
              <p className="text-gray-600 leading-relaxed mb-4">
                푸드뱅크는 식품 제조업체, 개인, 단체 등에서 기부한 여유 식품을 모아
                저소득 가정, 독거노인, 한부모 가족 등 도움이 필요한 이웃에게 전달하는
                식품 나눔 사업입니다.
              </p>
              <p className="text-gray-600 leading-relaxed">
                경인교회 푸드뱅크는 지역사회의 식품 불균형을 해소하고, 어려운
                이웃들이 건강한 식생활을 영위할 수 있도록 사랑의 다리 역할을 하고
                있습니다.
              </p>
            </div>

            <div className="sacred-card rounded-3xl p-10">
              <h3 className="font-serif text-xl font-semibold text-sacred-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </span>
                운영 취지
              </h3>
              <ul className="space-y-4 text-gray-600">
                {[
                  "식품 나눔을 통한 지역사회 사랑 실천",
                  "취약계층 식품 접근성 향상",
                  "식품 낭비 줄이기와 자원 선순환",
                  "나눔 문화 확산 및 공동체 의식 고양",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-primary-500 mt-1">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gradient-to-b from-warm-200 to-warm-100 relative overflow-hidden">
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-200/30 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              How It Works
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              이렇게 운영됩니다
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: (
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                ),
                title: "기부 접수",
                desc: "개인, 기업, 단체로부터 식품 기부를 접수합니다. 유통기한이 충분히 남은 안전한 식품을 기부받습니다.",
              },
              {
                step: "02",
                icon: (
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "분류 및 검수",
                desc: "기부받은 식품의 유통기한, 상태를 꼼꼼히 확인하고 종류별로 분류하여 안전하게 보관합니다.",
              },
              {
                step: "03",
                icon: (
                  <svg
                    className="w-8 h-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                ),
                title: "나눔 배분",
                desc: "도움이 필요한 이웃에게 식품을 전달합니다. 정기적인 배분과 긴급 지원을 함께 운영합니다.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="sacred-card rounded-2xl p-8 text-center hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="text-primary-400 text-xs tracking-widest font-semibold">
                  STEP {item.step}
                </span>
                <h3 className="font-serif text-xl font-semibold text-sacred-900 mt-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section className="py-24 bg-gradient-to-b from-warm-100 to-warm-200 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Donate
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              기부 안내
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* 기부 가능 품목 */}
            <div className="sacred-card rounded-3xl p-10">
              <h3 className="font-serif text-xl font-semibold text-sacred-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </span>
                기부 가능 품목
              </h3>
              <div className="space-y-3">
                {[
                  {
                    label: "가공식품",
                    desc: "라면, 통조림, 즉석밥, 과자, 음료 등",
                  },
                  { label: "주식류", desc: "쌀, 밀가루, 식용유 등" },
                  {
                    label: "조미료",
                    desc: "간장, 된장, 고추장, 소금, 설탕 등",
                  },
                  {
                    label: "신선식품",
                    desc: "채소, 과일 등 (당일 배분 가능 시)",
                  },
                  {
                    label: "생활용품",
                    desc: "세제, 치약, 비누 등 생필품",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-3 rounded-xl bg-warm-50 hover:bg-warm-100 transition-colors"
                  >
                    <span className="text-primary-500 mt-0.5">✦</span>
                    <div>
                      <span className="font-medium text-sacred-900">
                        {item.label}
                      </span>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 기부 방법 */}
            <div className="sacred-card rounded-3xl p-10">
              <h3 className="font-serif text-xl font-semibold text-sacred-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </span>
                기부 방법
              </h3>
              <div className="space-y-5">
                {[
                  {
                    step: "01",
                    title: "직접 방문",
                    desc: "운영시간 내 푸드뱅크에 직접 방문하여 기부",
                  },
                  {
                    step: "02",
                    title: "전화 예약",
                    desc: "사전 전화 후 방문 일시 조율",
                  },
                  {
                    step: "03",
                    title: "수거 요청",
                    desc: "대량 기부 시 직접 수거 가능 (사전 협의)",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-medium text-sacred-900">
                        {item.title}
                      </p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-xl bg-primary-50 border border-primary-200/50 text-sm text-gray-600">
                <strong className="text-sacred-900">유의사항:</strong>{" "}
                유통기한이 1개월 이상 남은 식품만 기부 가능합니다. 개봉된 식품,
                변질된 식품은 접수가 어렵습니다.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-gradient-to-b from-warm-200 to-warm-100 relative overflow-hidden">
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-primary-200/20 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Support
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              수혜 안내
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* 지원 대상 */}
            <div className="sacred-card rounded-3xl p-10">
              <h3 className="font-serif text-xl font-semibold text-sacred-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>
                지원 대상
              </h3>
              <ul className="space-y-3 text-gray-600">
                {[
                  "기초생활수급자",
                  "차상위계층 가정",
                  "독거노인",
                  "한부모 가족",
                  "긴급 복지 대상자",
                  "기타 도움이 필요한 이웃",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-primary-500">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 신청 방법 */}
            <div className="sacred-card rounded-3xl p-10">
              <h3 className="font-serif text-xl font-semibold text-sacred-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                </span>
                신청 방법
              </h3>
              <div className="space-y-5">
                {[
                  {
                    step: "01",
                    title: "상담 신청",
                    desc: "전화 또는 방문으로 상담을 신청합니다",
                  },
                  {
                    step: "02",
                    title: "서류 제출",
                    desc: "수급자 증명서 등 관련 서류를 제출합니다",
                  },
                  {
                    step: "03",
                    title: "심사 및 등록",
                    desc: "심사 후 정기 수혜자로 등록됩니다",
                  },
                  {
                    step: "04",
                    title: "식품 수령",
                    desc: "정기 배분일에 식품을 수령합니다",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <p className="font-medium text-sacred-900">
                        {item.title}
                      </p>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-24 bg-gradient-to-b from-warm-100 to-warm-200 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 border border-primary-300/30 rounded-full" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-primary-200/20 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Volunteer
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              자원봉사 안내
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="sacred-card rounded-3xl p-10 md:p-14">
            <div className="grid md:grid-cols-2 gap-12">
              {/* 봉사 활동 */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-sacred-900 mb-8">
                  함께하는 봉사활동
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      title: "식품 분류 및 포장",
                      desc: "기부 식품 검수, 분류, 포장 작업",
                    },
                    {
                      title: "배분 보조",
                      desc: "식품 배분일 현장 지원 및 안내",
                    },
                    {
                      title: "수거 지원",
                      desc: "기부 식품 수거 및 운반 보조",
                    },
                    {
                      title: "행정 지원",
                      desc: "재고 관리, 데이터 입력 등 사무 보조",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="text-primary-500 mt-1">✦</span>
                      <div>
                        <p className="font-medium text-sacred-900">
                          {item.title}
                        </p>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 참여 방법 */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-sacred-900 mb-8">
                  참여 방법
                </h3>
                <div className="bg-warm-50 rounded-2xl p-6 space-y-4 border border-primary-200/30">
                  <p className="text-gray-600 leading-relaxed">
                    누구나 자원봉사에 참여할 수 있습니다. 개인, 단체, 기업 봉사
                    모두 환영합니다.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-primary-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>전화로 봉사 일정을 문의하세요</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-primary-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      <span>단체 봉사는 사전 예약이 필요합니다</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 text-primary-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>봉사 시간: 1365 자원봉사 인증 가능</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-gradient-to-b from-warm-200 to-warm-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-500 text-sm tracking-[0.3em] uppercase mb-4 block">
              Info
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sacred-900 mb-6">
              운영 정보
            </h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-primary-400" />
              <span className="text-primary-500">✦</span>
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-primary-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 운영시간 */}
            <div className="sacred-card rounded-2xl p-8 text-center hover-lift">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-sacred-900 mb-4">
                운영시간
              </h3>
              <div className="text-gray-600 text-sm space-y-2">
                <p>평일: 오전 9:00 ~ 오후 6:00</p>
                <p>토요일: 오전 9:00 ~ 오후 1:00</p>
                <p className="text-primary-600 font-medium">
                  일요일 및 공휴일 휴무
                </p>
              </div>
            </div>

            {/* 오시는 길 */}
            <div className="sacred-card rounded-2xl p-8 text-center hover-lift">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
              </div>
              <h3 className="font-serif text-xl font-semibold text-sacred-900 mb-4">
                오시는 길
              </h3>
              <div className="text-gray-600 text-sm space-y-2">
                <p>경기도 OO시 OO구</p>
                <p>OO로 123번길 45</p>
                <p>경인교회 지하 1층</p>
              </div>
            </div>

            {/* 연락처 */}
            <div className="sacred-card rounded-2xl p-8 text-center hover-lift">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl font-semibold text-sacred-900 mb-4">
                연락처
              </h3>
              <div className="text-gray-600 text-sm space-y-3">
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>031-000-0000</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 text-primary-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>foodbank@gyeongin.church</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              * 운영시간, 장소, 연락처는 변경될 수 있습니다. 방문 전 전화 확인을
              권장합니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
