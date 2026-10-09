
"use client";

import { useState } from "react";
import Image from "next/image";

const menus = [
  {
    name: "帆立とトマトのパスタ",
    category: "PASTA",
    description:
      "香ばしく焼いた帆立に、トマトの爽やかな酸味を合わせたパスタ。素材の味わいを活かした、Cafe kumakumaおすすめの一皿です。",
    price: "¥1,280",
    image: "/images/menu-pasta.jpg",
  },
  {
    name: "季節野菜のクリームパスタ",
    category: "PASTA",
    description:
      "彩り豊かな季節の野菜を、まろやかなクリームソースで仕上げました。野菜の甘みとコクを楽しめる、やさしい味わいのパスタです。",
    price: "¥1,180",
    image: "/images/menu-cream-pasta.jpg",
  },
  {
    name: "生ハムとルッコラのピザ",
    category: "PIZZA",
    description:
      "香ばしく焼き上げた生地に、生ハムとルッコラをたっぷりと。ほどよい塩味と爽やかな香りが楽しめるピザです。",
    price: "¥1,380",
    image: "/images/menu-prosciutto-pizza.jpg",
  },
  {
    name: "グリル野菜とモッツァレラの彩りサラダ",
    category: "SALAD",
    description:
      "香ばしくグリルした季節の野菜と、まろやかなモッツァレラを合わせました。素材の彩りと味わいを楽しめるサラダです。",
    price: "¥980",
    image: "/images/menu-salad.jpg",
  },
  {
    name: "自家製ティラミス",
    category: "DESSERT",
    description:
      "なめらかなクリームとコーヒーのほろ苦さを重ねた、自家製ティラミス。食後のコーヒーにもよく合うデザートです。",
    price: "¥680",
    image: "/images/menu-dessert.jpg",
  },
];

export default function Menu() {
  const [current, setCurrent] = useState(0);

  const menu = menus[current];

  const prevMenu = () => {
    setCurrent((prev) => (prev - 1 + menus.length) % menus.length);
  };

  const nextMenu = () => {
    setCurrent((prev) => (prev + 1) % menus.length);
  };

  return (
    <section
      id="menu"
      className="overflow-hidden bg-[#f7f2e9] pb-20 pt-8 md:pb-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        {/* =========================
            MENU 見出し
        ========================= */}
        <div className="text-center">

          {/* 筆記体の装飾 */}
          <div className="relative mx-auto h-[95px] w-[290px] sm:h-[110px] sm:w-[340px]">

            {/* 上部の光の装飾 */}
            <div className="absolute left-[46%] top-0 flex items-end gap-3">
              <span className="h-4 w-px -rotate-[35deg] bg-[#c58b51]" />
              <span className="h-5 w-px bg-[#c58b51]" />
              <span className="h-4 w-px rotate-[35deg] bg-[#c58b51]" />
            </div>

            <p
              className="absolute left-1/2 top-7 z-10 w-full whitespace-nowrap text-center text-[45px] text-[#c58b51] sm:text-[54px]"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 400,
                transform: "translateX(-50%) rotate(-12deg)",
              }}
            >
              Cafe kumakuma
            </p>

            {/* 装飾曲線 */}
            <svg
              className="absolute bottom-0 left-1/2 w-[180px] -translate-x-1/2 sm:w-[210px]"
              viewBox="0 0 210 28"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 20 C45 2, 95 26, 145 12 S190 8, 205 3"
                stroke="#c58b51"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* 大きな MENU */}
          <div className="-mt-2 flex items-center justify-center gap-4 sm:-mt-4 md:gap-8">
            <div className="hidden w-20 border-t-2 border-[#b77a3c] md:block" />

            <h2 className="font-serif text-5xl tracking-[0.12em] text-[#4b3527] sm:text-6xl md:text-8xl md:tracking-[0.18em]">
              MENU
            </h2>

            <div className="hidden w-20 border-t-2 border-[#b77a3c] md:block" />
          </div>

          <p className="mt-3 text-sm tracking-[0.3em] text-[#4b3527]">
            メニュー
          </p>

          <p className="mt-8 text-sm leading-7 text-[#66594F] md:mt-10">
            自然の中で楽しむ、こだわりの料理とコーヒー。
          </p>
        </div>

        {/* =========================
            メイン表示
        ========================= */}
        <div className="relative mx-auto mt-10 flex w-full flex-col md:mt-0 md:block md:h-[600px]">

          {/* 料理写真 */}
          <div className="relative z-10 h-[260px] w-full overflow-hidden sm:h-[360px] md:absolute md:left-[40px] md:top-[50px] md:h-[500px] md:w-[65%]">
            <Image
              key={menu.image}
              src={menu.image}
              alt={menu.name}
              fill
              sizes="(max-width: 767px) 100vw, 65vw"
              className="object-cover"
            />
          </div>

          {/* 白い説明カード */}
          <div className="relative z-0 flex w-full flex-col justify-center bg-white px-6 py-8 sm:px-8 md:absolute md:bottom-0 md:right-0 md:top-[80px] md:w-[65%] md:pb-10 md:pl-[38%] md:pr-10 md:pt-10">

            <p className="text-xs tracking-[0.3em] text-[#a67c52]">
              {menu.category}
            </p>

            <h3 className="mt-4 text-xl leading-relaxed text-[#4b3527] md:mt-5 md:text-2xl">
              {menu.name}
            </h3>

            <div className="my-5 h-px w-10 bg-[#a67c52] md:my-6" />

            <p className="text-sm leading-7 text-[#66594f] md:leading-8">
              {menu.description}
            </p>

            <p className="mt-6 text-lg text-[#4b3527] md:mt-8">
              {menu.price}
            </p>
          </div>

          {/* Prev / Next：PC版のみ写真の左右 */}
          <button
            type="button"
            onClick={prevMenu}
            aria-label="前のメニュー"
            className="absolute left-[30px] top-1/2 z-20 hidden h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#E8DCCB] text-sm font-medium text-[#4b3527] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#D9C5AA] md:flex"
          >
            Prev
          </button>

          <button
            type="button"
            onClick={nextMenu}
            aria-label="次のメニュー"
            className="absolute right-0 top-1/2 z-20 hidden h-20 w-20 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#E8DCCB] text-sm font-medium text-[#4b3527] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[#D9C5AA] md:flex"
          >
            Next
          </button>
        </div>

        {/* =========================
            スマホ用 Prev / Next
        ========================= */}
        <div className="mt-6 flex items-center justify-between md:hidden">

          <button
            type="button"
            onClick={prevMenu}
            aria-label="前のメニュー"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8DCCB] text-xl text-[#4b3527] transition hover:bg-[#D9C5AA]"
          >
            ←
          </button>

          <p className="text-sm tracking-[0.2em] text-[#66594F]">
            {current + 1} / {menus.length}
          </p>

          <button
            type="button"
            onClick={nextMenu}
            aria-label="次のメニュー"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E8DCCB] text-xl text-[#4b3527] transition hover:bg-[#D9C5AA]"
          >
            →
          </button>
        </div>

        {/* =========================
            サムネイル
        ========================= */}
        <div className="mt-8 flex justify-center gap-3 sm:gap-5 md:mt-12">
          {menus.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setCurrent(index)}
              aria-label={`${item.name}を表示`}
              aria-pressed={current === index}
              className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-full transition-all duration-300 sm:h-16 sm:w-16 ${
                current === index
                  ? "scale-110 ring-2 ring-[#a67c52] ring-offset-2 ring-offset-[#f7f2e9] sm:ring-offset-4"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 639px) 48px, 64px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
