import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-sacred-800 to-sacred-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary-600/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* 교회 정보 */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <p className="text-primary-400 text-xs mb-1">대한예수교장로회 예원총회</p>
              <h3 className="text-2xl font-bold">경인교회</h3>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              따뜻한 사랑과 은혜가 넘치는 경인교회에 오신 것을 환영합니다.
              함께 예배하고 성장하는 공동체가 되기를 소망합니다.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary-500" />
              바로가기
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "교회소개" },
                { href: "/worship", label: "예배안내" },
                { href: "/news", label: "교회소식" },
                { href: "/location", label: "오시는길" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-300 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-primary-400 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-px bg-primary-500" />
              연락처
            </h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>주소: 추후 안내 예정</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>전화: 추후 안내 예정</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>이메일: 추후 안내 예정</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} 경인교회. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <span className="text-primary-500">✦</span>
              <span>대한예수교장로회 예원총회 소속</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
