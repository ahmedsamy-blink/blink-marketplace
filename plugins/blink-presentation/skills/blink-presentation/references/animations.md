# Blink Animations & Micro-interactions

The base template loads an IntersectionObserver that adds `.visible` to any element with one of the reveal classes. You don't need to wire anything up — just add the class.

## Scroll-reveal classes

Add these to any element that should animate as it scrolls into view:

| Class        | Effect                                  | Use for                                           |
| ------------ | --------------------------------------- | ------------------------------------------------- |
| `fade-up`    | Fades + slides 40px upward into place   | Headlines, body copy, cards, default for most     |
| `fade-left`  | Slides from 40px left                   | Items entering from the left in two-col layouts   |
| `fade-right` | Slides from 40px right                  | Items entering from the right                     |
| `scale-in`   | Scales from 0.92 → 1 with fade          | Stat values, key visuals, hero illustrations      |

Timing: `0.8s cubic-bezier(0.16, 1, 0.3, 1)` — a long, gentle ease-out curve. Do not change this.

## Stagger classes

Combine with any reveal class to delay the start so children cascade instead of popping in together:

```
stagger-1  → +0.05s
stagger-2  → +0.12s
stagger-3  → +0.20s
stagger-4  → +0.28s
stagger-5  → +0.36s
stagger-6  → +0.44s
stagger-7  → +0.52s
stagger-8  → +0.60s
```

**Conventional usage inside a section:**

1. Eyebrow label → `stagger-1`
2. Section title → `stagger-2`
3. Description → `stagger-3`
4. First card / row → `stagger-3` or `stagger-4`
5. Subsequent cards → `stagger-4`, `stagger-5`, …

Don't use stagger values beyond `stagger-8`. If you need more delay, break the section into multiple observed groups.

## Hero pulsing rings

The hero section has two decorative pulsing circles drawn via `::before` and `::after` pseudo-elements with the `pulse-ring` keyframe. They animate at 8s intervals, offset by 2s. Do not remove them — they're a brand signature.

```css
@keyframes pulse-ring {
  0%, 100% { transform: scale(1); opacity: 1; }
  50%      { transform: scale(1.08); opacity: 0.5; }
}
```

## Scroll hint

The chevron at the bottom of the hero floats with a 2.5s `float` keyframe. Only use it on the hero — never on later sections.

## Progress bar

3px coral gradient bar pinned to the top. Driven by a scroll listener that sets `width` based on `scrollY / (scrollHeight - innerHeight)`. Do not add delay — 0.15s ease-out is tight enough to feel responsive.

## Hamburger side nav

The menu toggle is the three horizontal bars that animate into an X when open (`span:nth-child(1)` rotates 45deg, middle bar fades, third rotates -45deg). Keep the same class names (`menu-toggle`, `side-nav`, `menu-backdrop`) so the scroll-sync logic in the template JS continues to work.

## Hover interactions

- **Cards** — `translateY(-4px)` + `box-shadow` increase + border color brightens from `rgba(232,132,92,0.1)` to `rgba(232,132,92,0.3)`.
- **White cards** — `translateY(-3px)` + `box-shadow` increase + background opacity `0.92 → 1`.
- **Stage dots** — `scale(1.1)` + background fills with coral, text color flips to white.
- **Side nav links** — background tints, left border lights up, padding shifts right by 4px.

## Counter animation (advanced)

For big numbers that should count up when they enter the viewport, use the pattern from `assets/_full-js.js` — an IntersectionObserver triggers a `requestAnimationFrame` loop that writes the counted value to `textContent`. Only use this for one or two hero numbers per deck, never for every stat.

## Weight-bar fill (advanced)

Animated horizontal bars (e.g., field weightings) use `width: 0` + `transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1)` and get their final width set by JS when the container scrolls into view. See `_full-js.js` for the exact pattern.

## Advanced keyframes (from the reference deck)

These live in `assets/_full-css.css`. Copy them into your page's `<style>` block only if you need them:

- `pulse-out` — expanding glow rings
- `pulse-glow` — soft blur pulse for loading / ambient
- `orbit`, `orbit-reverse`, `orbit-slow` — circling dots around a central point
- `proximity` / `proximity-b` — two nodes moving toward each other
- `spark` — rapid scale + opacity flicker for energy/connection moments
- `dash-flow` / `connection-flow` — animated dashed line (SVG)
- `tilt` / `weight-drop-l` / `weight-drop-r` — balance-scale animation
- `chain-left` / `chain-right` / `warning-flash` — broken-chain visual
- `morph-blob` — slow organic blob shape-shift
- `draw-line` — SVG path draw-in
- `starburst-rotate` / `starburst-pulse` — ambient background starburst

## Rules

1. **Everything is a micro-interaction.** No big bouncy effects, no parallax, no confetti.
2. **Animate children, not sections.** Giving an entire `<section>` a `fade-up` creates a weird lurch. Target its headline, description, cards, etc. individually.
3. **Stagger is a cascade, not a race.** Don't compress delays below the values above.
4. **Respect `prefers-reduced-motion`** when adding new animations (the base template doesn't enforce this yet — add `@media (prefers-reduced-motion: reduce) { ... }` if your content uses heavy effects).
5. **Disable animations in print.** The print stylesheet already forces `opacity: 1; transform: none` on all reveal classes. Don't override this.
