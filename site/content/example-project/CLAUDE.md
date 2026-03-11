# CLAUDE.md

Shared project memory for `example-project`, a Next.js backoffice workspace that consumes the `vision-plugin` installed at `.claude/plugins/vision-plugin/`.

## Directory Map

| Path | Purpose |
|---|---|
| `src/app/` | App Router pages and route handlers |
| `src/modules/` | Business logic and service layer |
| `src/integrations/` | External platform connectors such as Sylius |
| `.claude/settings.json` | Project-level Claude settings |
| `.claude/plugins/vision-plugin/` | Installed plugin files available in this workspace |

## Working Rules

- Keep application-specific rules here, not inside the plugin
- Treat the plugin as reusable tooling shared across projects
- Keep App Router files thin and delegate business logic to `src/modules/`
- Store external integration code under `src/integrations/`

## Plugin Relationship

The workspace owns:

- app-specific architecture
- business terms and naming
- service boundaries
- external system mappings

The installed plugin owns:

- reusable review agents
- reusable skills
- hook guards
- MCP integrations for design and product context
