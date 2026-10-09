
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F7F3EA] pb-12 pt-20 md:pt-32"
    >
      {/* 背景の雲 */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="about-cloud left-[-100px] top-[180px] h-[180px] w-[360px]" />
        <div className="about-cloud right-[-130px] top-[650px] h-[220px] w-[420px]" />
        <div className="about-cloud left-[-140px] top-[1250px] h-[240px] w-[460px]" />
        <div className="about-cloud right-[-100px] bottom-[400px] h-[200px] w-[380px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">

        {/* ABOUT 見出し */}
        <ScrollReveal direction="up">
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

            {/* 大きな ABOUT */}
            <div className="-mt-2 flex items-center justify-center gap-4 sm:-mt-4 md:gap-8">
              <div className="hidden w-20 border-t-2 border-[#b77a3c] md:block" />

              <h2 className="font-serif text-5xl tracking-[0.1em] text-[#4b3527] md:text-7xl">
                ABOUT
              </h2>

              <div className="hidden w-20 border-t-2 border-[#b77a3c] md:block" />
            </div>

            <p className="mt-3 text-xs tracking-[0.2em] text-[#4b3527] sm:text-sm">
              Cafe kumakumaについて
            </p>
          </div>
        </ScrollReveal>

        {/* =========================
            01 COFFEE & SWEETS
        ========================= */}
        <div className="mt-24 grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_2fr] md:gap-12">

          {/* テキスト */}
          <ScrollReveal direction="left" delay={100}>
            <div className="relative">

              {/* 背景の大きな01 */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-4 -top-16 z-0 whitespace-nowrap text-[130px] leading-none tracking-normal text-[#E7D9C6]/60 sm:text-[160px] md:-left-20 md:-top-30 md:text-[200px]"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                01
              </span>

              <div className="relative z-10">
                <h3 className="mt-3 text-lg tracking-[0.15em] text-[#4B3527] sm:text-xl">
                  COFFEE & SWEETS
                </h3>

                <div className="mt-5 h-px w-16 bg-[#A17C55]" />

                <p className="mt-8 text-2xl leading-[1.8] text-[#4B3527] sm:text-3xl md:mt-10">
                  自然のそばで、
                  <br />
                  ちょっといい時間を。
                </p>

                <p className="mt-6 text-sm leading-8 text-[#66594F] sm:text-base">
                  やさしい味わいのコーヒーと、
                  <br />
                  季節のスイーツを楽しむひととき。
                  <br />
                  日常から少し離れて、
                  <br />
                  ゆっくりとお過ごしください。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 写真 */}
          <ScrollReveal direction="right" delay={250}>
            <div className="relative h-[280px] overflow-hidden sm:h-[380px] md:h-[520px]">
              <Image
                src="/images/about-coffee.jpg"
                alt="Cafe kumakumaのコーヒーとスイーツ"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* =========================
            02 SPACE & NATURE
        ========================= */}
        <div className="mt-28 grid grid-cols-1 items-center gap-10 md:mt-40 md:grid-cols-[2fr_1fr] md:gap-12">

          {/* テキスト：スマホでは先、PCでは右 */}
          <div className="order-1 md:order-2">
            <ScrollReveal direction="right" delay={250}>
              <div className="relative md:pl-8">

                {/* 背景の大きな02 */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-4 -top-16 z-0 whitespace-nowrap text-[130px] leading-none text-[#E9DFD1] opacity-70 sm:text-[160px] md:-left-[50px] md:-top-[125px] md:text-[200px]"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  02
                </span>

                <div className="relative z-10">
                  <h3 className="mt-3 text-lg tracking-[0.15em] text-[#4B3527] sm:text-xl">
                    SPACE & NATURE
                  </h3>

                  <div className="mt-5 h-px w-16 bg-[#A17C55]" />

                  <p className="mt-8 text-2xl leading-[1.8] text-[#4B3527] sm:text-3xl md:mt-10">
                    木のぬくもりと、
                    <br />
                    自然を感じる空間。
                  </p>

                  <p className="mt-6 text-sm leading-8 text-[#66594F] sm:text-base">
                    大きな窓から差し込むやわらかな光と、
                    <br />
                    窓の向こうに広がる豊かな自然。
                    <br />
                    木の温かみに包まれながら、
                    <br />
                    心地よい時間をお過ごしいただけます。
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* 写真：スマホでは後、PCでは左 */}
          <div className="order-2 md:order-1">
            <ScrollReveal direction="left" delay={100}>
              <div className="relative h-[280px] overflow-hidden sm:h-[380px] md:h-[520px]">
                <Image
                  src="/images/about-space.jpg"
                  alt="Cafe kumakumaの店内"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* =========================
            03 ITALIAN FOOD
        ========================= */}
        <div className="mt-28 grid grid-cols-1 items-center gap-10 md:mt-40 md:grid-cols-[1fr_2fr] md:gap-12">

          {/* テキスト */}
          <ScrollReveal direction="left" delay={100}>
            <div className="relative">

              {/* 背景の大きな03 */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-4 -top-16 z-0 whitespace-nowrap text-[130px] leading-none text-[#E9DFD1] opacity-70 sm:text-[160px] md:-left-20 md:-top-30 md:text-[200px]"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                03
              </span>

              <div className="relative z-10">
                <h3 className="mt-3 text-lg tracking-[0.15em] text-[#4B3527] sm:text-xl">
                  ITALIAN FOOD
                </h3>

                <div className="mt-5 h-px w-16 bg-[#A17C55]" />

                <p className="mt-8 text-2xl leading-[1.8] text-[#4B3527] sm:text-3xl md:mt-10">
                  おいしい時間を、
                  <br />
                  自然とともに。
                </p>

                <p className="mt-6 text-sm leading-8 text-[#66594F] sm:text-base">
                  パスタやピザを中心に、
                  <br />
                  素材のおいしさを大切にした
                  <br />
                  イタリア料理をご用意しています。
                  <br />
                  自然を眺めながら、
                  <br />
                  ゆっくりとお楽しみください。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* 写真 */}
          <ScrollReveal direction="right" delay={250}>
            <div className="relative h-[280px] overflow-hidden sm:h-[380px] md:h-[520px]">
              <Image
                src="/images/about-food.jpg"
                alt="Cafe kumakumaのイタリア料理"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
