# Agents

Agents are isolated Claude instances you create and configure for specialised tasks. They come in two forms: [subagents](^Focused workers that run inside your session, do a job, and return a summary) that operate within your session, and [agent teams](^Multiple independent Claude Code sessions coordinating through a shared task list) that coordinate across separate sessions.

## Quick Start

1. Run `/agents` inside Claude Code to open the interactive agent manager
2. Select **Create new agent**, then choose a scope (project or user)
3. Use **Generate with Claude** and describe what the agent should do
4. Select which tools the agent can access, pick a model, and save

Your agent is available immediately. Try it: "Use the my-agent agent to review this module."

## How Subagents Work

Subagents are `.md` files with YAML frontmatter for configuration and a Markdown body that becomes the system prompt. Each subagent runs in its own context window, uses only the tools you allow, and returns a summary to your main conversation.

1. Claude matches your request to a subagent's `description` field
2. A new context window is created with the subagent's system prompt
3. The subagent works independently (reading files, running commands, etc.)
4. Results are summarised back to your main conversation

Subagents can run in the foreground (blocking) or background (concurrent). Press `Ctrl+B` to send a running task to the background.

## Where Agents Live

| Location | Scope | Priority |
|----------|-------|----------|
| `--agents` CLI flag | Current session only | 1 (highest) |
| `.claude/agents/` | This project (check into version control) | 2 |
| `~/.claude/agents/` | All your projects | 3 |
| Plugin `agents/` directory | Where the plugin is enabled | 4 (lowest) |

When multiple agents share the same name, the higher-priority location wins.

## Built-in Subagents

Claude Code ships with subagents it uses automatically:

- **Explore**: fast, read-only codebase search (runs on Haiku)
- **Plan**: structured planning and analysis
- **General-purpose**: flexible helper for miscellaneous delegation

You can create custom agents that override built-ins by using the same name at a higher priority scope.

## Frontmatter Reference

| Field | Required | Purpose |
|-------|----------|---------|
| `name` | Yes | Unique identifier (lowercase, hyphens) |
| `description` | Yes | When Claude should delegate to this agent |
| `tools` | No | Allowlist of tools (inherits all if omitted) |
| `disallowedTools` | No | Denylist removed from inherited tools |
| `model` | No | `sonnet`, `opus`, `haiku`, or `inherit` (default) |
| `permissionMode` | No | `default`, `acceptEdits`, `dontAsk`, `bypassPermissions`, `plan` |
| `maxTurns` | No | Maximum agentic turns before the agent stops |
| `skills` | No | Skills to inject into the agent's context at startup |
| `mcpServers` | No | MCP servers available to this agent |
| `hooks` | No | Lifecycle hooks scoped to this agent |
| `memory` | No | Persistent memory scope: `user`, `project`, or `local` |
| `background` | No | Set `true` to always run as a background task |
| `isolation` | No | Set `worktree` to run in a temporary git worktree |

## Agent Teams

Agent teams coordinate multiple independent Claude Code sessions working in parallel. One session acts as the lead; others are teammates with their own context windows.

Agent teams are experimental. Enable them in `settings.json`:

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

Then describe the team structure in natural language:

```
Create an agent team to review PR #142. Spawn three reviewers:
one focused on security, one checking performance, one validating tests.
```

### Subagents vs Agent Teams

| | Subagents | Agent Teams |
|---|-----------|-------------|
| Communication | Report results back to caller only | Teammates message each other directly |
| Context | Own window; results return to main session | Own window; fully independent |
| Coordination | Main agent manages all work | Shared task list with self-coordination |
| Best for | Focused tasks where only the result matters | Complex work requiring discussion |
| Token cost | Lower (results summarised back) | Higher (each teammate is a separate instance) |

Use subagents for quick, focused workers. Use agent teams when teammates need to share findings and coordinate on their own.

## Common Patterns

- **Isolate verbose output**: delegate test runs or log analysis to a subagent so the output stays out of your main context
- **Parallel research**: spawn multiple subagents to investigate different parts of a codebase simultaneously
- **Chain subagents**: use one for analysis, pass its findings to another for implementation
- **Competing hypotheses**: spawn agent team members to investigate different theories and debate each other

## Tips

- Write detailed `description` fields so Claude knows when to delegate. Include "use proactively" for agents you want used automatically
- Grant only the tools an agent needs. A read-only reviewer should not have Write or Edit
- Subagents cannot spawn other subagents. For nested delegation, use skills or chain from the main conversation
- Use `memory: user` to let agents build knowledge across sessions. Ask them to "check your memory" before starting and "save what you learned" after finishing
- Agent teams work best with 3-5 teammates and 5-6 tasks each. More teammates means more coordination overhead
- Teammates load `CLAUDE.md` from the working directory, so project conventions apply to the whole team