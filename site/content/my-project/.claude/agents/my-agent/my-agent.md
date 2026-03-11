---
name: my-agent
description: "Describe when Claude should delegate to this agent. Be specific. Include 'use proactively' if you want Claude to use it without being asked."
tools: Read, Grep, Glob, Bash
model: sonnet
---

You are a [role description]. When invoked, [what you do].

Your focus areas:
- [Primary responsibility]
- [Secondary responsibility]
- [What you should never do]

Process:
1. [First step]
2. [Second step]
3. [Final step]

Output format:
- [How to structure your response]

---

This is a starter agent file. The filename `my-agent.md` registers this as a subagent named `my-agent`.

Everything above the second `---` is the agent's system prompt. This is all the agent sees (plus basic environment details like working directory). It does not receive the full Claude Code system prompt.

## Anatomy of This File

The **frontmatter** (between the first pair of `---`) configures the agent:

- `name`: unique identifier, lowercase with hyphens. This is how you refer to the agent
- `description`: Claude reads this to decide when to delegate. Be specific about what tasks this agent handles
- `tools`: which tools the agent can use. Omit to inherit all tools from the main conversation. Common sets:
  - Read-only: `Read, Grep, Glob`
  - Can modify files: `Read, Grep, Glob, Edit, Write, Bash`
  - Can spawn agents: `Agent(worker, researcher), Read, Bash`
- `model`: which model to use. `sonnet` balances speed and capability, `haiku` is fast and cheap, `opus` is most capable, `inherit` uses whatever the main conversation uses

The **body** (after frontmatter) is the system prompt. Write it as direct instructions to the agent: "You are a...", "When invoked...", "Focus on...".

## Optional Frontmatter Fields

```yaml
permissionMode: default      # default | acceptEdits | dontAsk | bypassPermissions | plan
maxTurns: 25                 # stop after this many agentic turns
background: false            # true to always run in the background
isolation: worktree          # run in a temporary git worktree
memory: user                 # user | project | local (enables persistent memory)
skills:                      # skills to inject into context at startup
  - api-conventions
  - error-handling
mcpServers:                  # MCP servers available to this agent
  - slack
hooks:                       # lifecycle hooks scoped to this agent
  PreToolUse:
    - matcher: "Bash"
      hooks:
        - type: command
          command: "./scripts/validate.sh"
```

## What Makes a Good Agent

- A narrow, well-defined responsibility (not "do everything")
- A detailed `description` so Claude delegates the right tasks
- Only the tools it actually needs (least privilege)
- Clear output format instructions so results are consistent
- Process steps that guide the agent through its task

## Subagents vs Skills

Both create `/slash-command` style interfaces, but they solve different problems:

| | Skills | Subagents |
|---|--------|-----------|
| Context | Runs in your main conversation | Runs in its own isolated context |
| Best for | Reference material, reusable workflows | Tasks that produce verbose output |
| Tool control | No tool restrictions | Fine-grained tool allowlists |
| Can chain | No | No (but the main conversation can chain them) |
