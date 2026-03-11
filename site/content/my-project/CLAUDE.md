# CLAUDE.md

Shared project memory for `my-project`, a consuming application that enables the external `vision-plugin`.

## Directory Map

| Path | Purpose |
|---|---|
| `src/` | Application code owned by this repo |
| `.claude/settings.json` | Project-scoped Claude settings, including enabled plugins |
| `CLAUDE.md` | Project-specific rules that should not be pushed into the shared plugin |

## Plugin Relationship

- `vision-plugin` is enabled from `.claude/settings.json`
- The plugin itself is maintained separately from this repo
- Zeplin and reusable review automation come from the plugin package
- If you want to inspect the plugin internals, switch to the `vision-plugin` view

## Working Rules

- Keep application-specific naming and architecture here
- Keep reusable Claude automation in the plugin, not in the repo
- Treat the plugin as shared tooling and this repo as the consumer
