import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import NightSky        from './components/NightSky'
import PasscodeScreen  from './components/PasscodeScreen'
import HeroSection     from './components/HeroSection'
import MemoryGallery   from './components/MemoryGallery'
import TimelineSection from './components/TimelineSection'
import LetterSection   from './components/LetterSection'
import TruthsSection   from './components/TruthsSection'
import WishesSection   from './components/WishesSection'
import Footer          from './components/Footer'
import MusicButton     from './components/MusicButton'

export default function App() {
  const [unlocked, setUnlocked] = useState(false)

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Persistent night sky — behind everything */}
      <NightSky />

      <AnimatePresence mode="wait">
        {!unlocked ? (
          <PasscodeScreen key="passcode" onUnlock={() => setUnlocked(true)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0, filter: 'blur(16px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <HeroSection />

            {/* Section divider */}
            <div className="divider" style={{ maxWidth: 600, margin: '0 auto' }} />

            <MemoryGallery />

            <div className="divider" style={{ maxWidth: 600, margin: '0 auto' }} />

            <TimelineSection />

            <div className="divider" style={{ maxWidth: 600, margin: '0 auto' }} />

            <LetterSection />

            <div className="divider" style={{ maxWidth: 600, margin: '0 auto' }} />

            <TruthsSection />

            <div className="divider" style={{ maxWidth: 600, margin: '0 auto' }} />

            <WishesSection />

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>

      {/* Floating music toggle — always visible */}
      <MusicButton />
    </div>
  )
}
