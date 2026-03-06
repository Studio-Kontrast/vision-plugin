# Custom Slash Commands

Commands are reusable prompts saved as markdown files. Type `/` in Claude Code
to see your available commands, then select one to run it.

## How They Work

1. Create a `.md` file in `.claude/commands/`
2. Write the prompt template inside it
3. Use `$ARGUMENTS` as a placeholder for user input
4. Invoke it with `/command-name` in Claude Code

## File Naming

The filename becomes the command name:
- `review-pr.md` → `/review-pr`
- `write-tests.md` → `/write-tests`
- `explain-this.md` → `/explain-this`

## Variables

- `$ARGUMENTS` - Replaced with whatever the user types after the command

## Tips

- Keep commands focused on one task
- Include context about your project's conventions
- Commands can reference other files or patterns
- Team commands go in `.claude/commands/` (committed to repo)
- Personal commands go in `~/.claude/commands/` (global, not committed)

## Examples in This Project

- `review-pr.md` - Code review with your team's standards
- `write-tests.md` - Generate tests following your conventions