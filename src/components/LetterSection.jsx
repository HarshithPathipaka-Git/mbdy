import { motion } from 'framer-motion'
import { LETTER, NAME } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function LetterSection() {
  const ref = useScrollReveal(0.1)

  return (
    <section ref={ref} className="section-reveal" style={{ padding: 'clamp(60px, 10vh, 120px) clamp(16px, 4vw, 48px)' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vh, 72px)' }}>
          <p className="font-mono" style={{ fontSize: 10, letterSpacing: '0.35em', color: 'rgba(56,189,248,0.5)', textTransform: 'uppercase', marginBottom: 16 }}>
            ✦ &nbsp; from the heart &nbsp; ✦
          </p>
          <h2 className="font-display text-shimmer-sky" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 600 }}>
            For You, Mallika
          </h2>
        </div>

        {/* Letter box */}
        <div
          className="glass-sky"
          style={{
            borderRadius: 28,
            padding: 'clamp(28px, 5vw, 56px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Top accent line */}
          <div style={{
            position: 'absolute', top: 0, left: '10%', right: '10%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(56,189,248,0.5), rgba(196,181,253,0.4), transparent)',
          }} />

          {/* Ambient glow */}
          <div style={{
            position: 'absolute', top: -40, left: '50%', transform: 'translateX(-50%)',
            width: 300, height: 200,
            background: 'radial-gradient(ellipse, rgba(56,189,248,0.07), transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Opening quote mark */}
          <div
            className="font-display"
            style={{
              fontSize: 120,
              color: 'rgba(56,189,248,0.08)',
              lineHeight: 0.8,
              position: 'absolute',
              top: 12, left: 20,
              fontWeight: 700,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            "
          </div>

          {/* Letter paragraphs */}
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 20 }}>
            {LETTER.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: i * 0.13, ease: [0.16,1,0.3,1] }}
                style={{
                  fontFamily: i === 0 || i === LETTER.length - 1
                    ? "'Cormorant Garamond', Georgia, serif"
                    : "'Nunito', sans-serif",
                  fontSize: i === 0 ? 'clamp(1.3rem, 3vw, 1.7rem)' :
                             i === LETTER.length - 1 ? 'clamp(1.1rem, 2.5vw, 1.4rem)' :
                             'clamp(0.9rem, 2vw, 1.05rem)',
                  fontWeight: i === 0 ? 600 : 400,
                  fontStyle: i === 0 ? 'italic' : 'normal',
                  color: i === 0 ? 'rgba(147,197,253,0.95)' :
                         i === LETTER.length - 1 ? '#67e8f9' :
                         'rgba(255,255,255,0.72)',
                  lineHeight: 1.85,
                  textAlign: i === 0 || i === LETTER.length - 1 ? 'center' : 'left',
                }}
              >
                {para}
              </motion.p>
            ))}
          </div>

          {/* Bottom accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16,1,0.3,1] }}
            style={{
              marginTop: 36,
              height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(196,181,253,0.4), rgba(56,189,248,0.3), transparent)',
              transformOrigin: 'left',
            }}
          />

          <p style={{
            marginTop: 20,
            textAlign: 'right',
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: 'italic',
            fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
            color: 'rgba(196,181,253,0.55)',
          }}>
            — with all of it 🌙
          </p>
        </div>
      </div>
    </section>
  )
}
