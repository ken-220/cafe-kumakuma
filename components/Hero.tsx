
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "./Header";

const heroImages = [
  {
    src: "/images/hero.jpg",
    alt: "自然に囲まれたCafe kumakuma",
  },
  {
    src: "/images/hero-reading.jpg",
    alt: "Cafe kumakumaで本を読む時間",
  },
  {
    src: "/images/hero-goods.jpg",
    alt: "Cafe kumakumaのオリジナルグッズ",
  },
];

const SLIDE_DURATION = 6000;
const FADE_DURATION = 2500;
const GAUGE_OFFSET = 250;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progressIndex, setProgressIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout>;
    let gaugeTimer: ReturnType<typeof setTimeout>;
    let changeTimer: ReturnType<typeof setTimeout>;

    const startCycle = () => {
      // 3.5秒後：現在の画像をフェードアウト
      fadeTimer = setTimeout(() => {
        setIsFading(true);
      }, SLIDE_DURATION - FADE_DURATION);

      // 5.75秒後：ゲージを次へ
      gaugeTimer = setTimeout(() => {
        setProgressIndex(
          (prev) => (prev + 1) % heroImages.length
        );
      }, SLIDE_DURATION - GAUGE_OFFSET);

      // 6秒後：次の画像へ
      changeTimer = setTimeout(() => {
        setCurrent(
          (prev) => (prev + 1) % heroImages.length
        );

        setIsFading(false);
        startCycle();
      }, SLIDE_DURATION);
    };

    startCycle();

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(gaugeTimer);
      clearTimeout(changeTimer);
    };
  }, []);

  const next = (current + 1) % heroImages.length;

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden md:h-screen md:min-h-[650px]">

      {/* 背景スライド */}
      {heroImages.map((image, index) => {
        const isCurrent = index === current;
        const isNext = index === next;

        let opacityClass = "opacity-0";
        let zClass = "z-0";

        if (isNext) {
          opacityClass = "opacity-100";
          zClass = "z-[1]";
        }

        if (isCurrent) {
          opacityClass = isFading
            ? "hero-slide-fade-out"
            : "opacity-100";

          zClass = "z-[2]";
        }

        return (
          <div
            key={image.src}
            className={`absolute inset-0 ${zClass} ${opacityClass}`}
          >
            <div className="relative h-full w-full hero-continuous-zoom">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      {/* 暗いオーバーレイ */}
      <div className="absolute inset-0 z-[3] bg-black/20" />

      {/* ヘッダー */}
      <div className="relative z-30">
        <Header />
      </div>

      {/* 左側：縦書きキャッチコピー */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center">

        <div className="ml-[9%] sm:ml-[8%]">

          <div
            className="
              flex flex-row-reverse
              gap-3 sm:gap-4
              text-[25px] sm:text-[29px] lg:text-[34px]
              leading-[1.7] lg:leading-[1.8]
              tracking-[0.12em] sm:tracking-[0.18em] lg:tracking-[0.22em]
              text-white
            "
            style={{
              fontFamily: '"Yu Mincho", "YuMincho", serif',
              fontWeight: 600,
              textShadow:
                "1px 2px 3px rgba(70,70,70,0.8), 0 0 8px rgba(100,100,100,0.5)",
            }}
          >
            <p style={{ writingMode: "vertical-rl" }}>
              自然の中で、
            </p>

            <p style={{ writingMode: "vertical-rl" }}>
              ちょっといい時間を。
            </p>
          </div>

        </div>
      </div>

      {/* 進捗ライン */}
      <div className="absolute bottom-7 left-1/2 z-20 flex w-[65%] max-w-[360px] -translate-x-1/2 gap-3 sm:bottom-10">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className="relative h-[2px] flex-1 overflow-hidden bg-white/40"
          >
            {index === progressIndex && (
              <div
                key={`${progressIndex}-progress`}
                className="hero-progress absolute inset-y-0 left-0 bg-white"
              />
            )}
          </div>
        ))}
      </div>

    </section>
  );
}
