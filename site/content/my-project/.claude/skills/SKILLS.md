# Skills

Reusable packages of instructions, references, and scripts that Claude discovers and loads [on demand](^Claude reads only the skill name and description at startup. The full content loads only when the skill is relevant to your current task). A skill is a directory containing a `SKILL.md` file. That is the only requirement.

## Quick Start

1. Create a folder: `.claude/skills/my-skill/`
2. Add a `SKILL.md` with [frontmatter](^A YAML block at the top of the file between --- markers. Contains metadata like name and description) name and description
3. Write instructions in the body. Claude reads them when the skill activates
4. Invoke with `/my-skill` or let Claude load it automatically when relevant

Skills follow the [Agent Skills open standard](https://agentskills.io), so they work across multiple AI tools, not just Claude Code.

## How It Works

Skills use [progressive disclosure](^A pattern that manages context efficiently: load a little upfront, load more only when needed. Keeps Claude focused and reduces token usage) to stay efficient:

1. **Discovery**: At startup, Claude loads only each skill's `name` and `description`. Just enough to know when it might be relevant
2. **Activation**: When a task matches, Claude reads the full `SKILL.md` into context
3. **Execution**: Claude follows the instructions, optionally loading referenced files or running bundled scripts

## Two Types of Skill

| Type | Purpose | Example | Invocation |
|---|---|---|---|
| Reference | Knowledge Claude applies to your work | Style guides, conventions, domain rules | Auto-loaded when relevant |
| Task | Step-by-step instructions for a specific action | Deploy, scaffold, generate | Usually invoked with `/skill-name` |

## Where Skills Live

| Location | Path | Scope |
|---|---|---|
| Enterprise | [Managed settings](^A system-level path managed by IT/DevOps for organisation-wide policies) | All users in your org |
| Personal | `~/.claude/skills/<name>/SKILL.md` | All your projects |
| Project | `.claude/skills/<name>/SKILL.md` | This project only |
| Plugin | `<plugin>/skills/<name>/SKILL.md` | Where plugin is enabled |

When skills share the same name across levels, higher-priority locations win: Enterprise > Personal > Project.

## Commands and Skills

[Custom commands](^Markdown files in .claude/commands/ that created slash commands. Now unified under skills) and skills are now the same system. A file at `.claude/commands/review.md` and a skill at `.claude/skills/review/SKILL.md` both create `/review` and work identically. Existing command files keep working. Skills add optional features: supporting files, frontmatter controls, and automatic loading.

## Invocation Control

Control who can trigger a skill using [frontmatter](^YAML metadata at the top of SKILL.md between --- markers) settings:

| Setting | You Can Invoke | Claude Can Invoke |
|---|---|---|
| (default) | Yes | Yes |
| `disable-model-invocation: true` | Yes | No |
| `user-invocable: false` | No | Yes |

Use `disable-model-invocation` for actions with side effects (deploys, sends, destructive operations). Use `user-invocable: false` for background knowledge Claude should apply but users should not trigger directly.

## Permission Control

Restrict which skills Claude can use via [permission rules](^Configured in settings.json or .claude/settings.json. See the Settings & Permissions section for details):

- `Skill(commit)`: allow a specific skill
- `Skill(deploy *)`: deny a skill prefix
- Deny the `Skill` tool entirely to disable all skills

## Bundled Skills

These ship with Claude Code and are available in every session:

| Command | What It Does |
|---|---|
| `/simplify` | Reviews changed files for reuse, quality, and efficiency, then fixes issues |
| `/batch <instruction>` | Orchestrates large-scale parallel changes across a codebase |
| `/debug [description]` | Troubleshoots your session by reading debug logs |
| `/claude-api` | Loads Claude API reference for your project's language |

## Tips

- Skill directory names must be lowercase with hyphens, max 64 characters
- Keep `SKILL.md` under 500 lines. Move detailed material to `references/` or `assets/` subdirectories
- The `description` field is what Claude uses to decide relevance. Include keywords users would naturally say
- Use `$ARGUMENTS` in the body to accept user input: `/my-skill some input here`
- Use the `!` backtick syntax for [dynamic context injection](^Shell commands that run before SKILL.md reaches Claude. The output replaces the placeholder, e.g. injecting the list of changed files)
- Test skills by invoking them directly with `/skill-name` before relying on auto-loading

## Explore the Anatomy

Open the `my-skill/` folder below to see the complete file structure of a skill, with every field and directory explained.