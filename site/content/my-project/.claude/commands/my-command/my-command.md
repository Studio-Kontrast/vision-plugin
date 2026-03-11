Review the changes in this PR. Focus on:

1. **Correctness**: Does the logic do what it claims?
2. **Security**: Any injection risks, leaked secrets, or auth bypasses?
3. **Tests**: Are edge cases covered?
4. **Style**: Does it follow our conventions in CLAUDE.md?

For each issue found, classify as:
- **Must fix**: Bugs, security issues
- **Should fix**: Missing tests, unclear naming
- **Nit**: Style preferences, optional improvements

Start by running `git diff main...HEAD` to see all changes.

$ARGUMENTS

---

This is a starter command file. The filename `my-command.md` becomes the slash command `/my-command`.

Everything above the `---` is the prompt that Claude receives when you invoke the command. `$ARGUMENTS` is replaced with whatever you type after the command name.

For example, `/my-command focus on auth` would replace `$ARGUMENTS` with "focus on auth".

## What Makes a Good Command

- A clear, specific task (not open-ended)
- Context about your project's standards or conventions
- Structured output format so results are consistent
- `$ARGUMENTS` to allow per-invocation customisation

## Limitations

Commands are simple prompt templates. They do not support:

- Frontmatter (model overrides, invocation control, tool restrictions)
- Supporting files (scripts, references, assets)
- Dynamic context injection (`!` backtick syntax)
- Auto-loading based on task relevance

For any of those features, use a [skill](^Skills are the newer, more powerful replacement for commands. See the skills/ directory for the full structure) instead. Commands and skills create the same `/slash-command` interface.