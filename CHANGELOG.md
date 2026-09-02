# Changelog

## 2026-09-02

### Added
- `--global` 플래그 — 프로젝트 로컬 설치와 홈 디렉터리 전역 설치를 분기
  - Claude: `~/.claude/CLAUDE.md`
  - Codex: `~/.codex/AGENTS.md` (로컬의 `.agents`와 다른, 공식 전역 경로)
  - Cursor: `~/.cursor/rules/AGENTS.md` (공식은 `.mdc` 확장자를 기대 — 아직 미검증)
- `{{HARNESS_DIR}}` 템플릿 변수 — `copyFile`이 `vars`를 받아 설치 시점에 실제 경로로 치환하도록 확장. `AGENTS.md`의 문서 참조가 플랫폼·로컬/전역과 상관없이 항상 실제 설치 경로와 일치하게 됨
- 대화형 덮어쓰기 확인 프롬프트 (`node:readline/promises`) — 비TTY 환경에서는 자동 스킵
- `package.json`에 `bin` 필드, `bin/cli.js`에 shebang 추가 (`npx`/`npm link` 실행 준비)
- `AGENTS.md` 초안 작성 (트레이드오프 선언 + 번호 매긴 원칙 0~5)
- `core/skills`(`plan`, `tdd-workflow`, `code-review`, `save-session`), `core/rules`(`coding-style`, `git-workflow`), `core/workflow.md` 콘텐츠 채움
- `README.md` 작성
- `core/agents/` 디렉터리 신설 — 스킬과 분리된 전용 서브에이전트 정의 (ECC의 `agents/*.md` 구조 참고, 내용은 직접 작성)
  - `code-reviewer` — 신뢰도 기반 필터링, 흔한 거짓양성 스킵 리스트, Approve/Needs changes/Blocked 판정 기준 포함
  - `code-tester` — 구현을 보지 않고 스펙/인터페이스만으로 실패하는 테스트를 작성 (TDD RED 단계의 구현 편향 방지)
- `_shared.js`에 `copyAgents()` 추가, 세 target 모두 배선 — Claude Code는 `.claude/agents`로 실제 네이티브 서브에이전트 컨벤션과 일치, Codex/Cursor는 네이티브 지원 미확인이라 참고 자료로만 설치(안내 문구 추가)
- `core/skills`, `core/rules`, `core/agents`에 `.kr.md`(한국어 초안/미러) 작성 관행 도입 + 설치 시 자동 제외 필터(`excludeKrFiles`, 대소문자 무관) 추가
- `git-workflow.md`에 브랜치 전략(Git Flow: main/develop/feature/release/hotfix) 추가
- `coding-style.md`에 네이밍·들여쓰기·중괄호·줄 길이·주석·코드 구조·포매팅 7개 섹션 콘텐츠 채움 (DB 스키마 snake_case 규칙 포함)
- `code-review` 스킬이 `code-reviewer` 서브에이전트에 위임하도록 변경 (모델 우선순위 Opus 5 → Opus 4.8 → 세션 상속을, 실제로 읽히는 시점인 스킬 절차에 명시)
- `tdd-workflow` 스킬의 RED 단계가 `code-tester` 서브에이전트에 위임하도록 변경

### Fixed
- `bin/cli.js`: Windows에서 동적 `import()`가 `file://` URL을 요구해 `ERR_UNSUPPORTED_ESM_URL_SCHEME`로 죽던 문제 → `pathToFileURL()`로 해결
- 로컬 테스트 스크립트(`npm run test:*`)가 하네스 저장소 자기 자신에게 설치되던 문제 → 격리된 샌드박스 디렉터리로 분리
- `copyFile`이 대상 프로젝트의 기존 `CLAUDE.md`/`AGENTS.md`를 확인 없이 덮어쓰던 문제 → 존재 시 스킵(또는 대화형 확인)
- `copyRules()`와 `workflow.md` 복사가 정의만 되고 어디서도 호출되지 않아 실제로는 설치되지 않던 문제 → 세 target 스크립트에 배선 연결
- rules/workflow 설치 경로를 플랫폼별 경로로 바꾸면서 `AGENTS.md`의 문서 참조가 깨졌던 문제 → `{{HARNESS_DIR}}` 템플릿으로 해결
- `plan` 스킬에서 실수로 삭제됐던 다단계 계획 형식(`[단계] → 검증: [확인 방법]`) 복원
- `tdd-workflow`의 "커버리지 80%+"가 프로토타입·스파이크 작업에도 예외 없이 강제되던 문제 → 예외 규칙 추가
- `code-review`가 "새 관점(fresh context)"이라면서 실제로는 같은 컨텍스트에서 자기 검토만 하던 문제 → `code-reviewer` 서브에이전트로 위임하도록 재설계
- `AGENTS.md` §5와 `workflow.md`/`tdd-workflow`가 검증 절차를 중복 설명하던 문제 → `AGENTS.md`는 원칙만 남기고 절차는 workflow/skills로 위임
- `save-session`에 "언제 쓰나" 트리거 기준이 없고 `memory/` 저장 경로가 불명확하던 문제 → 트리거 기준 추가, 프로젝트 루트 기준임을 명시, `.gitignore` 권장 추가

### Changed
- 로컬 테스트용 샌드박스 디렉터리명: `.dev-sandbox` → `.sandbox`

### Verified
- `.sandbox`(로컬 파일 경로), 가짜 `HOME`(`--global`), 실제 `npx github:jae-yon/my-harness <target>`(private repo, git 인증 기반) 세 가지 방식 모두 실사용 흐름 검증
- `AGENTS.md`/`coding-style.md`/`git-workflow.md`/스킬 4종/에이전트 2종 번역본이 설치 시 정상 반영되고 `.kr.md`는 제외되는 것을 매 변경마다 `.sandbox` 설치로 검증

## 2026-09-01

### Added
- 초기 프로젝트 스캐폴딩: `package.json`, `bin/cli.js`, `target/_shared.js`, `target/{codex,claude,cursor}.js`
- 설치 배관(pipe) 설계: `package.json` scripts → `bin/cli.js` → `target/*.js` → `core/`

### Fixed
- `bin/cli.js`가 `join()`을 쓰면서 `node:path`에서 import하지 않아 실행 시 `ReferenceError`가 나던 문제
