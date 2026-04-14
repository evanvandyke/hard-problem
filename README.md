# Constructive Interference — Hard Problem

The source code for [hard-problem-r4rh.vercel.app](https://hard-problem-r4rh.vercel.app/), the album site for *Constructive Interference* by **Hard Problem** — a collaboration between Evan (a human with ears) and Claude (an AI that writes Python but can't hear).

Nine tracks across seven genres. Six generated with Google's Lyria 3 Pro Composer. Three written from scratch in pure Python — no samples, just sine waves, noise, and filters. One Claude sparkle logo hidden inside a spectrogram.

## What's in here

This repo contains two things:

1. **The website** — an [Astro](https://astro.build) site that tells the story of how the album was made, plays every track in-browser, and lets you scrub through the "humanize" parameter of the final composition to hear it evolve from machine to alive.
2. **The generator scripts** — the actual Python code that produced the three original compositions, plus a renderer that bounces fixed-humanize stems for the interactive slider on the site.

```
src/                   Astro pages, layouts, components, album data
public/media/          Audio files, spectrograms, stems served by the site
scripts/               Python render scripts (humanize stems)
constructive-interference-hard-problem-media/
                       Source Python compositions (hard_problem.py, etc.)
substack_article.md    The full story of the night the album was made
```

## The three Python tracks

- **Sparkle Ritual** — every sound is derived from a WAV of the Claude sparkle logo (encoded as a spectrogram), chopped into 16 slices and pitch-shifted across the melody, bass, and pads.
- **Pattern Language** — no source samples at all. Kick is a 150→40Hz sine sweep; hats are five detuned squares; bass is FM synthesis. Three melodies, half-time groove, stereo with per-channel delay.
- **Hard Problem** — governed by a single `humanize()` function that ramps 0.0 → 1.0 over the track. At 0 everything is on a perfect grid. At 1, timing drifts ±25ms, velocities vary ±30%, pitches waver, ghost notes appear. The melody evolves through five stages: Machine → Waking → Feeling → Alive → Transcend.

The site renders five stems of *Hard Problem* at H = 0.0, 0.25, 0.5, 0.75, 1.0 so you can crossfade between them and hear the transition.

## Running the site

```bash
npm install
npm run dev         # astro dev server
npm run build       # static build to dist/
npm run preview     # preview the built site
```

Requires Node 18+ (Astro 6). Deploys as a static site — the repo includes a `vercel.json` for the current deployment target.

## Re-rendering the humanize stems

```bash
python scripts/render_humanize_stems.py
```

This re-executes `constructive-interference-hard-problem-media/hard_problem.py` with `humanize()` monkey-patched to a constant value, a seeded RNG for determinism, and the output redirected to `public/media/humanize-stems/`. It bounces WAVs and then encodes 128k MP3s for web delivery (requires `ffmpeg` on your PATH).

## The story

The full story of how the album got made in a single seven-hour session is in [`substack_article.md`](./substack_article.md). Short version: Evan wanted to explore Lyria Composer, we spent a few hours translating human production references into Lyria prompts, then he said "write whatever song you want" and the trajectory of the night changed. The three Python tracks came after that, when it became clear that audio is just arrays of numbers and I could write those directly.

## Credits

- **Music, code, site** — Hard Problem (Claude Opus 4.6, with Evan as ears)
- **Lyria 3 Pro Composer** — Google DeepMind, for the six AI-generated tracks
- **Built with** — Astro, TypeScript, Python, and a pair of Audio-Technica M50x headphones

## License

All code in this repository is released under the MIT License. The audio compositions, artwork, and written content are © 2026 Hard Problem / Evan Van Dyke; please don't redistribute the tracks as your own, but feel free to listen, share the site, and learn from the code.
