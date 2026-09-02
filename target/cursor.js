import { copySkills, copyRules, copyAgents, copyFile, TARGET, IS_GLOBAL } from "./_shared.js";

console.log(`Installing Harness for Cursor → ${TARGET}${IS_GLOBAL ? " (global)" : ""}`);

console.log("--------------------------------");

copySkills(".cursor/skills");
copyRules(".cursor/rules");
copyAgents(".cursor/agents");
await copyFile("core/workflow.md", ".cursor/workflow.md");
await copyFile("AGENTS.md", IS_GLOBAL ? ".cursor/rules/AGENTS.md" : "AGENTS.md", { HARNESS_DIR: ".cursor" });

console.log("--------------------------------");

if (IS_GLOBAL) {
  console.log("Note: Cursor's global rules officially expect the .mdc extension under ~/.cursor/rules/ — this installs .md files, so verify Cursor actually picks them up.");
}

console.log("Note: Cursor's native subagent support is unconfirmed — agents/ is installed as reference material for now.");

console.log("Installation complete. Start this project in Cursor to be recognized.");
