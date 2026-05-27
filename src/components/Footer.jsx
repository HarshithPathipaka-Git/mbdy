import { motion } from 'framer-motion'
import { NAME } from '../data/content'

export default function Footer() {
  return (
    <footer style={{ padding: 'clamp(60px, 10vh, 120px) 24px clamp(80px, 12vh, 140px)', textAlign: 'center', position: 'relative' }}>
      <div className="divider" style={{ marginBottom: 64 }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16,1,0.3,1] }}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}
      >
        {/* Moon */}
        <div
          className="animate-float-slow"
          style={{ fontSize: 52, filter: 'drop-shadow(0 0 30px rgba(147,197,253,0.5))', marginBottom: 8 }}
        >
          🌙
        </div>

        <h2
          className="font-display text-shimmer-sky"
          style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 300, fontStyle: 'italic' }}
        >
          Happy Birthday, {NAME}
        </h2>

        <p style={{
          fontFamily: "'Nunito', sans-serif",
          color: 'rgba(147,197,253,0.45)',
          fontSize: 'clamp(0.85rem, 2vw, 1rem)',
          maxWidth: 420,
          lineHeight: 1.75,
        }}>
          The distance never mattered.<br />
          You've always been right here.
        </p>

        <div style={{
          marginTop: 20,
          fontFamily: "'DM Mono', monospace",
          fontSize: 10,
          letterSpacing: '0.3em',
          color: 'rgba(56,189,248,0.25)',
          textTransform: 'uppercase',
        }}>
          ✦ &nbsp; made with care &nbsp; ✦
        </div>
      </motion.div>
    </footer>
  )
}
