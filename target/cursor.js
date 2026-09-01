import { copySkills, copyRules, copyFile, TARGET } from "./_shared.js";

console.log(`Installing Harness for Cursor → ${TARGET}`);

console.log("--------------------------------");

copySkills(".cursor/skills");
copyRules(".cursor/rules");
await copyFile("core/workflow.md", ".cursor/workflow.md");
await copyFile("AGENTS.md", "AGENTS.md", { HARNESS_DIR: ".cursor" });

console.log("--------------------------------");

console.log("Installation complete. Start this project in Cursor to be recognized.");
