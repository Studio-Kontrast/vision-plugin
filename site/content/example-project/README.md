# Vision Plugin

Claude Code plugin for Hello Pomelo product projects. It packages a PR review pipeline, domain skills, hooks, and guardrails so the same setup can be enabled across multiple repos.

## What ships with it

| Area | Purpose |
|---|---|
| `.claude-plugin/plugin.json` | Names the plugin, versions it, and defines distribution metadata |
| `agents/` | Review specialists plus an architecture helper |
| `skills/` | Reusable knowledge for frontend, backend, API, security, testing, deployment, database, and git workflow |
| `hooks/` + `scripts/branch-guard.sh` | Guardrails for git pushes and Claude write actions |
| Recommended project root `.mcp.json` | External context sources the plugin expects projects to enable, starting with Zeplin |

## Why this shape?

- Start from a shareable plugin, not repo-local `.claude/` files
- Keep review agents lean and push deep domain knowledge into skills
- Focus on Next.js backoffice apps: PIM, DAM, ERP, and B2B commerce
- Assume protected `staging` and `production` branches in every rollout
- Keep project-owned MCP config at the repository root

## PR review pipeline

1. `pr-orchestrator` reads the diff and classifies changed areas
2. It delegates to the relevant reviewers
3. Findings are merged into one verdict
4. A human keeps the final merge decision

## Install locally

```bash
claude --plugin-dir ./vision-plugin
```

## Adoption notes

- Start with `code-reviewer`, `security-reviewer`, and `git-workflow`
- Add the rest once the team sees value in the shared patterns
- Keep project-specific rules in each repo's `CLAUDE.md`
