# Blink Design Tokens

The canonical values used across every Blink presentation. If the base template gets extended, keep these names and values unchanged.

## Palette

| Token           | Hex        | Role                                                           |
| --------------- | ---------- | -------------------------------------------------------------- |
| `--dark`        | `#111827`  | Primary background (every dark section + nav)                  |
| `--dark-card`   | `#1a2236`  | Surface for cards, callouts, side nav                          |
| `--coral`       | `#e8845c`  | Primary accent — headlines, highlights, focal stats            |
| `--coral-light` | `#f0a07e`  | Coral gradient partner                                         |
| `--orange-bg`   | `#e08c5e`  | Full-bleed background for `.orange-section` breakers           |
| `--teal`        | `#7dd4c0`  | Secondary accent — "system" or "process" phases                |
| `--purple`      | `#a78bfa`  | Tertiary accent — "output" or "result" phases                  |
| `--green`       | `#34d399`  | Positive / solution / success states                           |
| `--red`         | `#f87171`  | Negative / break / error states                                |
| `--white`       | `#ffffff`  | Primary text on dark                                           |
| `--gray`        | `#9ca3af`  | Secondary text, meta labels                                    |
| `--light-gray`  | `#d1d5db`  | Tertiary text, borders                                         |

**Rule of thirds**: any deck should read as roughly 70% dark, 20% coral/coral-light, 10% accent (teal/purple/green/red). Orange breaker sections count toward the 70/20 but invert the text-on-background logic.

## Typography

**Font family**: Inter (Google Fonts). Fallback: `-apple-system, sans-serif`. Weights 300–900 imported.

| Role              | Size                    | Weight | Letter-spacing | Notes                                |
| ----------------- | ----------------------- | ------ | -------------- | ------------------------------------ |
| Hero headline     | `clamp(52px, 7vw, 96px)`| 900    | `-2px`         | Always coral                         |
| Section title     | `clamp(36px, 4.5vw, 64px)` | 800 | `-1.5px`       | White on dark, dark on orange        |
| Closing headline  | `clamp(40px, 5vw, 72px)`| 900    | `-2px`         | Always coral                         |
| Card title        | 22px                    | 700    | normal         | Coral                                 |
| Callout text      | 17px                    | 500    | normal         | White                                 |
| Hero subtitle     | 22px                    | 400    | normal         | Gray                                  |
| Section description | 20px                  | 400    | normal         | Gray, max-width 600px                |
| Body / card text  | 15px                    | 400    | normal         | Gray, line-height 1.65                |
| Eyebrow label     | 13px                    | 600    | `3px`          | UPPERCASE, coral                      |
| Stat value        | `clamp(42px, 5vw, 68px)`| 900    | `-1.5px`       | Coral                                 |
| Stat label        | 13px                    | 600    | `2px`          | UPPERCASE, gray                       |
| Meta / caption    | 12–13px                 | 600    | `1–2px`        | UPPERCASE where used                  |

## Spacing

- **Section padding**: `140px 100px 100px` on desktop; `120px 40px 60px` tablet; `100px 24px 48px` mobile.
- **Max content width**: `1720px` for dark sections; `.orange-section` is full-bleed.
- **Card padding**: `36px`. Card border-radius: `16px`.
- **Grid gaps**: `24px` for cards grids, `80px` for two-col layouts, `32px` for stat rows.
- **Vertical rhythm inside a section**: `16px` between label and title, `24px` between title and divider, `40px` between divider and content.

## Elevation / borders

- Dark cards always have a subtle coral-tinted border: `1px solid rgba(232, 132, 92, 0.1)`, hover to `0.3`.
- White cards (used on orange sections) have `1px solid rgba(255,255,255,0.6)`.
- Hover lift: `translateY(-4px)` + `box-shadow: 0 16px 48px rgba(0,0,0,0.3)`.

## Radii

- Cards: `16px`
- Large containers (result boxes, algo cards): `20px`
- Small pills and badges: `20–24px` (pill-style)
- Side nav toggle: `0 10px 10px 0`

## Gradients

- **Progress bar** — `linear-gradient(90deg, var(--coral), var(--coral-light))`
- **Weight bars** — same as progress bar
- **Divider** — `linear-gradient(90deg, var(--coral) 0%, transparent 100%)`
- **Tinted card backgrounds** (by phase) — `linear-gradient(180deg, var(--dark-card), rgba(PHASE_RGB, 0.04))`

## Logo

Always use the Blink Cloudinary URL — never swap it for a local file:

```
https://res.cloudinary.com/blinkapp/image/upload/q_auto/f_auto/v1771855482/blinkdemo/logos/logo_dark.png
```

Height `32px` in the top nav. Width `auto`. Never resize, tint, or drop-shadow the logo.
