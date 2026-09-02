## Coding Style

### Naming Convention

- Names should reveal intent. Prefer clarity over abbreviation.
- Variables/functions use camelCase, classes/types use PascalCase, constants use UPPER_SNAKE_CASE by default. If the language has its own idiomatic convention, follow that instead.
- DB schema (table names, column names) follows snake_case regardless of language. Even if application code field names are camelCase in the ORM, the actual columns/tables map to snake_case.
- Boolean names start with `is`/`has`/`should` etc. to make their meaning clear.
- Single-letter variable names are allowed only for conventional cases like loop indices (`i`, `j`).

### Indentation & Whitespace

- Use 2 spaces for indentation by default, but follow the project's existing convention if one exists.
- Don't mix tabs and spaces.
- Leave exactly one newline at the end of the file.
- Don't leave trailing whitespace.

### Braces & Block Style

- Put the opening brace on the same line.
- Don't omit braces even for single-line conditionals — this prevents bugs when code is added later.
- Keep nesting as shallow as possible (use early returns to reduce nesting depth).

### Line Length

- Recommend keeping lines under 100 characters. This isn't a hard limit — wrap when it hurts readability.
- Wrap long function calls/method chains by argument/method.

### Comment Style

- Only write comments to explain "why," not "what" — express what can be expressed through code via naming/structure instead of comments.
- Don't leave dead code or commented-out code in commits.
- Don't leave a TODO without an owner or issue link.

### Code Structure & Ordering

- A function does one thing. Split by responsibility as a file grows.
- Order imports/dependencies as external libraries → internal modules.
- Place a file's main exported functions/classes near the top, helper functions near the bottom.
- Prefer immutable data where possible.

### Formatting & Automation

- If the project has a formatter configured (Prettier, Black, etc.), follow it as-is — don't argue over style manually.
- For a new project with no formatter/linter configured, propose adopting the language's standard tooling.
- Run auto-formatting before committing. (Enforce via a pre-commit hook where possible.)
