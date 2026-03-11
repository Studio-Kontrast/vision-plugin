Review the changes in this PR. Focus on:

1. **Correctness** - Does the logic do what it claims?
2. **Security** - Any injection risks, leaked secrets, or auth bypasses?
3. **Types** - Are TypeScript types accurate and specific (no `any`)?
4. **Tests** - Are edge cases covered? Are mocks appropriate?
5. **Style** - Does it follow our conventions in CLAUDE.md?

For each issue found, classify as:
- 🔴 **Must fix** - Bugs, security issues, broken types
- 🟡 **Should fix** - Missing tests, unclear naming, minor issues
- 🟢 **Nit** - Style preferences, optional improvements

Start by running `git diff main...HEAD` to see all changes.

$ARGUMENTS