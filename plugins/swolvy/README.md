# Swolvy plugin

Publish HTML to [swolvy.com](https://swolvy.com) from inside Claude and get back a shareable public URL. Works with nothing but `curl` — no MCP server, no API key, no local setup.

## What it does

Whenever you ask Claude to "publish this HTML," "host this page," "share a link for this dashboard," "update that page I published," or anything similar, this plugin kicks in and:

1. Uploads the HTML to `https://swolvy.com/api/v1/upload` via `curl`.
2. Returns the public URL (live for 30 days).
3. Surfaces the `edit_token` so you can update the same URL later.
4. Optionally password-protects the page.

## Install

1. Drop the `.plugin` file into Claude (Cowork / Claude Code plugin install).
2. Accept the install prompt.
3. Ask Claude to publish any HTML — that's it.

## Components

- **Skill: `swolvy`** — loads on-demand when the user asks to publish/share/host HTML. Contains all upload, replace, password, CSP, rate-limit, and error-handling guidance.

## Limits

- 2 MB per file
- 10 uploads/hour per IP, 60/min global
- HTML only, 30-day TTL, CSP blocks outbound fetches

## Using it

> "Build me a one-page résumé in HTML and publish it to swolvy."
> "Password-protect that page with `hunter2`."
> "Update that page — change the headline to X." *(you'll need the original `id` + `edit_token`)*
