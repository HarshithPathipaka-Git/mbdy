import { motion } from 'framer-motion'
import { NAME } from '../data/content'

const word = (text, delay) => (
  <motion.span
    style={{ display: 'inline-block', marginRight: '0.28em' }}
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {text}
  </motion.span>
)

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(80px, 12vh, 140px) 24px clamp(60px, 8vh, 100px)',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Ambient glow behind heading */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '40%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 'min(700px, 90vw)',
          height: 'min(700px, 90vw)',
          background: 'radial-gradient(ellipse, rgba(56,189,248,0.07) 0%, rgba(196,181,253,0.05) 40%, transparent 70%)',
          pointerEvents: 'none',
          animation: 'breathe 6s ease-in-out infinite',
        }}
      />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, letterSpacing: '0.1em' }}
        animate={{ opacity: 1, letterSpacing: '0.4em' }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="font-mono"
        style={{
          fontSize: 10,
          color: 'rgba(103,232,249,0.55)',
          textTransform: 'uppercase',
          marginBottom: 32,
        }}
      >
        ✦ &nbsp; made with care, for you &nbsp; ✦
      </motion.p>

      {/* Happy */}
      <div
        className="font-display"
        style={{ fontSize: 'clamp(1.2rem, 5vw, 2.2rem)', fontWeight: 300, color: 'rgba(147,197,253,0.65)', letterSpacing: '0.35em', marginBottom: 8, textTransform: 'uppercase' }}
      >
        {word('Happy', 0.4)}
      </div>

      {/* BIRTHDAY — main */}
      <h1
        className="font-display text-shimmer-sky"
        style={{
          fontSize: 'clamp(3.5rem, 15vw, 10rem)',
          fontWeight: 700,
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          margin: '8px 0 16px',
        }}
      >
        {word('Birthday', 0.6)}
      </h1>

      {/* Name */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.0, ease: [0.16,1,0.3,1] }}
        className="font-display text-shimmer-lav"
        style={{
          fontSize: 'clamp(2rem, 8vw, 5rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          letterSpacing: '0.06em',
          marginBottom: 40,
        }}
      >
        {NAME}
      </motion.h2>

      {/* Divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.3, ease: [0.16,1,0.3,1] }}
        className="divider"
        style={{ width: 'min(320px, 70vw)', marginBottom: 40 }}
      />

      {/* Sub-tagline */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.6 }}
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)',
          color: 'rgba(147,197,253,0.5)',
          maxWidth: 480,
          lineHeight: 1.7,
          letterSpacing: '0.02em',
        }}
      >
        For the person who turned late-night conversations<br />
        into something I didn't know I needed.
      </motion.p>

      {/* Floating cards preview hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="animate-float"
        style={{ marginTop: 64, color: 'rgba(56,189,248,0.25)', fontSize: 12, letterSpacing: '0.15em' }}
      >
        scroll &nbsp; ↓
      </motion.div>

      {/* Decorative orbiting glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: 8, height: 8,
          borderRadius: '50%',
          background: 'rgba(103,232,249,0.8)',
          boxShadow: '0 0 20px rgba(103,232,249,0.8)',
          animation: 'orbitSlow 18s linear infinite',
          pointerEvents: 'none',
        }}
      />
    </section>
  )
}
