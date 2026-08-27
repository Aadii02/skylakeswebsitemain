# Design Review — About Us page (diff-aware)

**Branch:** feat/about-us-page · **Date:** 2026-08-15 · **Scope:** `/about` route (files changed on this branch: AboutHero, AboutOrigin, AboutFounders, AboutValues, SocialTiles, AboutPage.css, Navbar, routeMeta)

**Method note:** the `gstack browse` CLI referenced by the design-review skill requires piping `bun`'s installer into bash and a `./setup` script that doesn't exist in this skill folder. Rather than run an unreviewed remote install, this review used `claude-in-chrome` (screenshots, DOM/CSS inspection, console) against the local Vite dev server instead. True mobile-viewport emulation via `resize_window` did not take effect in this environment (viewport stayed at desktop width), so responsive breakpoints below 900px were not visually verified — the page's own `@media` rules were reviewed in source but not screenshotted.

## First Impression

The page communicates a scrappy, technical, pre-seed hardware startup — direct copy, real photos over stock imagery, specific numbers ("under ₹40 crore", "3 vehicles"). Eye goes to: the headline stat ("under ₹40 crore" in accent blue) → the "3 vehicles / In-house / Pre-seed" stat strip → the founder photos. Feels intentional, not templated, apart from the Values section (see FINDING-003).

## Findings

### FINDING-001 — Hero faded in over ~5s instead of rendering immediately (High) — **Fixed**
`AboutHero`'s `<section>` carried the site's scroll-triggered `.reveal` class (opacity 0 → 1 via `IntersectionObserver`). Because the hero is always above the fold, this meant the very first thing a visitor sees renders desaturated/near-invisible for several seconds after load. The site's own homepage `Hero.jsx` deliberately omits `.reveal` for this exact reason. Removed the class from `about-hero` to match established convention.
**Commit:** `fc9c9c8` · **File:** `src/components/AboutHero.jsx`

### FINDING-002 — Inconsistent H2 scale across page sections (Medium) — **Fixed**
`.about-origin-heading` ("How we got here") rendered at 32px while the two other same-level section headings on the page — `.about-founders-heading` ("Two people, one launch pad") and `.about-values-heading` ("Principles, not posters") — rendered at 38.4px. Same semantic weight, different visual weight, for no apparent intentional reason. Unified the clamp to `clamp(1.8rem, 3.4vw, 2.4rem)` across all three.
**Commit:** `c0e9687` · **File:** `src/pages/AboutPage.css`

### FINDING-003 — "Principles, not posters" section matches the AI-slop 3-column pattern (Polish) — Deferred
Three equal-width cards, numbered 01/02/03, each with a colored top accent bar (blue/green/amber) + bold title + 2-line description, arranged symmetrically. This is close to the canonical "3-column feature grid" pattern flagged as a generic/AI-generated tell. Not auto-fixed — reworking it (asymmetric layout, different content treatment, etc.) is a layout/content decision beyond a minimal CSS fix, and the section's ironic name ("not posters") suggests it may be an intentional wink rather than an oversight. Flagging for your call.
**File:** `src/components/AboutValues.jsx`, `src/pages/AboutPage.css` (`.about-values-grid`, `.about-value-card`)

### Investigated, not a finding
- Founder photo cropping initially looked off in a mid-scroll screenshot; on a full, settled screenshot both photos are legitimately composed (candid environmental portraits, faces fully visible). No action taken.
- 5 font families detected by the extraction script (incl. Times New Roman, Arial) — false positive: those only appear on non-visual elements (`<head>`, `<meta>`, `<title>`).
- Nav links / footer social icons render under the 44px touch-target guideline (34px / 36px tall) — this is site-wide (Navbar.jsx, Footer), not new to this branch, and desktop-only verification means mobile tap comfort wasn't independently confirmed. Noting but not fixing under this branch's diff-aware scope.

## Summary
- Findings: 3 (2 fixed, 1 deferred to your judgment)
- Fixes verified: hero renders instantly on load; all three page H2s now compute to identical `38.4px`; no new console errors introduced by either change.

**PR summary line:** Design review found 3 issues on the new About page, fixed 2 (hero fade-in delay, inconsistent heading scale). One AI-slop-pattern flag (Values section) deferred for a product call.
