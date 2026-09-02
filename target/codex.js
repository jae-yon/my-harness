import { copySkills, copyRules, copyAgents, copyFile, TARGET, IS_GLOBAL } from "./_shared.js";

// Codex의 공식 전역 설정 경로는 .agents가 아니라 .codex다 (~/.codex/AGENTS.md)
const dir = IS_GLOBAL ? ".codex" : ".agents";

console.log(`Installing Harness for Codex → ${TARGET}${IS_GLOBAL ? " (global)" : ""}`);

console.log("--------------------------------");

copySkills(`${dir}/skills`);
copyRules(`${dir}/rules`);
copyAgents(`${dir}/agents`);
await copyFile("core/workflow.md", `${dir}/workflow.md`);
await copyFile("AGENTS.md", IS_GLOBAL ? `${dir}/AGENTS.md` : "AGENTS.md", { HARNESS_DIR: dir });

console.log("--------------------------------");

console.log("Note: Codex's native subagent support is unconfirmed — agents/ is installed as reference material for now.");

console.log("Installation complete. Start this project in Codex to be recognized.");
