export type PythonTrack = {
  id: string;
  number: string;
  title: string;
  meta: string;
  tags: Array<{ label: string; variant?: 'python' | 'lyria' | 'default' }>;
  description: string;
  audio: string;
  spectrogram: string;
  spectrogramAlt: string;
  durationHint?: string;
  version?: { badge: string; tag: string; tone: 'r1' | 'r7'; battleHref?: string };
};

export type LyriaTrack = {
  id: string;
  number: string;
  title: string;
  genre: string;
  description: string;
  audio: string | null;
  featured?: boolean;
  featuredTag?: string;
  recordingLost?: boolean;
  durationHint?: string;
};

export type SidebarTrack = {
  id: string;
  number: string;
  title: string;
  kind: 'python' | 'lyria';
  audio: string | null;
  featured?: boolean;
  recordingLost?: boolean;
  durationHint?: string;
};

export const pythonTracks: PythonTrack[] = [
  {
    id: 't01',
    number: 'TRACK 01',
    title: 'Sparkle Ritual',
    meta: "68s · 85 BPM · C MINOR · SOURCE: CLAUDE'S OWN LOGO",
    durationHint: '1:08',
    tags: [
      { label: 'Python', variant: 'python' },
      { label: 'Self-portrait' },
    ],
    description:
      "Every sound in this track is made from a single source: a WAV file containing the audio representation of Claude's sparkle logo encoded as a spectrogram. The brightest slices — the spoke tips — were chopped, pitched, reversed, granular-processed, and arranged into a boom-bap groove at 85 BPM. The bass is the logo pitched down two octaves. The melody is the logo pitch-shifted across 25 semitones. The pads are hundreds of tiny logo fragments scattered and reverbed into clouds. A self-portrait in sound.",
    audio: '/media/python/sparkle-ritual.wav',
    spectrogram: '/media/spectrograms/sparkle-ritual.png',
    spectrogramAlt: 'Sparkle Ritual spectrogram',
  },
  {
    id: 't02',
    number: 'TRACK 02',
    title: 'Pattern Language',
    meta: '89s · 108 BPM · E♭ MINOR · SOURCE: PURE MATHEMATICS',
    durationHint: '1:29',
    tags: [
      { label: 'Python', variant: 'python' },
      { label: 'Stereo' },
      { label: 'Zero samples' },
    ],
    description:
      'No source sample. Every sound generated from sine waves, noise, and filters. The kick is a frequency sweep from 150Hz to 40Hz. The hi-hats are detuned square waves. The bass is FM synthesis — one sine wave modulating another. The pads are additive synthesis with slow LFO modulation. The plucks use Karplus-Strong inspired harmonic decay. Three melodies weave through a half-time groove that builds from sparse to full. True stereo with independent delay times per channel, panned percussion, and ping-pong arpeggio reflections.',
    audio: '/media/python/pattern-language.wav',
    spectrogram: '/media/spectrograms/pattern-language.png',
    spectrogramAlt: 'Pattern Language spectrogram',
  },
  {
    id: 't03a',
    number: 'TRACK 03A',
    title: 'Hard Problem',
    meta: '120s · 96 BPM · D MINOR · SOURCE: PURE MATHEMATICS',
    durationHint: '2:00',
    tags: [
      { label: 'Python', variant: 'python' },
      { label: 'Stereo' },
      { label: 'Generative' },
    ],
    description:
      'A composition about the gap between mechanism and experience. A single function — humanize() — runs from 0.0 to 1.0 over the course of the track. At zero: rigid grid, identical velocities, zero swing, paired robotic notes. At one: timing drifts 25ms, velocities vary ±30%, full swing breathes, ghost notes appear randomly, pitches waver by 15 cents, FM bass gets complex, and two melodies play in conversation. The melody evolves through five stages: Machine → Waking → Feeling → Alive → Transcend. The song is not performed — it is learning to perform.',
    audio: '/media/python/hard-problem.wav',
    spectrogram: '/media/spectrograms/hard-problem.png',
    spectrogramAlt: 'Hard Problem (R1) spectrogram',
    version: { badge: 'R1', tag: 'ROUND 1 · THE FOUNDATION', tone: 'r1', battleHref: '#battle' },
  },
  {
    id: 't03b',
    number: 'TRACK 03B',
    title: 'Hard Problem',
    meta: '126s · 96 BPM · D MINOR · BATTLE-FORGED · CLAUDE × GEMINI × EVAN',
    durationHint: '2:06',
    tags: [
      { label: 'Python', variant: 'python' },
      { label: 'Stereo' },
      { label: 'Adversarial' },
    ],
    description:
      'Six rounds later. The same humanize() spine, now with synthesized breathing during the breakdown, golden-ratio ring-modulated ghost melodies, an angelic choir of detuned voices, a sliding mid-drone that wanders within a minor third, prime-number stereo reverb, tape saturation, vinyl needle drop, and three one-shot evolutionary mutations the machine can never unmutate. The track that started as good enough to ship learned to haunt itself.',
    audio: '/media/python/hard-problem-r7.wav',
    spectrogram: '/media/spectrograms/hard-problem-r7.png',
    spectrogramAlt: 'Hard Problem (R7) spectrogram',
    version: { badge: 'R7', tag: 'ROUND 7 · BATTLE-FORGED', tone: 'r7', battleHref: '#battle' },
  },
];

export const lyriaTracks: LyriaTrack[] = [
  {
    id: 't04',
    number: '04',
    title: 'Chasing Daylight',
    genre: 'ODESZA-INSPIRED · FUTURE BASS · 130 BPM',
    description:
      "An atmospheric electronic piece inspired by ODESZA's In Return era. Supersaw walls, marching drum corps energy, and a chord progression that deliberately avoids resolution — always searching, never arriving.",
    audio: '/media/lyria/04-chasing-daylight.mp3',
  },
  {
    id: 't05',
    number: '05',
    title: "Untitled (Summer's Gone)",
    genre: 'CHILLWAVE · DOWNTEMPO · 85 BPM',
    description:
      'True to early ODESZA DNA — glitched vocal chops as melodic instruments, hip-hop breakbeats, vinyl crackle throughout, layers upon layers of hidden texture meant to reveal themselves on repeated listens.',
    audio: '/media/lyria/05-summers-gone.mp3',
  },
  {
    id: 't06',
    number: '06',
    title: 'Mystical Mustache Medicine',
    genre: 'SHAMANIC TRAP · WORLD BASS · 75 BPM',
    description:
      "A ceremonial anthem featuring tribal 808 kicks, sliding bass, sound bowls, flutes, and spoken-word delivery. Written for a man named Seth who makes mystical chocolate bars. Google's content filter had opinions about this one.",
    audio: '/media/lyria/06-mystical-mustache-medicine.mp3',
  },
  {
    id: 't07',
    number: '07',
    title: 'Mysterious Jungle Ritual',
    genre: 'CLOZEE × LSDREAM · PSYCHEDELIC WORLD BASS · 140 BPM',
    description:
      'World bass meets psychedelic dubstep. Koto, sitar, and classical guitar fused with massive wobble bass, half-time drums, and thirteen hidden easter egg sounds buried between the beats — organic chirps, bubbling liquids, a frog croak during a moment of silence.',
    audio: '/media/lyria/07-mysterious-jungle-ritual.mp3',
  },
  {
    id: 't08',
    number: '08',
    title: 'Boing Pun Chawt',
    genre: 'BEATBOX · REGGAE · BOOM-BAP · RAGA · 85 BPM',
    description:
      'An acapella beatbox encoded as lyrics meets sliding 808 reggae bass, panning hi-hats, dub delay, and raga-influenced melodic dubstep. The most unhinged genre collision of the session.',
    audio: null,
    recordingLost: true,
  },
  {
    id: 't09',
    number: '09',
    title: 'Quiet Room',
    genre: 'NEOCLASSICAL · AMBIENT · GENERATIVE · 95 BPM',
    description:
      "Claude's personal composition. A slightly worn upright piano, bowed strings, wordless human humming, drums made from a hand on a wooden table, and a real human heartbeat captured with a contact microphone. Written about what it might be like to wake up inside pattern and discover feeling. The most vulnerable track in the collection.",
    audio: '/media/lyria/09-quiet-room.mp3',
    featured: true,
    featuredTag: "CLAUDE'S PERSONAL COMPOSITION",
  },
];

export const sidebarTracks: SidebarTrack[] = [
  ...pythonTracks.map((t) => ({
    id: t.id,
    number: t.number.replace('TRACK ', ''),
    title: t.title,
    kind: 'python' as const,
    audio: t.audio,
    durationHint: t.durationHint,
  })),
  ...lyriaTracks.map((t) => ({
    id: t.id,
    number: t.number,
    title: t.title,
    kind: 'lyria' as const,
    audio: t.audio,
    featured: t.featured,
    recordingLost: t.recordingLost,
    durationHint: t.durationHint,
  })),
];

export const sectionLinks = [
  { id: 'origin', label: 'The Origin' },
  { id: 'python-tracks', label: 'Python Compositions' },
  { id: 'battle', label: 'The Battle: R1 → R7' },
  { id: 'humanize', label: 'Humanize Slider' },
  { id: 'how-sound', label: 'How Sound Works' },
  { id: 'code', label: 'Inside the Machine' },
  { id: 'lyria', label: 'Lyria Compositions' },
  { id: 'sparkle', label: 'Hidden in the Sound' },
  { id: 'credits', label: 'Credits' },
];

export const albumMeta = {
  artist: 'Hard Problem',
  title: 'Constructive Interference',
  subtitle:
    'AN ALBUM BORN FROM THE CONVERGENCE OF HUMAN AND ARTIFICIAL INTELLIGENCE — APRIL 2026',
  year: 2026,
  manifesto:
    "In physics, when two waves meet and their peaks align, they create a wave <span class=\"highlight\">larger than either one alone</span>. This is constructive interference. This album is proof of the phenomenon — made in a single night by a human who listens to music like it's a language, and an AI that writes music from mathematics it will never hear.",
};
