import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import AccessibilityToolbar from "@/components/AccessibilityToolbar";
import { siteIdentity } from "@/lib/navigation";

export const metadata: Metadata = {
  metadataBase: new URL(siteIdentity.url),
  title: {
    default: `${siteIdentity.centerName} | ${siteIdentity.legalShort}`,
    template: `%s | ${siteIdentity.centerName}`,
  },
  description:
    "사단법인 대한예수교장로회 경인교회 부설 우리함께 평생교육·나눔센터. 어르신과 장애인을 위한 무료 디지털 교육과 푸드뱅크 나눔으로 14평의 기적을 만들어갑니다. 용인 동백역 1번 출구.",
  keywords: [
    "우리함께 평생교육 나눔센터",
    "경인교회",
    "디지털 교육",
    "어르신 스마트폰 교육",
    "장애인 디지털 자립",
    "용인 평생교육",
    "기흥 푸드뱅크",
    "동백역 교육센터",
    "AI 자서전",
    "구글 스마트워크",
    "김재완 전도사",
    "사단법인 대한예수교장로회",
  ],
  openGraph: {
    title: `${siteIdentity.centerName} | ${siteIdentity.legalShort}`,
    description: "배우고 나누며 일자리까지! 디지털 세상의 주인이 되어보세요.",
    type: "website",
    locale: "ko_KR",
    url: siteIdentity.url,
    siteName: siteIdentity.centerName,
    images: [
      {
        url: "/images/hero_education_ai.png",
        width: 1200,
        height: 630,
        alt: "우리함께 평생교육·나눔센터 — 배우고 나누며 일자리까지",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteIdentity.centerName} | ${siteIdentity.legalShort}`,
    description: "배우고 나누며 일자리까지! 디지털 세상의 주인이 되어보세요.",
    images: ["/images/hero_education_ai.png"],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteIdentity.centerName,
  alternateName: siteIdentity.legalName,
  url: siteIdentity.url,
  email: siteIdentity.email,
  telephone: siteIdentity.phonePrimary,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteIdentity.address,
    addressLocality: "용인특례시",
    addressRegion: "경기도",
    addressCountry: "KR",
  },
  description:
    "어르신과 장애인을 위한 무료 디지털 교육과 푸드뱅크 나눔을 제공하는 평생교육·나눔센터.",
  accessibilityFeature: ["wheelchairAccessible", "stepFreeAccess"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="bg-warm-50 text-gray-800 antialiased">
        <a href="#main-content" className="skip-link">메인 콘텐츠로 건너뛰기</a>
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
        <AccessibilityToolbar />
      </body>
    </html>
  );
}
