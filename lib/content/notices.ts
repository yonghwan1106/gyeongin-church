export type NoticeCategory = "센터 소식" | "교육 모집" | "나눔 활동" | "시민기자단" | "예배 안내";

export type Notice = {
  id: string;
  title: string;
  category: NoticeCategory;
  date: string;
  excerpt: string;
  isNew?: boolean;
};

export const notices: Notice[] = [
  {
    id: "n1",
    title: "[모집] 디지털 교육 1기 — 왕초보 기초반 수강생 모집",
    category: "교육 모집",
    date: "2026-04-18",
    excerpt:
      "스마트폰 사용이 어려우신 어르신과 장애인 이웃을 위한 8주 무료 과정을 시작합니다. 정원 8명, 1:1 보조 자원봉사 배치.",
    isNew: true,
  },
  {
    id: "n2",
    title: "우리함께 평생교육·나눔센터 홈페이지 새단장 안내",
    category: "센터 소식",
    date: "2026-04-18",
    excerpt:
      "사단법인 경인교회 부설 평생교육·나눔센터의 홈페이지를 전면 개편했습니다. 디지털 교육·나눔 사역·시민기자단 정보를 한곳에서 확인하세요.",
    isNew: true,
  },
  {
    id: "n3",
    title: "[활동] 4월 푸드뱅크 정기 배분 마감",
    category: "나눔 활동",
    date: "2026-04-15",
    excerpt:
      "4월 정기 배분에 기부와 봉사로 함께해 주신 분들께 감사드립니다. 5월 일정은 별도 공지 예정입니다.",
  },
  {
    id: "n4",
    title: "[모집] 시민기자단 1기 모집 안내",
    category: "시민기자단",
    date: "2026-04-10",
    excerpt:
      "경인블루저널과 함께하는 시민기자단을 모집합니다. AI 작가반 수료자 우선, 미수료자도 신청 가능합니다.",
  },
  {
    id: "n5",
    title: "[모집] AI 심화·작가반 — '내 인생을 책으로' 12주 과정",
    category: "교육 모집",
    date: "2026-04-08",
    excerpt:
      "AI 자서전·시 쓰기·구글 스마트워크를 배우고 직접 출간까지 이어지는 작가 양성 과정입니다.",
  },
  {
    id: "n6",
    title: "주일 예배 및 수요 예배 안내",
    category: "예배 안내",
    date: "2026-04-05",
    excerpt:
      "주일 11:00, 수요 19:00 예배는 평소처럼 진행됩니다. 신앙 공동체로 함께하실 분들을 환영합니다.",
  },
];
