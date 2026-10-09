
import Image from "next/image";

export default function Access() {
  return (
    <section
      id="access"
      className="bg-[#f7f1e8] pb-20 pt-8 text-[#4b3527] md:pb-32"
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-10 px-6 sm:px-8 md:grid-cols-2 md:gap-16">

        {/* 左：店舗外観 */}
        <div className="relative h-[320px] overflow-hidden sm:h-[420px] md:h-[520px]">
          <Image
            src="/images/access-exterior.jpg"
            alt="Cafe kumakuma 店舗外観"
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>

        {/* 右：店舗情報 */}
        <div className="pt-0 md:pt-4">

          {/* 見出し */}
          <p className="text-xs tracking-[0.4em] text-[#a67c52]">
            ACCESS
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl">
            Access
          </h2>

          <p className="mt-2 text-xs">
            アクセス情報
          </p>

          {/* 店舗情報 */}
          <div className="mt-9 space-y-6 text-sm leading-7 md:mt-12 md:space-y-7">

            <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-3 md:grid-cols-[90px_minmax(0,1fr)]">
              <p className="shrink-0">住所</p>
              <p>
                栃木県那須塩原市xx町 xx-xx
              </p>
            </div>

            <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-3 md:grid-cols-[90px_minmax(0,1fr)]">
              <p>電話番号</p>
              <p>090-xxxx-xxxx</p>
            </div>

            <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-3 md:grid-cols-[90px_minmax(0,1fr)]">
              <p>営業時間</p>
              <p>
                10:00 - 17:00
                <br />
                土日祝は18:00まで
              </p>
            </div>

            <div className="grid grid-cols-[80px_minmax(0,1fr)] gap-3 md:grid-cols-[90px_minmax(0,1fr)]">
              <p>定休日</p>
              <p>水曜日</p>
            </div>

          </div>

          {/* MAP */}
          <div className="mt-10 flex h-[180px] items-center justify-center bg-[#dedbd5] md:mt-12 md:h-[190px]">
            <div className="text-center">
              <p className="text-xs tracking-[0.3em] text-[#a67c52]">
                MAP
              </p>

              <p className="mt-3 text-sm">
                Cafe kumakuma
              </p>

              <p className="mt-2 text-xs text-[#8b7768]">
                Nature Side
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
