import { copySkills, copyRules, copyFile, TARGET } from "./_shared.js";

console.log(`Installing Harness for Codex → ${TARGET}`);

console.log("--------------------------------");

copySkills(".agents/skills");
copyRules(".agents/rules");
await copyFile("core/workflow.md", ".agents/workflow.md");
await copyFile("AGENTS.md", "AGENTS.md", { HARNESS_DIR: ".agents" });

console.log("--------------------------------");

console.log("Installation complete. Start this project in Codex to be recognized.");
