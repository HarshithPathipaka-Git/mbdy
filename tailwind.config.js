/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"Nunito"', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      colors: {
        night:  { 950:'#04060f', 900:'#070c1a', 800:'#0c1428', 700:'#101c38', 600:'#162448' },
        sky:    { 100:'#e0f2fe', 200:'#bae6fd', 300:'#7dd3fc', 400:'#38bdf8', 500:'#0ea5e9', glow:'rgba(56,189,248,0.18)' },
        moon:   { 100:'#f0f9ff', 200:'#dbeafe', 300:'#93c5fd', 400:'#60a5fa' },
        cyan:   { soft:'rgba(103,232,249,0.12)', glow:'rgba(103,232,249,0.25)' },
        lav:    { DEFAULT:'#c4b5fd', soft:'rgba(196,181,253,0.15)', glow:'rgba(196,181,253,0.3)' },
        star:   '#fffbeb',
      },
      animation: {
        'drift':        'drift var(--dur, 25s) linear infinite',
        'twinkle':      'twinkle var(--delay, 3s) ease-in-out infinite',
        'float':        'float 7s ease-in-out infinite',
        'float-slow':   'float 12s ease-in-out infinite',
        'shimmer':      'shimmer 5s linear infinite',
        'glow-pulse':   'glowPulse 4s ease-in-out infinite',
        'slide-up':     'slideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':      'fadeIn 1.2s ease forwards',
        'scale-in':     'scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'breathe':      'breathe 5s ease-in-out infinite',
      },
      keyframes: {
        drift:      { from:{ transform:'translateY(110vh) translateX(0) rotate(0deg)' }, to:{ transform:'translateY(-10vh) translateX(30px) rotate(360deg)' } },
        twinkle:    { '0%,100%':{ opacity:'0.15', transform:'scale(0.6)' }, '50%':{ opacity:'1', transform:'scale(1.4)' } },
        float:      { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-16px)' } },
        shimmer:    { '0%':{ backgroundPosition:'-200% center' }, '100%':{ backgroundPosition:'200% center' } },
        glowPulse:  { '0%,100%':{ opacity:'0.6' }, '50%':{ opacity:'1' } },
        slideUp:    { from:{ opacity:'0', transform:'translateY(60px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        fadeIn:     { from:{ opacity:'0' }, to:{ opacity:'1' } },
        scaleIn:    { from:{ opacity:'0', transform:'scale(0.88)' }, to:{ opacity:'1', transform:'scale(1)' } },
        breathe:    { '0%,100%':{ transform:'scale(1)', opacity:'0.7' }, '50%':{ transform:'scale(1.06)', opacity:'1' } },
      },
    },
  },
  plugins: [],
}
