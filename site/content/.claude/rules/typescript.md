---
globs:
  - "src/**/*.ts"
  - "src/**/*.tsx"
---

# TypeScript Conventions

When working with TypeScript files in this project:

## Types
- Never use `any` - use `unknown` if the type is truly dynamic
- Prefer interfaces for object shapes, types for unions/intersections
- Export types from the file where they're defined
- Use `as const` for literal objects that shouldn't be widened

## Imports
- Use named imports: `import { thing } from './module'`
- Group imports: external packages → internal modules → types
- Never use `require()` - always use ES module imports

## Functions
- Use arrow functions for callbacks and inline functions
- Use `function` declarations for top-level exported functions
- Always annotate return types for exported functions
- Prefer `async/await` over `.then()` chains

## Error Handling
- Catch specific error types when possible
- Always log errors before re-throwing
- Use custom error classes for domain-specific errors:

```typescript
export class NotFoundError extends Error {
  constructor(resource: string, id: string) {
    super(`${resource} not found: ${id}`);
    this.name = 'NotFoundError';
  }
}
```