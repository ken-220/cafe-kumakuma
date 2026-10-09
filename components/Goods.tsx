
"use client";

import Image from "next/image";
import { useState } from "react";

const goods = [
  {
    name: "Original T-shirt",
    image: "/images/goods-tshirt.jpg",
    description:
      "くまのロゴをあしらった、シンプルなオリジナルTシャツ。普段使いしやすいナチュラルなデザインです。",
    price: "¥3,200",
  },
  {
    name: "Original Mug",
    image: "/images/goods-mug.jpg",
    description:
      "お気に入りのコーヒーをもっと特別に。おうちでもカフェ気分を楽しめるオリジナルマグカップです。",
    price: "¥1,800",
  },
  {
    name: "Original Apron",
    image: "/images/goods-apron.jpg",
    description:
      "毎日の料理時間を楽しくする、ナチュラルなエプロン。シンプルで使いやすいデザインに仕上げました。",
    price: "¥3,800",
  },
  {
    name: "Original Tote Bag",
    image: "/images/goods-totebag.jpg",
    description:
      "お買い物やちょっとしたお出かけに。くまのロゴがアクセントのオリジナルトートバッグです。",
    price: "¥2,200",
  },
  {
    name: "Original Coffee",
    image: "/images/goods-coffee.jpg",
    description:
      "Cafe kumakumaのこだわりの味わいをご自宅でも。毎日のコーヒータイムにおすすめです。",
    price: "¥1,400",
  },
];

export default function Goods() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + goods.length) % goods.length);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % goods.length);
  };

  const getPosition = (index: number) => {
    let diff = index - current;

    if (diff > goods.length / 2) diff -= goods.length;
    if (diff < -goods.length / 2) diff += goods.length;

    return diff;
  };

  return (
    <section
      id="goods"
      className="overflow-hidden bg-[#f7f1e8] pb-12 pt-16 text-[#4b3527]"
    >
      {/* =========================
          GOODS 見出し
      ========================= */}
      <div className="text-center">
        <div className="relative mx-auto h-[85px] w-[280px] sm:h-[95px] sm:w-[340px]">
          <div className="absolute left-[46%] top-0 flex items-end gap-3">
            <span className="h-4 w-px -rotate-[35deg] bg-[#c58b51]" />
            <span className="h-5 w-px bg-[#c58b51]" />
            <span className="h-4 w-px rotate-[35deg] bg-[#c58b51]" />
          </div>

          <p
            className="absolute left-1/2 top-7 z-10 w-full whitespace-nowrap text-center text-[43px] text-[#c58b51] sm:text-[54px]"
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              transform: "translateX(-50%) rotate(-12deg)",
            }}
          >
            Original Goods
          </p>

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

        <div className="-mt-1 flex items-center justify-center gap-8">
          <div className="hidden w-20 border-t-2 border-[#b77a3c] md:block" />

          <h2 className="font-serif text-5xl tracking-[0.1em] md:text-7xl">
            GOODS
          </h2>

          <div className="hidden w-20 border-t-2 border-[#b77a3c] md:block" />
        </div>

        <p className="mt-3 text-sm tracking-[0.3em]">
          グッズ
        </p>

        <p className="mx-auto mt-6 max-w-md px-6 text-sm leading-8">
          お店のロゴをあしらったオリジナルデザインの
          <br className="hidden sm:block" />
          オリジナル＆セレクトした逸品。
        </p>
      </div>

      {/* =========================
          スマホ版カルーセル
      ========================= */}
      <div className="mx-auto mt-12 max-w-[360px] px-6 sm:hidden">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            key={goods[current].image}
            src={goods[current].image}
            alt={goods[current].name}
            fill
            sizes="(max-width: 639px) 100vw, 360px"
            className="object-cover animate-[fadeIn_0.5s_ease-in-out]"
          />
        </div>

        {/* スマホ用の操作ボタン */}
        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={prev}
            aria-label="前の商品"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a84432] text-xl text-white"
          >
            ←
          </button>

          <span className="text-xs tracking-[0.2em] text-[#a67c52]">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(goods.length).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={next}
            aria-label="次の商品"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a84432] text-xl text-white"
          >
            →
          </button>
        </div>
      </div>

      {/* =========================
          PC版カルーセル
      ========================= */}
      <div className="relative mt-16 hidden h-[460px] w-full sm:block">
        {goods.map((item, index) => {
          const position = getPosition(index);
          const isCenter = position === 0;
          const isVisible = Math.abs(position) <= 1;

          return (
            <div
              key={item.name}
              className="absolute left-1/2 top-1/2 h-[430px] w-[350px] overflow-hidden"
              style={{
                transform: `translate(
                  calc(-50% + ${position * 390}px),
                  -50%
                ) scale(${isCenter ? 1 : 0.92})`,
                opacity: isVisible ? (isCenter ? 1 : 0.5) : 0,
                zIndex: isCenter ? 10 : 5,
                transition:
                  "transform 0.7s ease-in-out, opacity 0.7s ease-in-out",
              }}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="350px"
                className="object-cover"
              />
            </div>
          );
        })}

        <button
          type="button"
          onClick={prev}
          aria-label="前の商品"
          className="absolute left-[max(24px,calc(50%-560px))] top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#a84432] text-2xl text-white transition hover:opacity-80"
        >
          ←
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="次の商品"
          className="absolute right-[max(24px,calc(50%-560px))] top-1/2 z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#a84432] text-2xl text-white transition hover:opacity-80"
        >
          →
        </button>
      </div>

      {/* =========================
          商品情報
      ========================= */}
      <div className="mx-auto mt-8 max-w-lg px-6 text-center">
        <h3 className="text-lg tracking-[0.12em] sm:text-xl">
          {goods[current].name}
        </h3>

        <div className="mx-auto mt-5 h-px w-12 bg-[#a67c52]" />

        <p className="mt-6 text-sm leading-8 text-[#66594f]">
          {goods[current].description}
        </p>

        <p className="mt-6 text-xl font-medium tracking-[0.08em]">
          {goods[current].price}
          <span className="ml-2 text-xs font-normal text-[#8b7768]">
            （税込）
          </span>
        </p>

        <p className="mt-8 hidden text-xs tracking-[0.2em] text-[#a67c52] sm:block">
          {String(current + 1).padStart(2, "0")} /{" "}
          {String(goods.length).padStart(2, "0")}
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
