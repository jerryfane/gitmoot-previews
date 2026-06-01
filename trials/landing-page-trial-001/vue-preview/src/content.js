const pages = {
  "item-001": {
    product: "Gitmoot",
    navAction: "Install",
    eyebrow: "Local-first agent coordination",
    headline: "Run coding agents through repos, PRs, and human review.",
    summary:
      "Gitmoot connects Codex, Claude Code, and custom agent templates to the GitHub workflows developers already trust.",
    primary: "Install Gitmoot",
    secondary: "Read SKILL.md",
    proof: "Built for local repos, GitHub comments, PR review loops, and agent sessions that do not need a hosted control plane.",
    steps: [
      "Create or select a repository",
      "Subscribe an agent or start one from a template",
      "Route work through PR comments or local agent commands",
      "Review, merge, and keep the audit trail in GitHub",
    ],
    details: [
      "Repo-aware agent routing",
      "PR comment job queues",
      "Codex and Claude runtime adapters",
    ],
    command: "gitmoot agent ask planner --repo owner/project \"write the plan\"",
  },
  "item-002": {
    product: "Gitmoot SkillOpt",
    navAction: "Start run",
    eyebrow: "Human preference loops for agent templates",
    headline: "Turn A/B feedback into better reusable agent instructions.",
    summary:
      "SkillOpt compares outputs from template variants, collects human preference feedback, and imports optimized candidates back into Gitmoot.",
    primary: "Start a review run",
    secondary: "View contract",
    proof: "Reviewers click static previews, pick the better output, and add short reasoning. Gitmoot keeps the feedback structured.",
    steps: [
      "Create a template and review run",
      "Publish baseline and candidate outputs",
      "Collect human choices in GitHub",
      "Export feedback and optimize the template",
    ],
    details: [
      "Pairwise A/B review packets",
      "GitHub issue feedback sync",
      "Candidate promote or reject flow",
    ],
    command: "gitmoot skillopt review create --template landing-page-builder --run landing-page-trial-001",
  },
  "item-003": {
    product: "Gitmoot Install",
    navAction: "Get started",
    eyebrow: "First run in minutes",
    headline: "Install Gitmoot, add a runtime plugin, and ask your first agent.",
    summary:
      "Set up the CLI, verify your GitHub access, install the Codex or Claude plugin, then run a scoped agent request from your repo.",
    primary: "Copy install command",
    secondary: "Open GitHub",
    proof: "The first workflow stays local: a CLI, a repo, GitHub auth, and the runtime you already use.",
    steps: [
      "Install or update the Gitmoot binary",
      "Run doctor checks for GitHub and runtime access",
      "Install the Codex or Claude plugin",
      "Create an agent from a template and ask a task",
    ],
    details: [
      "Single binary CLI",
      "Plugin discovery for runtime chats",
      "Template-based agent startup",
    ],
    command: "gitmoot plugin install codex && gitmoot plugin doctor",
  },
};

const options = {
  a: {
    label: "Option A",
    variant: "baseline",
    note: "Simple baseline with direct copy, linear sections, and minimal motion.",
  },
  b: {
    label: "Option B",
    variant: "candidate",
    note: "Stronger candidate with sharper hierarchy, better scan paths, and restrained motion.",
  },
};

export function currentPage() {
  const itemId = import.meta.env.VITE_ITEM_ID || "item-001";
  const optionId = import.meta.env.VITE_OPTION_ID || "a";
  return {
    itemId,
    optionId,
    page: pages[itemId] || pages["item-001"],
    option: options[optionId] || options.a,
  };
}
