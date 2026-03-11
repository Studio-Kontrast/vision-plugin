---
name: security-review
description: Security checklist for RBAC-heavy business apps: secrets, validation, uploads, webhooks, and data isolation.
---

# Security Review

Check every change for:

- Authentication on every write path
- RBAC enforcement in the backend, not just the interface
- Zod or equivalent validation for routes, actions, imports, and uploads
- Signature verification on webhooks
- Sanitised filenames, mime checks, and storage constraints on uploaded files
- SQL injection, XSS, CSRF, and dependency risk where relevant

## Escalate immediately when

- One user can access another tenant's data
- An admin-only action is reachable by a weaker role
- Secrets or tokens are committed, logged, or returned to the browser
