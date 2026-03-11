#!/usr/bin/env bash
set -euo pipefail

# Hook payload arrives on stdin as JSON.
payload="$(cat)"

command="$(
  printf '%s' "$payload" |
    python3 -c 'import json, sys; print(json.load(sys.stdin).get("tool_input", {}).get("command", ""))'
)"

# Ignore non-push commands.
if [[ "$command" != git\ push* ]]; then
  exit 0
fi

branch="$(git rev-parse --abbrev-ref HEAD)"

if [[ "$branch" == "staging" || "$branch" == "production" ]]; then
  cat <<'JSON'
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Push from feature/*, fix/*, chore/*, or refactor/* and open a PR to staging instead."
  }
}
JSON
  exit 0
fi

if [[ ! "$branch" =~ ^(feature|fix|chore|refactor)/ ]]; then
  cat <<'JSON'
{
  "hookSpecificOutput": {
    "hookEventName": "PreToolUse",
    "permissionDecision": "deny",
    "permissionDecisionReason": "Branch name must start with feature/, fix/, chore/, or refactor/."
  }
}
JSON
  exit 0
fi

exit 0
