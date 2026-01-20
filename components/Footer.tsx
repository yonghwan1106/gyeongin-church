import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* 교회 정보 */}
          <div>
            <h3 className="text-xl font-bold mb-4">경인교회</h3>
            <p className="text-primary-200 text-sm leading-relaxed">
              따뜻한 사랑과 은혜가 넘치는<br />
              경인교회에 오신 것을 환영합니다.
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-primary-200 hover:text-white transition-colors text-sm">
                  교회소개
                </Link>
              </li>
              <li>
                <Link href="/worship" className="text-primary-200 hover:text-white transition-colors text-sm">
                  예배안내
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-primary-200 hover:text-white transition-colors text-sm">
                  교회소식
                </Link>
              </li>
              <li>
                <Link href="/location" className="text-primary-200 hover:text-white transition-colors text-sm">
                  오시는길
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <ul className="space-y-2 text-primary-200 text-sm">
              <li>📍 주소: 추후 안내 예정</li>
              <li>📞 전화: 추후 안내 예정</li>
              <li>✉️ 이메일: 추후 안내 예정</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center text-primary-300 text-sm">
          <p>© {new Date().getFullYear()} 경인교회. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
