
export default function SectionWave() {
  return (
    <div
      className="relative h-[180px] w-full overflow-hidden bg-[#F7F3EA] md:h-[220px]"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <defs>
          {/* 奥の山の淡いグラデーション */}
          <linearGradient id="mountainBack" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D9C5AA" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#E8DAC7" stopOpacity="0" />
          </linearGradient>

          {/* 手前の山のグラデーション */}
          <linearGradient id="mountainFront" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DCCBB5" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#F7F2E9" stopOpacity="0" />
          </linearGradient>

          {/* 山の輪郭を柔らかくする */}
          <filter id="mountainBlur">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* 奥側：大きく不規則な山並み */}
        <path
          d="
            M0 112
            C55 125 75 90 120 100
            C180 115 205 78 245 92
            C305 115 310 150 380 145
            C455 140 505 105 570 100
            C635 95 665 55 725 65
            C795 80 815 135 895 140
            C960 145 1000 110 1060 115
            C1125 125 1165 150 1225 120
            C1290 88 1315 55 1360 75
            C1400 92 1420 112 1440 108
            L1440 220 L0 220 Z
          "
          fill="url(#mountainBack)"
          filter="url(#mountainBlur)"
        />

        {/* 中間の山 */}
        <path
          d="
            M0 135
            C100 150 145 115 225 135
            C310 160 360 170 450 150
            C540 130 590 125 670 145
            C760 165 820 165 900 150
            C985 135 1040 155 1120 160
            C1220 170 1330 130 1440 140
            L1440 220 L0 220 Z
          "
          fill="#E3D4BF"
opacity="0.5"
          filter="url(#mountainBlur)"
        />

        {/* 手前側：淡く溶け込む山 */}
        <path
          d="
            M0 165
            C110 155 180 170 260 180
            C350 195 430 175 520 165
            C620 155 680 180 780 185
            C880 190 960 165 1050 175
            C1150 190 1250 160 1440 175
            L1440 220 L0 220 Z
          "
          fill="url(#mountainFront)"
        />
      </svg>
    </div>
  );
}
