import { spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const previewRoot = path.resolve(scriptDir, "..");
const trialRoot = path.resolve(previewRoot, "..");
const repoRoot = path.resolve(trialRoot, "../..");
const data = JSON.parse(readFileSync(path.join(previewRoot, "src", "trial-data.json"), "utf8"));

for (const item of data.items) {
  for (const option of ["a", "b"]) {
    const outDir = path.join(repoRoot, "runs", data.runId, item.id, option);
    const base = `/gitmoot-previews/runs/${data.runId}/${item.id}/${option}/`;
    const result = spawnSync(
      "npx",
      ["vite", "build", "--base", base, "--outDir", outDir, "--emptyOutDir"],
      {
        cwd: previewRoot,
        env: {
          ...process.env,
          VITE_ITEM_ID: item.id,
          VITE_OPTION_ID: option,
        },
        stdio: "inherit",
      },
    );

    if (result.status !== 0) {
      process.exit(result.status ?? 1);
    }
  }
}
