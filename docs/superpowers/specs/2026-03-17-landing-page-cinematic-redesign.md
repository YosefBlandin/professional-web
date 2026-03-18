# Landing Page Cinematic Redesign

## Context

The current landing page feels generic and static — a standard portfolio template with uniform grids and no motion. The goal is to transform it into a cinematic, scroll-driven personal brand experience that feels unique, alive, and impressive. The neon aesthetic (red/purple/green on dark) is kept but refined.

## Approach: Scroll-Driven Cinematic Narrative

The page becomes a 4-scene scroll-driven story. Each scene occupies significant viewport space and transitions smoothly into the next using framer-motion scroll animations and parallax effects.

## Scenes

### Scene 1 — Dramatic Intro (Full Viewport)

- Full `100vh` section, centered content
- Background "ENGINEER" text — large, parallaxes vertically via `useTransform` (moves slower than foreground)
- Subtle animated gradient mesh in background shifting between neon-red and neon-purple (CSS only)
- "Yosef Blandin" enters with letter-by-letter stagger animation (each character fades up from below with slight rotation)
- "Software Engineer" title fades in 300ms after name completes
- No CTA buttons — pure cinematic impact
- Subtle scroll-down indicator (animated chevron) pulses at bottom
- Entire hero content fades out as user scrolls past (opacity tied to scroll progress)

### Scene 2 — Featured Work (Editorial Layout)

- Section header "Selected Work" with gradient dividers, `whileInView` entrance
- Projects presented in alternating left/right editorial layout (no grid)
- Each project takes ~60-80vh of vertical space
- Per project:
  - Large image (~60% width) with subtle vertical parallax (±30px)
  - Title animates in from opposite side of image (large, bold Space Grotesk)
  - Description fades up with 200ms delay after title
  - Tech tags stagger in left to right
  - "View project" link appears last
- Between projects: gradient divider line that draws itself from center outward (animated width 0→100%)
- Alternating pattern: image-left/text-right → image-right/text-left → repeat

### Scene 3 — Social Proof (Testimonial Marquee)

- Full-width section with `bg-card` background
- Section header "What People Say" with neon-purple accent gradient dividers
- Two horizontal marquee rows moving in opposite directions
- Compact testimonial cards: quote, name, title, avatar (no stars, no dates)
- Cards have glassmorphism: `bg-white/5 backdrop-blur-sm border border-white/10`
- Hover: card pauses marquee row, scales up with neon-purple glow
- Marquee uses CSS `@keyframes` for performance (infinite horizontal scroll)
- Section entrance via `framer-motion` `whileInView` fade-up
- Bottom: "Work ethic and commitment" quote + LinkedIn CTA

### Scene 4 — About + Connect (Merged Closing)

- Full viewport section merging About and CTAs
- Profile image enters from left with parallax; gradient glow border animates from opacity 0→0.3 ("powering on")
- Name + bio enters from right (bio tightened for impact)
- Multilingual line (Spanish/English/Chinese) moved here from hero — fits as personal detail
- CTA buttons (LinkedIn, Upwork) with neon glow, stagger reveal after bio
- Closing gradient line across full width: neon-red → neon-purple → neon-green (animated draw)
- Minimal footer: copyright only

## Navigation Updates

- Update nav links to match new section IDs
- Keep sticky header with backdrop blur

## Technical Stack

- **framer-motion**: `useScroll`, `useTransform`, `useInView`, `motion.div`, `variants`, staggered children
- **CSS keyframes**: Marquee animation, gradient mesh background
- **Existing utilities**: `cn()` from `@/lib/utils`, neon glow CSS utilities, existing Button/Card components
- **`prefers-reduced-motion`**: All animations respect existing media query (already in globals.css)

## Files to Modify/Create

- `src/app/page.tsx` — complete rewrite of the landing page
- `src/app/globals.css` — add marquee keyframes, gradient mesh animation
- `src/app/layout.tsx` — update nav links if section IDs change
- New components (in `src/components/`):
  - `AnimatedText.tsx` — letter-by-letter stagger animation (reusable)
  - `ParallaxImage.tsx` — image with scroll-based parallax (reusable)
  - `Marquee.tsx` — infinite horizontal scroll marquee (reusable)
  - `ScrollFadeSection.tsx` — section wrapper with scroll-triggered fade/slide (reusable)
  - `ProjectShowcase.tsx` — editorial project layout (alternating left/right)

## Performance Considerations

- Use `will-change: transform` only on actively animating elements
- Marquee uses CSS animations (no JS frame loop)
- Parallax uses GPU-accelerated `transform: translateY()` only
- Images use Next.js `<Image>` with proper `sizes` and lazy loading
- `framer-motion` lazy viewport detection with `amount: 0.3` threshold
