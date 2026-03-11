---
name: deployment-patterns
description: Docker, CI, health check, and rollback guidance for Next.js business applications.
---

# Deployment Patterns

- Use multi-stage Docker builds and ship the smallest runtime image possible
- Keep staging and production pipelines separate but structurally identical
- Add health checks for HTTP readiness, database reachability, and critical cache dependencies
- Prefer reversible migrations and explicit rollback notes in deploy PRs
- Surface build metadata so incidents can be traced to a commit quickly

## Next.js specifics

- Validate `output: "standalone"` when containerising
- Check ISR and cache invalidation behaviour before release
- Watch middleware and edge runtime constraints in production hosting
