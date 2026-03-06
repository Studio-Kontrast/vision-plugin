# Auto Memory

This file is maintained by Claude automatically. As Claude works on your project,
it saves useful information here so it remembers across sessions.

## What Gets Saved Here

- Patterns confirmed across multiple interactions
- Project-specific knowledge Claude discovered
- User preferences for tools and workflow
- Solutions to recurring problems

---

## Project Patterns

- API routes follow REST conventions with `/api/v1` prefix
- Database migrations are in `prisma/migrations/` - never edit these manually
- Environment variables are validated at startup in `src/config.ts`

## User Preferences

- Prefers concise code reviews with severity ratings
- Uses VS Code with the ESLint extension
- Runs tests before every commit

## Debugging Notes

- If Prisma generates stale types, run `npx prisma generate` to refresh
- The `AUTH_SECRET` env var must be at least 32 characters
- Hot reload sometimes fails for changes to `src/middleware/` - restart the dev server

## How This File Works

- Claude writes to this file using the Write/Edit tools
- It's stored at `.claude/MEMORY.md` in your project
- You can read and edit it yourself too
- Claude checks this file at the start of each session
- Keep it concise - Claude truncates after ~200 lines