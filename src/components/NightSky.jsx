import { useMemo } from 'react'

const rand = (min, max) => Math.random() * (max - min) + min

export default function NightSky() {
  // Fixed stars — twinkling dots
  const stars = useMemo(() => Array.from({ length: 120 }, (_, i) => ({
    id: i,
    x:    rand(0, 100),
    y:    rand(0, 100),
    size: rand(1, 3.2),
    dur:  rand(2, 6),
    del:  rand(0, 8),
    op:   rand(0.3, 1),
  })), [])

  // Drifting particles
  const particles = useMemo(() => Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x:     rand(0, 100),
    size:  rand(2, 5),
    dur:   rand(18, 40),
    del:   rand(0, 30),
    color: ['rgba(56,189,248,VAL)', 'rgba(196,181,253,VAL)', 'rgba(103,232,249,VAL)', 'rgba(147,197,253,VAL)'][Math.floor(rand(0,4))].replace('VAL', rand(0.3, 0.7).toFixed(2)),
  })), [])

  // Constellation lines (decorative)
  const constellationLines = [
    { x1: 15, y1: 8,  x2: 22, y2: 14 },
    { x1: 22, y1: 14, x2: 18, y2: 22 },
    { x1: 18, y1: 22, x2: 26, y2: 25 },
    { x1: 75, y1: 12, x2: 82, y2: 8  },
    { x1: 82, y1: 8,  x2: 88, y2: 16 },
    { x1: 88, y1: 16, x2: 80, y2: 20 },
  ]

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {/* Deep gradient base */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 80% 50% at 20% 10%, rgba(56,189,248,0.06) 0%, transparent 60%),
          radial-gradient(ellipse 60% 40% at 80% 15%, rgba(196,181,253,0.07) 0%, transparent 55%),
          radial-gradient(ellipse 50% 60% at 50% 80%, rgba(103,232,249,0.04) 0%, transparent 60%)
        `,
      }} />

      {/* Constellation SVG */}
      <svg
        style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity: 0.18 }}
        preserveAspectRatio="none"
      >
        {constellationLines.map((l, i) => (
          <line
            key={i}
            x1={`${l.x1}%`} y1={`${l.y1}%`}
            x2={`${l.x2}%`} y2={`${l.y2}%`}
            stroke="rgba(147,197,253,0.6)"
            strokeWidth="0.5"
            strokeDasharray="3 4"
          />
        ))}
      </svg>

      {/* Fixed twinkling stars */}
      {stars.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top:  `${s.y}%`,
            width:  s.size,
            height: s.size,
            borderRadius: '50%',
            background: s.id % 5 === 0 ? 'rgba(196,181,253,0.9)' :
                        s.id % 3 === 0 ? 'rgba(103,232,249,0.9)' :
                        'rgba(255,255,255,0.9)',
            animation: `twinkle ${s.dur}s ${s.del}s ease-in-out infinite`,
            '--op': s.op,
            boxShadow: s.size > 2.5 ? `0 0 ${s.size*2}px rgba(147,197,253,0.6)` : 'none',
          }}
        />
      ))}

      {/* Drifting glow particles */}
      {particles.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            bottom: '-20px',
            width:  p.size,
            height: p.size,
            borderRadius: '50%',
            background: p.color,
            filter: `blur(${p.size * 0.6}px)`,
            animation: `driftStar ${p.dur}s ${-p.del}s linear infinite`,
            '--s': p.size / 4,
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(56,189,248,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56,189,248,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />
    </div>
  )
}
