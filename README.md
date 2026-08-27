# InfoSimples SDK Node.js

> A forma mais fácil e rápida de integrar a [API v2 da InfoSimples](https://api.infosimples.com/) na sua aplicação Node.js.

[![NPM Version](https://img.shields.io/npm/v/infosimples-sdk.svg?style=flat)](https://www.npmjs.com/package/infosimples-sdk)
[![NPM Downloads](https://img.shields.io/npm/dm/infosimples-sdk.svg?style=flat)](https://npmcharts.com/compare/infosimples-sdk?minimal=true)
[![Types](https://img.shields.io/npm/types/infosimples-sdk.svg?style=flat)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/npm/l/infosimples-sdk.svg?style=flat)](./LICENSE)

## Sobre o projeto

A InfoSimples oferece uma API de consultas online (em tempo real) a portais públicos brasileiros —
Receita Federal, Tribunais, Portal da Transparência, ANVISA, ANTT, CNJ, TCU e dezenas de outros
órgãos, úteis para automações de KYC, _due diligence_, gestão cadastral e fiscal, e prevenção a
fraudes.

Este pacote é um _wrapper_ tipado e enxuto sobre essa API: cada endpoint vira um método de um
_client_ já autenticado, sem lógica de negócio própria além das chamadas HTTP.

### Recursos

- **TypeScript-first** — tipos de payload para cada endpoint e um `client` totalmente tipado.
- **Client autenticado** — informe o token uma única vez em `connect()`; todos os métodos o reutilizam.
- **Superfície previsível** — um método por endpoint, agrupado por órgão (`client.<órgão>.<consulta>()`).
- **Sem dependências pesadas** — apenas `axios` em runtime.
- **Retorno cru da API** — cada método resolve com o `data` da resposta da InfoSimples, sem transformação.

## Requisitos

- Node.js **>= 18**
- Um token da API InfoSimples — [crie o seu no painel de tokens](https://api.infosimples.com/administracao/tokens).

## Instalação

```bash
# npm
npm install infosimples-sdk

# pnpm
pnpm add infosimples-sdk

# yarn
yarn add infosimples-sdk

# bun
bun add infosimples-sdk
```

## Uso

### Iniciando o client

```typescript
import InfoSimples, { InfoSimplesClient } from 'infosimples-sdk';

const client: InfoSimplesClient = InfoSimples.connect({
  token: process.env.INFOSIMPLES_TOKEN!,
});
```

### Fazendo uma consulta

Cada método recebe um objeto com os parâmetros do endpoint e resolve com a resposta da API:

```typescript
const resultado = await client.receitaFederal.cnpj({ cnpj: '00000000000191' });

console.log(resultado);
```

Com `.then()/.catch()`:

```typescript
client.correios
  .cep({ cep: '01310-930' })
  .then(resposta => console.log(resposta))
  .catch(erro => console.error(erro));
```

### TypeScript

Os parâmetros de cada endpoint são tipados. O tipo `InfoSimplesClient` descreve toda a árvore de
órgãos e métodos disponíveis — útil para injeção de dependência e para _mocks_ em testes.

## Documentação dos endpoints

Os exemplos de uso de cada endpoint vivem na **[wiki do projeto](https://github.com/alanmatiasdev/infosimples-sdk/wiki)**, uma página por órgão:

- [Receita Federal](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Receita-Federal)
- [Tribunais](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Tribunais)
- [Portal da Transparência](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Portal-da-Transparencia)
- [Caixa](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Caixa)
- [Secretaria de Inspeção do Trabalho](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Secretaria-de-Inspecao-do-Trabalho)
- [OFAC](https://github.com/alanmatiasdev/infosimples-sdk/wiki/OFAC)
- [Anatel](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Anatel)
- [ANP](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Anp)
- [ANTT](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Antt)
- [Antecedentes Criminais](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Antecedentes-Criminais)
- [ANVISA](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Anvisa)
- [BCB](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Bcb)
- [Cadastur](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Cadastur)
- [CNJ](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Cnj)
- [CVM](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Cvm)
- [MPF](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Mpf)
- [TCU](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Tcu)
- [CGU](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Cgu)
- [Correios](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Correios)
- [INPI](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Inpi)
- [ONU](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Onu)
- [ICIJ](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Icij)

Para a referência completa de parâmetros e formato de resposta de cada consulta, consulte a
[documentação oficial da InfoSimples](https://api.infosimples.com/consultas/docs).

## Status do projeto

> ⚠️ **Em desenvolvimento.** A API pública ainda pode mudar entre versões `0.x` sem aviso prévio.
> Fixe uma versão exata no `package.json` até o `1.0.0`.

A cobertura de endpoints é ampliada continuamente; a lista sempre atual está na
[wiki](https://github.com/alanmatiasdev/infosimples-sdk/wiki).

### Itens pendentes

- [ ] Ampliar a cobertura de endpoints da API InfoSimples, priorizando a esfera federal e o eixo Rio–SP.
- [ ] Concluir os tribunais restantes (TRFs, TRTs, TJs, TSE/TST).
- [ ] Tipar as respostas de cada endpoint (hoje apenas os parâmetros de entrada são tipados).
- [ ] Publicar um guia de contribuição dedicado.

## Contribuindo

Contribuições são bem-vindas — em especial para cobrir os endpoints que ainda faltam.

- Abra uma _issue_ descrevendo a mudança antes de PRs grandes.
- Os commits seguem [Conventional Commits](https://www.conventionalcommits.org/pt-br/) (validados por `commitlint`).
- Antes de abrir o PR: `pnpm lint && pnpm build && pnpm test && pnpm format:check`.

Arquitetura e convenções do repositório estão em [`AGENTS.md`](./AGENTS.md) e [`docs/`](./docs).

## Changelog

Veja [`CHANGELOG.md`](./CHANGELOG.md).

## Licença

[MIT](./LICENSE) © Alan Matias
