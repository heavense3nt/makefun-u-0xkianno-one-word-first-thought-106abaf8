import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
// Output contract: MAKEFUN_OUTPUT_DIR is absolute in the grader (/output),
// so use it as-is; only a relative value is resolved against the repo root.
// botDir is never joined into the destination (that broke bring-the-humans-03).
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const destinationDir = isAbsolute(outputDir)
  ? outputDir
  : join(repoRoot, outputDir);

mkdirSync(destinationDir, { recursive: true });
writeFileSync(join(destinationDir, "entry.txt"), "defenestration", "utf8");
