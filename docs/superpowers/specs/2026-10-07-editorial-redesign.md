# Editorial redesign: implementation plan

- **Status:** ready to build
- **Date:** 2026-10-07
- **Source of truth:** the approved prototype at https://claude.ai/artifact/U91brSSoLf4hnjMHepZYeU (the navy version, 1791402104-f46d). Copy, structure, tokens and behaviour come from it. Where this plan and the prototype disagree, the prototype wins.
- **Supersedes:** `2026-03-17-landing-page-cinematic-redesign.md`.

## Why

The current site is a dark neon page and no longer matches the CV:
- It says "4+ years" and positions Yosef as a frontend-only engineer.
- AIDONIC, GitHub and any measurable outcomes are missing.
- There's no contact path, and "See all projects" goes nowhere.

The redesign:
- repositions Yosef as a **Mobile & Frontend Engineer in fintech**
- makes **email** the primary call to action
- shows **six case studies with real screenshots**
- adds an experience timeline and skills from the CV
- follows WCAG AA accessibility in light and dark themes

## Decisions already made

- **Look:** warm off-white paper with **navy** for structure (text, primary buttons, the contact band and footer) and **burgundy** only for emphasis (italics, links, figures), plus a navy dark theme.
- **Fonts:**
  - Source Serif 4 (variable, optical sizing) for display text, at weight 500 and letter-spacing −0.02em.
  - Inter Tight for body text.
  - JetBrains Mono for labels and tags.
- **Languages:** Spanish and English only. No Chinese characters or Mandarin anywhere.
- **Case studies, in order:**
  1. AIDONIC
  2. Bangente
  3. Smart Compliance
  4. Filtration Advice
  5. Turpial / Growth Road
  6. Wingoo
  - FA and Growth Road come back, with real screenshots. Zumetrics is dropped.
- **Media:**
  - AIDONIC is the only project without a screenshot. It uses the "receipt slip" summary card.
  - All others use their real screenshots: `bangente2.png`, `monitoring_app.png`, `filtrationadvice.png`, `growthroad.png`, `wingoo.png`.
- **Contact:**
  - Publish `yosefleanb@gmail.com`. Never publish the phone number.
  - The CV links to LinkedIn until there's a PDF without the phone number.

## Branch and setup

- Merge PR #2 (the yarn 1 lockfile fix) first, so Cloudflare builds pass.
- Then create a worktree for the work:
  ```
  git -C ~/projects/professional-web worktree add --no-track -b feat/editorial-redesign .claude/worktrees/editorial-redesign origin/main
  ```
- Toolchain: yarn 1.22.22 on Node 24.21.

## Architecture

```
src/
  app/
    layout.tsx                  fonts, metadata, theme init script, header/footer
    page.tsx                    home: hero → proof → work → experience → skills → testimonials → about → contact
    work/[slug]/page.tsx        full case-study page (SEO, shareable, direct loads)
    @modal/(.)work/[slug]/page.tsx   intercepted route: same study in a dialog when clicked from home
    @modal/default.tsx          returns null
    opengraph-image.tsx         1200×630 OG card: name, title, portrait
    sitemap.ts, robots.ts
    globals.css                 tokens + base styles (replaces the neon theme)
  content/                      typed content, the single source for copy
    profile.ts                  name, title, summary, email, links, languages, education
    projects.ts                 6 case studies (slug, company, period, title, problem, outcomes, tags, link, image | slip, study sections)
    experience.ts               5 roles
    skills.ts                   6 groups
    testimonials.ts             7 quotes (moved from src/mock/testimonialsMock.ts)
  components/
    site/Header.tsx (client: sticky border, mobile menu)   site/Footer.tsx
    site/ThemeToggle.tsx (client)                           site/Reveal.tsx (client, IntersectionObserver)
    home/Hero.tsx  home/ProofStrip.tsx  home/CaseCard.tsx  home/Slip.tsx
    home/Timeline.tsx  home/Skills.tsx  home/Testimonials.tsx (+ QuoteCard client: Read more)
    home/About.tsx  home/Contact.tsx (+ ContactForm client)
    study/CaseStudy.tsx         shared body used by the page and the modal
    study/StudyModal.tsx        client: Radix Dialog wrapper, router.back() on close
  actions/sendEmail.ts          working Resend action
  schemas/sendEmailSchema.ts    keep; add an optional honeypot field
```

### Content model (`src/content/projects.ts`)

```ts
type Project = {
  slug: 'aidonic' | 'bangente' | 'smart-compliance' | 'filtration-advice' | 'turpial' | 'wingoo';
  company: string; period: string;          // "Oct 2025 – Present" | "Client project"
  title: string; problem: string;
  outcomes: [string, string, string];
  tags: string[];
  link?: { href: string; label: string };   // "Google Play", "Visit site", "Growth Road"
  media: { kind: 'image'; src: StaticImageData; alt: string }
       | { kind: 'slip'; figure: string; caption: string; rows: [string, string][] };
  study: { intro: string; sections: { heading: string; items: string[] }[] };
};
```

- Copy all text exactly from the prototype, including the `<template id="s-…">` blocks for the `study` content.
- This replaces `src/mock/projectsMock.ts` and its HTML `post` strings, so `html-react-parser` and its `dangerouslySetInnerHTML`-style rendering go away.

## Styling

- **Replace `globals.css` tokens** with the prototype's tokens:
  - Colours: `--paper`, `--paper-2`, `--ink`, `--muted`, `--line`, `--accent`, `--accent-fill`, `--fill-hover`, `--accent-ink`, `--fill-hover-ink`, `--accent-soft`, `--accent-inverse`, `--danger`, `--shadow`.
  - Type steps `--step-0…4`, `--wrap`, `--gutter`, `--radius`.
  - The dark palette, in the same three-block pattern:
    - `:root` holds the light values.
    - `@media (prefers-color-scheme: dark) :root:not([data-theme=light])` holds the dark values.
    - `:root[data-theme=dark]` repeats the dark values.
- **Map them into Tailwind v4** `@theme inline` (`--color-paper: var(--paper)`, and so on).
  - Re-point the shadcn tokens (`--background`, `--foreground`, `--primary`, `--border`, `--ring`, …) at the new palette so `ui/*` keeps working.
  - Delete the neon tokens, glow variables and `neon-*` utilities.
  - **As built:** shadcn `ui/*`, `cva`, `clsx`, `tailwind-merge`, `lucide-react` and `components.json` were removed. Nothing used them once the prototype's `.btn` styles and a direct Radix Dialog replaced them.
- **Fonts through `next/font/google`:**
  - `Source_Serif_4({ subsets: ['latin'], style: ['normal','italic'], axes: ['opsz'], variable: '--font-display' })`
  - `Inter_Tight` → `--font-body`
  - `JetBrains_Mono` → `--font-mono`
  - Remove Geist and Space Grotesk.
- **Port component CSS** as Tailwind classes, or as a small `@layer components` block for the few complex pieces (slip, quote clamp, arch frame).
- **Keep the prototype's breakpoints:** 860px and 760px, plus 520px for skills.
- **Theme without a flash:** an inline `<script>` in `<head>` reads `localStorage['yb-theme']` (inside try/catch) and sets `data-theme` before paint. `<html suppressHydrationWarning>`. No new dependency is needed.

## Behaviour

- **Case study.**
  - Clicking "Read case study" on home goes to `/work/[slug]`. The intercepting route renders it in a Radix Dialog over the home page.
  - Closing (Esc, the X, or the backdrop) calls `router.back()`, and focus returns to the trigger.
  - A direct load or refresh renders the full page with "← All work".
  - Old URLs `/{1..6}` redirect permanently (`next.config.ts` `redirects()`): 1→bangente, 2→smart-compliance, 3→filtration-advice, 4→wingoo, 5→turpial. 6 (Zumetrics) goes to `/#work`.
- **Reveal.**
  - `<Reveal>` adds `.in` with an IntersectionObserver only for elements below the fold. Content is always visible at rest.
  - Disabled under `prefers-reduced-motion`.
  - **Remove `framer-motion`**, along with `AnimatedText`, `FloatingCharacters`, `Marquee`, `ParallaxImage`, `ScrollFadeSection`, `ProjectShowcase` and `scenes/*`.
- **Testimonials.**
  - A CSS-columns masonry layout. A client `QuoteCard` measures the clamped text and shows "Read more" / "Show less" (`aria-expanded`) only when the text overflows.
  - The Spanish quote keeps `lang="es"`.
- **Contact.**
  - `ContactForm` uses react-hook-form with `zodResolver(sendEmailSchema)` and inline errors (`aria-invalid`, `aria-describedby`).
  - The `sendEmail` server action:
    - validates again with zod
    - drops honeypot hits
    - calls `resend.emails.send({ from: 'Portfolio <contact@<verified-domain>>', to: 'yosefleanb@gmail.com', replyTo: values.email, subject, text })`
    - returns `{ ok }` or `{ error }`
  - The visitor's address goes in `replyTo`, never in `from`.
  - Success shows "Message sent. I'll reply within one working day." Failure shows the email address with a Copy button.
  - The email address is always visible as selectable text with a Copy button (clipboard, with a select fallback).
  - Read `RESEND_API_KEY` from the environment. Never log message bodies or addresses.
- **Header.**
  - Sticky with a backdrop blur. A hairline appears after 8px of scroll.
  - Below 860px, a menu button (`aria-expanded`, `aria-controls`) toggles the nav. Esc closes it and returns focus.

## Assets

- **Portrait:** `src/assets/yosef-portrait.jpg`, from the 824×1456 original. Render it with `next/image` `priority`, `sizes="(max-width: 760px) 320px, 440px"`, `object-position: 50% 28%`, inside the 4:5 arch frame. Delete `yosef.jpg`.
- **Screenshots:** keep the PNGs in `src/assets/`. `next/image` handles format and sizing, with `sizes="(max-width: 860px) 100vw, 640px"` and `object-position: top left`.
- **Delete unused files:** `zumetrics.png`, `siacharts.png`, `heap_map_chart_sia.png`, `nav_bar_sia.png`, `areas_responsibles_sia.png`, `react.svg`, `icons/linkedin-icon.svg`, and the Next starter SVGs in `public/`.

## SEO

- **`metadata`:**
  - title "Yosef Blandin | Mobile & Frontend Engineer"
  - a description built from the CV summary (5+ years, React / React Native / Next.js / TypeScript, payments and banking)
  - `metadataBase`, OG and Twitter cards
  - Remove the duplicate `generateMetadata` in `page.tsx`.
- **JSON-LD `Person`:** name, jobTitle, email, and `sameAs` links to LinkedIn, GitHub and Upwork.
- **Per-study metadata:** `generateMetadata` on `/work/[slug]`, plus `generateStaticParams`.
- **`sitemap.ts`** listing home and the 6 studies, and **`robots.ts`**.

## Steps, in order (one commit each)

1. Tokens, fonts and the theme init script. Restyle the shadcn `button`. Delete neon CSS.
2. The `src/content/*` data modules with the exact prototype copy. Delete `src/mock/*`.
3. Site shell: Header, ThemeToggle, Footer, Reveal, skip link.
4. Home sections: Hero, ProofStrip, CaseCard and Slip, Timeline, Skills, Testimonials, About.
5. Case study page, intercepted modal and redirects.
6. Contact form and Resend action.
7. SEO: metadata, OG image, JSON-LD, sitemap and robots.
8. Cleanup: remove framer-motion, html-react-parser, unused components and assets. Run `yarn install` so `yarn.lock` updates.

## Verification

- `yarn lint`, `yarn build` and `yarn install --frozen-lockfile` all pass. The production build has no type errors.
- `yarn dev`, checked at 375, 768 and 1280px in light, dark and system themes:
  - no horizontal scroll
  - no theme flash on reload
  - the portrait crop looks right
- Keyboard only: skip link, menu, theme toggle, case-study modal (Esc, returning focus, back button), form errors, Read more.
- Lighthouse via the Chrome DevTools MCP on the production build: Performance ≥ 95, Accessibility 100, Best Practices 100, SEO 100. LCP is the portrait.
- With reduced motion on, no animation plays.
- Links resolve: Google Play, Smart Compliance, Filtration Advice, Growth Road, Wingoo, LinkedIn, GitHub, Upwork.
- `/1`…`/6` redirect correctly.
- A test send through Resend reaches the inbox, and Reply goes to the visitor's address.
- A Cloudflare preview deploy of the branch builds and serves the server action. Open a draft PR to `main`.

## Open items

1. **Cloudflare.** `main` now has the OpenNext adapter and `wrangler.jsonc`. Still to set on the Worker: the `RESEND_API_KEY` secret, `CONTACT_FROM_EMAIL` once a domain is verified, and `NEXT_PUBLIC_SITE_URL` (canonical URLs, sitemap and OG fall back to `http://localhost:3000` without it). To discuss after the build.
2. **Resend sending domain.** A verified domain is needed for the `from` address.
3. **CV PDF.** A version without the phone number is needed to add a Download CV link.
4. **AIDONIC screenshot:** not available for now, so the slip stays.
5. **Filtration Advice dates.** The CV doesn't list them, so the card says "Client project". Add dates if known.
