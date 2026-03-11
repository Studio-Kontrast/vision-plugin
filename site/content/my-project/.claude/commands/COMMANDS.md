# Custom Slash Commands (Deprecated)

Markdown files that create reusable `/slash-commands`. Commands have been [merged into skills](^Commands and skills are now the same system. A command file at .claude/commands/review.md and a skill at .claude/skills/review/SKILL.md both create /review and work identically), but existing command files still work and this directory is still supported.

## Quick Start

1. Create a `.md` file in `.claude/commands/`
2. Write a prompt inside it. Use `$ARGUMENTS` as a placeholder for user input
3. The filename becomes the command name: `review-pr.md` creates `/review-pr`
4. Type `/` in Claude Code to see and run your commands

## How It Works

1. Claude scans `.claude/commands/` at startup and registers each `.md` file as a slash command
2. When you invoke `/command-name`, Claude reads the file and replaces `$ARGUMENTS` with whatever you typed after the command
3. The expanded prompt is sent to Claude as if you had typed it manually

## Commands vs Skills

Commands are the simpler, original system. Skills are the newer, more powerful replacement.

| | Commands | Skills |
|---|---|---|
| File location | `.claude/commands/name.md` | `.claude/skills/name/SKILL.md` |
| Invocation | `/name` only | `/name` or auto-loaded |
| Arguments | `$ARGUMENTS` only | `$ARGUMENTS`, `$N`, env vars |
| Frontmatter | Not supported | Full frontmatter (model, tools, invocation control) |
| Supporting files | None | scripts/, references/, assets/ |
| Dynamic context | Not supported | `!`backtick`` shell injection |

If you are starting fresh, use skills instead. If you have existing commands, they will continue to work without changes.

## Where Commands Live

| Location | Path | Scope |
|---|---|---|
| Project | `.claude/commands/` | Shared with your team (committed) |
| Personal | `~/.claude/commands/` | All your projects (not committed) |

## Migrating to Skills

To convert a command to a skill:

1. Create `.claude/skills/command-name/SKILL.md`
2. Add frontmatter with `name` and `description`
3. Move your prompt into the body
4. Delete the original command file

The `/command-name` invocation stays the same. You gain frontmatter controls, supporting files, and auto-loading.

## Tips

- Keep commands focused on one task
- Include project-specific context (conventions, patterns) in the prompt
- Use `$ARGUMENTS` to make commands flexible: `/review-pr focus on auth changes`
- Commands and skills with the same name will conflict. Use one or the other

## Explore the Scaffolding

Open the `my-command/` folder below to see the structure of a command file with every section explained.