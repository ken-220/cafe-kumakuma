
export default function Footer() {
  return (
    <footer className="bg-[#4b3527] text-[#f7f1e8]">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-8 md:py-20">

        {/* メインエリア */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-14">

          {/* ロゴ・店舗名 */}
          <div>
            <p className="text-xl tracking-wide sm:text-2xl">
              Cafe kumakuma
            </p>

            <p className="mt-4 text-sm leading-7 text-[#d8cec4] md:mt-5">
              自然のそばで、
              <br />
              ちょっといい時間を。
            </p>
          </div>

          {/* ナビゲーション */}
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] text-[#c9a77c] md:mb-6">
              MENU
            </p>

            <nav
              aria-label="フッターナビゲーション"
              className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm md:flex md:flex-col md:gap-4"
            >
              <a
                href="#about"
                className="transition hover:opacity-60"
              >
                About
              </a>

              <a
                href="#menu"
                className="transition hover:opacity-60"
              >
                Menu
              </a>

              <a
                href="#goods"
                className="transition hover:opacity-60"
              >
                Goods
              </a>

              <a
                href="#access"
                className="transition hover:opacity-60"
              >
                Access
              </a>
            </nav>
          </div>

          {/* 営業情報 */}
          <div>
            <p className="mb-5 text-xs tracking-[0.3em] text-[#c9a77c] md:mb-6">
              INFORMATION
            </p>

            <div className="space-y-3 text-sm leading-6 text-[#d8cec4]">
              <p>
                OPEN
                <br />
                10:00 - 17:00
              </p>

              <p>
                土日祝 10:00 - 18:00
              </p>

              <p>
                CLOSED / 水曜日
              </p>
            </div>
          </div>

        </div>

        {/* コピーライト */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-white/20 pt-7 text-center text-xs text-[#bfb2a6] md:mt-16 md:flex-row md:justify-between md:gap-4 md:text-left">

          <p>© 2026 Cafe kumakuma</p>

          <p>Portfolio Concept Site</p>

        </div>

      </div>
    </footer>
  );
}
