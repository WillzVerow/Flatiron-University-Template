# Landing Page — Implementation Plan

**Route**: /
**Branch**: `feat/hero-section`
**Status**: In Progress — Logo Cloud, Program Offerings, and Furman//Flatiron Difference sections actively being refined

## Section Order

| # | Section | Source File | Status |
|---|---------|-------------|--------|
| 1 | Header/Nav | `src/components/header.tsx` | [x] Done |
| 2 | Hero | `src/app/(marketing)/(home)/page.tsx` (inline) | [x] Done — partner logo banner, 3D tilt card, line beam animations |
| 3 | Logo Cloud | `src/components/logo-cloud.tsx` | [x] Done — 36 real company logos from SMU TechPro, themed groups |
| 4 | Manifesto | `src/app/(marketing)/(home)/sections/manifesto.tsx` | [x] Done |
| 5 | Program Offerings | `src/app/(marketing)/(home)/sections/platform-features.tsx` | [x] Done — expandable-features-7 block with AI + Software Engineering tabs |
| 6 | The Furman//Flatiron Difference | `src/app/(marketing)/(home)/sections/analytics-features.tsx` | [~] In Progress — message stream illustration needs polish |
| 7 | Integrations | `src/app/(marketing)/(home)/sections/integrations-section.tsx` | [x] Installed (content TBD) |
| 8 | Testimonials | `src/app/(marketing)/(home)/sections/testimonials-section.tsx` | [x] Installed (content TBD) |
| 9 | Call to Action | `src/components/call-to-action.tsx` | [x] Installed (content TBD) |
| 10 | Footer | `src/components/footer.tsx` | [x] Installed |

## What Was Done This Session

### 1. Logo Cloud (Complete)
- Scraped all 36 company logos from https://techpro.smu.edu/ logo cloud section
- Downloaded as PNGs to `public/logos/`
- Converted from white-on-transparent to black-on-transparent using PIL
- Renamed each file after visual identification (HTML had no alt text)
- Rewrote `logo-cloud.tsx` to use `next/image` with PNG files instead of TailArk SVG imports
- Organized into 9 thematic groups of 4 with matching labels:
  - Energy leaders, Tech giants, Finance and real estate, Aerospace and innovation
  - Entertainment leaders, Gaming studios, Digital platforms, Travel and services, Hardware and telecom

### 2. Program Offerings Section (Complete)
- Installed `@tailark-pro/expandable-features-7` block
- Replaced the old grid-based PlatformFeatures section with the expandable features block
- Two tabs: **Artificial Intelligence** and **Software Engineering**
- Each tab has: headline, description, "Learn more" link, supportive content (metrics/testimonial), and background illustration
- Wrapped in `<Container>` to align grid lines with rest of page
- Removed inner dashed vertical border lines per user request
- Added `[01] Program Offerings` label in a header bar above the tabs
- Adjusted spacing: tabs left-aligned, reduced gap between "Learn more" and bullet points

### 3. The Furman//Flatiron Difference — Student Experience (In Progress)
- Replaced map illustration with a custom animated message stream component
- Replaced stock GitHub avatars with custom cartoon headshots throughout the site:
  - `public/headshot-willz.jpeg` (Willz)
  - `public/headshot-brooks.jpeg` (Brooks)
  - `public/headshot-2.png` (John)
- Updated `src/lib/const.ts` avatar constants to use local headshots
- Installed `@tailark-pro/kanban-3` for the Hands-On Learning illustration
- Installed `@tailark-pro/message-2` as reference for message bubble design

### 4. Headshot and Avatar Updates
- Kanban illustration (`kanban-3.tsx`): reduced avatar ring from `ring-2` to `ring-1`, swapped User Testing avatar to John's headshot
- All avatar constants in `const.ts` updated to local headshot paths

## Current Issue: Message Stream Animation

**File**: `src/components/illustrations/message-stream.tsx`
**Location**: Student Experience cell in analytics-features section

See `docs/plans/message-stream-issues.md` for full history of approaches tried.

## Files Changed (uncommitted)

### Modified
- `src/app/(marketing)/(home)/sections/platform-features.tsx` — replaced with expandable-features-7
- `src/app/(marketing)/(home)/sections/analytics-features.tsx` — swapped map → message stream, visualization → kanban
- `src/components/logo-cloud.tsx` — rewritten with real company logos
- `src/lib/const.ts` — avatar URLs → local headshot paths

### New Files
- `public/logos/` — 36 company logo PNGs
- `public/headshot-willz.jpeg`, `public/headshot-brooks.jpeg`, `public/headshot-2.png`
- `src/components/illustrations/message-stream.tsx` — animated chat illustration (needs work)
- `src/components/illustrations/kanban-3.tsx` — kanban board illustration
- `src/components/illustrations/message-2.tsx` — TailArk message block (reference)
- `src/components/expandable-features-7.tsx` — TailArk expandable features block (reference)
- `src/components/ui/illustrations/` — TailArk illustration components

## Implementation Rules

For each section:
1. Open the TailArk source `.tsx` file listed above
2. Only change: text strings, link hrefs, data arrays, export name
3. Keep ALL: CSS classes, illustrations, animations, layout structure, imports
4. Run `pnpm build` after each section to verify
