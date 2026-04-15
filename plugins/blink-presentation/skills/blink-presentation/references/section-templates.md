# Section Templates by Deliverable Type

Pre-baked section outlines for each common Blink deliverable. Pick the layout that matches the user's ask, adapt section titles to their content, and drop each section into the `template.html` skeleton.

Every template below assumes the base template's hero + top nav + side nav + closing are already in place. You just fill in the middle sections and update the hamburger `<ul>` to match.

## Contents

1. Algorithm / technical deep-dive
2. After-action report (AAR)
3. Event report
4. Release notes / release report
5. Demo report
6. Project / status report
7. Metrics review
8. PRD (product requirements doc)
9. BRD (business requirements doc)
10. Pitch / sales deck
11. One-pager

---

## 1. Algorithm / technical deep-dive

Use for explaining how a model, scoring system, pipeline, or algorithm works. Pattern borrowed from the SXSW matchmaking reference deck.

Sections in order:

1. **Hero** — "How [X] works" + 1-line subtitle + 3 hero-meta chips
2. **Overview** — "Not just a list. Smart matches." — one dark section with `.cards-grid` listing 3 principles
3. **Input surface** — one dark section explaining what data the algorithm sees (use `.scoring-columns` or `.cards-grid`)
4. **Orange breaker: "Close enough still counts"** — one orange section explaining fuzzy vs exact matching (use `.two-col` with an SVG illustration)
5. **Pipeline stages** — one dark section with `.pipeline` (3–5 numbered stages) + a `.callout` summarizing the end
6. **Weightings** — one dark section with animated `.weight-row` bars showing field importance
7. **Orange breaker: Who meets who** — persona or entity grid (`.persona-grid` or `.cards-grid`)
8. **Matrix** — scrollable `.matrix-table` or `.heatmap` with the raw scoring data
9. **End-to-end flow** — one dark section with the `.fc-*` flowchart showing all phases
10. **Worked example** — one dark section with an `.example-box` showing real inputs → final score
11. **Orange breaker: Key benefits** — 3 `.white-card` blocks
12. **Closing** — "Smarter [x], better [y]"

---

## 2. After-action report (AAR)

Post-event or post-launch retrospective. Honest wins + misses + lessons.

Sections in order:

1. **Hero** — "[Event name] — After-action report" + dates + author
2. **Executive summary** — dark section with `.callout` summarizing the outcome in 2–3 sentences + top-level stats in `.stat-row`
3. **What we set out to do** — goals and success criteria as numbered `.cards-grid`
4. **Orange breaker: The result** — big hero number in `.stat` style + supporting 3–4 stats
5. **Timeline** — vertical timeline of key milestones (see components.md §12)
6. **What worked** — green-accented `.cards-grid`, 3–4 cards
7. **What didn't** — red-accented `.cards-grid`, 3–4 cards (same layout mirrored, different border tint)
8. **Orange breaker: Root causes** — `.two-col` contrasting surface symptom vs root cause for each issue
9. **Lessons learned** — `.cards-grid` of 3–5 takeaways with a numbered index
10. **Next actions** — `.pipeline` of 3–5 concrete next steps
11. **Closing** — "Better next time." + one-line reflection

---

## 3. Event report

Recap of an external event (conference, activation, booth, etc.).

Sections in order:

1. **Hero** — event name + dates + location + attendee count in hero-meta
2. **At a glance** — dark `.stat-row` with attendees / sessions / partners / revenue impact
3. **Orange breaker: Highlights** — 3–6 `.white-card` blocks with short moments
4. **Program** — `.matrix-table` of sessions, speakers, attendance
5. **Audience** — demographic / persona breakdown as `.cards-grid` or `.heatmap`
6. **Orange breaker: Standout moments** — photo grid or stat cards
7. **Partner / sponsor impact** — `.two-col` with partners listed + their logos (if available)
8. **What we'd change** — short `.cards-grid` of 2–3 improvements
9. **Next event** — `.callout` teasing what's next
10. **Closing**

---

## 4. Release notes / release report

Version release summary.

Sections in order:

1. **Hero** — "Version X.Y.Z" as the headline, release date in meta, short tagline
2. **Overview** — `.callout` stating the theme of the release in one sentence
3. **What's new** — `.cards-grid` with each major feature as a numbered card
4. **Orange breaker: By the numbers** — release stats (issues closed, PRs merged, lines changed, contributors, performance deltas) in `.stat-row`
5. **Improvements** — list of smaller enhancements as a compact `.cards-grid` or `.matrix-table` (2 columns: feature, impact)
6. **Fixes** — same layout for bug fixes
7. **Breaking changes** — red-accented `.callout` if any, otherwise `ok-badge` saying none
8. **Upgrade path** — `.pipeline` of 3–5 steps to update
9. **Closing** — "What's next" teaser

---

## 5. Demo report

Internal recap of a sales/stakeholder demo.

Sections in order:

1. **Hero** — "[Company] demo recap" + date + attendees count + presenter
2. **The ask** — dark section, one sentence + 3 bullet `.cards-grid` of what they wanted to see
3. **What we showed** — `.pipeline` of 3–5 demo stops
4. **Orange breaker: Reactions** — pull-quote `.callout` blocks (see components.md §15) from the room
5. **Questions raised** — `.matrix-table` or numbered `.cards-grid` of questions + status (answered / follow-up)
6. **Decisions made** — green `.ok-badge` list of agreed items
7. **Next steps** — `.pipeline` of 3–5 concrete follow-ups with owners
8. **Closing**

---

## 6. Project / status report

Regular project status (weekly, monthly).

Sections in order:

1. **Hero** — project name + reporting period + status color (green/yellow/red badge)
2. **Status summary** — `.callout` with one-sentence state-of-the-project
3. **Orange breaker: This period's numbers** — `.stat-row` with 3–4 KPIs and `.stat-delta` indicators
4. **What shipped** — `.cards-grid` of completed items
5. **In progress** — `.cards-grid` with % complete
6. **Blocked / at risk** — red-accented `.cards-grid` — only include if there's real content
7. **Next period priorities** — `.pipeline` of top 3–5 items
8. **Risks & decisions needed** — short `.matrix-table` listing risks and what's needed from whom
9. **Closing**

---

## 7. Metrics review

Data-focused review of a product/area.

Sections in order:

1. **Hero** — "[Area] metrics — [period]"
2. **Headline numbers** — dark `.stat-row` with the 3–4 most important metrics
3. **Orange breaker: What moved** — `.two-col` with top positive and top negative deltas
4. **Trends** — embed Recharts or inline SVG line charts in `.cards-grid`
5. **Segment breakdown** — `.matrix-table` or `.heatmap` by segment
6. **Hypotheses** — `.cards-grid` of 3–4 possible drivers, each with a confidence badge
7. **Experiments to run** — `.pipeline` of next tests
8. **Closing** — "Next review: [date]"

---

## 8. PRD (product requirements document)

Structured product spec.

Sections in order:

1. **Hero** — "[Feature] PRD" + status badge (draft/approved/shipped) + author + date
2. **Problem** — one dark section, `.callout` with the problem statement + a `.two-col` showing user pain + current workaround
3. **Goals & non-goals** — `.two-col` with goals on the left (green-accented), non-goals on the right (gray-accented)
4. **Orange breaker: Success metrics** — `.stat-row` with target numbers for each success signal
5. **User stories** — `.cards-grid` — each card is one story ("As a X, I want Y, so that Z")
6. **Requirements** — `.matrix-table`: ID, description, priority (P0/P1/P2), owner
7. **User flow** — `.fc-*` flowchart with the key journey
8. **Wireframes / mockups** — `.cards-grid` of SVG illustrations or screenshot placeholders (note: no external images — build inline SVG or reference files)
9. **Open questions** — numbered `.cards-grid` of things still TBD
10. **Orange breaker: Rollout plan** — `.pipeline` with phases (alpha → beta → GA)
11. **Risks & mitigations** — `.matrix-table`
12. **Closing** — "Ship date: [date]"

---

## 9. BRD (business requirements document)

Business-focused counterpart to the PRD — more "why" than "what".

Sections in order:

1. **Hero** — "[Initiative] BRD" + sponsor + date
2. **Business context** — `.callout` framing why this matters now
3. **Market opportunity** — `.stat-row` with TAM/SAM/SOM or equivalent business numbers
4. **Orange breaker: Objectives** — 3 `.white-card` blocks with the top business objectives
5. **Scope** — `.two-col` with in-scope left, out-of-scope right
6. **Stakeholders** — `.matrix-table` of stakeholder, interest, influence
7. **Business requirements** — numbered `.cards-grid`
8. **Financial impact** — `.stat-row` of revenue / cost / savings / payback period
9. **Orange breaker: Timeline** — vertical timeline of phases and gates
10. **Risks** — `.matrix-table`: risk, likelihood, impact, mitigation
11. **Decision required** — `.callout` with the exact decision being asked for
12. **Closing**

---

## 10. Pitch / sales deck

External-facing pitch.

Sections in order:

1. **Hero** — big company tagline + "Prepared for [Company]" in meta
2. **The problem** — short `.two-col` with a pain statement + an illustration
3. **Orange breaker: By the numbers** — 3 market stats that make the problem urgent
4. **Our solution** — `.cards-grid` with 3 pillars
5. **How it works** — `.pipeline` with 3–4 stages
6. **Orange breaker: Traction** — `.stat-row` of growth metrics
7. **Product screenshots / demo** — `.cards-grid` of inline SVG mockups
8. **Customer voices** — 2–3 quote blocks (components.md §15)
9. **Pricing** — `.matrix-table` or tiered `.cards-grid`
10. **Orange breaker: Why us** — 3 differentiators in `.white-card`s
11. **Next steps** — `.pipeline` of 2–3 steps to start
12. **Closing** — strong CTA

---

## 11. One-pager

Single-section compact format — no scroll, everything above the fold.

Use a single dark `<section>` with:

- Small coral eyebrow label
- Big coral headline (`.hero` size)
- One paragraph subtitle
- `.stat-row` with 3–4 numbers
- One `.callout` with the key quote or CTA
- Bottom row with the Blink logo, date, and contact info

Skip the hamburger menu for one-pagers (it's overkill for single-screen content) — just keep the top nav + progress bar.

---

## Putting it together — the short version

1. Copy `assets/template.html`
2. Pick a template from this file
3. Replace the middle sections in the copy with the ones listed in your template
4. Update the hamburger `<ul>` to match the new section order
5. Alternate dark and `.orange-section` for rhythm
6. Fill in real content (no lorem ipsum)
7. Save to `/sessions/kind-intelligent-johnson/mnt/outputs/` and share the `computer://` link

If a user's ask doesn't match any template here, improvise by combining sections from different templates — the components are the same across all of them.
