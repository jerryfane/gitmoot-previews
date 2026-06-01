import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const previewRoot = path.resolve(scriptDir, "..");
const trialRoot = path.resolve(previewRoot, "..");
const data = JSON.parse(readFileSync(path.join(previewRoot, "src", "trial-data.json"), "utf8"));

const promptsDir = path.join(trialRoot, "prompts");
const artifactsDir = path.join(trialRoot, "artifacts");
mkdirSync(promptsDir, { recursive: true });
mkdirSync(artifactsDir, { recursive: true });

const manifest = {
  run_id: data.runId,
  template_id: data.templateId,
  preview_base_url: `https://jerryfane.github.io/gitmoot-previews/runs/${data.runId}/`,
  items: [],
};

for (const item of data.items) {
  const promptPath = `trials/${data.runId}/prompts/${item.id}.md`;
  const promptMarkdown = `# ${item.id}: ${item.title}\n\n${item.prompt}\n`;
  writeFileSync(path.join(promptsDir, `${item.id}.md`), promptMarkdown);

  const manifestItem = {
    id: item.id,
    title: item.title,
    split: item.split,
    prompt: promptPath,
    options: {},
  };

  for (const optionId of ["a", "b"]) {
    const option = data.options[optionId];
    const artifactPath = `trials/${data.runId}/artifacts/${item.id}-${optionId}.md`;
    const previewPath = `runs/${data.runId}/${item.id}/${optionId}/`;
    const previewURL = `https://jerryfane.github.io/gitmoot-previews/${previewPath}`;
    const artifact = [
      `# ${item.id} ${option.label}`,
      "",
      `Source prompt: \`${promptPath}\``,
      "",
      "Preview URL:",
      "",
      "```text",
      previewURL,
      "```",
      "",
      "GitHub Pages path:",
      "",
      "```text",
      previewPath,
      "```",
      "",
      `Generation notes: ${option.notes}`,
      "",
    ].join("\n");

    writeFileSync(path.join(artifactsDir, `${item.id}-${optionId}.md`), artifact);
    manifestItem.options[optionId] = {
      label: option.label,
      variant: option.variant,
      preview_path: previewPath,
      artifact: artifactPath,
    };
  }

  manifest.items.push(manifestItem);
}

writeFileSync(path.join(trialRoot, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);
