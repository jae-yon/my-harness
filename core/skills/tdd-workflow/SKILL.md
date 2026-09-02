---
name: tdd-workflow
description: Test-first development. Enforces the RED → GREEN → REFACTOR cycle.
---

# TDD Workflow

### Cycle
1. **Define the interface** — decide the signature first.
2. **RED** — invoke the `code-tester` subagent when the platform supports it, so the test is written from the spec/interface alone without seeing the implementation. Otherwise, write a failing test yourself and confirm it fails (evidence).
3. **GREEN** — write the minimum code to make it pass.
4. **REFACTOR** — remove duplication, clean up names. Tests keep passing.
5. **VERIFY** — confirm build, lint, types, tests, and 80%+ coverage.

### Rules
- Don't write production code before a test exists.
- Don't skip the RED step.
- Throwaway code (spikes/prototypes) can skip TDD. If it gets adopted as real implementation, write tests retroactively at that point.
