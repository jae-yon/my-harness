---
name: design-taste
description: Apply concrete spacing/typography/color/motion/responsive rules when building or styling new UI, instead of guessing. Browses Mobbin/Dribbble for real UI references on brand-new pages/screens. Use when writing a new component or improving how something looks.
---

# Design Taste

### When to use
- Writing a new UI component or screen.
- Asked to "make this look better" with no specific direction.

### Procedure
1. **Brand-new page/screen only** (skip for edits to an existing component) — before designing, look up 2-3 real references for this type of screen: browse Mobbin (mobbin.com, real shipped product screens/flows) and Dribbble (dribbble.com, visual/component-level concepts) via the built-in browser or WebSearch. Note concrete layout/pattern choices worth borrowing — don't design from a blank mental slate.
2. **Find the existing source of truth** — check the design tokens already in use (Tailwind theme/config, CSS variables, or the most-used shadcn component in `components/ui/`) before inventing a new spacing, color, radius, or font value.
3. **Reuse before adding** — if an existing token covers the need, use it. If not, propose adding ONE token to the shared source and say so explicitly, rather than hardcoding a one-off value.
4. Apply the baseline rules below.
5. If genuinely uncertain about a design decision, state the tradeoff and ask instead of guessing (see AGENTS §1).
6. After implementing, invoke the `design-reviewer` subagent when the platform supports it, passing the changed files/diff, for a fresh-eyes check against the rules below. Otherwise, self-review against them before calling it done.

### Baseline rules
- **Spacing** — stick to one scale (e.g. Tailwind's default 4px grid). Don't mix ad-hoc values like `13px`/`22px` with the scale.
- **Typography** — 2-3 font sizes/weights per screen is usually enough. Don't add a new weight for a single label.
- **Color** — use the palette's semantic roles (primary/muted/destructive/...) instead of raw hex or arbitrary Tailwind colors. Never place low-contrast gray text on a colored or dark background.
- **Radius & shadow** — one radius scale and one shadow scale per project. Sibling elements shouldn't mix `rounded-md` and `rounded-xl` without a reason.
- **Motion** — reuse the same duration/easing tokens across the app. Default to standard ease-out, not bounce/elastic. Animate only cheap properties (`transform`, `opacity`).
- **Density** — avoid nesting cards inside cards inside cards; flatten where the hierarchy doesn't earn its depth.
- **Responsive** — reuse the project's existing breakpoint scale (e.g. Tailwind's `sm`/`md`/`lg`/`xl`) instead of inventing a custom media query. Design mobile-first: base styles for the smallest screen, add complexity at larger breakpoints. Avoid fixed pixel widths/heights that don't adapt; prefer relative units or explicit responsive variants. Keep touch targets at least 44px on mobile widths.
