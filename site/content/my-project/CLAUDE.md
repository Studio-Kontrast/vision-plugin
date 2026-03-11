# CLAUDE.md

A markdown file that gives Claude persistent context about your project. Loaded into every session automatically, no manual prompting required.

## Quick Start

1. Run `/init` in Claude Code. It analyses your codebase and generates a starter `CLAUDE.md`
2. Review and refine what it creates. Add what Claude can't infer on its own
3. Commit to version control so your team shares the same context
4. Iterate over time. Add instructions as you discover friction points

## What to Put in It

| Section | Purpose | Example |
|---|---|---|
| Project overview | Orient Claude in your codebase | Tech stack, architecture, key directories |
| Build & test commands | Let Claude run your workflows | `npm test`, `cargo build`, `make deploy` |
| Code conventions | Enforce your team's style | Naming, imports, error handling patterns |
| Common workflows | Prevent rework | Branch naming, PR process, deploy steps |
| Tool & MCP notes | Connect Claude to your environment | Custom scripts, [MCP](^Model Context Protocol: a standard that lets Claude connect to external tools and services) server usage notes |
| Gotchas & warnings | Avoid known pitfalls | Files not to edit, quirks, env requirements |

## Where It Can Live

| Location | Scope | Use For |
|---|---|---|
| `./CLAUDE.md` | Project (shared) | Team standards, architecture, build commands |
| `./.claude/CLAUDE.md` | Project (shared) | Same as above, alternate location |
| `~/.claude/CLAUDE.md` | Personal (all projects) | Your preferences across every project |
| `./CLAUDE.local.md` | Personal (this project) | Your sandbox URLs, preferred test data. [Gitignored](^Automatically added to .gitignore so it stays local and is never committed to version control) |
| [Managed policy path](^A system-level path managed by IT/DevOps. macOS: /Library/Application Support/ClaudeCode/CLAUDE.md, Linux: /etc/claude-code/CLAUDE.md, Windows: C:\Program Files\ClaudeCode\CLAUDE.md) | Organisation-wide | Company security policies, compliance rules |

More specific locations take precedence over broader ones. Claude also discovers `CLAUDE.md` files in subdirectories and loads them on demand when working in those directories.

## Importing Files

Use `@path/to/file` syntax to pull additional files into context:

```markdown
See @README.md for project overview.
Git workflow: @docs/git-instructions.md
```

- Relative paths resolve from the file containing the import
- Imports can chain up to 5 levels deep
- First use in a project triggers an approval dialog
- Great for pulling in READMEs, package.json, or workflow guides without duplicating content

## Writing Effective Instructions

- **Be specific**: [Use 2-space indentation](^A concrete, verifiable instruction Claude can follow exactly) not [Format code properly](^Too vague for Claude to act on consistently. What does 'properly' mean?)
- **Be concise**: Target under 200 lines. Longer files [dilute adherence](^The more instructions Claude has to track, the less reliably it follows each one)
- **Use structure**: Markdown headers and bullets. Claude scans structure like a reader does
- **Avoid conflicts**: If two instructions contradict, Claude picks one arbitrarily. Review periodically
- **Split when large**: Use [@ imports](^The @path/to/file syntax described above that pulls other files into CLAUDE.md context) or `.claude/rules/` files to break up long instructions

## Tips

- CLAUDE.md is [context, not enforcement](^Claude reads it and tries to follow it, but there is no strict guarantee. Specific, unambiguous instructions get the best results). Specific instructions are followed more reliably than vague ones
- `/init` works on existing projects too. It suggests improvements rather than overwriting
- Use `/clear` between unrelated tasks to reset accumulated context while keeping CLAUDE.md loaded
- CLAUDE.md [survives /compact](^When you run /compact, Claude re-reads CLAUDE.md from disk and re-injects it fresh. Instructions given only in conversation will be lost, but CLAUDE.md persists). It is re-read from disk and re-injected fresh
- Never include secrets, API keys, or credentials. Treat it as public documentation
- Start simple. Expand based on real friction, not hypothetical needs

## Further Reading

- [Official docs: How Claude remembers your project](https://code.claude.com/docs/en/memory#claude-md-files)
- [Blog: Using CLAUDE.md files](https://claude.com/blog/using-claude-md-files)