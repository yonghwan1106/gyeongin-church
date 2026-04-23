export type EducationLevel = {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  target: string;
  goal: string;
  duration: string;
  capacity: string;
  modules: { title: string; detail: string }[];
  highlight?: boolean;
};

export const educationLevels: EducationLevel[] = [
  {
    id: "level-1",
    badge: "1단계",
    title: "왕초보 기초반",
    subtitle: "스마트폰이 처음이세요? 괜찮습니다.",
    target: "스마트폰을 처음 사용하시는 분, 글자가 작아 답답하신 분",
    goal: "스마트폰을 두려움 없이 켜고, 가족과 자유롭게 소통하기",
    duration: "주 2회 / 8주 과정",
    capacity: "정원 8명 / 1:1 보조 자원봉사 배치",
    modules: [
      { title: "스마트폰 처음 만나기", detail: "전원 / 글자 크기 키우기 / 음성 비서 부르기" },
      { title: "카카오톡 100% 활용", detail: "친구 추가 / 사진 보내기 / 음성 메시지 / 보이스톡" },
      { title: "사진과 추억", detail: "카메라 사용 / 앨범 정리 / 가족과 공유" },
      { title: "안전한 스마트폰", detail: "보이스피싱 예방 / 광고 차단 / 비밀번호 관리" },
      { title: "제미나이(Gemini) AI와 첫 대화", detail: "AI에게 말 걸기, 궁금한 것을 물어보기" },
    ],
  },
  {
    id: "level-2",
    badge: "2단계",
    title: "생활 중급반",
    subtitle: "혼자서도 척척! 일상 자립을 돕습니다.",
    target: "기본 조작은 가능하지만 일상에서 더 활용하고 싶은 분",
    goal: "병원·은행·이동까지 스마트폰 하나로 자립하기",
    duration: "주 2회 / 10주 과정",
    capacity: "정원 8명",
    modules: [
      { title: "길찾기 마스터", detail: "카카오맵 / 네이버지도 / 대중교통 환승" },
      { title: "병원 예약과 건강관리", detail: "똑닥 / 모바일 진료확인서 / 건강iN" },
      { title: "모바일 뱅킹 입문", detail: "송금 / 잔액확인 / OTP 사용 / 보안 수칙" },
      { title: "배달앱과 쇼핑", detail: "배달의민족 / 쿠팡 / 안전결제 방법" },
      { title: "AI 그림편지 만들기", detail: "손주에게 보내는 그림카드, 이미지 생성 AI 활용" },
      { title: "유튜브와 즐기기", detail: "시청 / 자막 / 음악 검색" },
    ],
  },
  {
    id: "level-3",
    badge: "3단계",
    title: "AI 심화 · 작가반",
    subtitle: "내 인생을 책으로, AI가 함께 씁니다.",
    target: "디지털에 익숙하고 자신만의 콘텐츠를 만들고 싶은 분",
    goal: "AI를 도구로 삼아 글쓰기·문서 작업·창작에 도전하기",
    duration: "주 1회 / 12주 과정",
    capacity: "정원 6명 / 결과물 전시 발표회 포함",
    modules: [
      { title: "AI 자서전 쓰기", detail: "제미나이로 인생 이야기를 글로 정리, 챕터별 다듬기" },
      { title: "AI 시 쓰기 워크숍", detail: "감정·기억을 시로 표현, 가족에게 선물할 시집 만들기" },
      { title: "구글 스마트워크 입문", detail: "Gmail / 구글 드라이브 / 구글 문서 / 캘린더" },
      { title: "구글 폼·설문 만들기", detail: "모임 안내, 동창회 회신 받기" },
      { title: "AI 음성·영상", detail: "내 목소리로 책 읽어주기, 짧은 영상 만들기" },
      { title: "출간 프로젝트", detail: "만든 글을 책 형태로 인쇄·제본하는 마지막 작업" },
    ],
  },
  {
    id: "level-special",
    badge: "특별과정",
    title: "수익창출반",
    subtitle: "배움이 일자리로, 새로운 내일을 엽니다.",
    target: "3단계 수료자 또는 디지털 작업 경험자, 부수입을 원하시는 분",
    goal: "디지털 기술로 실제 수익을 만드는 첫 경험",
    duration: "월 4회 / 6주 과정",
    capacity: "정원 6명 / 수료 후 외부 플랫폼 매칭 지원",
    highlight: true,
    modules: [
      { title: "AI 데이터 라벨링 실무", detail: "라벨링이란? / 플랫폼 가입 / 작업 단가 / 실습" },
      { title: "디지털 굿즈 제작", detail: "Canva로 이모티콘·스티커·달력 디자인" },
      { title: "디지털 굿즈 판매", detail: "마플샵 / 스마트스토어 / 무신사 등 입점 기초" },
      { title: "저작권과 세금 안내", detail: "사업자 등록 / 종합소득세 / AI 저작물 권리" },
      { title: "포트폴리오 만들기", detail: "구글 사이트로 나만의 작품 페이지 구축" },
    ],
  },
];

export const educationFAQ = [
  {
    q: "정말 무료인가요?",
    a: "예, 모든 정규 과정은 무료입니다. 교재비도 받지 않습니다.",
  },
  {
    q: "스마트폰이 없어도 되나요?",
    a: "센터 보유 기기로 수업이 가능합니다. 본인 기기 사용을 권장하지만, 어떤 경우든 환영합니다.",
  },
  {
    q: "종교가 달라도 되나요?",
    a: "센터는 종교와 무관하게 누구에게나 열려 있습니다. 종교 활동을 권유하지 않습니다.",
  },
  {
    q: "장애가 있는데 도움받을 수 있나요?",
    a: "1:1 보조 자원봉사가 함께합니다. 신청 시 도움이 필요한 부분을 알려주세요.",
  },
  {
    q: "휠체어로 갈 수 있나요?",
    a: "메디컬빌딩 1층부터 213호까지 턱 없이 진입 가능합니다. 엘리베이터로 편리하게 이동하세요.",
  },
  {
    q: "결석하면 어떻게 되나요?",
    a: "보강 시간 또는 다음 기수로 안내해 드립니다. 부담 없이 문의해 주세요.",
  },
  {
    q: "수료증이 발급되나요?",
    a: "전 과정 수료 시 사단법인 명의 수료증을 발급합니다.",
  },
  {
    q: "가족 동반이 가능한가요?",
    a: "가능합니다. 보호자 동반 어르신/장애인 모두 환영합니다.",
  },
];

export const educationPromises = [
  { icon: "₩", title: "100% 무료", desc: "교재비도 없습니다" },
  { icon: "👥", title: "1:1 케어", desc: "자원봉사 보조 동석" },
  { icon: "🌈", title: "종교 무관", desc: "누구나 환영합니다" },
  { icon: "🪜", title: "단계별 진행", desc: "차근차근 함께 배워요" },
];
