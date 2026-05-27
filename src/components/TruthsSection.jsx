import { motion } from 'framer-motion'
import { TRUTHS } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

const ACCENTS = ['#38bdf8','#c4b5fd','#67e8f9','#93c5fd','#a78bfa','#38bdf8']

export default function TruthsSection() {
  const ref = useScrollReveal(0.1)

  return (
    <section ref={ref} className="section-reveal" style={{ padding: 'clamp(60px, 10vh, 120px) clamp(16px, 4vw, 48px)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vh, 72px)' }}>
          <p className="font-mono" style={{ fontSize: 10, letterSpacing: '0.35em', color: 'rgba(103,232,249,0.5)', textTransform: 'uppercase', marginBottom: 16 }}>
            ✦ &nbsp; things that are true &nbsp; ✦
          </p>
          <h2 className="font-display text-shimmer-sky" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 600 }}>
            About You
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px, 100%), 1fr))',
          gap: 'clamp(12px, 2vw, 18px)',
        }}>
          {TRUTHS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16,1,0.3,1] }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="glass"
              style={{
                borderRadius: 18,
                padding: '22px 22px',
                border: `1px solid ${ACCENTS[i]}20`,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: `linear-gradient(90deg, transparent, ${ACCENTS[i]}60, transparent)`,
              }} />
              <div style={{
                position: 'absolute', inset: 0,
                background: `radial-gradient(ellipse at 50% 0%, ${ACCENTS[i]}08, transparent 65%)`,
                pointerEvents: 'none',
              }} />

              <div style={{ fontSize: 28, marginBottom: 12 }}>{t.icon}</div>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
                fontStyle: 'italic',
                color: 'rgba(255,255,255,0.8)',
                lineHeight: 1.65,
              }}>
                {t.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
