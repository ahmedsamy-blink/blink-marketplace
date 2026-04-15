# Changelog

All notable changes to the `swolvy` plugin will be documented here. Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), versioning follows [SemVer](https://semver.org/).

## [0.1.0] — 2026-04-16

### Added
- Initial release.
- `swolvy` skill: publish HTML to `swolvy.com` via `curl` and return a shareable URL.
- Support for password-protected pages (4–100 chars).
- Support for replacing an existing page at the same URL using `replace_id` + `replace_edit_token`.
- Guidance for multipart (default) and JSON upload paths, CSP caveats, rate-limit handling (429), and size limits (2 MB).
