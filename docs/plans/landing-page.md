# Landing Page — Implementation Plan

**Route**: /
**Status**: Scaffolded (TailArk block installed)
**TailArk Block**: `@tailark-pro/grid-1-landing-one` (Quartz kit)

## Section Order

| # | Section | Source File | Status |
|---|---------|-------------|--------|
| 1 | Header/Nav | `src/components/header.tsx` | [x] Installed |
| 2 | Hero | `src/app/(marketing)/(home)/page.tsx` (inline) | [x] Installed |
| 3 | Logo Cloud | `src/components/logo-cloud.tsx` | [x] Installed |
| 4 | Manifesto | `src/app/(marketing)/(home)/sections/manifesto.tsx` | [x] Installed |
| 5 | Platform Features | `src/app/(marketing)/(home)/sections/platform-features.tsx` | [x] Installed |
| 6 | Analytics Features | `src/app/(marketing)/(home)/sections/analytics-features.tsx` | [x] Installed |
| 7 | Integrations | `src/app/(marketing)/(home)/sections/integrations-section.tsx` | [x] Installed |
| 8 | Testimonials | `src/app/(marketing)/(home)/sections/testimonials-section.tsx` | [x] Installed |
| 9 | Call to Action | `src/components/call-to-action.tsx` | [x] Installed |
| 10 | Footer | `src/components/footer.tsx` | [x] Installed |

## Content Placeholders

### Hero
- **Headline**: [TODO] — Replace "Transform Raw Data into Strategic Business Insights"
- **Subheadline**: [TODO] — Replace analytics platform copy with Furman/Flatiron messaging
- **CTA Button**: [TODO] — e.g. "Apply Now" or "Explore Programs"
- **Hero Image**: [TODO] — Replace Cloudinary placeholder with Furman/Flatiron imagery

### Logo Cloud
- **Logos**: [TODO] — Replace tech company SVGs with employer logos (TikTok, Tesla, Google, etc.) or university partner logos

### Manifesto
- **Content**: [TODO] — Replace with Furman/Flatiron partnership story and mission

### Platform Features
- **Section title**: [TODO] — Replace with bootcamp program highlights
- **Features**: [TODO] — Data Science, AI & ML, Cybersecurity program cards

### Analytics Features
- **Content**: [TODO] — Replace with student outcomes, career stats, learning experience details

### Integrations
- **Content**: [TODO] — Replace with partner organizations, career placement companies

### Testimonials
- **Quotes**: [TODO] — Replace with alumni testimonials (Ruth Burger, Kendall McNeil, Tony Lopez, Chuck Utterback)

### Call to Action
- **Headline**: [TODO] — e.g. "Ready to Change the Game?"
- **CTA**: [TODO] — "Apply Now" / "Schedule a Call"

### Footer
- **Links**: [TODO] — Update nav links, social links, legal pages

## Implementation Rules

For each section:
1. Open the TailArk source `.tsx` file listed above
2. Only change: text strings, link hrefs, data arrays, export name
3. Keep ALL: CSS classes, illustrations, animations, layout structure, imports
4. Run `pnpm build` after each section to verify
