export default function PastorGreeting() {
  return (
    <section className="py-16 bg-warm-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-primary-200 flex items-center justify-center">
              <div className="text-center text-primary-700">
                <div className="text-6xl mb-2">👤</div>
                <p className="text-sm">김재완 전도사</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              담임 전도사 인사말
            </h2>
            <div className="prose text-gray-600 leading-relaxed space-y-4">
              <p>
                안녕하세요, 경인교회 담임 김재완 전도사입니다.
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
            <div className="mt-6 text-right">
              <p className="text-primary-700 font-semibold">
                담임 전도사 <span className="text-xl">김재완</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
