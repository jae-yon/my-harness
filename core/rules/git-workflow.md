## Git Workflow

### Branching Strategy (Git Flow)

- **main** — The production branch, always kept in a deployable state. Never commit directly — only updated by merging `release/*` or `hotfix/*`.

- **develop** — The integration branch for the next release. All `feature/*` branches merge here.

- **feature/\*** (`feature/feature1`, `feature/feature2`, ...) — Individual feature development branches. Branch off `develop`, and merge back into `develop` when done.

- **release/\*** — Release preparation branch (version freeze, documentation, final bug fixes). Branch off `develop`, and when done, merge into both `main` and `develop`. Tag the version on the `main` merge.

- **hotfix/\*** — Urgent production fix branch. Branch off `main`, and when done, merge into both `main` and `develop`.

Merge flow:
```
feature/* → develop → release/* → main
                                     ↑
                          hotfix/* (branched directly from main when urgent)
```

Branch names use only lowercase letters and hyphens. (e.g. `feature/user-auth`)

### Commit Convention (Conventional Commits)

- Commit messages follow Conventional Commits: `type(scope): summary`
  - type: feat, fix, refactor, test, docs, chore
- Each commit contains only one logical change.

### Before Merging

- Build, lint, types, and tests must all pass before merging into `develop`/`main`.
- Never commit secrets·tokens·.env files.
