# CLAUDE.md

Shared project memory for `example-project`, a small TypeScript workspace that consumes the `vision-plugin` installed at `.claude/plugins/vision-plugin/`.

## Directory Map

| Path | Purpose |
|---|---|
| `src/` | Application code for the consuming project |
| `.claude/settings.json` | Project-level Claude settings |
| `.claude/plugins/vision-plugin/` | Installed plugin files available in this workspace |
| `.mcp.json` | Project-level MCP servers and external context |

## Working Rules

- Keep application-specific rules here, not inside the plugin
- Treat the plugin as reusable tooling shared across projects
- Keep application code inside `src/`, even when the workspace starts with a single `index.ts`
- Configure MCP servers at the project root in `.mcp.json`

## Plugin Relationship

The workspace owns:

- app-specific architecture
- business terms and naming
- source code shape
- root MCP configuration

The installed plugin owns:

- reusable review agents
- reusable skills
- hook guards
- shared Claude automation patterns
