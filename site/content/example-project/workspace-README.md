# example-project

Simulated workspace used to show how an installed Claude Code plugin sits inside a real project.

## Architecture at a glance

```text
example-project/
  .claude/
    settings.json
    plugins/
      vision-plugin/
  src/
    index.ts
  CLAUDE.md
  README.md
  .mcp.json
  package.json
```

## Separation of concerns

- `src/` contains the normal application code for the consuming project
- `CLAUDE.md` and `.mcp.json` stay project-specific at the repository root
- `.claude/plugins/vision-plugin/` contains reusable Claude automation shared across projects

## What this lets you inspect

- what remains project-specific
- what the installed plugin actually ships
- where Claude-facing config lives relative to application code
- why MCP config belongs at the workspace root, not inside the plugin
