## 깃 워크플로우

### 브랜치 전략 (Git Flow)

- **main** — 항상 배포 가능한 상태를 유지하는 프로덕션 브랜치. 직접 커밋하지 않고 `release/*`, `hotfix/*` 머지로만 갱신한다.

- **develop** — 다음 릴리스를 위한 통합 브랜치. 모든 `feature/*`가 여기로 머지된다.

- **feature/\*** (`feature/feature1`, `feature/feature2`, ...) — 개별 기능 개발 브랜치. `develop`에서 분기하고, 완료되면 `develop`으로 머지한다.

- **release/\*** — 릴리스 준비 브랜치(버전 고정, 문서화, 막바지 버그 수정). `develop`에서 분기하고, 완료되면 `main`과 `develop` 양쪽에 머지한다. `main` 머지 시 버전 태그를 남긴다.

- **hotfix/\*** — 프로덕션 긴급 수정 브랜치. `main`에서 분기하고, 완료되면 `main`과 `develop` 양쪽에 머지한다.

병합 흐름:
```
feature/* → develop → release/* → main
                                     ↑
                          hotfix/* (긴급 시 main에서 직접 분기)
```

브랜치 이름은 소문자와 하이픈만 사용한다. (예: `feature/user-auth`)

### 커밋 컨벤션 (Conventional Commits) 

- 커밋 메시지는 Conventional Commits: `type(scope): summary`
  - type: feat, fix, refactor, test, docs, chore
- 한 커밋은 하나의 논리적 변경만 담는다.

### 머지 전 확인

- `develop`/`main`에 머지하기 전 build, lint, types, tests 통과 필수.
- 비밀키·토큰·.env 를 커밋에 절대 포함하지 않는다.
