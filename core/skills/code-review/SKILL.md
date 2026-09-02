---
name: code-review
description: Review just-written code from a fresh perspective before committing/PR. Delegates to the code-reviewer subagent when available.
---

# Code Review

### When to use
- Right after implementation, before commit/PR.

### Procedure
1. Invoke the `code-reviewer` subagent when the platform supports it — prefer Opus 5, fall back to Opus 4.8, otherwise inherit the current session's model — passing it the changed files/diff and the original requirement.
2. If subagents aren't available in the current environment, review the code yourself using the checklist below — consciously set aside the fact that you just wrote it.
3. Act on the findings: fix critical/high-severity issues before considering the work done; note anything deliberately deferred.

### Checklist (fallback, if no subagent)
- **Correctness** — meets requirements? edge cases?
- **Regression** — does it break existing behavior?
- **Tests** — does new logic have tests? missing cases?
- **Security** — input validation, secret exposure, injection risk?
- **Readability** — will you understand this in 6 months?
