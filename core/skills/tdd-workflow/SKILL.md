---
name: tdd-workflow
description: 테스트 우선 개발. RED → GREEN → REFACTOR 사이클을 강제한다.
---

# TDD Workflow

## 사이클
1. **인터페이스 정의** — 시그니처를 먼저 정한다.
2. **RED** — 실패 테스트를 작성하고 실패를 확인한다 (증거).
3. **GREEN** — 통과시키는 최소 코드를 작성한다.
4. **REFACTOR** — 중복 제거, 이름 정리. 테스트는 계속 통과.
5. **VERIFY** — build, lint, types, tests, 커버리지 80%+ 확인.

## 규칙
- 테스트 없이 프로덕션 코드를 먼저 쓰지 않는다.
- RED 단계를 건너뛰지 않는다.
