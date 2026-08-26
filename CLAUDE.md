# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A TypeScript SDK that wraps the InfoSimples API v2 (`https://api.infosimples.com/api/v2/consultas`) for Node.js consumers. It has no runtime logic of its own beyond thin `axios`-based wrappers per API resource — the value is the typed surface over InfoSimples' endpoints (Receita Federal, Tribunais, Caixa, Portal da Transparência, SIT, OFAC). Published to npm as `infosimples-sdk`.

## Commands

```bash
pnpm build         # tsc compile: lib/ + index.ts -> dist/
pnpm test          # vitest (HTTP calls mocked with nock)
pnpm lint          # eslint
pnpm format:check  # check formatting (singleQuote, trailingComma: all, arrowParens: avoid)
```

Tests live under `test/`, mirroring `lib/`. `test/client/` covers `connect()`/`looper`/`binder`
(the runtime bind-away-`opts` machinery) and the `api.ts` get/post wrappers; `test/resources/`
has one representative method per resource file, asserting the endpoint path and that `opts` is
merged into the POST payload — not full coverage of every exported method.

Commit messages are enforced by commitlint (`@commitlint/config-conventional`) via a husky `commit-msg` hook, so commits must follow Conventional Commits (`type(scope): summary`).

## Releasing

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

## Architecture

**Entry point chain**: `index.ts` re-exports everything from `lib/index.ts`, which re-exports `lib/client/index.ts` as both the default export and named `connect`.

**Client factory pattern** (`lib/client/index.ts`): `connect({ token })` validates the token, then walks the entire `resources` object tree (`lib/resources/index.ts`) and binds every leaf method to the auth opts (`{ token }`) via `Function.prototype.bind`. This produces a client whose call sites _look_ like `client.receitaFederal.cnpj(data)` even though every underlying resource function is actually declared as `(opts: IConnectOpts, data) => ...` — the first `opts` argument is bound away by the `looper`/`binder` machinery in `connect()`, not by TypeScript. That's why every resource function signature has `opts: IConnectOpts` as its first parameter but is exported cast as `OmitFirstArg<typeof fn>` (see `@types/typings.d.ts`) — the cast tells consumers the truth about the _bound_ function's shape while the implementation still needs the raw unbound signature.

**Resources** (`lib/resources/*.ts`): One file per InfoSimples product area (`receitaFederal`, `tribunais`, `caixa`, `portalTransparencia`, `sit`, `ofac`), each exporting a default object of methods. Every method follows the same shape:

```typescript
const methodName = async (opts: IConnectOpts, data: SomePayloadType) =>
  await api.post('/endpoint/path', { ...opts, ...data });

export default {
  methodName: methodName as unknown as OmitFirstArg<typeof methodName>,
};
```

New endpoints should follow this exact pattern: implement with the full `(opts, data)` signature, POST/GET through `lib/client/api.ts`'s `api.get`/`api.post` helpers, and export with the `OmitFirstArg` cast. Request payload types live in a sibling `*Types.ts` file (e.g. `tribunaisTypes.ts`) and are re-exported from `lib/resources/index.ts`.

**API layer** (`lib/client/api.ts`): a single shared `axios` instance with the InfoSimples base URL; `get`/`post` just unwrap `response.data`. Auth is not a header — InfoSimples takes the `token` as part of the request body/query, which is why `opts` (containing `token`) gets spread into every request payload.

**`OmitFirstArg<F>`** (`@types/typings.d.ts`): global type helper used everywhere resources are exported, to strip the `opts: IConnectOpts` parameter from a function's public type signature after `connect()` has bound it away at runtime.
