export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "교육" | "나눔" | "예배" | "공동체";
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/gallery_sample_01_korean_1768879073401.png",
    alt: "어르신들이 함께 디지털 교육을 받는 모습",
    caption: "어르신과 함께하는 디지털 교육 현장",
    category: "교육",
  },
  {
    id: "g2",
    src: "/images/gallery_sample_02_korean_1768879090680.png",
    alt: "푸드뱅크 자원봉사자들이 식품을 정리하는 모습",
    caption: "푸드뱅크 식품 분류 봉사 활동",
    category: "나눔",
  },
  {
    id: "g3",
    src: "/images/gallery_sample_03_korean_1768879106608.png",
    alt: "센터 공간에서 함께 모인 모습",
    caption: "우리함께 나눔센터 공동체",
    category: "공동체",
  },
  {
    id: "g4",
    src: "/images/hero_foodbank.jpg",
    alt: "푸드뱅크 박스를 든 봉사자",
    caption: "이웃과 나누는 따뜻한 손길",
    category: "나눔",
  },
  {
    id: "g5",
    src: "/images/content_vision_1768878800425.png",
    alt: "센터 비전을 담은 이미지",
    caption: "14평의 기적을 만들어가는 공간",
    category: "공동체",
  },
  {
    id: "g6",
    src: "/images/header_about_bible_1768878741549.png",
    alt: "신앙 공동체 모임",
    caption: "신앙으로 하나되는 시간",
    category: "예배",
  },
];
