export type MinistryItem = {
  id: string;
  href: string;
  title: string;
  tagline: string;
  description: string;
  tag?: string;
  bullets: string[];
  ctaLabel: string;
  ctaHref: string;
  icon: string;
};

export const ministries: MinistryItem[] = [
  {
    id: "foodbank",
    href: "/ministry/foodbank",
    title: "푸드뱅크",
    tagline: "이웃과 온기를 나누는 가장 가까운 손길입니다.",
    tag: "이웃과 나누는 한 끼",
    description:
      "지역 취약계층에게 정기적으로 식품을 전달합니다. 기탁·자원봉사 어떤 방식으로든 함께하실 수 있습니다.",
    bullets: ["연간 500가구 지원", "월 120kg 식품 배송", "식품 기탁 환영"],
    ctaLabel: "푸드뱅크 자세히 보기",
    ctaHref: "/ministry/foodbank",
    icon: "🥫",
  },
  {
    id: "space-sharing",
    href: "/ministry#space-sharing",
    title: "공간 공유",
    tagline: "함께 성장하는 사역을 위해 시설과 인프라를 공유합니다.",
    tag: "14평 다목적실 대관",
    description:
      "14평 공간을 작은 모임, 교육 프로그램, 비영리 활동에 무료로 열어둡니다.",
    bullets: ["개척교회 우선 배려", "비영리 단체 환영", "무료·저렴한 대관"],
    ctaLabel: "공간 사용 문의 010-9867-3121",
    ctaHref: "tel:010-9867-3121",
    icon: "🏛️",
  },
  {
    id: "citizen-press",
    href: "/ministry#citizen-press",
    title: "시민기자단",
    tagline: "소외된 이웃의 목소리를 진실하게 보도하는 미디어 선교의 장입니다.",
    tag: "이웃의 목소리",
    description:
      "경인블루저널과 연계된 시민기자단. 어르신의 삶과 지역 이야기를 직접 쓰고 취재합니다.",
    bullets: ["경인블루저널 연계", "월간 정기 활동", "누구나 참여 가능"],
    ctaLabel: "시민기자단 모집 안내",
    ctaHref: "/community/notices",
    icon: "📰",
  },
];
