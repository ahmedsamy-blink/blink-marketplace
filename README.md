# Blink Marketplace

Internal plugin marketplace for the Blink team. Hosts on-brand skills, plugins, and helpers used across the company.

## Install the marketplace

In Claude Code:

```
/plugin marketplace add ahmedsamy-blink/blink-marketplace
```

Then install any plugin:

```
/plugin install blink-presentation@blink-marketplace
```

In Cowork: open the plugin manager and paste the GitHub URL.

## Plugins

| Plugin | Version | Description |
| --- | --- | --- |
| [blink-presentation](./plugins/blink-presentation) | 0.4.0 | On-brand HTML deliverables — presentations, reports, PRDs, BRDs, release notes. Runs a 6-step intake flow and enforces hard brand + alignment rules. |

## Adding a new plugin

1. Create a folder under `plugins/<plugin-name>/`.
2. Inside it, add `.claude-plugin/plugin.json` with `name`, `version`, `description`, and any other plugin metadata.
3. Add the plugin's `skills/`, `commands/`, `agents/`, `hooks/`, or `mcp/` folders as needed.
4. Register the plugin in [`.claude-plugin/marketplace.json`](./.claude-plugin/marketplace.json) under the `plugins` array.
5. Commit with a message like `add <plugin-name> v<version>` and push.

## Updating a plugin

1. Edit the files under `plugins/<plugin-name>/`.
2. Bump `version` in both `plugins/<plugin-name>/.claude-plugin/plugin.json` **and** the entry in `.claude-plugin/marketplace.json`.
3. Commit with `<plugin-name> v<new-version> — <short summary>`.
4. Tag the release: `git tag <plugin-name>-v<new-version>` (optional but recommended).
5. Push: `git push && git push --tags`.

Teammates then run `/plugin marketplace update blink-marketplace` and `/plugin update <plugin-name>`.

## Conventions

- **Semantic versioning** — `MAJOR.MINOR.PATCH`. Breaking changes to a skill's trigger phrases or required args = major. New capabilities = minor. Doc or prompt-only tweaks = patch.
- **Per-plugin CHANGELOG.md** inside each plugin folder for user-visible changes.
- **One plugin per PR.** Keep commits scoped to a single plugin so history stays readable.
- **No secrets.** The repo is shared with the team — never commit API keys, tokens, or customer data.
