import { motion } from 'framer-motion'
import { TIMELINE } from '../data/content'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function TimelineSection() {
  const ref = useScrollReveal(0.1)

  return (
    <section ref={ref} className="section-reveal" style={{ padding: 'clamp(60px, 10vh, 120px) clamp(16px, 4vw, 48px)' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        {/* Heading */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vh, 72px)' }}>
          <p className="font-mono" style={{ fontSize: 10, letterSpacing: '0.35em', color: 'rgba(196,181,253,0.5)', textTransform: 'uppercase', marginBottom: 16 }}>
            ✦ &nbsp; how we got here &nbsp; ✦
          </p>
          <h2 className="font-display text-shimmer-lav" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)', fontWeight: 600 }}>
            Our Story
          </h2>
        </div>

        {/* Timeline items */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 24,
            top: 0, bottom: 0,
            width: 1,
            background: 'linear-gradient(to bottom, transparent, rgba(196,181,253,0.35), rgba(56,189,248,0.35), transparent)',
          }} />

          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16,1,0.3,1] }}
              style={{ display: 'flex', gap: 28, marginBottom: 40, position: 'relative' }}
            >
              {/* Node */}
              <div style={{
                flexShrink: 0,
                width: 48, height: 48,
                borderRadius: '50%',
                background: 'rgba(7,12,26,0.9)',
                border: `1.5px solid rgba(196,181,253,0.35)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20,
                boxShadow: '0 0 20px rgba(196,181,253,0.15)',
                zIndex: 1,
              }}>
                {item.icon}
              </div>

              {/* Content */}
              <div
                className="glass"
                style={{
                  flex: 1,
                  borderRadius: 16,
                  padding: '16px 20px',
                  border: '1px solid rgba(196,181,253,0.1)',
                }}
              >
                <p className="font-mono" style={{ fontSize: 10, color: 'rgba(196,181,253,0.55)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>
                  {item.label}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 'clamp(0.85rem, 2vw, 0.98rem)', lineHeight: 1.7 }}>
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
