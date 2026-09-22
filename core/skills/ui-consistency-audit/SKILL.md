---
name: ui-consistency-audit
description: Audit existing UI for design drift that built up over incremental component additions (inconsistent spacing/color/typography/motion), and produce a prioritized fix list before touching code broadly.
---

# UI Consistency Audit

### When to use
- User asks to review, tidy up, or "unify" the UI/design.
- After several rounds of ad-hoc component additions, before starting new work in that area.

### Procedure
1. **Scope it** — confirm which screens/components/folders to audit. Don't silently scan the whole repo.
2. **Establish the reference** — find the current source of truth for tokens (Tailwind config, shadcn theme, or the most consistently-styled existing component). Don't invent a new standard from scratch.
3. **Scan for drift** against that reference: hardcoded colors/spacing instead of tokens, inconsistent radius/shadow, mismatched font sizes/weights, inconsistent motion durations/easing, near-duplicate components that should share one implementation.
4. **Report by pattern, not by file** — group findings so the user sees how widespread each issue is (e.g. "6 components use `rounded-xl`, 11 use `rounded-lg`" rather than a per-file dump).
5. **Propose fixes in priority order** (highest-visibility/most-repeated drift first). List the files that would change and get confirmation before applying — this can touch many files at once (see AGENTS §3, Surgical Changes).
6. Apply only the confirmed fixes; leave the rest as a follow-up list.
