---
name: blink-presentation
description: Create any Blink-branded HTML presentation, report, or document — algorithm decks, after-action reports, event reports, project/status reports, pitch decks, PRDs, BRDs, release notes, demo reports, or any long-form scroll-based deliverable. Use this skill whenever the user at Blink asks to build, write, draft, or design a presentation, report, deck, doc, recap, one-pager, PRD, BRD, release report, or any shareable document — even if they don't mention HTML — so the output stays consistent with Blink's brand (dark theme + coral accents, Inter typography, Blink logo in the header, micro-animations, hamburger side navigation, progress bar, print-ready styles). Trigger phrases include "blink presentation", "blink deck", "blink report", "make a deck", "write a PRD", "BRD", "release notes", "demo report", "event report", "after-action report", "on brand", "blink style", "company style", "internal deck".
---

# Blink Presentation Skill

Create HTML presentations and reports in Blink's signature style — dark-themed, scroll-driven, section-based layouts with coral accents, the Blink logo in the header, a hamburger side-navigation menu, a scroll progress bar, micro-animations, and print-ready styles.

Every output from this skill looks like it was made by the same design team. Employees across Blink share one visual language so internal and client-facing work stays coherent.

## When to use this skill

Use it whenever the user wants any of the following, in HTML form:

- **Technical/algorithm decks** — model explanations, architecture walkthroughs, scoring systems, matrices
- **Reports** — after-action, event recap, release notes, demo summary, status updates, metrics reviews
- **Strategy docs** — PRDs, BRDs, specs, proposals, roadmaps, one-pagers, pitch decks
- **Internal comms** — all-hands, quarterly recaps, launch readouts

If the user asks for "a deck", "a report", "a PRD", "slides", "a one-pager", or any similar deliverable at Blink and doesn't specify a different format, default to this skill and produce HTML.

Do **not** use this skill for PowerPoint, Word, PDF-native, or spreadsheet outputs — those belong to `pptx`, `docx`, `pdf`, and `xlsx` respectively.

## Workflow

### Step 0 — ALWAYS ask: which style direction(s)?

**This step is mandatory for every single request. Never skip it.**

Before doing any work, use `AskUserQuestion` to ask the user which style direction(s) they want. Present these three options:

1. **Heavy Visuals** — icons, inline SVG illustrations, donut/gauge/bar charts, animated elements, decorative SVG art, radial gauges, funnel diagrams, flight-path illustrations. Maximum visual impact.
2. **Moderate** — a balanced mix of visuals and text. Some icons and charts where data calls for them, but more emphasis on written content.
3. **Text-Heavy** — primarily text with minimal decoration. Clean typography, generous whitespace, callouts and stat blocks for emphasis, but no charts or illustrations. This is the most common style at Blink (text is ~90% of most presentations).

Ask: *"Which style direction(s) would you like? You can pick one, two, or all three."*

Offer these choices:
- All three directions (generates 3 HTML files)
- Heavy Visuals only
- Moderate only
- Text-Heavy only
- Any combination of two

**When the user picks multiple directions (or "all three"), you MUST generate a separate HTML file for each direction.** Name them with suffixes:
- `{name}-visual.html` — heavy visuals direction
- `{name}-moderate.html` — moderate direction
- `{name}-text.html` — text-heavy direction

For example, if the deliverable is "Q4 Event Report", generate:
- `q4-event-report-visual.html`
- `q4-event-report-moderate.html`
- `q4-event-report-text.html`

All three files share the same content, data, and section structure — the difference is in how the content is presented visually.

#### Direction guidelines

**Heavy Visuals (`-visual`)**:
- Inline SVG icons on every card and section header
- SVG donut charts, radial gauges, area charts, funnel bars for any numeric data
- Animated counters for stats (requestAnimationFrame)
- Decorative SVG illustrations (flight paths, abstract shapes, network diagrams)
- Animated elements: pulse-ring, drift, ping keyframes
- Full use of `_full-css.css` components: heatmaps, flowcharts, weight bars, solution bridges

**Moderate (`-moderate`)**:
- Selective SVG icons on key sections only
- One or two charts where data is best shown visually (e.g., a donut for split data, a bar for comparisons)
- Stat blocks with animated counters
- No decorative illustrations or abstract art
- Callouts and cards with text emphasis

**Text-Heavy (`-text`)**:
- No SVG charts, illustrations, or decorative elements
- Stat blocks use large typography only (no animated counters needed, but allowed)
- Content is carried by well-structured prose, callouts, and card grids with text
- Generous use of section headers, dividers, and whitespace for readability
- Callout boxes for key insights and quotes
- This is clean, executive-report style — think McKinsey, not infographic

### Step 1 — Understand the deliverable

Before writing anything, figure out:

1. **What kind of document is this?** (algorithm walkthrough, event report, PRD, etc.) The answer shapes which section templates you reach for.
2. **Who's the audience?** (internal team, client, exec, external partner) This sets tone and depth.
3. **What's the content?** If the user hasn't given you the actual material, ask. Do not invent numbers, metrics, or quotes.
4. **What's the table of contents?** Sketch the section list before you write. Every section becomes an `<li>` in the hamburger nav.

Use `AskUserQuestion` for anything ambiguous. Don't guess at audience or scope for a real deliverable.

### Step 2 — Start from `assets/template.html`

Copy the contents of `assets/template.html` as the starting skeleton. It already contains:

- Blink design tokens (`:root` variables — `--coral`, `--dark`, `--orange-bg`, etc.)
- The fixed top nav with the real Blink logo CDN URL
- The hamburger side navigation (with open/close, smooth scroll, active-section highlighting, keyboard-close)
- The scroll progress bar
- IntersectionObserver scroll-reveal animations (`fade-up`, `fade-left`, `fade-right`, `scale-in`, `stagger-1..8`)
- Base section layout with dark default and `.orange-section` breaker variant
- Hero, cards grid, callouts, stat blocks, pipeline, white cards, and closing section styles
- Print styles for PDF export
- Responsive breakpoints

**Do not rewrite the design tokens, the nav, the side menu, or the progress bar.** These are the brand fingerprint. Keep them as-is.

### Step 3 — Fill the structure

Replace the `{{PLACEHOLDER}}` values with real content:

- `{{DECK_TITLE}}` — full title for the browser tab
- `{{DECK_SHORT_TITLE}}` — short title shown at the top of the hamburger menu
- `{{DECK_NAV_LABEL}}` — small label on the right side of the top nav (e.g., "Q4 2026 · Internal")
- `{{HERO_EYEBROW}}` — short uppercase kicker above the headline
- `{{HERO_HEADLINE}}` — the big coral headline on the first slide
- `{{HERO_SUBTITLE}}` — one-sentence subtitle
- `{{META_1/2/3}}` — short tags under the hero (date, venue, author, version)
- `{{CLOSING_HEADLINE}}` / `{{CLOSING_SUBTITLE}}` — final slide

Then edit the middle sections:

1. **Decide the section list.** Pick the section templates for this deliverable type from `references/section-templates.md`.
2. **Alternate dark and orange sections** for rhythm. Never put two `.orange-section` blocks back-to-back. A typical flow is dark, dark, orange, dark, orange, dark, closing.
3. **Give every section a unique `id`.** The id is what the hamburger menu links to.
4. **Update the `<ul>` in the side nav** so its `<li>` entries match the section list 1:1, in order, with sequential two-digit numbers (`01`, `02`, …).
5. **Sprinkle `fade-up` / `fade-left` / `fade-right` / `scale-in`** on content blocks and add `stagger-1` through `stagger-8` to cascade the reveal. Headers get `stagger-1`, body copy `stagger-2`, cards/rows `stagger-3+`.

### Step 4 — Pick components from references

The base template ships with the common components. For anything more specific (heatmap, weight bars, flow diagrams, matrix tables, persona cards, solution bridges, etc.), consult:

- `references/design-tokens.md` — full palette, typography scale, spacing, the meaning of each semantic color
- `references/components.md` — ready-to-paste HTML for every reusable component that isn't in the base template
- `references/animations.md` — all keyframe animations, the scroll-reveal pattern, and when to use each
- `references/section-templates.md` — per-deliverable-type section outlines (algorithm deck, after-action report, PRD, BRD, release notes, event report, pitch deck, status report, demo report)
- `assets/_full-css.css` — the full CSS from the reference SXSW deck. Copy advanced component styles from here (heatmap, flowchart, matrix table, solution bridge, persona grids) rather than rewriting them.
- `assets/_full-js.js` — the full JS for advanced interactions (counter animation, weight-bar fill, etc.)

Read only what you need. The base `template.html` + `design-tokens.md` is enough for most reports; reach for `components.md` only when you need something beyond the basics.

### Step 5 — Write real content, not lorem ipsum

- Pull from the user's source material (files, transcripts, notes, meeting outputs). If content is missing, ask.
- Never fabricate metrics, quotes, people, or dates.
- Keep copy tight. Hero headlines are 3–7 words. Section titles 2–8 words. Card titles ≤6 words. Body copy 1–3 sentences per block.
- Use sentence case everywhere except eyebrow labels (UPPERCASE) and stat labels (UPPERCASE).

### Step 6 — Save and validate

1. Save the finished HTML file(s) to the Cowork outputs folder, named after the deliverable. If generating multiple directions, save each with its suffix (e.g., `q4-event-report-visual.html`, `q4-event-report-moderate.html`, `q4-event-report-text.html`).
2. **Every file MUST start with `<!DOCTYPE html>`** on the first line — Swolvy (and browsers) reject HTML without a doctype. The base `template.html` already has this; don't remove it.
3. Run a quick HTML tag-balance check on each file — every deck should parse cleanly. A simple Python `html.parser` validator is enough; report any unclosed tags and fix them.
4. Share all file(s) to the user with `computer://` links. When sharing multiple directions, clearly label each one (e.g., "Heavy Visuals", "Moderate", "Text-Heavy").

### Step 7 — Ask about Swolvy upload

Once all HTML files are saved and validated, **always ask the user** whether they want to upload to Swolvy for shareable links. Use `AskUserQuestion` with these choices:

- **Yes, upload all files and share links** (most common — gives a public `swolvy.com/<id>` URL per file)
- **Yes, upload with a password** (ask them for the password next)
- **No, keep them local only**

If they pick upload, also confirm the display names. When multiple directions were generated, upload each one separately so the user gets a distinct Swolvy link per direction. Then proceed to Step 8.

### Step 8 — Upload to Swolvy (only if the user said yes)

Swolvy is Blink's HTML viewer service. It exposes a single REST endpoint that takes a full HTML document and returns a shareable link. **Do not use MCP tools for this — use a direct HTTP POST via `curl` or Python `requests`.** See `references/swolvy-upload.md` for the full protocol, the two hard rules, and copy-pasteable snippets.

The two non-negotiable rules:

1. **Use `curl` or `requests`.** Python's stdlib `urllib` has been observed to return 403 because of its default headers — `curl` works every time. `requests` also works.
2. **The HTML must start with `<!DOCTYPE html>`.** Swolvy strictly validates that the payload is a real HTML document. Anything else returns `"File does not appear to be a valid HTML document"`. The base template already includes the doctype — never strip it.

After a successful upload, share the returned `url` with the user and save the `edit_token` somewhere they can see it (so they can update the same page later via `replace_id` + `replace_edit_token`).

## Style rules — the short list

1. **Presentation-scale sizing.** The template is designed for screen-sharing and large displays. All font sizes, paddings, and element dimensions are scaled up for legibility at a distance. Hero headlines reach `clamp(72px, 9vw, 130px)`, section titles `clamp(52px, 6vw, 88px)`, body text is `22–28px`, stat values `clamp(60px, 7vw, 96px)`. **Do not shrink these values** — they are intentionally large. When adding custom elements, match this scale.
2. **Dark background, coral focal points.** `--dark` (#111827) is the canvas, `--coral` (#e8845c) draws the eye. Never put two colors at equal visual weight.
2. **Blink logo only in the top nav.** Do not scatter it into sections.
4. **Orange sections are breakers.** Use them to change the rhythm, not as the default background.
5. **One big idea per section.** Every section starts with a label, a title, and optionally a subtitle — then the content block.
6. **Animations are micro.** `fade-up` + small stagger. Don't chain heavy effects. Never animate the entire section — animate the children.
7. **Real data only.** No fake numbers in a real deliverable. If a placeholder is needed for a draft, label it clearly (e.g., `[TBD]`).
8. **Everything is reachable from the side nav.** Every section gets an id and a corresponding `<li>` in the hamburger menu.
9. **Print-ready.** Don't break the `@media print` block — it's what lets finance/legal/clients export to PDF cleanly.

## Do not

- Don't swap the color palette for a "new accent". The brand is coral.
- Don't remove the hamburger menu, top nav, or progress bar.
- Don't use external CSS frameworks (Tailwind, Bootstrap). All styles live in the `<style>` block.
- Don't change the Blink logo URL. It resolves to the official Cloudinary asset.
- Don't lean on emojis for iconography. Use inline SVG, unicode glyphs sparingly, or CSS shapes.
- Don't embed images from random URLs. If an illustration is needed, build it with inline SVG.

## Example trigger prompts

- "Write an after-action report for the SXSW London activation, use our company style" → use this skill, pull from `references/section-templates.md` → after-action report layout.
- "Draft a PRD for the new onboarding flow" → use this skill, PRD layout.
- "I need a release notes page for version 2.4" → use this skill, release-notes layout.
- "Make me a deck explaining our matchmaking algorithm" → use this skill, algorithm deck layout.
- "Summarize the demo for internal sharing" → use this skill, demo report layout.
- "Put together a pitch for the board about Q1 strategy" → use this skill, pitch deck layout.
