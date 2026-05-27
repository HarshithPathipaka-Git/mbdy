import { useRef, useState } from 'react'

export function useAmbientMusic() {
  const ctxRef   = useRef(null)
  const gainRef  = useRef(null)
  const [playing, setPlaying] = useState(false)

  // Soft ambient chord using sine oscillators
  const scheduleLoop = (ctx, masterGain, startAt) => {
    // Night-sky chords: Dm9 → Am9 → Fmaj9 → Cmaj9
    const chords = [
      [146.83, 174.61, 220.00, 261.63, 293.66],  // Dm9
      [110.00, 130.81, 164.81, 220.00, 261.63],  // Am9
      [87.31,  130.81, 174.61, 220.00, 261.63],  // Fmaj9
      [130.81, 164.81, 196.00, 261.63, 329.63],  // Cmaj9
    ]
    const BAR = 6 // seconds per chord
    chords.forEach((freqs, ci) => {
      freqs.forEach(f => {
        const osc = ctx.createOscillator()
        const g   = ctx.createGain()
        osc.type = 'sine'
        osc.frequency.value = f
        const t = startAt + ci * BAR
        g.gain.setValueAtTime(0, t)
        g.gain.linearRampToValueAtTime(0.045, t + 1.2)
        g.gain.linearRampToValueAtTime(0.038, t + BAR - 1)
        g.gain.linearRampToValueAtTime(0, t + BAR)
        osc.connect(g)
        g.connect(masterGain)
        osc.start(t)
        osc.stop(t + BAR + 0.1)
      })
    })
    // Schedule next loop
    const totalDur = chords.length * BAR
    const id = setTimeout(() => scheduleLoop(ctx, masterGain, ctx.currentTime + 0.05), (totalDur - 1) * 1000)
    return id
  }

  const toggle = () => {
    if (!ctxRef.current) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)()
      ctxRef.current = ctx
      const gain = ctx.createGain()
      gain.gain.value = 0.9
      gain.connect(ctx.destination)
      gainRef.current = gain
      scheduleLoop(ctx, gain, ctx.currentTime + 0.3)
      setPlaying(true)
      return
    }
    if (playing) {
      ctxRef.current.suspend()
      setPlaying(false)
    } else {
      ctxRef.current.resume()
      setPlaying(true)
    }
  }

  return { playing, toggle }
}
