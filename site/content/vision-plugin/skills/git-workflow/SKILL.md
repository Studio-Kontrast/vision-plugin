---
name: git-workflow
description: Branch naming and PR rules for the plugin and the projects that consume it.
disable-model-invocation: true
---

# Git Workflow

- Protected branches are `staging` and `production`
- Work happens on `feature/*`, `fix/*`, `chore/*`, or `refactor/*`
- Open PRs against `staging`, never directly against `production`
- Merge stays a human decision even after agent review

## Before you push

1. Check branch name
2. Review the diff for secrets or generated noise
3. Confirm docs changed if the plugin surface changed
4. Push the feature branch and open a PR
