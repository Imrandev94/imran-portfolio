"use client";

// ── Atelier Martin — Bois / Menuiserie ───────────────────────
export function WoodVisual() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Horizontal grain lines — runs across full width */}
      {[38, 82, 124, 164, 202, 240, 278, 316, 354, 388].map((y, j) => (
        <line
          key={j}
          x1="0"
          y1={y}
          x2="600"
          y2={y + (j % 3 === 1 ? 2 : j % 3 === 2 ? -1 : 0)}
          stroke="rgba(184,131,74,0.065)"
          strokeWidth="1.8"
        />
      ))}

      {/* Growth rings — off-center right for artistic balance */}
      <ellipse cx="402" cy="196" rx="225" ry="212" stroke="rgba(184,131,74,0.09)" strokeWidth="1.2" />
      <ellipse cx="404" cy="194" rx="188" ry="177" stroke="rgba(184,131,74,0.13)" strokeWidth="1.2" />
      <ellipse cx="402" cy="197" rx="152" ry="144" stroke="rgba(184,131,74,0.18)" strokeWidth="1.2" />
      <ellipse cx="403" cy="195" rx="116" ry="110" stroke="rgba(184,131,74,0.24)" strokeWidth="1.4" />
      <ellipse cx="402" cy="196" rx="80"  ry="76"  stroke="rgba(184,131,74,0.32)" strokeWidth="1.6" />
      <ellipse cx="402" cy="196" rx="48"  ry="45"  stroke="rgba(184,131,74,0.42)" strokeWidth="2"   />
      <circle  cx="402" cy="196" r="18"
        fill="rgba(184,131,74,0.15)"
        stroke="rgba(184,131,74,0.58)"
        strokeWidth="2"
      />

      {/* Radial grain lines from heartwood */}
      {([
        [402, 196, 402, -30],
        [402, 196, 210,  85],
        [402, 196, 210, 307],
        [402, 196, 402, 422],
        [402, 196, 594,  85],
        [402, 196, 594, 307],
      ] as [number, number, number, number][]).map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(184,131,74,0.055)" strokeWidth="0.8" />
      ))}

      {/* Corner frame — top-left */}
      <line x1="38" y1="32" x2="38"  y2="86"  stroke="rgba(184,131,74,0.38)" strokeWidth="1.5" />
      <line x1="38" y1="32" x2="112" y2="32"  stroke="rgba(184,131,74,0.38)" strokeWidth="1.5" />

      {/* Corner frame — bottom-left */}
      <line x1="38" y1="368" x2="38"  y2="314" stroke="rgba(184,131,74,0.28)" strokeWidth="1.5" />
      <line x1="38" y1="368" x2="112" y2="368" stroke="rgba(184,131,74,0.28)" strokeWidth="1.5" />

      {/* Dovetail joint hint */}
      <path
        d="M 96 302 L 114 268 L 132 302 L 122 302 L 122 336 L 106 336 L 106 302 Z"
        stroke="rgba(184,131,74,0.22)"
        strokeWidth="1.2"
        fill="rgba(184,131,74,0.04)"
      />
    </svg>
  );
}

// ── ElecPro Services — Circuit électrique ────────────────────
export function CircuitVisual() {
  const vias: [number, number][] = [
    [110, 80], [240, 80], [240, 150], [340, 150], [400, 150],
    [460, 150], [460, 240], [460, 260], [460, 280], [110, 200],
    [200, 200], [200, 280], [340, 280], [130, 200], [200, 160],
    [520, 150], [520, 260],
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dot grid */}
      {Array.from({ length: 9 }, (_, row) =>
        Array.from({ length: 10 }, (_, col) => (
          <circle key={`${row}-${col}`}
            cx={col * 65 + 35} cy={row * 48 + 24} r="1.2"
            fill="rgba(0,71,255,0.18)"
          />
        ))
      )}

      {/* Trace network */}
      <path d="M 110 80 L 240 80 L 240 150 L 340 150"        stroke="rgba(0,71,255,0.52)" strokeWidth="1.6" />
      <path d="M 240 80 L 240 40 L 400 40 L 400 150"         stroke="rgba(0,71,255,0.44)" strokeWidth="1.6" />
      <path d="M 340 150 L 460 150 L 460 240"                stroke="rgba(0,71,255,0.48)" strokeWidth="1.6" />
      <path d="M 400 150 L 520 150 L 520 260 L 460 260"      stroke="rgba(0,71,255,0.42)" strokeWidth="1.6" />
      <path d="M 110 80 L 110 200 L 200 200 L 200 280 L 340 280" stroke="rgba(0,71,255,0.44)" strokeWidth="1.6" />
      <path d="M 200 200 L 130 200 L 130 330 L 220 330"      stroke="rgba(0,71,255,0.36)" strokeWidth="1.6" />
      <path d="M 340 280 L 460 280 L 460 260"                stroke="rgba(0,71,255,0.44)" strokeWidth="1.6" />
      <path d="M 200 200 L 200 160 L 160 160 L 160 120"      stroke="rgba(0,71,255,0.34)" strokeWidth="1.6" />

      {/* Vias */}
      {vias.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5"
          fill="rgba(4,10,30,1)"
          stroke="rgba(0,71,255,0.65)"
          strokeWidth="1.5"
        />
      ))}

      {/* IC chip */}
      <rect x="252" y="160" width="132" height="80" rx="4"
        stroke="rgba(0,71,255,0.52)" strokeWidth="1.5"
        fill="rgba(0,40,120,0.22)"
      />
      {/* IC pins */}
      {[175, 193, 211, 229].map((y, i) => (
        <line key={`pl-${i}`} x1="252" y1={y} x2="236" y2={y}
          stroke="rgba(0,71,255,0.44)" strokeWidth="1.5" />
      ))}
      {[175, 193, 211, 229].map((y, i) => (
        <line key={`pr-${i}`} x1="384" y1={y} x2="400" y2={y}
          stroke="rgba(0,71,255,0.44)" strokeWidth="1.5" />
      ))}

      {/* SMD resistors */}
      <rect x="184" y="74" width="28" height="12" rx="2"
        stroke="rgba(245,196,0,0.56)" strokeWidth="1.2"
        fill="rgba(245,196,0,0.1)"
      />
      <rect x="126" y="194" width="28" height="12" rx="2"
        stroke="rgba(245,196,0,0.50)" strokeWidth="1.2"
        fill="rgba(245,196,0,0.08)"
      />

      {/* VCC trace (yellow) */}
      <path d="M 58 52 L 58 350 L 162 350"
        stroke="rgba(245,196,0,0.38)" strokeWidth="2"
      />
      <circle cx="58" cy="52" r="7"
        fill="rgba(245,196,0,0.72)" stroke="rgba(245,196,0,0.9)" strokeWidth="1.2"
      />

      {/* Capacitor */}
      <line x1="498" y1="242" x2="498" y2="258" stroke="rgba(0,71,255,0.44)" strokeWidth="1.5" />
      <line x1="487" y1="258" x2="509" y2="258" stroke="rgba(0,71,255,0.56)" strokeWidth="2" />
      <line x1="487" y1="264" x2="509" y2="264" stroke="rgba(0,71,255,0.56)" strokeWidth="2" />
      <line x1="498" y1="264" x2="498" y2="280" stroke="rgba(0,71,255,0.44)" strokeWidth="1.5" />

      {/* GND dashed */}
      <path d="M 558 365 L 558 78 L 520 78 L 520 150"
        stroke="rgba(100,130,200,0.22)" strokeWidth="1.5"
        strokeDasharray="6 4"
      />
    </svg>
  );
}

// ── Studio Lyna Beauté — Cosmétique flat-lay ─────────────────
export function BeautyVisual() {
  const sparkles: [number, number, number][] = [
    [72, 228, 2.5], [148, 318, 1.8], [202, 356, 1.5], [422, 346, 2],
    [502, 280, 1.8], [550, 182, 2.2], [182, 56, 1.5], [412, 38, 2],
    [66, 72, 1.8], [532, 48, 1.5], [502, 352, 2], [378, 366, 1.5],
  ];
  const stars: [number, number, number][] = [
    [536, 156, 8], [154, 276, 7], [454, 332, 6],
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main circle — compact / mirror */}
      <circle cx="300" cy="195" r="148" stroke="rgba(232,197,184,0.17)" strokeWidth="1.5" />
      <circle cx="300" cy="195" r="122" stroke="rgba(232,197,184,0.25)" strokeWidth="1" />
      <circle cx="300" cy="195" r="96"
        fill="rgba(232,197,184,0.05)" stroke="rgba(232,197,184,0.37)" strokeWidth="1.2"
      />
      <circle cx="300" cy="195" r="64"
        fill="rgba(232,197,184,0.07)" stroke="rgba(232,197,184,0.42)" strokeWidth="1.5"
      />
      <circle cx="300" cy="195" r="22"
        fill="rgba(232,197,184,0.2)" stroke="rgba(232,197,184,0.3)" strokeWidth="1"
      />

      {/* Petal arcs */}
      <path d="M 300 99 C 370 99 396 148 370 195"
        stroke="rgba(232,197,184,0.28)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 300 99 C 230 99 204 148 230 195"
        stroke="rgba(232,197,184,0.28)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 300 291 C 370 291 396 242 370 195"
        stroke="rgba(232,197,184,0.28)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 300 291 C 230 291 204 242 230 195"
        stroke="rgba(232,197,184,0.28)" strokeWidth="1.5" strokeLinecap="round" />

      {/* Left — lipstick cap (top view) */}
      <ellipse cx="104" cy="116" rx="18" ry="18"
        stroke="rgba(232,197,184,0.42)" strokeWidth="1.5" fill="rgba(232,197,184,0.06)"
      />
      <ellipse cx="104" cy="116" rx="9" ry="9" fill="rgba(232,197,184,0.2)" />
      <line x1="104" y1="134" x2="104" y2="170" stroke="rgba(232,197,184,0.22)" strokeWidth="1" />
      <ellipse cx="104" cy="180" rx="6" ry="10"
        stroke="rgba(232,197,184,0.3)" strokeWidth="1" fill="rgba(232,197,184,0.06)"
      />

      {/* Right — perfume bottle (top view) */}
      <rect x="458" y="90" width="44" height="54" rx="22"
        stroke="rgba(232,197,184,0.4)" strokeWidth="1.5" fill="rgba(232,197,184,0.05)"
      />
      <rect x="471" y="99" width="18" height="36" rx="9"
        stroke="rgba(232,197,184,0.24)" strokeWidth="1" fill="rgba(232,197,184,0.06)"
      />

      {/* Sparkle dots */}
      {sparkles.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="rgba(232,197,184,0.5)" />
      ))}

      {/* Star cross sparkles */}
      {stars.map(([cx, cy, s], i) => (
        <g key={i}>
          <line x1={cx - s}           y1={cy}           x2={cx + s}           y2={cy}
            stroke="rgba(232,197,184,0.42)" strokeWidth="1" />
          <line x1={cx}               y1={cy - s}       x2={cx}               y2={cy + s}
            stroke="rgba(232,197,184,0.42)" strokeWidth="1" />
          <line x1={cx - s * 0.7}    y1={cy - s * 0.7} x2={cx + s * 0.7}    y2={cy + s * 0.7}
            stroke="rgba(232,197,184,0.22)" strokeWidth="0.8" />
          <line x1={cx + s * 0.7}    y1={cy - s * 0.7} x2={cx - s * 0.7}    y2={cy + s * 0.7}
            stroke="rgba(232,197,184,0.22)" strokeWidth="0.8" />
        </g>
      ))}

      {/* Decorative sweep arc */}
      <path d="M 44 362 C 102 292 202 256 300 276"
        stroke="rgba(232,197,184,0.16)" strokeWidth="1" strokeDasharray="5 8"
      />

      {/* Corner ornament */}
      <line x1="546" y1="358" x2="578" y2="358" stroke="rgba(232,197,184,0.34)" strokeWidth="1.5" />
      <line x1="578" y1="358" x2="578" y2="326" stroke="rgba(232,197,184,0.34)" strokeWidth="1.5" />
    </svg>
  );
}

// ── CleanAuto Express — Carrosserie + eau ─────────────────────
export function CarVisual() {
  const microDrops: [number, number, number][] = [
    [185, 42, 6], [400, 48, 5], [68, 145, 5], [556, 168, 4], [240, 28, 4],
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 600 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Car body */}
      <rect x="62" y="238" width="478" height="44" rx="6"
        stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" fill="rgba(0,102,255,0.06)"
      />

      {/* Roofline */}
      <path d="M 130 238 C 148 200 186 170 238 160 L 390 157 C 430 157 458 169 480 196 L 494 238"
        stroke="rgba(255,255,255,0.16)" strokeWidth="1.8" fill="rgba(0,102,255,0.05)"
      />

      {/* Windshield */}
      <path d="M 382 160 C 408 156 438 165 464 184 L 486 218 L 410 220 Z"
        stroke="rgba(0,102,255,0.48)" strokeWidth="1.5" fill="rgba(0,102,255,0.1)"
      />

      {/* Rear window */}
      <path d="M 238 160 C 214 158 178 168 154 186 L 132 218 L 208 220 Z"
        stroke="rgba(0,102,255,0.42)" strokeWidth="1.5" fill="rgba(0,102,255,0.08)"
      />

      {/* Door line */}
      <line x1="308" y1="162" x2="304" y2="282"
        stroke="rgba(255,255,255,0.08)" strokeWidth="1"
      />

      {/* Wheel arches */}
      <path d="M 96 282 A 54 54 0 0 1 204 282" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />
      <path d="M 396 282 A 54 54 0 0 1 504 282" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

      {/* Wheels */}
      <circle cx="150" cy="290" r="32" stroke="rgba(255,255,255,0.16)" strokeWidth="1.8" />
      <circle cx="150" cy="290" r="18" stroke="rgba(0,102,255,0.52)" strokeWidth="1.5" fill="rgba(0,102,255,0.08)" />
      <circle cx="150" cy="290" r="6"  fill="rgba(0,102,255,0.66)" />

      <circle cx="450" cy="290" r="32" stroke="rgba(255,255,255,0.16)" strokeWidth="1.8" />
      <circle cx="450" cy="290" r="18" stroke="rgba(0,102,255,0.52)" strokeWidth="1.5" fill="rgba(0,102,255,0.08)" />
      <circle cx="450" cy="290" r="6"  fill="rgba(0,102,255,0.66)" />

      {/* Large central water drop */}
      <path d="M 300 54 C 322 80 332 108 332 124 A 32 32 0 0 1 268 124 C 268 108 278 80 300 54 Z"
        stroke="rgba(0,102,255,0.62)" strokeWidth="1.6" fill="rgba(0,102,255,0.1)"
      />
      {/* Inner highlight */}
      <path d="M 300 74 C 310 88 316 104 316 116 A 16 16 0 0 1 284 116 C 284 104 290 88 300 74 Z"
        fill="rgba(0,102,255,0.06)"
      />

      {/* Medium drop — right */}
      <path d="M 458 36 C 472 58 478 78 478 90 A 20 20 0 0 1 438 90 C 438 78 444 58 458 36 Z"
        stroke="rgba(0,102,255,0.52)" strokeWidth="1.2" fill="rgba(0,102,255,0.07)"
      />

      {/* Small drop — left */}
      <path d="M 116 66 C 126 82 130 94 130 102 A 14 14 0 0 1 102 102 C 102 94 106 82 116 66 Z"
        stroke="rgba(255,255,255,0.32)" strokeWidth="1.2" fill="rgba(255,255,255,0.04)"
      />

      {/* Small drop — far right */}
      <path d="M 536 88 C 546 104 550 116 550 122 A 14 14 0 0 1 522 122 C 522 116 526 104 536 88 Z"
        stroke="rgba(0,102,255,0.46)" strokeWidth="1.2" fill="rgba(0,102,255,0.06)"
      />

      {/* Micro drops */}
      {microDrops.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r}
          stroke="rgba(0,102,255,0.4)" strokeWidth="1" fill="rgba(0,102,255,0.06)"
        />
      ))}

      {/* Shine arcs on hood */}
      <path d="M 420 204 C 446 194 466 191 480 197"
        stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" strokeLinecap="round"
      />
      <path d="M 426 220 C 452 210 472 208 484 213"
        stroke="rgba(255,255,255,0.16)" strokeWidth="1" strokeLinecap="round"
      />

      {/* Speed lines */}
      <line x1="0" y1="196" x2="54" y2="196" stroke="rgba(0,102,255,0.32)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="0" y1="214" x2="36" y2="214" stroke="rgba(0,102,255,0.22)" strokeWidth="1"   strokeLinecap="round" />
      <line x1="0" y1="228" x2="46" y2="228" stroke="rgba(0,102,255,0.28)" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
