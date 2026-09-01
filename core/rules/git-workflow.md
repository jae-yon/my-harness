# Git Workflow

- 커밋 메시지는 Conventional Commits: `type(scope): summary`
  - type: feat, fix, refactor, test, docs, chore
- 한 커밋은 하나의 논리적 변경만 담는다.
- PR 전 build, lint, types, tests 통과 필수.
- 비밀키/토큰/.env 를 커밋에 절대 포함하지 않는다.