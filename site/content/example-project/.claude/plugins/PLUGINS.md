# Installed Plugins

This workspace keeps the plugin under `.claude/plugins/vision-plugin/` so the team can inspect the exact files Claude sees once the plugin is present in a project.

## Why it lives here

- `CLAUDE.md` and `.claude/settings.json` stay project-specific
- `.mcp.json` stays at the project root because MCP servers are configured per workspace
- The plugin keeps reusable automation isolated in one directory
- `src/` remains application code and does not mix with Claude tooling

## Mental model

| Layer | Owned by | Examples |
|---|---|---|
| Project workspace | The application repo | `src/`, `CLAUDE.md`, `.mcp.json`, `.claude/settings.json` |
| Installed plugin | Shared Claude tooling | agents, skills, hooks, scripts |

## Local development

During plugin development the folder is checked into the repo so the structure stays visible. In a more production-like setup, the same plugin could instead be installed from a marketplace and synced into Claude's plugin cache.
