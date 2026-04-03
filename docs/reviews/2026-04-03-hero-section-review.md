# Code Review: Hero Image & Partner Logo Banner

**Date**: 2026-04-03
**Scope**: All files created/modified in the hero section implementation session

## Findings

### [critical] 4.6 MB raster PNG embedded in SVG served unoptimized — `public/furman-campus.svg`
**Code**: `<Image src="/furman-campus.svg" ... priority fetchPriority="high" />`
**Why it matters**: Next.js `<Image>` passes SVGs through without optimization. The file was a base64-encoded PNG inside an SVG shell (4.6 MB). With `priority` + `fetchPriority="high"`, this was the highest-priority fetch on the page, blocking LCP.
**Fix applied**: Extracted the PNG, converted to WebP (228 KB — 95% reduction), updated `page.tsx:57` to reference `/furman-campus.webp`, deleted the SVG and intermediate PNG.

### [critical] Division by zero in TiltCard — `tilt-card.tsx:22-23`
**Code**: `x.set((e.clientX - rect.left) / rect.width)` with no guard on `rect.width/height === 0`
**Why it matters**: If the element has zero dimensions (collapsed, hidden, not yet painted), both divisions produce `Infinity`/`NaN`, corrupting Framer Motion spring values and breaking the 3D card render.
**Fix applied**: Added `if (!rect.width || !rect.height) return` guard after `getBoundingClientRect()`.

### [important] No prefers-reduced-motion support in TiltCard — `tilt-card.tsx`
**Why it matters**: JS-driven spring animations are not affected by the CSS `prefers-reduced-motion` rule in `globals.css`. Users who need reduced motion still get full tilt animation.
**Fix applied**: Added `useReducedMotion()` hook; `handleMouseMove` is a no-op when true.

### [important] No prefers-reduced-motion support in LineBeams — `line-beams.tsx`
**Why it matters**: 5 continuously animating beams run indefinitely via Framer Motion's JS `animate` prop, unaffected by the CSS reduced-motion rule.
**Fix applied**: Added `useReducedMotion()` hook; component returns `null` when true.

### [important] "Powered by" and logo announced separately by screen readers — `partner-logo-banner.tsx:24,40`
**Why it matters**: `<span>Powered by</span>` and `<div role="img" aria-label="Flatiron School">` were siblings with no grouping. Screen readers announced them as two disconnected elements instead of the intended phrase "Powered by Flatiron School".
**Fix applied**: Moved `role="img" aria-label="Powered by Flatiron School"` to the parent wrapper; marked both children `aria-hidden="true"`.

### [important] Dead `uniColor` prop on Logo/LogoIcon — `logo.tsx:4,17`
**Why it matters**: Both components accepted `uniColor?: boolean` but never used it. `header.tsx:111` passed `<Logo uniColor />` expecting a behavioral difference that didn't exist.
**Fix applied**: Removed `uniColor` from both component signatures and the call site in `header.tsx`.

### [minor] `sm:-top-15` on inner grid div may be misaligned — `page.tsx:28`
**Why it matters**: The outer grid div was changed from `top-15` to `top-22` during the session, but the inner mask div's `sm:-top-15` offset was not updated to match. The mask gradient may not fade at the intended position.
**Not fixed**: Requires visual verification to determine the correct value.

### [minor] SVG files in public/ could contain scripts — `public/*.svg`
**Why it matters**: SVGs can contain `<script>` tags. No current files have this issue, but no process guard exists.
**Not fixed**: Recommend adding a CI check for SVG sanitization.

## What's Now Solid

- Hero image is optimized (228 KB WebP vs 4.6 MB SVG)
- TiltCard is safe against zero-dimension edge case and respects reduced motion
- LineBeams respects reduced motion (returns null)
- Partner logo banner is properly accessible (single announcement)
- No dead code in Logo component props
- Build passes cleanly with all fixes

## Trade-offs & Remaining Risks

- **`flatiron-logo.svg` (28 KB) and `furman-logo.svg` (54 KB)** are still raster PNGs in SVG shells. They work but are larger than necessary and may appear blurry on HiDPI. True vector versions would be ideal but require source assets.
- **Triple `backdrop-filter` stack** (card wrapper + bottom fade + logo banner) creates multiple compositing layers. Performance on low-end mobile devices may suffer. A server-side pre-blurred image would eliminate one layer.
- **`useMedia` hook FOUC**: The hook initializes to `false` causing a brief flash of mobile layout on desktop. The previous fix (removing `window` check from initializer) was correct for hydration but introduced this tradeoff. A CSS-only approach for the mobile/desktop header split would be more robust.

## Open Questions

1. Should the logo SVGs be replaced with true vector versions? (Requires design team to provide vector source files)
2. Is the `sm:-top-15` mask offset on `page.tsx:28` visually correct after the `top-22` change?
3. Should the triple `backdrop-filter` stack be simplified for mobile performance?
