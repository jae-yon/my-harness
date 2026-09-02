---
name: save-session
description: Summarize the key points and save them when a long session ends.
---

# Save Session

### When to use
- When the session has grown long and context is about to be summarized, or the session is about to end.
- When there's follow-up work or unresolved issues for the next session to pick up.

### Procedure
1. Summarize what you **did** this session in 3-5 lines.
2. Note the **decisions** made and why.
3. Note **next steps / open issues**.
4. Save to `memory/sessions/YYYY-MM-DD-<topic>.md`, relative to the project root (create the folder if it doesn't exist).
5. `memory/` is personal working notes, not a shared team artifact — recommend adding it to `.gitignore`.

### Format
```
# <date> — <topic>

## Did
- ...

## Decisions
- ...

## Next steps
- [ ] ...
```
