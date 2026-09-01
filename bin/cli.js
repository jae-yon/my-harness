#!/usr/bin/env node
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const target = (process.argv[2] || '').toLowerCase();

const VALID_TARGETS = ['codex', 'claude', 'cursor'];

async function run(name) {
  // target/{name}.js 파일을 동적으로 가져와서 실행
  await import(pathToFileURL(join(__dirname, "..", "target", `${name}.js`)));
}

if (!VALID_TARGETS.includes(target)) {
  // 타켓이 없으면 사용법 출력
  console.log(`사용법: npx my-harness <${VALID_TARGETS.join('|')}>`);
  // 타켓이 있으면 1, 없으면 0 반환
  process.exit(target ? 1 : 0);
} else {
  // 타켓이 있으면 실행
  await run(target);
}