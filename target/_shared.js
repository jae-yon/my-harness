import { cpSync, mkdirSync, existsSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { homedir } from "node:os";
import { createInterface } from "node:readline/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const PACKAGE = resolve(__dirname, "..");  // 하네스 패키지 루트
export const CORE = join(PACKAGE, "core");        // 소스: core/
export const IS_GLOBAL = process.argv.includes("--global");
export const TARGET = IS_GLOBAL ? homedir() : process.cwd();  // --global이면 홈 디렉터리, 아니면 현재 디렉토리

export function copySkills(destRel) {
  const dest = join(TARGET, destRel);
  mkdirSync(dest, { recursive: true });
  cpSync(join(CORE, "skills"), dest, { recursive: true });
  console.log(`  skills  -> ${destRel}`);
}

export function copyRules(destRel) {
  const dest = join(TARGET, destRel);
  mkdirSync(dest, { recursive: true });
  cpSync(join(CORE, "rules"), dest, { recursive: true });
  console.log(`  rules   -> ${destRel}`);
}

export async function copyFile(srcRel, destRel, vars = {}) {
  const dest = join(TARGET, destRel);
  if (existsSync(dest)) {
    if (!process.stdin.isTTY) {
      console.log(`  skip    ${destRel} (이미 하네스가 존재함 — 비대화형 실행이라 덮어쓰지 않음)`);
      return;
    }
    const rl = createInterface({ input: process.stdin, output: process.stdout });
    const answer = await rl.question(`  이미 하네스가 존재합니다 (${destRel}). 덮어쓰시겠습니까? [Y/N] `);
    rl.close();
    if (!/^y(es)?$/i.test(answer.trim())) {
      console.log(`  skip    ${destRel}`);
      return;
    }
  }
  mkdirSync(dirname(dest), { recursive: true });
  const src = join(PACKAGE, srcRel);
  if (Object.keys(vars).length === 0) {
    cpSync(src, dest);
  } else {
    let content = readFileSync(src, "utf8");
    for (const [key, value] of Object.entries(vars)) {
      content = content.replaceAll(`{{${key}}}`, value);
    }
    writeFileSync(dest, content);
  }
  console.log(`  ${srcRel} -> ${destRel}`);
}

export { join };