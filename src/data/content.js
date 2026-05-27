// ─────────────────────────────────────────────────────────────────
//  CONTENT FILE — edit everything here to personalise the site
// ─────────────────────────────────────────────────────────────────

export const PASSCODE = '1234'   // ← change to your secret code

export const NAME = 'Mallika'

// ── Memory Cards ─────────────────────────────────────────────────
// Replace `photo` with real image URLs or local paths like '/photos/1.jpg'
// The back.note is what shows when the card flips
export const MEMORIES = [
  {
    id: 1,
    photo: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&q=80',
    tag: '2:47 AM',
    title: 'The Night We Didn\'t Sleep',
    back: {
      emoji: '🌙',
      note: 'That one night we said "ok goodnight" like 6 times and kept talking till 3am. Neither of us regrets it.',
    },
    accent: '#38bdf8',
  },
  {
    id: 2,
    photo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    tag: 'daily chaos',
    title: 'The Reel Dump Era',
    back: {
      emoji: '😂',
      note: 'You send me at least 4 reels a day. I watch all of them. I would never admit that out loud though.',
    },
    accent: '#c4b5fd',
  },
  {
    id: 3,
    photo: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=600&q=80',
    tag: 'the fights',
    title: 'When We Argued About Nothing',
    back: {
      emoji: '🙄',
      note: 'We fought so hard over something so stupid. Then made up in 20 minutes. That\'s just how we work.',
    },
    accent: '#f472b6',
  },
  {
    id: 4,
    photo: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&q=80',
    tag: 'on bad days',
    title: 'You Just Knew',
    back: {
      emoji: '🫂',
      note: 'Some days I didn\'t say anything was wrong. You knew anyway. You always checked. That means more than you realise.',
    },
    accent: '#67e8f9',
  },
  {
    id: 5,
    photo: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=600&q=80',
    tag: 'voice notes',
    title: 'The Long Voice Notes Era',
    back: {
      emoji: '🎙️',
      note: 'Your 7-minute voice notes are a feature, not a bug. I have never once skipped them.',
    },
    accent: '#a78bfa',
  },
  {
    id: 6,
    photo: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=600&q=80',
    tag: 'always',
    title: 'When Everything Was Heavy',
    back: {
      emoji: '💙',
      note: 'You showed up for me in ways that mattered. Not with big speeches — just quietly being there. That\'s the whole thing.',
    },
    accent: '#38bdf8',
  },
]

// ── Timeline ─────────────────────────────────────────────────────
export const TIMELINE = [
  {
    label: 'The First Hi',
    text: 'A random message that didn\'t feel random at all. Something just clicked.',
    icon: '👋',
  },
  {
    label: 'Daily Chats',
    text: 'Suddenly there was someone to tell everything to. Every dumb thing. Every real thing.',
    icon: '💬',
  },
  {
    label: 'The Late Nights',
    text: '2am conversations that went places normal conversations don\'t. You became safe.',
    icon: '🌙',
  },
  {
    label: 'The Fights',
    text: 'We fought. We came back. That\'s when it became something real.',
    icon: '⚡',
  },
  {
    label: 'The Support',
    text: 'Hard weeks, harder days — and you were always there. Quietly, consistently, always.',
    icon: '🫂',
  },
  {
    label: 'Right Now',
    text: 'Here. This moment. A friendship that crossed every distance and earned every bit of itself.',
    icon: '🌟',
  },
]

// ── Birthday Wishes ───────────────────────────────────────────────
export const WISHES = [
  {
    icon: '🌙',
    title: 'Peace',
    text: 'May this year bring you the kind of quiet that actually feels like rest.',
  },
  {
    icon: '✨',
    title: 'Recognition',
    text: 'May the world finally see you the way everyone who knows you already does.',
  },
  {
    icon: '💙',
    title: 'Ease',
    text: 'May things stop being so hard for a while. You\'ve earned some lightness.',
  },
  {
    icon: '🌊',
    title: 'Joy',
    text: 'Not the performative kind — the real kind. The kind that shows up in ordinary moments.',
  },
  {
    icon: '🔮',
    title: 'The Good Stuff',
    text: 'Every single thing you\'ve been quietly hoping for — may it find its way to you.',
  },
]

// ── Letter from the writer ───────────────────────────────────────
export const LETTER = [
  'Mallika.',
  'I don\'t know how to explain what this friendship is without underselling it.',
  'You came into my life through a screen, through messages, through late nights — and somehow you became one of the most real people in it.',
  'You have this thing where you say exactly what someone needs to hear, at exactly the right time. You probably don\'t notice it. But everyone around you does.',
  'You\'ve shown up for me. Consistently. Without making it a thing. That\'s rarer than you know.',
  'On your birthday — I just want you to feel what it\'s like to be on the receiving end of that. To feel seen. To feel celebrated. To know that you matter.',
  'You do. You really, genuinely do.',
  'Happy Birthday. 🌙',
]

// ── Truths (small affirmation cards) ───────────────────────────
export const TRUTHS = [
  { icon: '🌙', text: 'Your 2am presence has been a gift.' },
  { icon: '💬', text: 'You make even boring days feel like something.' },
  { icon: '🫂', text: 'You check on people even when you\'re struggling yourself.' },
  { icon: '😂', text: 'You are genuinely, effortlessly funny.' },
  { icon: '🔥', text: 'Your opinions are always worth hearing, even when they\'re wrong.' },
  { icon: '💙', text: 'Knowing you has made me better at this whole being-human thing.' },
]
