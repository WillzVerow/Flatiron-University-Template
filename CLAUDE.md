# Flatiron University Template

## Overview
Website for the partnership between Flatiron School and Furman University. Flatiron offers credentialed tech bootcamps (Data Science, AI & ML, Cybersecurity) to Furman students for hands-on tech experience.

## Tech Stack
- **Framework**: Next.js 16, React 19
- **Styling**: Tailwind CSS v4, shadcn/ui (New York style)
- **Components**: TailArk Pro (Quartz kit) — `grid-1-landing-one` landing page
- **Animation**: Motion (Framer Motion)
- **Icons**: Lucide React
- **Font**: Poppins (headings/body), Geist Mono (accents)
- **Package Manager**: pnpm

## Brand Colors
- **Background**: `#FEEAFF` (soft pink)
- **Primary / Buttons**: `#562B83` (deep purple)
- **Text**: Black (`#1a1a1a`)
- **Accent**: `#7B3FA6` (medium purple)
- **Muted**: `#F5D9F7` (light lavender)

## TailArk Implementation Rules

**NEVER hand-code sections.** For every section on every page:
1. Find the TailArk block source file at `src/components/{block-name}.tsx`
2. Copy it to the section target file (e.g., `src/components/{page}/{SectionName}.tsx`)
3. Only change: text strings, link hrefs, data arrays, export name
4. Keep ALL: CSS classes, illustrations, animations, layout structure, imports

### Why This Matters
TailArk blocks contain hundreds of micro-details (shadows, rings, gradients, masks, backdrop effects) that produce polished results. Rewriting "inspired by" TailArk loses these details and produces dull output.

### Allowed Changes
1. **Text strings** — headlines, descriptions, labels, button text
2. **Link `href` values** — update navigation targets
3. **Data arrays** — feature lists, pricing tiers, testimonial content, team members
4. **Export/function name** — rename the component export

### Forbidden Changes
- Layout structure (grid classes, flex, `@container` queries)
- CSS classes (shadows, rings, borders, gradients, masks, backdrop effects)
- Animations (`motion` components, transitions, transforms)
- Illustration and SVG imports (use the ones that came with the block)
- Component imports (`Card`, `Button`, `NumberFlow`, `InfiniteSlider`, etc.)
- Responsive breakpoint logic
- Overall component architecture

### Verification
After every section, verify:
- [ ] CSS classes match the source block exactly
- [ ] All animations are preserved
- [ ] Only text/links/data changed
- [ ] `pnpm build` passes

## Tailwind CSS v4 Gotchas

1. **Border color default**: Tailwind v4 defaults `border-b` to `currentColor` (black), not the theme border color. Already fixed in `globals.css` base layer.
2. **No `not-dark:hidden`**: This utility does NOT exist in Tailwind v4. Use `hidden dark:block` instead.
3. **Mask utilities unreliable**: `mask-t-*`/`mask-b-*` with `mask-composite: intersect` can produce unexpectedly narrow visible bands. Use inline `mask-image` CSS for complex gradients.

## File Structure
```
src/
  app/
    (marketing)/
      (home)/
        page.tsx              # Landing page
        sections/             # Landing page sections
      layout.tsx              # Marketing layout (header + footer)
    globals.css
    layout.tsx                # Root layout
  components/
    ui/                       # shadcn/ui primitives
    illustrations/            # TailArk decorative illustrations
    header.tsx                # Site header/nav
    footer.tsx                # Site footer
    call-to-action.tsx        # CTA section
    logo-cloud.tsx            # Logo marquee
    container.tsx             # Layout container
  hooks/
  lib/
    utils.ts                  # cn() utility
docs/
  plans/                      # Page implementation plans
```

## Commands
- `pnpm dev` — Start dev server
- `pnpm build` — Production build
- `pnpm lint` — Run ESLint
