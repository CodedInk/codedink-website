// Hand-crafted abstract case-study visuals.
// Each one nods at the case's domain without leaking NDA-protected work.

export function WiproVisual(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="wipro-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a0a1a" />
          <stop offset="100%" stopColor="#3c0a14" />
        </linearGradient>
        <radialGradient id="wipro-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#wipro-bg)" />
      <rect width="400" height="300" fill="url(#wipro-glow)" />
      {/* Connected enterprise nodes */}
      {[
        { x: 80, y: 80, r: 8 },
        { x: 200, y: 60, r: 14 },
        { x: 320, y: 90, r: 8 },
        { x: 120, y: 160, r: 10 },
        { x: 280, y: 170, r: 10 },
        { x: 200, y: 220, r: 16 },
        { x: 60, y: 230, r: 8 },
        { x: 340, y: 230, r: 8 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 6} fill="#ef4444" opacity="0.15" />
          <circle cx={n.x} cy={n.y} r={n.r} fill="#fb7185" opacity="0.85" />
          <circle cx={n.x} cy={n.y} r={n.r * 0.4} fill="#fff" opacity="0.9" />
        </g>
      ))}
      {/* Connections */}
      <g stroke="#fb7185" strokeWidth="0.8" opacity="0.45" fill="none">
        <line x1="80" y1="80" x2="200" y2="60" />
        <line x1="200" y1="60" x2="320" y2="90" />
        <line x1="80" y1="80" x2="120" y2="160" />
        <line x1="120" y1="160" x2="200" y2="220" />
        <line x1="200" y1="220" x2="280" y2="170" />
        <line x1="320" y1="90" x2="280" y2="170" />
        <line x1="200" y1="60" x2="200" y2="220" />
        <line x1="60" y1="230" x2="200" y2="220" />
        <line x1="340" y1="230" x2="200" y2="220" />
        <line x1="120" y1="160" x2="280" y2="170" />
      </g>
    </svg>
  );
}

export function TdsVisual(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="tds-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a0a1a" />
          <stop offset="100%" stopColor="#2a0a14" />
        </linearGradient>
        <linearGradient id="tds-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
          <stop offset="50%" stopColor="#fb7185" stopOpacity="1" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#tds-bg)" />
      {/* Concentric signal arcs from a tower */}
      <g transform="translate(200,260)">
        {[40, 75, 110, 145, 180, 215].map((r, i) => (
          <circle
            key={i}
            cx="0"
            cy="0"
            r={r}
            fill="none"
            stroke="url(#tds-line)"
            strokeWidth={1 + i * 0.2}
            opacity={0.7 - i * 0.08}
          />
        ))}
        {/* Tower */}
        <line x1="0" y1="-10" x2="0" y2="-90" stroke="#fb7185" strokeWidth="2" />
        <polygon points="-12,-10 12,-10 6,-90 -6,-90" fill="#ef4444" opacity="0.7" />
        <circle cx="0" cy="-90" r="5" fill="#fff" />
        <circle cx="0" cy="-90" r="10" fill="#fb7185" opacity="0.4" />
      </g>
      {/* Data packets */}
      {[
        { x: 60, y: 100 },
        { x: 340, y: 120 },
        { x: 100, y: 180 },
        { x: 320, y: 200 },
        { x: 50, y: 60 },
        { x: 350, y: 70 },
      ].map((p, i) => (
        <rect
          key={i}
          x={p.x - 4}
          y={p.y - 4}
          width="8"
          height="8"
          rx="1.5"
          fill="#fb7185"
          opacity="0.7"
        />
      ))}
    </svg>
  );
}

export function HealthEdgeVisual(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="he-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a0a1a" />
          <stop offset="100%" stopColor="#3c0a14" />
        </linearGradient>
        <linearGradient id="he-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />
          <stop offset="50%" stopColor="#fb7185" stopOpacity="1" />
          <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#he-bg)" />
      {/* Pulse line */}
      <path
        d="M 0,150 L 80,150 L 95,150 L 110,90 L 125,210 L 140,150 L 200,150 L 215,150 L 230,100 L 245,180 L 260,150 L 400,150"
        stroke="url(#he-line)"
        strokeWidth="2.5"
        fill="none"
      />
      {/* AI nodes around the pulse */}
      {[
        { x: 50, y: 80, r: 4 },
        { x: 130, y: 50, r: 5 },
        { x: 280, y: 70, r: 5 },
        { x: 350, y: 100, r: 4 },
        { x: 70, y: 240, r: 5 },
        { x: 180, y: 250, r: 4 },
        { x: 320, y: 230, r: 5 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r + 4} fill="#ef4444" opacity="0.2" />
          <circle cx={n.x} cy={n.y} r={n.r} fill="#fb7185" />
        </g>
      ))}
      {/* Subtle data grid */}
      <g stroke="#fb7185" strokeWidth="0.4" opacity="0.15">
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`v${i}`} x1={50 * (i + 1)} y1="0" x2={50 * (i + 1)} y2="300" />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={50 * (i + 1)} x2="400" y2={50 * (i + 1)} />
        ))}
      </g>
    </svg>
  );
}

export function AflacVisual(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="af-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a0a1a" />
          <stop offset="100%" stopColor="#2a0a14" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#af-bg)" />
      {/* Modular design-system grid */}
      <g>
        {/* Buttons */}
        <rect x="40" y="50" width="80" height="28" rx="6" fill="#ef4444" opacity="0.85" />
        <rect x="130" y="50" width="80" height="28" rx="6" fill="none" stroke="#fb7185" strokeWidth="1.5" />
        <rect x="220" y="50" width="80" height="28" rx="6" fill="none" stroke="#fb7185" strokeWidth="1.5" strokeDasharray="3,3" />
        <rect x="310" y="50" width="50" height="28" rx="14" fill="#fb7185" opacity="0.6" />
        {/* Cards */}
        <rect x="40" y="100" width="155" height="100" rx="8" fill="#3c0a14" stroke="#fb7185" strokeWidth="1" opacity="0.9" />
        <rect x="50" y="115" width="60" height="6" rx="2" fill="#fb7185" />
        <rect x="50" y="128" width="120" height="4" rx="1" fill="#fff" opacity="0.4" />
        <rect x="50" y="138" width="100" height="4" rx="1" fill="#fff" opacity="0.4" />
        <rect x="50" y="148" width="110" height="4" rx="1" fill="#fff" opacity="0.4" />
        <rect x="50" y="170" width="60" height="20" rx="4" fill="#ef4444" opacity="0.85" />

        <rect x="210" y="100" width="155" height="100" rx="8" fill="#3c0a14" stroke="#fb7185" strokeWidth="1" opacity="0.9" />
        <rect x="220" y="115" width="60" height="6" rx="2" fill="#fb7185" />
        <rect x="220" y="128" width="120" height="4" rx="1" fill="#fff" opacity="0.4" />
        <rect x="220" y="138" width="100" height="4" rx="1" fill="#fff" opacity="0.4" />
        <rect x="220" y="148" width="110" height="4" rx="1" fill="#fff" opacity="0.4" />
        <rect x="220" y="170" width="60" height="20" rx="4" fill="#ef4444" opacity="0.85" />

        {/* Tokens */}
        {[
          "#fecaca", "#fca5a5", "#f87171", "#ef4444", "#dc2626", "#b91c1c",
        ].map((c, i) => (
          <circle key={i} cx={60 + i * 50} cy={235} r="14" fill={c} />
        ))}
      </g>
    </svg>
  );
}

export function GenericVisual({ seed }: { seed: number }): React.JSX.Element {
  const blocks = Array.from({ length: 10 }, (_, i) => ({
    x: ((seed * 7 + i * 41) % 320) + 20,
    y: ((seed * 13 + i * 23) % 200) + 30,
    w: 24 + ((seed + i * 5) % 40),
    h: 24 + ((seed + i * 7) % 40),
    o: 0.3 + ((seed + i) % 5) * 0.1,
  }));
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`gen-bg-${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a0a1a" />
          <stop offset="100%" stopColor="#2a0a14" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#gen-bg-${seed})`} />
      {blocks.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width={b.w}
          height={b.h}
          rx="3"
          fill="#fb7185"
          opacity={b.o}
        />
      ))}
    </svg>
  );
}

export function PointClickCareVisual(): React.JSX.Element {
  return (
    <svg
      viewBox="0 0 400 300"
      className="w-full h-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="pcc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1a0a1a" />
          <stop offset="100%" stopColor="#3c0a14" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#pcc-bg)" />
      {/* Stylized EMR / chart record card */}
      <g transform="translate(80,70)">
        <rect width="240" height="160" rx="10" fill="#3c0a14" stroke="#fb7185" strokeWidth="1" />
        {/* Header bar */}
        <rect x="0" y="0" width="240" height="36" rx="10" fill="#7f1d1d" />
        <circle cx="22" cy="18" r="9" fill="#fb7185" />
        <rect x="38" y="13" width="80" height="5" rx="2" fill="#fff" opacity="0.85" />
        <rect x="38" y="22" width="50" height="3" rx="1" fill="#fff" opacity="0.5" />
        {/* Vital lines */}
        <rect x="14" y="50" width="60" height="4" rx="1" fill="#fb7185" opacity="0.85" />
        <rect x="14" y="60" width="180" height="3" rx="1" fill="#fff" opacity="0.35" />
        <rect x="14" y="68" width="160" height="3" rx="1" fill="#fff" opacity="0.35" />
        <rect x="14" y="76" width="200" height="3" rx="1" fill="#fff" opacity="0.35" />
        {/* Pulse mini-chart */}
        <path
          d="M 14,110 L 60,110 L 70,90 L 80,130 L 90,110 L 140,110 L 150,100 L 160,120 L 170,110 L 226,110"
          stroke="#fb7185"
          strokeWidth="1.8"
          fill="none"
        />
        {/* Action chips */}
        <rect x="14" y="135" width="44" height="14" rx="3" fill="#ef4444" opacity="0.9" />
        <rect x="64" y="135" width="56" height="14" rx="3" fill="none" stroke="#fb7185" strokeWidth="1" />
        <rect x="126" y="135" width="36" height="14" rx="3" fill="none" stroke="#fb7185" strokeWidth="1" />
      </g>
      {/* Floating particles */}
      {[
        { x: 30, y: 40 },
        { x: 360, y: 60 },
        { x: 50, y: 250 },
        { x: 350, y: 240 },
      ].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="3" fill="#fb7185" opacity="0.6" />
      ))}
    </svg>
  );
}

export const heroByCaseId: Record<string, () => React.JSX.Element> = {
  "tds-telecom": TdsVisual,
  pointclickcare: PointClickCareVisual,
  healthedge: HealthEdgeVisual,
  wipro: WiproVisual,
  aflac: AflacVisual,
};
