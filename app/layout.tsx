import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "경인교회",
  description: "경인교회에 오신 것을 환영합니다. 김재완 전도사가 섬기는 따뜻한 교회입니다.",
  keywords: ["경인교회", "김재완 전도사", "교회", "예배"],
  openGraph: {
    title: "경인교회",
    description: "경인교회에 오신 것을 환영합니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="bg-warm-50 text-gray-800 antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
