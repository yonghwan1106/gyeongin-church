"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "홈" },
  { href: "/about", label: "교회소개" },
  { href: "/worship", label: "예배안내" },
  { href: "/news", label: "교회소식" },
  { href: "/foodbank", label: "푸드뱅크" },
  { href: "/location", label: "오시는길" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-primary-900/5"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-tight text-sacred-900 transition-colors duration-300">
                경인교회
              </span>
              <span className="text-[10px] leading-tight hidden sm:block text-primary-600 transition-colors duration-300">
                대한예수교장로회 예원총회
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 rounded-full font-medium transition-all duration-300 group text-gray-600 hover:text-primary-700 hover:bg-primary-50"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-500 group-hover:w-4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl transition-colors text-sacred-900 hover:bg-primary-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-80 pb-4" : "max-h-0"
          }`}
        >
          <nav className="rounded-2xl p-2 bg-warm-50">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 rounded-xl font-medium transition-colors text-gray-600 hover:text-primary-700 hover:bg-primary-50"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
