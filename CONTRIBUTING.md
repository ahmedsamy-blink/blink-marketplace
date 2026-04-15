# Contributing to blink-marketplace

This marketplace hosts internal Blink plugins. Follow the rules below so the team always gets a clean install.

## Adding a new plugin

1. Create the folder: `plugins/<plugin-name>/`.
2. Inside, add at minimum:
   - `.claude-plugin/plugin.json` — with `name`, `version` (semver), and `description`.
   - `README.md` — what it does, how to use it, example prompts.
   - One or more of `skills/`, `commands/`, `agents/`, `hooks/`, `mcp/`.
3. Register the plugin in `.claude-plugin/marketplace.json` under the `plugins` array. The `version` there **must match** the `version` in the plugin's `plugin.json` — CI enforces this.
4. Add a row to the table in the root `README.md`.
5. Open a PR. CI will validate JSON and the marketplace/plugin sync.

## Updating an existing plugin

1. Edit the plugin files.
2. Bump `version` in **both** places:
   - `plugins/<name>/.claude-plugin/plugin.json`
   - the entry in `.claude-plugin/marketplace.json`
3. Add a note to `plugins/<name>/CHANGELOG.md`.
4. Commit message: `<plugin-name> v<new-version> — <short summary>`.
5. Tag (optional but recommended): `git tag <plugin-name>-v<version> && git push --tags`.

## Versioning

Semver: `MAJOR.MINOR.PATCH`.

- **Major** — removing or renaming a skill, changing required args, breaking trigger phrases.
- **Minor** — new capability, new skill, additive config.
- **Patch** — prompt tweaks, doc fixes, bug fixes, dependency bumps.

## Conventions

- One plugin per PR. Don't bundle unrelated plugin changes.
- Keep `description` fields crisp — they're what teammates see when browsing.
- Use inline SVG over bundled images where possible.
- No secrets, tokens, customer data, or PII in commits. Ever.
- If a plugin references external services, document the required MCPs or env vars in its README.

## Local testing

Before pushing:

```bash
# Validate JSON locally
python3 -c "import json; json.load(open('.claude-plugin/marketplace.json'))"
for f in plugins/*/.claude-plugin/plugin.json; do python3 -c "import json; json.load(open('$f'))"; done
```

Then install from your local checkout in Claude Code to smoke-test:

```
/plugin marketplace add /path/to/blink-marketplace
/plugin install <plugin-name>@blink-marketplace
```
