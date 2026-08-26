# AGENTS.md

Guidance for coding agents working in this repository.

## Project overview

A TypeScript SDK that wraps the InfoSimples API v2 (`https://api.infosimples.com/api/v2/consultas`) for Node.js consumers. It has no runtime logic of its own beyond thin `axios`-based wrappers per API resource — the value is the typed surface over InfoSimples' endpoints (Receita Federal, Tribunais, Caixa, Portal da Transparência, SIT, OFAC). Published to npm as `infosimples-sdk`.

## Commands

```bash
pnpm build         # tsc compile: lib/ + index.ts -> dist/
pnpm test          # vitest (HTTP calls mocked with nock)
pnpm lint          # eslint
pnpm format:check  # check formatting (singleQuote, trailingComma: all, arrowParens: avoid)
```

Commit messages are enforced by commitlint (`@commitlint/config-conventional`) via a husky `commit-msg` hook, so commits must follow Conventional Commits (`type(scope): summary`).

## Adding a resource/endpoint

Every resource method is declared with the full `(opts: IConnectOpts, data)` signature and exported cast as `OmitFirstArg<typeof fn>`, so `connect()` can bind `opts` away at runtime. New endpoints must follow this exact pattern — see `docs/architecture.md` for the full explanation before adding one.

## Further documentation

- [`docs/architecture.md`](docs/architecture.md) — entry point chain, client factory pattern, resources, API layer, `OmitFirstArg`, test layout
- [`docs/testing.md`](docs/testing.md) — how to write tests in this repo's pattern (vitest + nock)
- [`docs/releasing.md`](docs/releasing.md) — release-please / npm trusted-publishing flow
- [`docs/adrs/`](docs/adrs/) — architecture decision records
