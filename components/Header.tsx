
"use client";

import Image from "next/image";
import { useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Goods", href: "#goods" },
  { label: "Access", href: "#access" },
  { label: "Reservation", href: "#reservation" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const textShadow = {
    textShadow:
      "0 3px 8px rgba(0, 0, 0, 0.9), 0 1px 3px rgba(0, 0, 0, 0.8)",
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="absolute left-0 top-0 z-20 w-full border-b border-white/10 bg-[#3b2a1f]/25 backdrop-blur-[2px]">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">

        {/* 左側：ロゴ */}
        <a
          href="#"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2 text-white sm:gap-4"
        >
          <div className="relative h-12 w-12 shrink-0 sm:h-14 sm:w-14 lg:h-16 lg:w-16">
            <Image
              src="/images/hero-bear-logo.png"
              alt="Cafe kumakuma ロゴ"
              fill
              className="object-contain"
              sizes="(max-width: 639px) 48px, (max-width: 1023px) 56px, 64px"
              style={{
                filter:
                  "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.85))",
              }}
            />
          </div>

          <span
            className="truncate text-base font-medium tracking-wide sm:text-lg lg:text-xl"
            style={textShadow}
          >
            Cafe kumakuma
          </span>
        </a>

        {/* PC用ナビゲーション */}
        <nav aria-label="メインナビゲーション" className="hidden lg:block">
          <ul
            className="flex items-center gap-8 text-sm font-medium text-white"
            style={textShadow}
          >
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={
                    item.label === "Reservation"
                      ? "border border-white px-5 py-2 transition hover:bg-white/20"
                      : "transition hover:opacity-70"
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* スマホ・タブレット用メニューボタン */}
        <button
          type="button"
          aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="relative z-30 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[6px] text-white lg:hidden"
        >
          <span
            className={`h-[2px] w-7 bg-white transition-transform duration-300 ${
              isMenuOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-7 bg-white transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-7 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>

      </div>

      {/* スマホ・タブレット用ナビゲーション */}
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="モバイルナビゲーション"
          className="absolute left-0 top-full z-20 w-full border-t border-white/10 bg-[#3b2a1f]/95 px-6 py-8 shadow-xl backdrop-blur-md lg:hidden"
        >
          <ul className="flex flex-col items-center gap-7 text-base font-medium text-white">
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  style={textShadow}
                  className={
                    item.label === "Reservation"
                      ? "inline-block border border-white px-8 py-3 transition hover:bg-white/20"
                      : "inline-block py-1 transition hover:opacity-70"
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

    </header>
  );
}
