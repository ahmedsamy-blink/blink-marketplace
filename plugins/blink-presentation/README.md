# Blink Presentation Plugin

The official Blink style system for HTML presentations, reports, and long-form documents. Install this once and every deliverable Claude creates for you will look like it came out of the same design team — same logo, same colors, same animations, same hamburger navigation.

## What it gives you

A single skill — `blink-presentation` — that triggers whenever you ask Claude to create a deck, report, PRD, BRD, release note, event recap, demo report, or any scrollable HTML document.

Claude will:

- Start from a ready-made template with the Blink logo baked in
- Use the Blink palette (dark background, coral accents, orange breaker sections)
- Add a hamburger side navigation menu that jumps to any section
- Include a scroll progress bar across the top
- Add micro-animations (fade-up, stagger, scroll-reveal) on headlines, cards, and stats
- Save the output as HTML ready for sharing, printing, or uploading

## How to use it

Just ask for what you want, in your own words. Any of these will trigger the skill:

- "Draft a PRD for the new onboarding flow"
- "Write an after-action report for the Q4 launch"
- "Make an internal deck explaining the new pricing model"
- "Create release notes for version 2.4"
- "Put together an event recap for SXSW London, use our company style"
- "Generate a BRD for the Q1 expansion plan"
- "Build a one-pager about our matchmaking algorithm"

Claude will ask any clarifying questions (audience, scope, source material), then produce an HTML file in your outputs folder and share a link.

## Supported deliverable types

The skill has built-in section layouts for:

- Algorithm / technical deep-dive
- After-action report (AAR)
- Event report
- Release notes / release report
- Demo report
- Project / status report
- Metrics review
- PRD (Product Requirements Document)
- BRD (Business Requirements Document)
- Pitch / sales deck
- One-pager

If your ask doesn't fit any of these, Claude will improvise from the same component library so the output still looks consistent.

## What's inside

```
blink-presentation/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   └── blink-presentation/
│       ├── SKILL.md               ← instructions for Claude
│       ├── assets/
│       │   ├── template.html      ← lean ready-to-fill skeleton
│       │   ├── _full-css.css      ← full reference CSS (52KB)
│       │   └── _full-js.js        ← full reference JS (counters, bar fills)
│       └── references/
│           ├── design-tokens.md   ← palette, typography, spacing
│           ├── components.md      ← copy-paste component HTML
│           ├── animations.md      ← reveal classes, staggers, keyframes
│           └── section-templates.md ← section outlines per deliverable type
└── README.md
```

## Installing

1. Double-click `blink-presentation.plugin` in Cowork (or drag it into the chat)
2. Accept the install prompt
3. Done — the skill will now trigger automatically on relevant requests

Every employee installs it once and works the same way.

## Updating

When the style system evolves, republish the plugin with a bumped version in `plugin.json` (0.1.0 → 0.2.0). Users re-install the new `.plugin` file and the old one is replaced.

## Brand rules (short version)

The skill enforces these for you, but it helps to know them:

1. Dark background (`#111827`) is the canvas. Coral (`#e8845c`) is the accent.
2. Orange sections (`#e08c5e`) are breakers — use them to change rhythm, not as default.
3. The Blink logo lives only in the top nav. Don't scatter it.
4. One big idea per section. Every section has an eyebrow label, a title, and content.
5. Animations are micro — fade-up with stagger. No big bouncy effects.
6. Real data only. No lorem ipsum in shipped deliverables.
7. Every section is reachable from the hamburger nav.
8. Everything must print cleanly for PDF export.
