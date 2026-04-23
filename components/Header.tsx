"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { navItems, siteIdentity, type NavItem } from "@/lib/navigation";

function isActive(item: NavItem, pathname: string) {
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href) return true;
  if (item.children?.some((c) => pathname.startsWith(c.href.split("#")[0]))) return true;
  return pathname.startsWith(item.href + "/");
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSub(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpenSub(null);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenSub(null);
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onEsc);
    };
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
          <Link href="/" className="flex items-center gap-2 group" aria-label={`${siteIdentity.centerName} 홈`}>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-bold leading-tight text-sacred-900 transition-colors duration-300">
                {siteIdentity.centerName}
              </span>
              <span className="text-[10px] sm:text-xs leading-tight text-primary-700 transition-colors duration-300">
                {siteIdentity.legalShort}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden md:flex items-center gap-1" aria-label="주메뉴">
            {navItems.map((item) => {
              const active = isActive(item, pathname);
              if (item.children) {
                const isOpen = openSub === item.href;
                return (
                  <div key={item.href} className="relative">
                    <button
                      type="button"
                      onClick={() => setOpenSub(isOpen ? null : item.href)}
                      onMouseEnter={() => setOpenSub(item.href)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        active
                          ? "text-primary-800 bg-primary-50"
                          : "text-gray-700 hover:text-primary-700 hover:bg-primary-50"
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="menu"
                    >
                      {item.label}
                      <span aria-hidden="true" className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}>▾</span>
                    </button>
                    {isOpen && (
                      <div
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-primary-100 py-2 z-50"
                        role="menu"
                        onMouseLeave={() => setOpenSub(null)}
                      >
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-sm text-primary-700 font-semibold hover:bg-primary-50"
                          role="menuitem"
                        >
                          {item.label} 전체
                        </Link>
                        <hr className="border-primary-100 my-1" />
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-800"
                            role="menuitem"
                          >
                            <p className="font-medium">{c.label}</p>
                            {c.description && <p className="text-xs text-gray-500 mt-0.5">{c.description}</p>}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    active
                      ? "text-primary-800 bg-primary-50"
                      : "text-gray-700 hover:text-primary-700 hover:bg-primary-50"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl transition-colors text-sacred-900 hover:bg-primary-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-[36rem] pb-4" : "max-h-0"
          }`}
        >
          <nav className="rounded-2xl p-2 bg-warm-50 max-h-[28rem] overflow-y-auto" aria-label="모바일 메뉴">
            {navItems.map((item) => {
              const active = isActive(item, pathname);
              const isExpanded = mobileExpanded === item.href;
              if (item.children) {
                return (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => setMobileExpanded(isExpanded ? null : item.href)}
                      className={`w-full flex items-center justify-between py-3 px-4 rounded-xl font-medium transition-colors ${
                        active ? "text-primary-800 bg-primary-50" : "text-gray-700 hover:text-primary-700 hover:bg-primary-50"
                      }`}
                      aria-expanded={isExpanded}
                    >
                      <span>{item.label}</span>
                      <span aria-hidden="true" className={`text-xs transition-transform ${isExpanded ? "rotate-180" : ""}`}>▾</span>
                    </button>
                    {isExpanded && (
                      <div className="ml-4 mb-2 border-l-2 border-primary-200 pl-3">
                        <Link
                          href={item.href}
                          className="block py-2 px-3 text-sm text-primary-700 font-semibold hover:bg-primary-50 rounded-lg"
                        >
                          {item.label} 전체
                        </Link>
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block py-2 px-3 text-sm text-gray-700 hover:text-primary-800 hover:bg-primary-50 rounded-lg"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-3 px-4 rounded-xl font-medium transition-colors ${
                    active ? "text-primary-800 bg-primary-50" : "text-gray-700 hover:text-primary-700 hover:bg-primary-50"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
