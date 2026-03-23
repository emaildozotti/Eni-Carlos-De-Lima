interface RootsDividerProps {
  className?: string
  opacity?: number
  watermark?: boolean
}

export const RootsDivider = ({ className = '', opacity = 0.3, watermark = false }: RootsDividerProps) => {
  if (watermark) {
    return (
      <div className={`absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden ${className}`}>
        <svg
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '80%', maxWidth: '600px', opacity: opacity * 0.5 }}
        >
          {/* Central trunk */}
          <path d="M300 400 C300 380 298 340 295 300 C292 260 285 220 280 180" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Main left branch */}
          <path d="M285 280 C270 260 245 240 220 220 C200 204 175 190 150 175" stroke="#B8860B" strokeWidth="1.8" strokeLinecap="round" />
          {/* Main right branch */}
          <path d="M290 250 C310 230 335 215 360 200 C385 185 410 172 440 160" stroke="#B8860B" strokeWidth="1.8" strokeLinecap="round" />
          {/* Left sub-branch 1 */}
          <path d="M220 220 C205 205 188 195 168 188 C150 182 130 180 110 178" stroke="#B8860B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Left sub-branch 2 */}
          <path d="M195 205 C180 192 165 182 148 170 C132 158 115 148 95 142" stroke="#B8860B" strokeWidth="1.0" strokeLinecap="round" />
          {/* Right sub-branch 1 */}
          <path d="M360 200 C375 185 390 172 408 162 C425 152 445 145 468 140" stroke="#B8860B" strokeWidth="1.2" strokeLinecap="round" />
          {/* Right sub-branch 2 */}
          <path d="M390 185 C405 170 420 158 438 148 C455 138 475 130 498 125" stroke="#B8860B" strokeWidth="1.0" strokeLinecap="round" />
          {/* Secondary left branch */}
          <path d="M280 220 C262 202 240 188 215 175 C192 163 165 155 135 150" stroke="#B8860B" strokeWidth="1.4" strokeLinecap="round" />
          {/* Secondary right branch */}
          <path d="M295 195 C318 178 342 165 368 155 C392 145 418 138 448 132" stroke="#B8860B" strokeWidth="1.4" strokeLinecap="round" />
          {/* Thin tendrils left */}
          <path d="M150 175 C135 168 118 163 100 160" stroke="#B8860B" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
          <path d="M168 188 C152 184 135 182 118 182" stroke="#B8860B" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
          {/* Thin tendrils right */}
          <path d="M440 160 C456 153 474 148 492 146" stroke="#B8860B" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
          <path d="M408 162 C424 158 440 156 458 156" stroke="#B8860B" strokeWidth="0.7" strokeLinecap="round" opacity="0.6" />
          {/* Root dots */}
          <circle cx="100" cy="160" r="2" fill="#B8860B" opacity="0.5" />
          <circle cx="95" cy="142" r="1.5" fill="#B8860B" opacity="0.4" />
          <circle cx="492" cy="146" r="2" fill="#B8860B" opacity="0.5" />
          <circle cx="498" cy="125" r="1.5" fill="#B8860B" opacity="0.4" />
          <circle cx="135" cy="150" r="1.5" fill="#B8860B" opacity="0.4" />
          <circle cx="448" cy="132" r="1.5" fill="#B8860B" opacity="0.4" />
        </svg>
      </div>
    )
  }

  return (
    <div className={`w-full overflow-hidden pointer-events-none ${className}`} style={{ height: '80px' }}>
      <svg
        viewBox="0 0 1200 80"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', opacity }}
      >
        {/* Central root growing from center */}
        <path d="M600 80 C600 70 598 55 595 42 C592 30 585 18 580 8" stroke="#B8860B" strokeWidth="1.8" strokeLinecap="round" />
        {/* Left branch from center */}
        <path d="M593 55 C575 45 552 36 525 28 C500 21 470 15 435 10" stroke="#B8860B" strokeWidth="1.4" strokeLinecap="round" />
        {/* Right branch from center */}
        <path d="M597 48 C618 38 642 30 668 22 C695 14 726 8 762 4" stroke="#B8860B" strokeWidth="1.4" strokeLinecap="round" />
        {/* Far left extension */}
        <path d="M435 10 C405 6 372 3 335 2 C300 1 262 2 225 4" stroke="#B8860B" strokeWidth="1.0" strokeLinecap="round" />
        {/* Far right extension */}
        <path d="M762 4 C800 2 840 2 880 4 C915 6 950 10 985 15" stroke="#B8860B" strokeWidth="1.0" strokeLinecap="round" />
        {/* Tiny side roots left */}
        <path d="M335 2 C305 2 272 4 238 8" stroke="#B8860B" strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
        <path d="M225 4 C195 6 162 10 128 16" stroke="#B8860B" strokeWidth="0.6" strokeLinecap="round" opacity="0.6" />
        <path d="M128 16 C102 22 75 30 48 40" stroke="#B8860B" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
        {/* Tiny side roots right */}
        <path d="M880 4 C912 6 945 10 978 17" stroke="#B8860B" strokeWidth="0.7" strokeLinecap="round" opacity="0.7" />
        <path d="M985 15 C1012 21 1042 30 1075 42" stroke="#B8860B" strokeWidth="0.6" strokeLinecap="round" opacity="0.6" />
        <path d="M1075 42 C1098 52 1128 65 1160 78" stroke="#B8860B" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
        {/* Root tips */}
        <circle cx="580" cy="8" r="1.5" fill="#B8860B" opacity="0.5" />
        <circle cx="48" cy="40" r="1.2" fill="#B8860B" opacity="0.4" />
        <circle cx="1160" cy="78" r="1.2" fill="#B8860B" opacity="0.4" />
      </svg>
    </div>
  )
}
