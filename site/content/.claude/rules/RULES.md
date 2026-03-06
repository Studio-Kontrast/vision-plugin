# Rules

Rules are path-specific instructions that activate automatically when Claude
is working with files that match a certain pattern. Think of them as
"if you're editing THIS kind of file, follow THESE extra instructions."

## How They Work

1. Create a `.md` file in `.claude/rules/`
2. Add a frontmatter block specifying which file paths it applies to
3. Write instructions specific to that area of the codebase
4. Claude automatically loads matching rules when working on those files

## Frontmatter Format

```yaml
---
globs:
  - "src/**/*.ts"
  - "src/**/*.tsx"
---
```

## When to Use Rules

- Enforcing conventions for specific file types
- Adding context about a particular directory
- Reminding Claude about gotchas in certain areas
- Different testing strategies for different parts of the app

## Rules vs CLAUDE.md

| Feature | CLAUDE.md | Rules |
|---------|-----------|-------|
| Scope | Whole project | Matching files only |
| Loaded | Every session | Only when relevant |
| Best for | Global conventions | Area-specific context |

## Tips

- Keep rules focused and short - they're loaded on top of CLAUDE.md
- Use specific glob patterns to avoid rules loading unnecessarily
- Great for areas with unusual conventions or known pitfalls