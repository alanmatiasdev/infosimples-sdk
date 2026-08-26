# Releasing

Releases to npm are fully automated by [release-please](https://github.com/googleapis/release-please)
(`.github/workflows/release-please.yml`), driven by Conventional Commits on `main`. There is no manual
version bump or `npm publish` step:

1. Every push to `main` (PRs are squash-merged, so the PR title becomes the commit — it must be a
   valid Conventional Commit, since that's what release-please parses) runs `release-please-action`,
   which opens/updates a standing "release PR" bumping `package.json`'s version and `CHANGELOG.md`
   based on `fix`/`feat`/`BREAKING CHANGE` commits since the last release (`chore`/`docs`/`test`/`ci`
   etc. don't trigger a version bump).
2. Merging that release PR makes the action create a GitHub Release + git tag, which the same workflow
   run detects via the `release_created` output — it then builds and `npm publish`es to npm in the
   same job, gated on that output.

Publishing uses npm's trusted publishing (OIDC, via the `id-token: write` permission) — no `NPM_TOKEN`
secret. That's why the publish step is `npm publish`, not `pnpm publish`: npm's OIDC support is GA,
pnpm's is still flaky (see the comment in the workflow). Trusted publishing has to be configured on the
npm package's side (Settings → Trusted Publisher, pointing at this repo/workflow) for this to work; if
that's ever removed, the publish step needs a token-based fallback again. Everything else in the
workflow uses the default `GITHUB_TOKEN`.
