import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WISHES } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

function fireConfetti() {
  // Dynamically import canvas-confetti
  import('canvas-confetti').then(({ default: confetti }) => {
    const colors = ['#38bdf8', '#c4b5fd', '#67e8f9', '#93c5fd', '#a78bfa', '#ffffff', '#fde68a']
    const base = { particleCount: 60, spread: 80, colors, origin: { y: 0.65 } }
    confetti({ ...base, angle: 60,  origin: { x: 0.1, y: 0.65 } })
    confetti({ ...base, angle: 90,  origin: { x: 0.5, y: 0.55 } })
    confetti({ ...base, angle: 120, origin: { x: 0.9, y: 0.65 } })
    setTimeout(() => {
      confetti({ particleCount: 80, spread: 120, colors, origin: { x: 0.5, y: 0.4 }, startVelocity: 40 })
    }, 400)
    setTimeout(() => {
      confetti({ particleCount: 50, spread: 160, colors, origin: { x: 0.3, y: 0.3 }, startVelocity: 30 })
      confetti({ particleCount: 50, spread: 160, colors, origin: { x: 0.7, y: 0.3 }, startVelocity: 30 })
    }, 800)
  })
}

export default function WishesSection() {
  const [revealed, setRevealed] = useState([])
  const [done, setDone] = useState(false)
  const ref = useScrollReveal(0.1)

  const revealNext = useCallback(() => {
    if (done || revealed.length >= WISHES.length) return
    const next = [...revealed, revealed.length]
    setRevealed(next)
    if (next.length === WISHES.length) {
      setDone(true)
      setTimeout(fireConfetti, 300)
    }
  }, [revealed, done])

  return (
    <section ref={ref} className="section-reveal" style={{ padding: 'clamp(60px, 10vh, 120px) clamp(16px, 4vw, 48px)' }}>
      <div style={{ maxWidth: 640, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vh, 72px)' }}>
          <p className="font-mono" style={{ fontSize: 10, letterSpacing: '0.35em', color: 'rgba(56,189,248,0.5)', textTransform: 'uppercase', marginBottom: 16 }}>
            ✦ &nbsp; birthday wishes &nbsp; ✦
          </p>
          <h2 className="font-display text-shimmer-moon" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 600 }}>
            For This Year
          </h2>
          <p style={{ marginTop: 12, color: 'rgba(147,197,253,0.4)', fontSize: 'clamp(0.8rem, 1.8vw, 0.92rem)' }}>
            unlock them one by one ↓
          </p>
        </div>

        {/* Wish cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 40 }}>
          {WISHES.map((w, i) => {
            const isRevealed = revealed.includes(i)
            const isNext = i === revealed.length && !done
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => isNext && revealNext()}
                style={{
                  borderRadius: 16,
                  padding: '18px 22px',
                  background: isRevealed ? 'rgba(56,189,248,0.07)' : 'rgba(255,255,255,0.025)',
                  border: `1px solid ${isRevealed ? 'rgba(56,189,248,0.28)' : 'rgba(255,255,255,0.06)'}`,
                  cursor: isNext ? 'pointer' : 'default',
                  filter: isRevealed ? 'none' : 'blur(4px)',
                  transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
                  boxShadow: isRevealed ? '0 4px 30px rgba(56,189,248,0.08)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  userSelect: 'none',
                }}
              >
                <AnimatePresence mode="wait">
                  {isRevealed ? (
                    <motion.div
                      key="revealed"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      style={{ fontSize: 26, flexShrink: 0 }}
                    >
                      {w.icon}
                    </motion.div>
                  ) : (
                    <div style={{ width: 26, height: 26, borderRadius: '50%', background: 'rgba(255,255,255,0.06)', flexShrink: 0 }} />
                  )}
                </AnimatePresence>

                <div style={{ flex: 1 }}>
                  {isRevealed ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', color: 'rgba(147,197,253,0.95)', marginBottom: 4 }}>
                        {w.title}
                      </p>
                      <p style={{ fontSize: 'clamp(0.82rem, 1.8vw, 0.95rem)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>
                        {w.text}
                      </p>
                    </motion.div>
                  ) : (
                    <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.15)', letterSpacing: '0.15em', fontFamily: "'DM Mono', monospace" }}>
                      {isNext ? '✦ tap to reveal ✦' : '· · ·'}
                    </p>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Reveal button */}
        <AnimatePresence>
          {!done && (
            <motion.div exit={{ opacity: 0, y: -10 }} style={{ textAlign: 'center' }}>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={revealNext}
                className="glass-sky"
                style={{
                  borderRadius: 50,
                  padding: '14px 40px',
                  fontSize: 13,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#38bdf8',
                  border: '1px solid rgba(56,189,248,0.35)',
                  cursor: 'pointer',
                  fontFamily: "'DM Mono', monospace",
                  transition: 'box-shadow 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(56,189,248,0.25)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                Reveal wish {revealed.length + 1} of {WISHES.length}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Done state */}
        <AnimatePresence>
          {done && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
              style={{ textAlign: 'center', marginTop: 16 }}
            >
              <div style={{ fontSize: 48, marginBottom: 12, animation: 'breathe 2s ease-in-out infinite' }}>🌙</div>
              <p className="font-display text-shimmer-sky" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', fontWeight: 600, marginBottom: 8 }}>
                All wishes sent to the universe ✦
              </p>
              <p style={{ color: 'rgba(147,197,253,0.45)', fontSize: 14 }}>
                May every single one of them come true.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
