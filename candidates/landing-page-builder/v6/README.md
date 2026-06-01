# landing-page-builder@v6 Review

This folder exports the pending Gitmoot SkillOpt candidate
`landing-page-builder@v6` for GitHub PR review.

## Candidate

- Template: `landing-page-builder`
- Base: `landing-page-builder@v5`
- Candidate: `landing-page-builder@v6`
- State: pending
- Source run: `landing-page-trial-006-gpt55-soft`
- Model: `gpt-5.5`
- Gate: `soft`

## Result

- Accepted steps: 1
- Rejected steps: 1
- Skipped steps: 1
- Selection soft score: `0.8633 -> 0.8867`
- Test hard score: `1.0000 -> 1.0000`
- Total tokens: `118,664`

## Review Links

- Review issue: https://github.com/jerryfane/gitmoot-previews/issues/7
- item-011 A: https://jerryfane.github.io/gitmoot-previews/runs/landing-page-trial-007/item-011/a/index.html
- item-011 B: https://jerryfane.github.io/gitmoot-previews/runs/landing-page-trial-007/item-011/b/index.html
- item-012 A: https://jerryfane.github.io/gitmoot-previews/runs/landing-page-trial-007/item-012/a/index.html
- item-012 B: https://jerryfane.github.io/gitmoot-previews/runs/landing-page-trial-007/item-012/b/index.html

## Files

- `current-v5.md`: current active skill before this candidate.
- `candidate-v6.md`: pending candidate skill.
- `candidate.diff.md`: concise diff from v5 to v6.
- `eval-report.json`: optimizer/evaluation report.
- `candidate-summary.json`: Gitmoot candidate summary.

Promotion is separate from merging this PR. If the candidate is approved, run:

```sh
/tmp/gitmoot-current skillopt candidate promote landing-page-builder@v6
```
