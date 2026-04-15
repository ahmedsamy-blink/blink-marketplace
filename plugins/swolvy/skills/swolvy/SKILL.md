---
name: swolvy
description: Host an HTML file on swolvy.com and get a shareable public URL back. Use this skill whenever the user asks to "publish", "share", "host", "get a link for", "put online", or "deploy" an HTML file, HTML snippet, single-page report, dashboard, one-pager, landing page, résumé, or similar static page — even if they don't mention swolvy by name, as long as the goal is a quick public URL for HTML. Also use it when the user wants to password-protect a page, update a previously-published page at the same URL, or set an expiration on shared HTML. Do NOT use for non-HTML content (PDFs, images, data files).
---

# Swolvy — publish HTML and get a shareable URL

Swolvy is a free service that hosts a single HTML file at `https://swolvy.com/{id}` for 30 days. Pages can optionally be password-protected. Every upload returns an `edit_token` that lets you replace the page later at the same URL.

This skill works with only `curl` — no MCP, no login, no API key. If you can run shell commands, you can use it.

## When to trigger this skill

Trigger whenever the user wants a **public URL for HTML they have or want you to generate**. Examples:

- "Can you publish this HTML?"
- "Host this dashboard and give me a link"
- "Put my résumé online so I can send the URL to someone"
- "Share this landing page with me"
- "Update that page I published yesterday — change the headline"
- "Password-protect this report"

If the user hasn't written the HTML yet but wants something published, first generate a clean, self-contained HTML file (inline CSS, no external build step) and then upload it.

## Core workflow

1. **Get the HTML ready.** Either read it from a file the user provided or generate it. Write it to a temp file under the sandbox (e.g. `/tmp/page.html`) — don't rely on piping giant strings through JSON.
2. **Upload it** via one of the two endpoints below.
3. **Return the URL to the user.** Also show them the `edit_token` in a code block with a note that there's no recovery if they lose it.
4. **If they might want to update later**, save `id` and `edit_token` somewhere you can reference in the same session (e.g. a local note file).

## Uploading

### Preferred: multipart (handles big/complex HTML cleanly)

Use this by default. It avoids JSON-escaping the HTML, which matters the moment the content has quotes, backticks, or newlines — i.e. almost always.

```bash
curl -sS -X POST https://swolvy.com/api/v1/upload \
  -F "file=@/tmp/page.html" \
  -F "filename=page.html"
```

Add a password by appending another form field:

```bash
curl -sS -X POST https://swolvy.com/api/v1/upload \
  -F "file=@/tmp/page.html" \
  -F "filename=page.html" \
  -F "password=hunter2"
```

### Alternative: JSON body (fine for small, simple HTML)

```bash
curl -sS -X POST https://swolvy.com/api/v1/upload \
  -H 'Content-Type: application/json' \
  --data @/tmp/payload.json
```

Where `/tmp/payload.json` looks like:

```json
{
  "html": "<!DOCTYPE html><html>...</html>",
  "filename": "report.html",
  "password": "optional-4-to-100-chars"
}
```

**Why write the JSON to a file instead of inlining with `-d`?** Shell escaping of HTML is a nightmare — quotes, backticks, and `$` all bite you. Write the payload to a file first using your normal file-write tools, then point `curl` at it with `@`. Much less likely to produce a malformed request.

### Response shape

Every successful upload returns:

```json
{
  "url": "https://swolvy.com/abc123",
  "id": "abc123",
  "expires_at": "2026-05-16T...",
  "edit_token": "…long token…"
}
```

Always surface `url` to the user as a clickable link. Always surface `edit_token` explicitly with a warning: "Save this — it's the only way to update this page, and there is no recovery."

## Updating a page you previously published

Same endpoint, but include `replace_id` and `replace_edit_token`. The URL stays the same; content and expiry refresh.

```bash
curl -sS -X POST https://swolvy.com/api/v1/upload \
  -F "file=@/tmp/page.html" \
  -F "filename=page.html" \
  -F "replace_id=abc123" \
  -F "replace_edit_token=THE_TOKEN_FROM_FIRST_UPLOAD"
```

If the user asks you to update a page but hasn't given you the `id` and `edit_token`, ask for both. Don't guess — wrong tokens return `403`.

## Limits and error handling

| Limit | Value |
| --- | --- |
| Max file size | 2 MB |
| Rate limit (per IP) | 10 uploads/hour |
| Rate limit (global) | 60 uploads/minute |
| TTL | 30 days (resets on replace) |
| Password length | 4–100 chars |
| Content type | HTML only |

Error codes you'll likely see:

- **400** — bad input. Check that `html`/`file` is non-empty, `filename` is set, and `password` (if present) is 4–100 chars.
- **403** — `replace_edit_token` doesn't match. Don't retry; ask the user for the correct token.
- **413** — HTML exceeds 2 MB. Trim inline assets (base64 images are the usual culprit) or split into multiple pages.
- **429** — rate-limited. Per-IP means wait an hour; global means wait a minute. Tell the user which and don't loop-retry.

## Content caveats

Swolvy applies a Content Security Policy that blocks outbound fetches from hosted pages. That means:

- Inline everything — CSS in `<style>`, JS in `<script>`, fonts/images base64-encoded if you need them self-contained.
- External `<script src="https://cdn…">`, `fetch()` to other origins, and iframes to third parties will silently fail in the browser.
- If the user asks for a chart library or fonts, prefer options you can inline (SVG charts, system font stacks) over CDN imports.

## What not to do

- Don't invent an `id` — only the server assigns them.
- Don't claim a page is private just because it's unguessable. Tell the user: "Anyone with the URL can view it. Add a password if you want access control."
- Don't lose `edit_token` — there's no recovery endpoint.
- Don't use this for non-HTML content. If the user wants to share a PDF or image, tell them swolvy is HTML-only and suggest an alternative.
- Don't retry on `429` in a tight loop; you'll just deepen the rate-limit hole.

## Quick example (end-to-end)

User: *"Make me a one-page résumé in HTML and publish it."*

1. Generate `resume.html` in `/tmp/resume.html` (self-contained, inline CSS, no external assets).
2. Upload:
   ```bash
   curl -sS -X POST https://swolvy.com/api/v1/upload \
     -F "file=@/tmp/resume.html" \
     -F "filename=resume.html"
   ```
3. Parse the JSON response, then reply to the user with:
   - The `url` as a clickable link.
   - The `edit_token` in a code block with a "save this, no recovery" note.
   - The `expires_at` date so they know when it vanishes.
