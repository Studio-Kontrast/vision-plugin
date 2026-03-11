---
name: backend-patterns
description: Service, repository, auth, queue, and logging patterns for Next.js product applications.
---

# Backend Patterns

- Keep route handlers thin: parse input, call a service, shape the response
- Put business rules in services so they can be reused by jobs, actions, and APIs
- Use repositories or query modules for database access instead of mixing SQL into controllers
- Log with stable fields: actor, resource, action, request id, and outcome
- Treat imports, exports, and synchronisation as background jobs with retry strategy

## Security baseline

- Validate all external input before it touches services
- Centralise RBAC checks close to the write path
- Fail closed when upstream integrations are ambiguous
