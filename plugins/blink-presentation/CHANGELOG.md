# blink-presentation — Changelog

## 0.4.0 — 2026-04-16

### Added
- Mandatory 6-step intake flow: **intake → study → style/density → targeted follow-ups → four leverage questions → build**.
- Multi-format awareness: the skill now explicitly covers presentations, reports, PRDs, BRDs, business docs, memos, one-pagers, and release notes — with a hard rule against forcing a scroll-deck layout onto a long-form document.
- **Four leverage questions** asked before build:
  1. Who's the reader and what decision/action should they take?
  2. How will it be consumed — desk read, meeting, projected, printed, Slack?
  3. Length target — rough page count or minutes to read?
  4. A past example you liked, or an anti-pattern to avoid?
- **Study step** — Claude reads the material and proposes an output format for the user to confirm or override. This is the biggest failure-mode fix: no more PRDs dressed as pitch decks.

### Changed
- **Sizing scale reduced ~20%** across the calibrated screen-share tokens so content stays legible without feeling oversized:
  - Hero `clamp(56px, 7.2vw, 104px)`
  - Section title `clamp(42px, 4.8vw, 70px)`
  - Stat value `clamp(48px, 5.6vw, 77px)`
  - Card padding `38px`, top nav padding `22px 64px`, side nav width `320px`, logo 38px.
- `template.html` updated with the new sizing tokens and with `.card` as flex-column by default.
- Grid `minmax` tightened to `220px` / `320px` so large stats (e.g. "24,818", "59/341") fit their cells.

### Fixed — hard alignment rules (now enforced by the skill)
- **Donut overlap** — segments use `stroke-linecap="butt"` with a gapped dasharray (never round caps with overlapping arcs).
- **Donut center text** — uses `dominant-baseline="central"` at `y=cy`; no manual y-offsets.
- **Donut labels** — always rendered outside the circle as `<div class="donut-caption">` inside a `.donut-shell` flex column (never as in-SVG text that overflows).
- **Cards with bottom charts** — `.card` is `display:flex; flex-direction:column`; `.mini-chart` has `margin-top:auto` + fixed height so charts sit flush across every card in a grid.
- **Wide illustrations** must use `margin: X auto 0` for centering — no more max-width blocks floating left.
- **SVG text centering** must use both `text-anchor="middle"` and `dominant-baseline="central"`.

## 0.3.0

- Initial public version with three density directions (Heavy Visuals, Moderate, Text-Heavy), hamburger side nav, scroll progress bar, Blink logo header, print styles, Swolvy upload flow.
