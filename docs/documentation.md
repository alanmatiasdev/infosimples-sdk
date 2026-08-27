# Documentation

The [wiki](https://github.com/alanmatiasdev/infosimples-sdk/wiki) is the source of truth for
per-endpoint usage docs (request shape, options, example call) — one page per category (Receita
Federal, Tribunais, Caixa, Portal da Transparência, SIT, OFAC), indexed from the wiki's `Home` page.
The README only covers installation, client setup, and a summary linking out to each wiki page.

When adding a new endpoint (see [`architecture.md`](architecture.md) for the resource pattern), add
its usage example to the corresponding wiki page (or create a new page + link it from `Home` and from
the README's "Documentação por Endpoint" section if it's a new category) instead of growing the README.

The wiki is a separate git repo (`infosimples-sdk.wiki.git`) with no pull request support — edits are
pushed directly, so they land outside the usual PR review flow.
