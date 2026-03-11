# example-project

Simulated Next.js workspace used to show how an installed Claude Code plugin sits inside a real project.

## Architecture at a glance

```text
example-project/
  CLAUDE.md
  .claude/
    settings.json
    plugins/
      vision-plugin/
  src/
    app/
    modules/
    integrations/
  package.json
```

## Separation of concerns

- `src/app/` handles routes and page composition
- `src/modules/` contains business logic used by UI and APIs
- `src/integrations/` owns external platform sync logic
- `.claude/plugins/vision-plugin/` contains reusable Claude automation shared across projects

## What this lets you inspect

- what remains project-specific
- what the installed plugin actually ships
- where Claude-facing config lives relative to application code
