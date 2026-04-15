# Blink Plugin Marketplace

A Claude Code plugin marketplace for Blink's internal tooling.

## Plugins

- **blink-presentation** — Blink's official presentation and report style. Creates on-brand HTML decks, reports, PRDs, BRDs, release notes, event recaps, and long-form scroll deliverables.

## Install

In Claude Code, add this marketplace:

```
/plugin marketplace add <your-github-org>/blink-marketplace
```

Then install a plugin:

```
/plugin install blink-presentation@blink-marketplace
```

## Structure

```
.claude-plugin/
  marketplace.json     # marketplace manifest
plugins/
  blink-presentation/  # individual plugin
    .claude-plugin/plugin.json
    skills/
    README.md
```
