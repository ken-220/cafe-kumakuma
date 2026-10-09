
import Image from "next/image";

const drinkImages = [
  {
    src: "/images/drink-coffee.jpg",
    alt: "ブレンドコーヒー",
  },
  {
    src: "/images/drink-latte.jpg",
    alt: "カフェラテ",
  },
  {
    src: "/images/drink-iced-coffee.jpg",
    alt: "アイスコーヒー",
  },
  {
    src: "/images/drink-espresso.jpg",
    alt: "エスプレッソ",
  },
  {
    src: "/images/drink-lemonade.jpg",
    alt: "自家製レモネード",
  },
];

export default function DrinkMenu() {
  return (
    <section
      id="drink"
      className="bg-white py-20 text-[#4b3527] md:py-32"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">

        {/* =========================
            DRINK 見出し
        ========================= */}
        <div className="text-center">

          {/* 筆記体の装飾 */}
          <div className="relative mx-auto h-[90px] w-[280px] sm:h-[110px] sm:w-[340px]">

            {/* 上部の光の装飾 */}
            <div className="absolute left-[46%] top-0 flex items-end gap-3">
              <span className="h-4 w-px -rotate-[35deg] bg-[#c58b51]" />
              <span className="h-5 w-px bg-[#c58b51]" />
              <span className="h-4 w-px rotate-[35deg] bg-[#c58b51]" />
            </div>

            {/* 筆記体 */}
            <p
              className="absolute left-1/2 top-7 z-10 w-full whitespace-nowrap text-center text-[43px] text-[#c58b51] sm:text-[54px]"
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

          {/* 大きな DRINK */}
          <div className="-mt-2 flex items-center justify-center gap-4 sm:-mt-4 md:gap-8">
            <div className="hidden w-20 border-t-2 border-[#b77a3c] md:block" />

            <h2 className="font-serif text-5xl tracking-[0.1em] text-[#4b3527] md:text-7xl">
              DRINK
            </h2>

            <div className="hidden w-20 border-t-2 border-[#b77a3c] md:block" />
          </div>

          {/* 日本語タイトル */}
          <p className="mt-3 text-xs tracking-[0.3em] text-[#4b3527] sm:text-sm">
            ドリンクメニュー
          </p>

        </div>

        {/* =========================
            ドリンクメニュー表
        ========================= */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-16 md:grid-cols-2 md:gap-16">

          {/* COFFEE */}
          <div>
            <h3 className="mb-8 text-sm tracking-[0.3em] text-[#a67c52]">
              COFFEE
            </h3>

            <DrinkItem name="ブレンドコーヒー" price="¥550" />
            <DrinkItem name="アイスコーヒー" price="¥550" />
            <DrinkItem name="エスプレッソ" price="¥500" />
            <DrinkItem name="アメリカーノ" price="¥550" />
          </div>

          {/* LATTE & OTHER */}
          <div>
            <h3 className="mb-8 text-sm tracking-[0.3em] text-[#a67c52]">
              LATTE & OTHER
            </h3>

            <DrinkItem name="カフェラテ" price="¥600" />
            <DrinkItem name="キャラメルラテ" price="¥650" />
            <DrinkItem name="紅茶" price="¥550" />
            <DrinkItem name="自家製レモネード" price="¥600" />
          </div>

        </div>

        {/* =========================
            画像スライダー
        ========================= */}
        <div className="mt-16 overflow-hidden md:mt-28">
          <div className="drink-slider flex w-max gap-6">

            {[...drinkImages, ...drinkImages].map((drink, index) => (
              <div
                key={`${drink.src}-${index}`}
                className="relative h-[200px] w-[280px] shrink-0 overflow-hidden sm:h-[300px] sm:w-[420px]"
              >
                <Image
                  src={drink.src}
                  alt={drink.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 639px) 280px, 420px"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

/* =========================
   ドリンク1行分
========================= */

function DrinkItem({
  name,
  price,
}: {
  name: string;
  price: string;
}) {
  return (
    <div className="mb-7 flex items-end gap-3 sm:gap-4">

      {/* 商品名 */}
      <span className="whitespace-nowrap text-sm">
        {name}
      </span>

      {/* 点線 */}
      <span className="mb-1 min-w-0 flex-1 border-b border-dotted border-[#c9b9a8]" />

      {/* 価格 */}
      <span className="whitespace-nowrap text-sm">
        {price}
      </span>

    </div>
  );
}
