# Subagents

Subagents are specialised Claude instances that the main Claude can delegate
tasks to. Each subagent has its own system prompt, making it focused on a
specific type of work.

## How They Work

1. Create a `.md` file in `.claude/agents/`
2. Write a system prompt that defines the agent's role and constraints
3. Claude can spawn this agent when it needs specialised help

## When Subagents Are Useful

- **Code review** - A dedicated reviewer with strict quality standards
- **Security audit** - An agent focused solely on finding vulnerabilities
- **Documentation** - An agent that only writes/updates docs
- **Testing** - An agent specialised in test generation

## How They Differ from Skills

| Feature | Skills | Subagents |
|---------|--------|-----------|
| What they are | Reference knowledge | Autonomous workers |
| Loaded by | Claude reads them | Claude spawns them |
| Can take actions | No (just context) | Yes (read/write/run) |
| Best for | Patterns & conventions | Delegated tasks |

## Tips

- Give each agent a clear, narrow focus
- Define what the agent should and shouldn't do
- Include examples of good output
- Subagents inherit your project's CLAUDE.md context