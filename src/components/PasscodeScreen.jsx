import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PASSCODE, NAME } from '../data/content'

const KEYS = ['1','2','3','4','5','6','7','8','9','','0','⌫']

export default function PasscodeScreen({ onUnlock }) {
  const [input, setInput]   = useState('')
  const [status, setStatus] = useState('idle') // idle | wrong | success
  const [hint, setHint]     = useState(false)

  const handleKey = useCallback((k) => {
    if (status === 'wrong') return
    if (k === '⌫') { setInput(p => p.slice(0,-1)); return }
    if (!k) return
    if (input.length >= 4) return
    const next = input + k
    setInput(next)

    if (next.length === 4) {
      if (next === PASSCODE) {
        setStatus('success')
        setTimeout(onUnlock, 900)
      } else {
        setStatus('wrong')
        setTimeout(() => { setStatus('idle'); setInput('') }, 900)
      }
    }
  }, [input, status, onUnlock])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(12px)', scale: 1.04 }}
      transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}
      className="min-h-screen flex flex-col items-center justify-center gap-10 px-6 py-12"
    >
      {/* Moon icon */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.9, ease: [0.16,1,0.3,1] }}
        className="flex flex-col items-center gap-4"
      >
        <div className="animate-float" style={{ fontSize: 64, filter: 'drop-shadow(0 0 24px rgba(147,197,253,0.6))' }}>
          🌙
        </div>
        <div className="text-center">
          <p className="font-mono text-xs tracking-[0.35em] text-sky-400/50 uppercase mb-3">
            A surprise for
          </p>
          <h1
            className="font-display text-shimmer-sky"
            style={{ fontSize: 'clamp(2.2rem, 8vw, 4rem)', fontWeight: 300, letterSpacing: '0.04em' }}
          >
            {NAME}
          </h1>
        </div>
        <p
          className="font-mono text-xs tracking-[0.2em] uppercase mt-2"
          style={{ color: 'rgba(147,197,253,0.35)' }}
        >
          Enter passcode to open ✦
        </p>
      </motion.div>

      {/* Dots */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{
          animation: status === 'wrong' ? 'wrongShake 0.5s ease' : undefined,
        }}
        className="flex gap-5 items-center"
      >
        {[0,1,2,3].map(i => (
          <motion.div
            key={i}
            animate={{
              scale: i < input.length ? 1.15 : 1,
              backgroundColor:
                status === 'wrong'   ? '#f472b6' :
                status === 'success' ? '#67e8f9'  :
                i < input.length     ? '#38bdf8'  : 'transparent',
              borderColor:
                status === 'wrong'   ? '#f472b6' :
                status === 'success' ? '#67e8f9'  :
                i < input.length     ? '#38bdf8'  : 'rgba(56,189,248,0.3)',
              boxShadow: i < input.length
                ? status === 'wrong'   ? '0 0 16px rgba(244,114,182,0.7)'
                : status === 'success' ? '0 0 16px rgba(103,232,249,0.7)'
                :                        '0 0 16px rgba(56,189,248,0.7)'
                : 'none',
            }}
            transition={{ duration: 0.2 }}
            style={{
              width: 16, height: 16, borderRadius: '50%',
              border: '1.5px solid rgba(56,189,248,0.3)',
            }}
          />
        ))}
      </motion.div>

      {/* Numpad */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.65, duration: 0.8, ease: [0.16,1,0.3,1] }}
        className="grid gap-3"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)', width: 'min(276px, 84vw)' }}
      >
        {KEYS.map((k, idx) => (
          k === '' ? <div key={idx} /> :
          <motion.button
            key={k + idx}
            whileTap={{ scale: 0.91 }}
            whileHover={{ scale: 1.06 }}
            onClick={() => handleKey(k)}
            className={k === '⌫' ? 'glass' : 'glass'}
            style={{
              height: 62,
              borderRadius: 16,
              border: k === '⌫'
                ? '1px solid rgba(244,114,182,0.2)'
                : '1px solid rgba(56,189,248,0.12)',
              background: k === '⌫'
                ? 'rgba(244,114,182,0.06)'
                : 'rgba(56,189,248,0.05)',
              color: k === '⌫' ? '#f472b6' : 'rgba(255,255,255,0.85)',
              fontSize: k === '⌫' ? 20 : 22,
              fontFamily: k === '⌫' ? 'inherit' : "'DM Mono', monospace",
              fontWeight: 400,
              cursor: 'pointer',
              transition: 'background 0.2s, border-color 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {k}
          </motion.button>
        ))}
      </motion.div>

      {/* Status message */}
      <AnimatePresence mode="wait">
        {status === 'wrong' && (
          <motion.p
            key="wrong"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="font-mono text-xs tracking-widest"
            style={{ color: '#f472b6' }}
          >
            wrong code — try again
          </motion.p>
        )}
        {status === 'success' && (
          <motion.p
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="font-mono text-xs tracking-widest"
            style={{ color: '#67e8f9' }}
          >
            ✦ opening your surprise ✦
          </motion.p>
        )}
      </AnimatePresence>

      {/* Hint toggle */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => setHint(h => !h)}
        style={{
          background: 'none', border: 'none',
          color: 'rgba(147,197,253,0.3)',
          fontSize: 12, letterSpacing: '0.1em',
          cursor: 'pointer', fontFamily: "'Nunito', sans-serif",
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'rgba(147,197,253,0.6)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(147,197,253,0.3)'}
      >
        {hint ? `hint: ${PASSCODE} 🌙` : 'need a hint?'}
      </motion.button>
    </motion.div>
  )
}
