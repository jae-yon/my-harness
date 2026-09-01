# my-harness

여러 코딩 프로젝트에 재사용하는 개인용 AI 코딩 하네스. Claude Code, Codex, Cursor에 같은 행동 지침(`AGENTS.md`)과 스킬·규칙·워크플로우를 설치한다. [affaan-m/ECC](https://github.com/affaan-m/ECC)의 구조를 참고해서 개인 규모로 만들었다.

## 설치

```bash
# 로컬 — 현재 프로젝트에만 설치
npx github:jae-yon/my-harness <codex|claude|cursor>

# 전역 — 홈 디렉터리에 설치, 모든 프로젝트에 자동 적용
npx github:jae-yon/my-harness <codex|claude|cursor> --global
```

| 플랫폼 | 로컬 설치 위치 | 전역 설치 위치 |
|---|---|---|
| Codex | `.agents/` + `AGENTS.md` | `~/.codex/` + `~/.codex/AGENTS.md` |
| Claude Code | `.claude/` + `CLAUDE.md` | `~/.claude/` + `~/.claude/CLAUDE.md` |
| Cursor | `.cursor/` + `AGENTS.md` | `~/.cursor/` + `~/.cursor/rules/AGENTS.md` |

이미 설치된 대상이 있으면 대화형 터미널에서는 덮어쓸지 물어보고(Y/N), 비대화형 환경에서는 자동으로 건너뛴다.

> **참고**: Cursor의 전역 규칙은 공식적으로 `.mdc` 확장자를 기대한다. 지금은 `.md`로 설치되므로 실제 인식 여부는 별도 확인이 필요하다.

## 구조

```
package.json (bin: my-harness)
        ↓
bin/cli.js  — target 인자를 검증하고 target/{name}.js를 동적 import
        ↓
target/{platform}.js  — _shared.js의 copySkills()/copyRules()/copyFile()로
                         core/skills, core/rules, core/workflow.md, AGENTS.md를 설치
```

- `core/`: 플랫폼과 무관한 콘텐츠 (skills, rules, workflow.md)
- `target/*.js`: 콘텐츠를 각 플랫폼이 인식하는 위치·이름으로 옮기는 어댑터
- `AGENTS.md`: 정본 하나를 Claude Code에는 `CLAUDE.md`로, Codex/Cursor에는 `AGENTS.md` 그대로 배포. `{{HARNESS_DIR}}` 플레이스홀더가 설치 시점에 실제 경로(`.claude`, `.agents`, `.cursor` 등)로 치환된다.

## 포함된 콘텐츠

**워크플로우** (`core/workflow.md`): `plan → test → implement → review → verify → remember`

**스킬** (`core/skills/`)
- `plan` — 코드를 쓰기 전 구현 계획 수립
- `tdd-workflow` — RED → GREEN → REFACTOR 강제
- `code-review` — 구현 직후 fresh-context 점검
- `save-session` — 긴 세션 종료 시 요약 저장

**규칙** (`core/rules/`)
- `coding-style.md`
- `git-workflow.md`

## 개발 / 로컬 테스트

```bash
npm run test:claude   # test:codex, test:cursor도 동일
```

`.sandbox/`(gitignore 처리됨)에 격리해서 설치하므로 저장소 자기 자신을 건드리지 않는다.

## 남은 작업

- [ ] `core/skills`, `core/rules` 콘텐츠를 실제 작업에 적용해보고 다듬기
- [ ] Cursor 전역 설치의 `.mdc` 확장자 대응 검증
- [ ] 플랫폼별 스킬 선택 설치 (지금은 `core/skills` 전체가 모든 플랫폼에 동일하게 설치됨)
