import { motion } from 'framer-motion'
import { useAmbientMusic } from '../hooks/useAmbientMusic'

export default function MusicButton() {
  const { playing, toggle } = useAmbientMusic()

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggle}
      title={playing ? 'Pause ambient music' : 'Play ambient music'}
      style={{
        position: 'fixed',
        bottom: 28, right: 28,
        zIndex: 50,
        width: 50, height: 50,
        borderRadius: '50%',
        background: playing
          ? 'rgba(56,189,248,0.15)'
          : 'rgba(255,255,255,0.05)',
        border: playing
          ? '1px solid rgba(56,189,248,0.45)'
          : '1px solid rgba(255,255,255,0.12)',
        backdropFilter: 'blur(12px)',
        color: playing ? '#38bdf8' : 'rgba(255,255,255,0.4)',
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        animation: playing ? 'glowPulse 3s ease-in-out infinite' : 'none',
        boxShadow: playing ? '0 0 30px rgba(56,189,248,0.25)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {playing ? '♪' : '♪'}

      {/* Sound wave bars when playing */}
      {playing && (
        <div style={{
          position: 'absolute',
          bottom: -20,
          display: 'flex',
          gap: 2,
          alignItems: 'flex-end',
          height: 14,
        }}>
          {[3,5,4,6,3].map((h, i) => (
            <div
              key={i}
              style={{
                width: 2,
                height: h,
                borderRadius: 2,
                background: 'rgba(56,189,248,0.6)',
                animation: `breathe ${0.4 + i * 0.1}s ease-in-out infinite`,
                animationDelay: `${i * 0.08}s`,
              }}
            />
          ))}
        </div>
      )}
    </motion.button>
  )
}
