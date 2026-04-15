# Swolvy upload protocol

Swolvy is Blink's HTML viewer service. It accepts a full HTML document via one REST call and returns a shareable `swolvy.com/<id>` URL. The blink-presentation skill uses it as an optional "Step 8" after the file is saved locally.

## Two hard rules (learned from real failures)

1. **Use `curl` or Python `requests` — never `urllib`.**
   Python stdlib's `urllib.request` has been observed to return `403 Forbidden` against this endpoint (default headers / user-agent get blocked). `curl` works every time. `requests` also works. When running inside the sandbox, prefer the Bash tool with `curl`.

2. **The HTML payload must begin with `<!DOCTYPE html>`.**
   Swolvy strictly validates the content. A bare `<h1>Test</h1>` or an HTML fragment without a doctype gets rejected with:
   `{"error": "File does not appear to be a valid HTML document"}`
   The base `template.html` in this skill already has the doctype on line 1 — don't strip it.

## Endpoint

```
POST https://swolvy.com/api/v1/upload
Content-Type: application/json
```

## Request body

| Field                | Required | Notes                                                                 |
|----------------------|----------|-----------------------------------------------------------------------|
| `html`               | yes      | Full HTML document, max 2 MB, must start with `<!DOCTYPE html>`       |
| `filename`           | yes      | 1–100 chars, shown as the page title (include `.html` in the name)    |
| `password`           | no       | 4–100 chars, optional access password                                 |
| `replace_id`         | no       | ID of an existing page to update (pair with `replace_edit_token`)     |
| `replace_edit_token` | no       | Required if `replace_id` is set                                       |

## Response

```json
{
  "url": "https://swolvy.com/abc123...",
  "id": "abc123...",
  "expires_at": "2026-05-10T16:31:39.508Z",
  "edit_token": "6a123df5f7431e22..."
}
```

Always surface both `url` (to share) and `edit_token` (to update later) to the user.

## Limits

- **Rate limit:** 10 uploads/hour per IP
- **Max size:** 2 MB per upload
- **TTL:** 30 days from last upload
- **Replaces:** up to 10 per page (each `replace_id` call counts)

## Recipe A — curl from the Bash tool (preferred)

The HTML lives on disk; jq-escape it into the JSON body, then POST.

```bash
HTML_FILE=/sessions/kind-intelligent-johnson/mnt/outputs/q4-2026-event-report.html
FILENAME="Q4 2026 Event Report.html"
PASSWORD=""  # leave empty for a public link

# Build the JSON body safely (handles quotes, newlines, unicode)
BODY=$(python3 -c "
import json, sys
data = {
    'html': open('$HTML_FILE').read(),
    'filename': '$FILENAME',
}
pw = '$PASSWORD'
if pw:
    data['password'] = pw
print(json.dumps(data))
")

curl -s -X POST https://swolvy.com/api/v1/upload \
  -H 'Content-Type: application/json' \
  -d "$BODY"
```

Pipe the result through `python3 -m json.tool` or `jq` to display it, then extract `.url` and `.edit_token` for the user.

## Recipe B — Python `requests`

Runs cleanly in the sandbox (install with `pip install requests --break-system-packages` if needed).

```python
import requests, json, sys

def upload_to_swolvy(html_path, filename, password=None):
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()

    if not html.lstrip().lower().startswith("<!doctype html"):
        raise ValueError("HTML must start with <!DOCTYPE html> — Swolvy will reject it otherwise.")

    payload = {"html": html, "filename": filename}
    if password:
        payload["password"] = password

    r = requests.post(
        "https://swolvy.com/api/v1/upload",
        json=payload,
        timeout=30,
    )
    r.raise_for_status()
    return r.json()

result = upload_to_swolvy(
    "/sessions/kind-intelligent-johnson/mnt/outputs/q4-2026-event-report.html",
    "Q4 2026 Event Report.html",
    password=None,  # or "sxsw2026"
)
print("URL:       ", result["url"])
print("Edit token:", result["edit_token"])
print("Expires:   ", result["expires_at"])
```

## Recipe C — update an existing page

To replace an earlier upload instead of creating a new one, include the original `id` and its `edit_token`:

```python
payload = {
    "html": new_html,
    "filename": "Q4 2026 Event Report.html",
    "replace_id": "abc123...",
    "replace_edit_token": "6a123df5f7431e22...",
}
```

Remind the user that each page supports up to 10 replaces total.

## What to NOT do

- Don't use `urllib.request` — it has been observed to get 403.
- Don't send HTML fragments, partial snippets, or bodies without a doctype.
- Don't hardcode the user's password into the skill — always ask via `AskUserQuestion`.
- Don't upload content the user hasn't approved for a public link (Swolvy links are reachable by anyone who has the URL, and the password option is the only access control).
- Don't retry aggressively on 429 — honor the 10-uploads-per-hour limit.

## How the skill uses this at runtime

1. Save the HTML locally and validate the doctype + tag balance (Step 6).
2. Ask the user via `AskUserQuestion`: upload public, upload with password, or skip (Step 7).
3. If they opted in, run Recipe A (curl) or Recipe B (requests). Recipe A is preferred because it avoids the `urllib` trap entirely.
4. Present the `url` and remind them to save the `edit_token` if they want to update the same page later.
