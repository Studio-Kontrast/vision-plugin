---
name: database-patterns
description: Safe migrations, indexing, RLS, and schema patterns for large catalogs, orders, and synchronisation flows.
---

# Database Patterns

- Write migrations to be safe on live traffic and rehearse rollback paths
- Index for the filters users actually run in backoffice tables
- Use RLS or equivalent access rules when tenant boundaries matter
- Keep audit trails for status changes, price changes, and synchronisation events
- Separate transactional tables from heavy reporting queries when needed

## Watch for

- N+1 query shapes hidden behind repositories
- Missing composite indexes on filter + sort combinations
- Enum changes and destructive column rewrites during business hours
