
export default function GoodsAccessDivider() {
  return (
    <div className="w-full bg-[#f7f1e8] py-8">
      <div className="mx-auto max-w-5xl px-8">
        {/* 車のアイコン＋左右ライン */}
        <div className="flex items-center justify-center gap-5">
          {/* 左ライン */}
          <div className="h-px flex-1 bg-[#cdb99f]" />

          {/* 横向きの車 */}
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#AD5940]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {/* 車体 */}
              <path d="M3 11h2l3-5h7l4 5h2a1 1 0 0 1 1 1v5h-3" />
              <path d="M5 17H2v-5a1 1 0 0 1 1-1" />
              <path d="M9 17h6" />

              {/* 窓 */}
              <path d="M8 6v5h11" />
              <path d="M14 6v5" />

              {/* タイヤ */}
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>
          </div>

          {/* 右ライン */}
          <div className="h-px flex-1 bg-[#cdb99f]" />
        </div>

        {/* テキスト */}
        <p className="mt-3 text-center text-xs tracking-[0.2em] text-[#a67c52]">
          Cafe kumakuma
        </p>
      </div>
    </div>
  );
}
