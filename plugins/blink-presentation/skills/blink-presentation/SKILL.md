---
name: blink-presentation
description: Create any Blink-branded HTML deliverable — presentations, reports, PRDs, BRDs, business docs, one-pagers, event reports, release notes, after-action reports, pitch decks, demo reports, status updates, or any long-form scroll-based shareable. Use this skill whenever the user at Blink asks to build, write, draft, or design a presentation, report, deck, doc, recap, one-pager, PRD, BRD, release report, or any shareable document — even if they don't mention HTML — so the output stays consistent with Blink's brand (dark theme + coral accents, Inter typography, Blink logo in the header, micro-animations, hamburger side navigation, progress bar, print-ready styles). Trigger phrases include "blink presentation", "blink deck", "blink report", "make a deck", "write a PRD", "BRD", "release notes", "demo report", "event report", "after-action report", "on brand", "blink style", "company style", "internal deck".
---

# Blink Presentation Skill

Create HTML deliverables in Blink's signature style — dark-themed, scroll-driven, section-based layouts with coral accents, the Blink logo in the header, a hamburger side-navigation menu, a scroll progress bar, micro-animations, and print-ready styles.

Every output looks like it was made by the same design team. The same visual language applies across **presentations, reports, PRDs, BRDs, business docs, memos, one-pagers, release notes**, and similar shareables — but the layout engine adapts to the output type. Don't force a scroll-deck format onto a long-form document, and don't force a dense report layout onto a pitch.

## When to use this skill

Any Blink deliverable in HTML: algorithm decks, after-action reports, event recaps, release notes, demo summaries, status updates, metrics reviews, PRDs, BRDs, specs, proposals, roadmaps, one-pagers, pitch decks, internal comms. If the user asks for "a deck", "a report", "a PRD", "slides", "a one-pager", or any similar deliverable and doesn't specify a different format, default to this skill and produce HTML.

Do **not** use this skill for PowerPoint, Word, PDF-native, or spreadsheet outputs — those belong to `pptx`, `docx`, `pdf`, and `xlsx`.

## Intake flow (mandatory — run in order)

Never skip straight to building. The flow below is what makes the output fit the material instead of forcing the material into a template.

### Step 1 — Intake

Confirm the source material. If the user hasn't shared any files or pasted content, ask them to upload/paste what they have. Don't build from a one-line brief — ask first.

### Step 2 — Study

Actually read the material. Then report back to the user, briefly:
- What kind of content this looks like (spec, memo, recap, announcement, data summary, etc.)
- What's strong in the source, what's thin, what's missing that the chosen output type will need
- **Proposed output format** — pick one and name it: *presentation / PRD / report / business doc / one-pager / release notes / memo*, etc. Explain the fit in one sentence.

Ask the user to confirm or override the format. This is the most important checkpoint — a PRD dressed as a pitch deck is the failure mode to avoid.

### Step 3 — Style / density

Once the format is locked, ask which visual density the user wants, using `AskUserQuestion`:

1. **Heavy Visuals** — icons, inline SVG illustrations, charts, animated elements, decorative art. Maximum visual impact.
2. **Balanced** — a mix of visuals and text. Charts where data calls for them, icons on key sections, mostly written content.
3. **Text-led** — clean typography, generous whitespace, callouts and stat blocks for emphasis. No charts or illustrations. Executive-report style.

Offer "all three" as an option (generates three files with suffixes `-visual`, `-moderate`, `-text`). Density labels adapt to format — in a PRD, "heavy visuals" means inline diagrams and flow charts, not decorative art.

### Step 4 — Targeted follow-ups

Only ask questions that make sense *after* studying the material. Examples:
- "You mention X repeatedly but never define it — intentional, or should I add a definition?"
- "The numbers in section 3 look draft — are they final?"
- "I don't see a success metric; is there one, or should I flag it as TBD?"

Skip if the source material answers everything.

### Step 5 — The four leverage questions

Ask these with `AskUserQuestion`. They're the minimum needed to produce a genuinely fitted output:

1. **Who's the reader and what decision/action should they take?**
2. **How will it be consumed — desk read, meeting, projected, printed, Slack?**
3. **Length target — rough page count or minutes to read?**
4. **A past example you liked, or an anti-pattern to avoid?**

### Step 6 — Build

Start from `assets/template.html`. Fill the structure per the rules below. Validate, save, share.

## Build rules

### Start from `assets/template.html`

It contains:
- Blink design tokens (`:root` variables — `--coral`, `--dark`, `--orange-bg`, etc.)
- Fixed top nav with the real Blink logo CDN URL
- Hamburger side navigation with open/close, smooth scroll, active-section highlighting
- Scroll progress bar
- IntersectionObserver scroll-reveal (`fade-up`, `fade-left`, `fade-right`, `scale-in`, `stagger-1..8`)
- Base section layout, dark default + `.orange-section` breaker
- Hero, cards grid, callouts, stat blocks, pipeline, white cards, closing section
- Print styles for PDF export
- Responsive breakpoints

Do **not** rewrite the design tokens, nav, side menu, or progress bar. They are the brand fingerprint.

### File naming

- Presentation / report / memo: name after the deliverable (`q4-event-report.html`).
- Multiple densities: append suffixes (`{name}-visual.html`, `{name}-moderate.html`, `{name}-text.html`).
- PRD/BRD: `prd-{feature}.html`.

### Section structure

1. Decide the section list — reach into `references/section-templates.md` for the format (presentation vs. report vs. PRD etc.).
2. Alternate dark and orange sections for rhythm. Never two `.orange-section` back-to-back.
3. Every section gets a unique `id` — the hamburger menu links to these ids.
4. The side-nav `<ul>` matches the section list 1:1, in order, with two-digit numbers (`01`, `02`, …).
5. Scroll-reveal classes on content blocks: headers `stagger-1`, body `stagger-2`, cards `stagger-3+`.

### Replace placeholders

`{{DECK_TITLE}}`, `{{DECK_SHORT_TITLE}}`, `{{DECK_NAV_LABEL}}`, `{{HERO_EYEBROW}}`, `{{HERO_HEADLINE}}`, `{{HERO_SUBTITLE}}`, `{{META_1/2/3}}`, `{{CLOSING_HEADLINE}}`, `{{CLOSING_SUBTITLE}}`.

### Deeper components

For heatmaps, weight bars, flow diagrams, matrix tables, persona cards, solution bridges, and similar, consult:
- `references/design-tokens.md` — palette, type scale, spacing, semantic colors
- `references/components.md` — ready-to-paste HTML for reusable components beyond the base template
- `references/animations.md` — keyframes, scroll-reveal pattern
- `references/section-templates.md` — per-format outlines (presentation, report, PRD, BRD, release notes, event report, pitch deck, status report, demo report)
- `assets/_full-css.css` — advanced component styles
- `assets/_full-js.js` — counter animation, weight-bar fill, etc.

Read only what you need.

### Write real content

Pull from the user's source. Never fabricate metrics, quotes, people, or dates. Hero headlines 3–7 words, section titles 2–8 words, card titles ≤6 words, body 1–3 sentences per block. Sentence case except eyebrow labels (UPPERCASE) and stat labels (UPPERCASE).

### Save and validate

1. Save to the Cowork outputs folder.
2. Every file starts with `<!DOCTYPE html>`. Swolvy and browsers reject HTML without a doctype.
3. Run a Python `html.parser` tag-balance check on each file. Report any unclosed tags and fix them.
4. Share files with `computer://` links, labeled by density when multiple were generated.

### Ask about Swolvy upload

After files are saved and validated, ask via `AskUserQuestion`:
- Yes, upload all files and share links
- Yes, upload with a password (ask for the password next)
- No, keep them local only

If yes, upload each file separately (one Swolvy link per density). See `references/swolvy-upload.md` — use `curl` or Python `requests` (not stdlib `urllib`), and never strip the doctype. Share returned `url`s with the user; save the `edit_token` so they can update via `replace_id` + `replace_edit_token`.

## Sizing scale — screen-sharing calibrated

These values are calibrated for screen-sharing and large displays **without** being cartoonishly oversized. Match this scale — do not enlarge, do not shrink.

- Hero headline: `clamp(56px, 7.2vw, 104px)`
- Section title: `clamp(42px, 4.8vw, 70px)`
- Stat value: `clamp(48px, 5.6vw, 77px)`
- Body text: `18–22px`
- Section padding: `128px 96px 96px`
- Top nav padding: `22px 64px`
- Side nav width: `320px`
- Logo height: `38px`
- Card padding: `38px`
- Grid column minmax: `220px` (small cards) / `320px` (wide cards) — never larger, or big numbers overflow their cells.

If content overflows its container at this scale, fix the container — don't bump the font down ad hoc.

## Alignment rules — hard guidelines

These are non-negotiable. Violating them produces the bugs we've already shipped fixes for.

### Donut charts

- Segments use `stroke-linecap="butt"` with a **gapped dasharray** (e.g. `stroke-dasharray="58 243.6"`). Never `stroke-linecap="round"` with overlapping arcs — round caps overlap by stroke-width/2 and are never allowed.
- Center number uses `dominant-baseline="central"` at the geometric center (`y = cy`). Don't eyeball the y-offset.
- **Labels live outside the circle, not inside.** Use a `<div class="donut-caption">` placed after the `</svg>` inside a `.donut-shell` flex column. Never put a long multi-word label as an in-SVG `<text>` below the number — it always overflows.
- The caption is small and uppercase (≈15px, 0.12em tracking, gray).

### Cards with charts/illustrations at the bottom

- `.card` is `display: flex; flex-direction: column;`.
- The bottom visual (`.mini-chart`, preview block, etc.) uses `margin-top: auto` and a **fixed height** so it's flush with the card's bottom edge regardless of how long the content above is.
- Across a grid, every card's bottom visual sits on the same horizontal line. If they don't, the card isn't flex-column — fix the card, not the chart.

### Wide diagrams / illustrations

Any illustration with a `max-width` smaller than the viewport must be centered with `margin: Xpx auto 0`. Never leave a max-width block left-aligned with no auto margin — it creates the "floating left" look.

### SVG text centering

For any text node centered inside an SVG shape, always set both `text-anchor="middle"` and `dominant-baseline="central"`. Don't rely on manually tweaking `y` to match font metrics.

### Stat numbers

Large stats like `24,818` or `59/341` must fit their grid cell at the calibrated sizing above. If the cell is too narrow, shrink the grid column's `minmax` min — don't shrink the number.

## Style rules — the short list

1. **Dark background, coral focal points.** `--dark` (#111827) is canvas, `--coral` (#e8845c) draws the eye. Never put two colors at equal weight.
2. **Blink logo only in the top nav.** Not scattered into sections.
3. **Orange sections are breakers.** Rhythm changers, not default background.
4. **One big idea per section.** Label → title → optional subtitle → content.
5. **Animations are micro.** `fade-up` + small stagger. Animate children, not whole sections.
6. **Real data only.** No fake numbers. Mark drafts `[TBD]` clearly.
7. **Everything is reachable from the side nav.** Every section has an id and matching `<li>`.
8. **Print-ready.** Don't break the `@media print` block.

## Do not

- Don't swap the palette for a "new accent". The brand is coral.
- Don't remove the hamburger menu, top nav, or progress bar.
- Don't use external CSS frameworks (Tailwind, Bootstrap). Styles live in the `<style>` block.
- Don't change the Blink logo URL — it's the official Cloudinary asset.
- Don't use emojis for iconography. Use inline SVG, unicode glyphs sparingly, or CSS shapes.
- Don't embed images from random URLs. Build illustrations with inline SVG.
- Don't skip the intake flow — no building before Study + format confirmation.
- Don't treat every request as a scroll deck. A PRD or memo is a document, and its layout should reflect that.

## Example trigger prompts

- "Write an after-action report for the SXSW London activation" → intake → study → confirm as report → density → 4 leverage questions → build.
- "Draft a PRD for the new onboarding flow" → intake → study → confirm as PRD → density → 4 leverage questions → build.
- "I need a release notes page for version 2.4" → intake → study → confirm as release notes → density → 4 leverage questions → build.
- "Make me a deck explaining our matchmaking algorithm" → intake → study → confirm as presentation → density → 4 leverage questions → build.
- "Summarize the demo for internal sharing" → intake → study → confirm as demo report → density → 4 leverage questions → build.
