# Design Review — Full site

**Date:** 2026-08-15 · **Branch:** feat/about-us-page · **Pages reviewed:** Home (/), Vehicles (/vehicles), Tools (/tools), About (/about), Blog (/blog), Blog post (/blog/reusable-launch-economics) — 6 pages, all routes in the app.

**Method note:** as in the prior About-page review, `gstack browse` was skipped (its `bun`/`./setup` dependency chain doesn't exist in this repo) in favor of `claude-in-chrome` against the local Vite dev server. True mobile-viewport emulation via `resize_window` did not take effect in this environment (viewport stayed desktop-width throughout), so responsive breakpoints below 900px were reviewed in source (`@media` rules) but not visually verified on any page.

## First Impression

The site reads as a confident, technical, pre-seed aerospace startup — real engineering specifics (Isp, MoS, payload figures), a distinctive Barlow Condensed display type, a coherent dark/blue "mission control" palette. Home's hero (SKYLX AEROSPACE lockup over an Earth background) is strong and renders instantly. The Tools page stood out as the best-crafted section on the site — each tool card has a bespoke SVG diagram rather than a generic icon.

## Findings

### FINDING-004 — Same reveal-gating bug present on 3 more pages (High) — **Fixed**
The bug found and fixed on the About page hero (see prior report) turned out to be systemic: any above-the-fold content wrapped in the site's `.reveal` class stays invisible for several seconds after a full page load, because the scroll-triggered `IntersectionObserver` that adds `.visible` doesn't fire promptly on initial mount (likely due to main-thread contention from the site's WebGL starfield/3D background — not fully root-caused, but the fix is the same regardless of cause). Found and fixed on:
- **Vehicles page** — the SKYLX-S/M/H comparison cards were the page's *entire* visible content, all gated. The whole page was blank for ~5s on load. `src/pages/ModelRocketsPage.jsx` (commit `86bfef6`)
- **Tools page** — the hero title/subhead/stat row. `src/pages/ToolsPage.jsx` (commit `c2ceb36`)
- **Blog page** — the "Beyond Earth Blog" title block. `src/pages/BlogPage.jsx` (commit `d8bf3ae`)

Below-the-fold `.reveal` usage (filters, grids, feature panels, footer CTAs) was left untouched — verified those resolve normally on scroll, which is expected, intentional scroll-reveal behavior, not a bug.
**Recommendation for follow-up (not done here):** the underlying timing issue is worth a real profiling pass — if it's the 3D background blocking the main thread, every future above-the-fold section is at risk of the same bug recurring.

### FINDING-005 — Informal placeholder-sounding copy in production (Polish) — **Fixed**
`VehicleFamily.jsx`'s scale-note read "vehicle images gonna release soon" — casual, draft-sounding phrasing inconsistent with the site's otherwise measured tone. Reworded to "real vehicle renders coming soon."
**Commit:** `c242a79`

### FINDING-006 — Blog post body text exceeded readable line length (Medium) — **Fixed**
`BlogPostPage.jsx`'s `<article>` had no `max-width`, inheriting the 900px page container directly — at that width, body paragraphs ran to 100+ characters per line, well past the 45–75 char guideline for comfortable reading. Constrained the article column to 680px; the title/header keep the wider 900px container for visual weight.
**Commit:** `783be71`

### Investigated, not a finding
- **THREE.Clock deprecation warning** in console (`THREE.THREE.Clock: This module has been deprecated`) — a Three.js library-version issue, not a design/UX defect. Flagging for awareness but out of scope for this review; a dependency-upgrade task.
- **Products nav dropdown** (Home/global nav) — opens/closes correctly, clean two-item menu (Model Rockets, Shop). No issue.
- **Homepage "Building India's Next Space Chapter" 4-card grid** and **"Three Pillars of Innovation" 3-card grid** — reviewed against the AI-slop checklist; neither matches the flagged pattern (no icon-in-colored-circle, content is specific rather than generic filler). Not flagged.
- Nav links / footer social icons still render under the 44px touch-target guideline (documented in the prior About-page report) — this is global `Navbar.jsx`/`Footer.jsx`, present on every page. Not fixed in either pass since mobile tap behavior couldn't be independently verified in this environment (see method note), and it's a pre-existing site-wide pattern rather than a regression.

### Carried over from the About-page review (already fixed, still holding)
- About hero reveal-gating (commit `fc9c9c8`)
- About page H2 scale mismatch (commit `c0e9687`)
- "Principles, not posters" 3-card section on About — still flagged as AI-slop-adjacent, still deferred to your judgment (not re-litigated this pass).

## Summary
- **This pass:** 3 findings, all fixed and verified (before/after screenshots, console-clean).
- **Cumulative across both design-review passes on this branch:** 6 findings fixed, 1 deferred (Values section pattern), 1 dependency warning noted (Three.js).
- The reveal-gating bug (FINDING-004) was the most consequential: it affected the first-viewed content on 4 of the site's 6 pages.

**PR summary line:** Full-site design review found the About-hero fade-in bug was systemic across Vehicles, Tools, and Blog — fixed on all three. Also fixed one readability issue (blog post line length) and one copy issue (informal placeholder text). 6 fixes total across both review passes; 1 AI-slop-pattern flag left for a product call.
