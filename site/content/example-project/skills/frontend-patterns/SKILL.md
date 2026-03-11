---
name: frontend-patterns
description: Next.js frontend patterns for Studio Kontrast backoffice apps. Use for tables, multi-step forms, dashboards, and performance.
---

# Frontend Patterns

Use these defaults for admin-heavy interfaces:

- Prefer server components for data loading and client components only for interaction
- Build tables with sorting, filtering, pagination, and empty states from day one
- Treat multi-step forms as explicit state machines, not scattered local state
- Add `data-testid` to workflow-critical controls, not every decorative element
- Virtualise long product or order lists before they become painful

## UI conventions

- Errors must explain the next user action
- Loading states should keep layout stable
- RBAC must be enforced in the backend, not only hidden in the UI
