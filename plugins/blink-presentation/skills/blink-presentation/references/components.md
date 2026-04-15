# Blink Components

Ready-to-paste HTML snippets for components beyond what's already in `assets/template.html`. Each snippet uses the design tokens from `:root`. Copy the HTML and, where marked, copy the matching CSS block from `assets/_full-css.css` into your `<style>` block.

## Table of contents

1. Hero variants
2. Section header + divider
3. Cards (dark default, white on orange, numbered)
4. Callout
5. Stats and KPI rows
6. Pipeline (4-stage horizontal flow)
7. Weight bars (animated horizontal bars)
8. Pill badges (status, priority, persona)
9. Matrix table (data-heavy rows)
10. Heatmap grid (color-coded cells)
11. Flowchart with phases (zigzag rows, icon cards, arrows)
12. Timeline (vertical, time-anchored)
13. Solution/bridge layout (three pillars + config flow + mapping)
14. Stat delta (up/down with color)
15. Quote block
16. Comparison side-by-side
17. Icon circles (coral, teal, purple, red)
18. Orange breaker section

---

## 1. Hero variants

### Standard hero (already in template.html)

```html
<section class="hero" id="hero">
  <div class="hero-label fade-up stagger-1">EVENT REPORT · Q4 2026</div>
  <h1 class="fade-up stagger-2">SXSW London<br>2026 Recap</h1>
  <p class="hero-sub fade-up stagger-3">What worked, what didn't, and where we go next.</p>
  <div class="hero-meta fade-up stagger-4">
    <div class="hero-meta-item">12 Days</div>
    <div class="hero-meta-item">4,200 Attendees</div>
    <div class="hero-meta-item">Internal</div>
  </div>
  <div class="scroll-hint"><div>Scroll</div><div class="arrow"></div></div>
</section>
```

### Centered hero (for pitch decks / closing)

Use the `.closing` class — same pattern, just centered and no metadata row.

---

## 2. Section header

```html
<div class="section-label fade-up stagger-1">Chapter 02</div>
<h2 class="section-title fade-up stagger-2">Real-world<br>impact</h2>
<div class="divider"></div>
<p class="section-desc fade-up stagger-3">One-sentence summary of the section.</p>
```

`<br>` inside the title is fine — it controls line breaks at large sizes. Keep titles to 2 lines max.

---

## 3. Cards

### Default dark card

```html
<div class="cards-grid">
  <div class="card fade-up stagger-1">
    <div class="card-num">01</div>
    <div class="card-title">Discovery</div>
    <div class="card-text">One to three sentences explaining the item.</div>
  </div>
  <!-- repeat -->
</div>
```

### White card on orange section

```html
<section class="orange-section">
  <!-- section header -->
  <div class="cards-grid">
    <div class="white-card fade-up stagger-1">
      <h3>Engagement</h3>
      <p>Short description in darker body copy.</p>
    </div>
  </div>
</section>
```

### Numbered card with big index

```html
<div class="card fade-up stagger-1" style="position: relative; overflow: hidden;">
  <div style="position: absolute; top: 16px; right: 20px; font-size: 64px; font-weight: 900; color: rgba(232,132,92,0.06); line-height: 1;">01</div>
  <div class="card-title">Plan</div>
  <div class="card-text">Sentence describing the step.</div>
</div>
```

---

## 4. Callout

```html
<div class="callout fade-up stagger-4">
  <div class="callout-icon">&#9733;</div>
  <div class="callout-text">
    Key insight — the thing you want the reader to remember.
    <span>Emphasized phrase.</span>
  </div>
</div>
```

Icon options: `&#9733;` (star), `&#9889;` (bolt), `&#10003;` (check), `&#9888;` (warning), or inline SVG.

---

## 5. Stats and KPI rows

```html
<div class="stat-row">
  <div class="stat fade-up stagger-1">
    <div class="stat-value">4,208</div>
    <div class="stat-label">Attendees</div>
  </div>
  <div class="stat fade-up stagger-2">
    <div class="stat-value">92%</div>
    <div class="stat-label">Match Rate <span class="stat-delta up">+14%</span></div>
  </div>
  <div class="stat fade-up stagger-3">
    <div class="stat-value">£1.4M</div>
    <div class="stat-label">Revenue Impact</div>
  </div>
</div>
```

---

## 6. Pipeline

4–6 stages in a horizontal row with numbered dots.

```html
<div class="pipeline">
  <div class="stage fade-up stagger-1">
    <div class="stage-dot">1</div>
    <div class="stage-title">Discover</div>
    <div class="stage-desc">Quick sentence on what happens here.</div>
  </div>
  <!-- repeat stages -->
</div>
```

---

## 7. Weight bars

Animated horizontal bars for weightings, percentages, relative scores. Copy the `.weight-row`, `.weight-bar-bg`, `.weight-bar-fill`, `.weight-pct`, and `.priority-*` styles from `_full-css.css`.

```html
<div class="weight-row">
  <div class="weight-label">Industry</div>
  <div class="weight-bar-bg">
    <div class="weight-bar-fill" style="width: 27%;"></div>
  </div>
  <div class="weight-pct">27%</div>
  <div class="weight-priority priority-high">High</div>
</div>
```

Animate by starting `width: 0` in HTML and setting the target width via JS when the container enters the viewport — see `_full-js.js` for the pattern.

---

## 8. Pill badges

```html
<!-- Status -->
<span class="seg-badge seg-music">Music</span>
<span class="seg-badge seg-screen">Screen</span>
<span class="seg-badge seg-conf">Conference</span>

<!-- Persona -->
<span class="persona-badge pb-user">User Persona</span>
<span class="persona-badge pb-target">Target Persona</span>

<!-- Outcome -->
<span class="ok-badge">&#10003; On track</span>
<span class="break-badge">&#9888; Blocker</span>
```

Copy `.seg-badge`, `.persona-badge`, `.ok-badge`, `.break-badge` from `_full-css.css`.

---

## 9. Matrix table

Use for dense comparison rows. The base style is in `_full-css.css` as `.matrix-table-wrap` and `.matrix-table`. Wrap in `.matrix-table-wrap` for horizontal scroll on narrow screens.

```html
<div class="matrix-table-wrap">
  <table class="matrix-table">
    <thead>
      <tr><th>Persona</th><th>Segment</th><th>Best Matches</th></tr>
    </thead>
    <tbody>
      <tr>
        <td class="persona-cell">Musicians</td>
        <td><span class="seg-badge seg-music">Music</span></td>
        <td>Producers, Directors, Filmmakers</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## 10. Heatmap grid

Color-coded grid for scoring matrices. Copy `.heatmap-wrap`, `.heatmap`, `.hm-1..5` from `_full-css.css`.

```html
<div class="heatmap-wrap">
  <table class="heatmap">
    <thead>
      <tr><th></th><th>Col 1</th><th>Col 2</th></tr>
    </thead>
    <tbody>
      <tr>
        <th class="row-header">Row 1</th>
        <td class="hm-5">5</td>
        <td class="hm-3">3</td>
      </tr>
    </tbody>
  </table>
</div>
<div class="heatmap-legend">
  <div class="legend-item"><div class="legend-swatch hm-5"></div>Strong</div>
  <div class="legend-item"><div class="legend-swatch hm-3"></div>Moderate</div>
  <div class="legend-item"><div class="legend-swatch hm-1"></div>Weak</div>
</div>
```

---

## 11. Flowchart with phases

Complex multi-phase flow with icon cards, arrows, and bridges. See the "FLOWCHART v2 — Zigzag Phase Layout" CSS block in `_full-css.css` (starts around the `.fc-wrap` selector). Usage:

```html
<div class="fc-wrap">
  <div class="fc-section">
    <div class="fc-phase">
      <div class="fc-phase-badge fpb-user">User</div>
      <div class="fc-phase-line"></div>
    </div>
    <div class="fc-row">
      <div class="fc-card">
        <div class="fc-ico fci-coral"><!-- svg --><div class="fc-num">1</div></div>
        <div class="fc-card-title">Sign up</div>
        <div class="fc-card-sub">User creates an account.</div>
      </div>
      <div class="fc-arrow"></div>
      <div class="fc-card">…</div>
    </div>
  </div>
  <div class="fc-bridge"></div>
  <div class="fc-section fcs-system"><!-- next phase --></div>
</div>
```

Phase colors: `fpb-user`/`fci-coral` (coral), `fpb-system`/`fci-teal` (teal), `fpb-output`/`fci-purple` (purple), `fpb-break`/`fci-red` (red for errors).

---

## 12. Timeline

```html
<div style="position: relative; padding-left: 40px;">
  <!-- Vertical line -->
  <div style="position: absolute; left: 12px; top: 8px; bottom: 8px; width: 2px; background: linear-gradient(180deg, var(--coral), rgba(232,132,92,0.1));"></div>

  <div class="fade-up stagger-1" style="position: relative; margin-bottom: 36px;">
    <div style="position: absolute; left: -34px; top: 4px; width: 16px; height: 16px; border-radius: 50%; background: var(--dark); border: 2px solid var(--coral);"></div>
    <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: var(--coral);">Week 1</div>
    <div style="font-size: 18px; font-weight: 700; color: var(--white); margin-top: 6px;">Discovery kick-off</div>
    <div style="font-size: 14px; color: var(--gray); margin-top: 6px; line-height: 1.6;">Sentence describing the milestone.</div>
  </div>
  <!-- Repeat -->
</div>
```

---

## 13. Solution / bridge layout

Three pillars + config flow + mapping + result. See the `.sol-*` classes in `_full-css.css`. Use for "here's how we'll actually do it" sections.

```html
<div class="sol-hero">
  <div class="sol-hero-badge">&#10003; AGREED APPROACH</div>
</div>
<div class="sol-pillars">
  <div class="sol-pillar fade-up stagger-1">
    <div class="sol-pillar-num">01</div>
    <div class="sol-pillar-ico"><!-- svg --></div>
    <h4>Define</h4>
    <p>Short description.</p>
  </div>
  <!-- repeat -->
</div>
<div class="sol-config-flow">
  <div class="sol-config-step">
    <div class="step-num">1</div>
    <h5>Step title</h5>
    <p>Short description.</p>
  </div>
  <div class="sol-config-arrow"></div>
  <!-- repeat -->
</div>
```

---

## 14. Stat delta

Inline up/down indicator next to stats.

```html
<span class="stat-delta up">+14%</span>
<span class="stat-delta down">-3%</span>
```

Styles are in `template.html`.

---

## 15. Quote block

```html
<div class="callout fade-up" style="padding: 40px 48px;">
  <div class="callout-icon" style="font-size: 42px; color: var(--coral); opacity: 0.6;">&ldquo;</div>
  <div class="callout-text" style="font-size: 20px; font-style: italic; line-height: 1.6;">
    A verbatim quote from a user or stakeholder — keep it short.
    <div style="font-size: 13px; font-style: normal; color: var(--gray); margin-top: 14px; letter-spacing: 1px; text-transform: uppercase;">— Name, Title</div>
  </div>
</div>
```

---

## 16. Comparison side-by-side

```html
<div class="two-col">
  <div class="fade-left">
    <div class="section-label" style="color: var(--red);">Before</div>
    <h3 style="font-size: 24px; margin-top: 8px;">Old approach</h3>
    <p style="color: var(--gray); margin-top: 12px; line-height: 1.7;">Description.</p>
  </div>
  <div class="fade-right">
    <div class="section-label" style="color: var(--green);">After</div>
    <h3 style="font-size: 24px; margin-top: 8px;">New approach</h3>
    <p style="color: var(--gray); margin-top: 12px; line-height: 1.7;">Description.</p>
  </div>
</div>
```

---

## 17. Icon circles

Small icon containers with colored borders. Use inline SVG for the icon.

```html
<div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(232,132,92,0.1); border: 2px solid rgba(232,132,92,0.25); display: flex; align-items: center; justify-content: center;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--coral);">
    <circle cx="12" cy="12" r="10"/>
    <path d="M12 6v6l4 2"/>
  </svg>
</div>
```

Swap `rgba(232,132,92,...)` for `rgba(125,212,192,...)` (teal), `rgba(167,139,250,...)` (purple), `rgba(52,211,153,...)` (green), or `rgba(239,68,68,...)` (red) to change the phase color.

---

## 18. Orange breaker section

```html
<section class="orange-section" id="highlights">
  <div class="section-label fade-up stagger-1">HIGHLIGHTS</div>
  <h2 class="section-title fade-up stagger-2">What moved the needle</h2>
  <p class="section-desc fade-up stagger-3">One sentence framing the breaker.</p>

  <div class="stat-row">
    <!-- stats here — values will render in --dark since we inverted -->
  </div>
</section>
```

On orange, text defaults flip: labels stay coral-ish but most body copy becomes dark. Use `.white-card` instead of `.card` for any card blocks.

---

## When to reach for `_full-css.css`

The base template covers ~60% of what a typical deck needs. Copy from `_full-css.css` when you need:

- `.heatmap` / `.matrix-table` — data-heavy tables
- `.fc-*` flowchart — multi-phase process diagrams
- `.sol-*` — agreed-approach / solution sections
- `.weight-*` — animated bar charts
- `.persona-card` / `.scoring-columns` — persona or field catalogs
- Any of the advanced keyframes (`orbit`, `tilt`, `chain-*`, etc.) from `animations.md`

Paste only the blocks you need. Don't dump the entire 52KB file into every deck — keep outputs lean.
