export type NavItem = {
  href: string;
  label: string;
  description?: string;
  children?: { href: string; label: string; description?: string }[];
};

export const navItems: NavItem[] = [
  { href: "/", label: "홈" },
  {
    href: "/about",
    label: "센터·교회 소개",
    description: "14평의 기적, 비전과 인사말",
  },
  {
    href: "/education",
    label: "디지털 교육",
    description: "어르신·장애인을 위한 4단계 무료 교육",
  },
  {
    href: "/ministry",
    label: "나눔 사역",
    description: "푸드뱅크, 공간 공유, 시민기자단",
    children: [
      { href: "/ministry/foodbank", label: "푸드뱅크", description: "이웃과 나누는 따뜻한 한 끼" },
      { href: "/ministry#space-sharing", label: "공간 공유", description: "개척교회·비영리 단체 대관" },
      { href: "/ministry#citizen-press", label: "시민기자단", description: "이웃의 목소리를 전합니다" },
    ],
  },
  {
    href: "/community",
    label: "커뮤니티",
    description: "센터 소식과 활동 갤러리",
    children: [
      { href: "/community/notices", label: "공지사항" },
      { href: "/community/gallery", label: "갤러리" },
    ],
  },
  { href: "/location", label: "오시는길" },
];

export const footerQuickLinks = [
  { href: "/about", label: "센터·교회 소개" },
  { href: "/education", label: "디지털 교육" },
  { href: "/ministry", label: "나눔 사역" },
  { href: "/ministry/foodbank", label: "푸드뱅크" },
  { href: "/community/notices", label: "공지사항" },
  { href: "/about#worship", label: "예배 안내" },
  { href: "/location", label: "오시는길" },
];

export const siteIdentity = {
  legalName: "사단법인 대한예수교장로회 경인교회",
  legalShort: "사단법인 대한예수교장로회 경인교회 부설",
  centerName: "우리함께 평생교육·나눔센터",
  shortName: "우리함께 나눔센터",
  tagline: "작지만 큰 14평의 기적",
  pastor: "김재완",
  pastorRole: "센터장 · 담임 전도사",
  address: "경기도 용인특례시 기흥구 동백죽전대로 341, 213호",
  addressDetail: "동백역 1번 출구 메디컬빌딩",
  phonePrimary: "010-9867-3121",
  phoneSecondary: "010-7708-7006",
  email: "admin@a365.or.kr",
  accessibility: "휠체어 및 보행 보조기 이용 시에도 턱이 없어 출입이 매우 편리합니다.",
  url: "https://www.a365.or.kr",
  domain: "a365.or.kr",
  businessNumber: "622-82-75817",
};
