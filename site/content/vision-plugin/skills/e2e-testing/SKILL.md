---
name: e2e-testing
description: Playwright patterns for Hello Pomelo workflows: RBAC, imports, exports, and multi-step backoffice flows.
---

# E2E Testing

- Model tests around real workflows, not isolated clicks
- Cover RBAC transitions: admin, manager, contributor
- Use page objects for shared navigation and repetitive setup
- Seed deterministic fixtures for catalog, order, and customer scenarios
- Mark import or export jobs with explicit completion signals to avoid flaky polling

## Minimum workflow coverage

1. Login and role-based landing page
2. Create or edit a product-like entity
3. Publish, sync, or export it
4. Verify the downstream result or audit trail
