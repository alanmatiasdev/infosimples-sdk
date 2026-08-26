# Testing

Tests run on [Vitest](https://vitest.dev/) with [nock](https://github.com/nock/nock) mocking HTTP —
no real requests ever hit `api.infosimples.com`. Coverage is collected with the `v8` provider
(`vitest.config.mts`) and reported on every PR (`.github/workflows/ci.yml`).

```bash
pnpm test           # vitest run
pnpm test:watch     # vitest, watch mode
pnpm test:coverage  # vitest run --coverage
```

## Layout

Tests live under `test/`, mirroring `lib/`:

- `test/client/` — `connect()`/`looper`/`binder` (the runtime bind-away-`opts` machinery) and the
  `api.ts` `get`/`post` wrappers.
- `test/resources/` — one file per resource in `lib/resources/`, each covering **one representative
  method**, not every exported method. The goal is to prove the wiring (path, payload shape, `opts`
  merge) works for the pattern every resource method follows — not to re-test axios or nock.

A new resource file gets one new test file in `test/resources/`; a new method on an existing resource
usually doesn't need its own test unless it deviates from the shared pattern (see below).

## Resource test pattern

Every resource test follows the same shape — copy the closest existing one
(e.g. `test/resources/receitaFederal.test.ts`) rather than writing from scratch:

```typescript
import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/<resourceName>', () => {
  it('<methodName>() posts token + payload to /<endpoint/path>', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/<endpoint/path>', {
        token: 'tok',
        // ...payload fields the method sends
      })
      .reply(200, { /* representative response body */ });

    const client = connect({ token: 'tok' });
    const result = await client.<resourceName>.<methodName>({
      // ...payload fields
    });

    expect(result).toEqual({ /* same as the reply body */ });
    expect(scope.isDone()).toBe(true);
  });
});
```

Points that matter:

- **Go through `connect()`, not the resource module directly.** Calling
  `client.<resourceName>.<methodName>(data)` (instead of importing the resource file and calling
  `methodName({ token }, data)`) exercises the real public surface, including the `opts`-binding
  `connect()` does — see `docs/architecture.md`.
- **Assert the exact nock path and payload**, including `token`. `opts` is merged into the POST body
  (InfoSimples takes auth as part of the payload, not a header), so the mocked request body must
  include `token` alongside the method's own fields — this is what proves the merge happened.
- **`nock(...).post(path, body).reply(...)` is the assertion.** If the client sends a different path,
  method, or body than what's mocked, nock never satisfies the interceptor and `scope.isDone()` is
  `false` — that's the real check, `expect(scope.isDone()).toBe(true)` isn't boilerplate.
- **Always `nock.cleanAll()` in `afterEach`** so a failed/unmatched interceptor from one test can't leak
  into the next.
- **Response bodies are minimal fixtures**, just enough shape to assert `result` round-trips through
  `api.ts`'s `response.data` unwrapping — don't try to model a full real InfoSimples response.

## `client/` tests

`test/client/index.test.ts` and `test/client/api.test.ts` cover the machinery every resource method
relies on, so they're a good reference when the *pattern itself* changes (e.g. auth stops being
body-based, or `connect()`'s binding logic changes) rather than when adding a new endpoint:

- `connect()` throws without a token.
- `connect()` walks every top-level resource group (`Object.keys(client)`).
- `connect()` actually binds `opts` into a nested method call (one resource used as a representative
  example — currently `ofac.sancoes`).
- `api.get`/`api.post` hit the configured base URL and resolve with `response.data`.

## Adding a test for a new resource

1. Add the resource file under `lib/resources/` following the pattern in `docs/architecture.md`
   (`(opts, data)` signature, `OmitFirstArg` export cast).
2. Create `test/resources/<resourceName>.test.ts` using the template above, picking **one** method to
   cover — usually the simplest or most illustrative one.
3. Run `pnpm test` and `pnpm test:coverage` to confirm the new test passes and coverage doesn't drop.
