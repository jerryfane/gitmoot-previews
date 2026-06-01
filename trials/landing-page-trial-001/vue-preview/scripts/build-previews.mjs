import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const previewRoot = path.resolve(scriptDir, "..");
const repoRoot = path.resolve(previewRoot, "../../..");
const runId = "landing-page-trial-001";

const builds = [
  ["item-001", "a"],
  ["item-001", "b"],
  ["item-002", "a"],
  ["item-002", "b"],
  ["item-003", "a"],
  ["item-003", "b"],
];

for (const [item, option] of builds) {
  const outDir = path.join(repoRoot, "runs", runId, item, option);
  const base = `/gitmoot-previews/runs/${runId}/${item}/${option}/`;
  const result = spawnSync(
    "npx",
    ["vite", "build", "--base", base, "--outDir", outDir, "--emptyOutDir"],
    {
      cwd: previewRoot,
      env: {
        ...process.env,
        VITE_ITEM_ID: item,
        VITE_OPTION_ID: option,
      },
      stdio: "inherit",
    },
  );

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
