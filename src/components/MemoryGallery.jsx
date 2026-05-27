import { useState } from 'react'
import { motion } from 'framer-motion'
import { MEMORIES } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

function MemoryCard({ mem, index }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16,1,0.3,1] }}
      className="flip-wrap"
      style={{ aspectRatio: '3/4', cursor: 'pointer' }}
      onClick={() => setFlipped(f => !f)}
    >
      <div className={`flip-inner${flipped ? ' ' : ''}`} style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}>

        {/* ── FRONT ── */}
        <div
          className="flip-front"
          style={{
            boxShadow: flipped ? 'none' : `0 8px 40px rgba(0,0,0,0.6), 0 0 60px ${mem.accent}18`,
            border: `1px solid ${mem.accent}25`,
            transition: 'box-shadow 0.4s',
          }}
        >
          {/* Photo */}
          <img
            src={mem.photo}
            alt={mem.title}
            loading="lazy"
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s ease',
            }}
            onMouseEnter={e => { if (!flipped) e.currentTarget.style.transform = 'scale(1.04)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
          />

          {/* Gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: `linear-gradient(to bottom, transparent 35%, rgba(4,6,15,0.75) 70%, rgba(4,6,15,0.95) 100%)`,
          }} />

          {/* Glow top accent */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: `linear-gradient(90deg, transparent, ${mem.accent}, transparent)`,
            opacity: 0.8,
          }} />

          {/* Tag chip */}
          <div style={{
            position: 'absolute', top: 14, left: 14,
            background: 'rgba(4,6,15,0.7)',
            backdropFilter: 'blur(8px)',
            border: `1px solid ${mem.accent}35`,
            borderRadius: 30,
            padding: '4px 12px',
            fontSize: 10,
            color: mem.accent,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: "'DM Mono', monospace",
          }}>
            {mem.tag}
          </div>

          {/* Flip hint */}
          <div style={{
            position: 'absolute', top: 14, right: 14,
            background: 'rgba(4,6,15,0.6)',
            backdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 20,
            padding: '3px 9px',
            fontSize: 9,
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.1em',
            fontFamily: "'DM Mono', monospace",
          }}>
            tap ↺
          </div>

          {/* Bottom text */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 18px' }}>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.92)',
              marginBottom: 4,
              lineHeight: 1.3,
            }}>
              {mem.title}
            </h3>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="flip-back"
          style={{
            background: `linear-gradient(145deg, rgba(7,12,26,0.97) 0%, rgba(4,6,15,0.98) 100%)`,
            border: `1px solid ${mem.accent}35`,
            boxShadow: `0 0 60px ${mem.accent}20`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '28px 22px',
            gap: 16,
          }}
        >
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(ellipse at 50% 30%, ${mem.accent}12, transparent 65%)`,
            pointerEvents: 'none',
          }} />

          <div style={{ fontSize: 44, animation: 'breathe 4s ease-in-out infinite', position: 'relative' }}>
            {mem.back.emoji}
          </div>

          <div style={{
            width: 40, height: 1,
            background: `linear-gradient(90deg, transparent, ${mem.accent}, transparent)`,
          }} />

          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)',
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.75,
            textAlign: 'center',
            position: 'relative',
            maxWidth: 260,
          }}>
            "{mem.back.note}"
          </p>

          <div style={{
            marginTop: 8,
            fontSize: 10,
            color: mem.accent,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            fontFamily: "'DM Mono', monospace",
            opacity: 0.7,
          }}>
            tap to flip back
          </div>
        </div>

      </div>
    </motion.div>
  )
}

export default function MemoryGallery() {
  const ref = useScrollReveal(0.1)

  return (
    <section ref={ref} className="section-reveal" style={{ padding: 'clamp(60px, 10vh, 120px) clamp(16px, 4vw, 48px)', maxWidth: 1200, margin: '0 auto' }}>
      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vh, 72px)' }}>
        <p className="font-mono" style={{ fontSize: 10, letterSpacing: '0.35em', color: 'rgba(103,232,249,0.5)', textTransform: 'uppercase', marginBottom: 16 }}>
          ✦ &nbsp; us &nbsp; ✦
        </p>
        <h2
          className="font-display text-shimmer-sky"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 600, marginBottom: 16 }}
        >
          The Memories We Made
        </h2>
        <p style={{ color: 'rgba(147,197,253,0.45)', fontSize: 'clamp(0.85rem, 2vw, 1rem)', maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
          Through screens and time zones, through voice notes and reels —<br />
          here's what actually mattered.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(220px, 100%), 1fr))',
        gap: 'clamp(12px, 2vw, 20px)',
      }}>
        {MEMORIES.map((mem, i) => (
          <MemoryCard key={mem.id} mem={mem} index={i} />
        ))}
      </div>

      <p style={{ textAlign: 'center', marginTop: 32, fontSize: 11, color: 'rgba(147,197,253,0.3)', letterSpacing: '0.15em', fontFamily: "'DM Mono', monospace" }}>
        tap any card to reveal the memory
      </p>
    </section>
  )
}
