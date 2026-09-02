import { copySkills, copyRules, copyAgents, copyFile, TARGET, IS_GLOBAL } from "./_shared.js";

console.log(`Installing Harness for Claude Code → ${TARGET}${IS_GLOBAL ? " (global)" : ""}`);

console.log("--------------------------------");

copySkills(".claude/skills");
copyRules(".claude/rules");
copyAgents(".claude/agents");
await copyFile("core/workflow.md", ".claude/workflow.md");
await copyFile("AGENTS.md", IS_GLOBAL ? ".claude/CLAUDE.md" : "CLAUDE.md", { HARNESS_DIR: ".claude" });

console.log("--------------------------------");

console.log("Installation complete. Start this project in Claude Code to be recognized.");
