import { copySkills, copyRules, copyFile, TARGET } from "./_shared.js";

console.log(`Claude Code 하네스를 설치합니다 → ${TARGET}`);
copySkills(".claude/skills");
copyRules(".harness/rules");
await copyFile("core/workflow.md", ".harness/workflow.md");
await copyFile("AGENTS.md", "CLAUDE.md");
console.log("설치가 완료되었습니다. Claude Code에서 해당 프로젝트를 시작하면 인식됩니다.");
