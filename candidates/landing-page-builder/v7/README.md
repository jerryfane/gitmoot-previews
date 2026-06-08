# landing-page-builder@v7 Review

This folder exports the pending Gitmoot SkillOpt candidate
`landing-page-builder@v7` for GitHub PR review.

## Candidate

- Template: `landing-page-builder`
- Base: `landing-page-builder@v6`
- Candidate: `landing-page-builder@v7`
- State: pending
- Source run: `landing-page-trial-008-gpt55-soft`
- Model: `gpt-5.5`
- Gate: `soft`

## Result

- Accepted steps: 1
- Rejected steps: 2
- Skipped steps: 0
- Selection soft score: `0.8650 -> 0.8775`
- Test hard score: `1.0000 -> 1.0000`
- Total tokens: `158,876`

## Review Links

PR branch previews:

- item-011 A: https://raw.githack.com/jerryfane/gitmoot-previews/review/landing-page-builder-v7/runs/landing-page-trial-009/item-011/a/index.html
- item-011 B: https://raw.githack.com/jerryfane/gitmoot-previews/review/landing-page-builder-v7/runs/landing-page-trial-009/item-011/b/index.html
- item-012 A: https://raw.githack.com/jerryfane/gitmoot-previews/review/landing-page-builder-v7/runs/landing-page-trial-009/item-012/a/index.html
- item-012 B: https://raw.githack.com/jerryfane/gitmoot-previews/review/landing-page-builder-v7/runs/landing-page-trial-009/item-012/b/index.html

GitHub Pages links after this branch is merged:

- item-011 A: https://jerryfane.github.io/gitmoot-previews/runs/landing-page-trial-009/item-011/a/
- item-011 B: https://jerryfane.github.io/gitmoot-previews/runs/landing-page-trial-009/item-011/b/
- item-012 A: https://jerryfane.github.io/gitmoot-previews/runs/landing-page-trial-009/item-012/a/
- item-012 B: https://jerryfane.github.io/gitmoot-previews/runs/landing-page-trial-009/item-012/b/

## Files

- `current-v6.md`: current active skill before this candidate.
- `candidate-v7.md`: pending candidate skill.
- `candidate.diff.md`: concise diff from v6 to v7.
- `eval-report.json`: optimizer/evaluation report.
- `candidate-summary.json`: Gitmoot candidate summary.

Promotion is separate from merging this PR. If the candidate is approved, run:

```sh
/tmp/gitmoot-current skillopt candidate promote landing-page-builder@v7
```
