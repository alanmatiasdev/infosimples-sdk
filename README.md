# InfoSimples SDK Node.JS

> A forma mais fácil e rápida de integrar a API v2 InfoSimples na sua aplicação Node.JS.

[![NPM Version](http://img.shields.io/npm/v/infosimples-sdk.svg?style=flat)](https://www.npmjs.com/package/infosimples-sdk) [![NPM Downloads](https://img.shields.io/npm/dm/infosimples-sdk.svg?style=flat)](https://npmcharts.com/compare/infosimples-sdk?minimal=true) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/alanmatiasdev/infosimples-sdk/blob/master/LICENSE) [![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org) [![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://www.npmjs.com/package/infosimples-sdk)

---

> Este pacote está em desenvolvimento. Aceitamos pull requests para implementar os demais métodos da API.

### Todo

- [ ] implementar demais métodos da API InfoSimples
- [x] implementar testes automatizados

**Sumário**

- [Instalando](#instalando)
- [Iniciando](#iniciando)
- [Documentação por Endpoint](#documentação-por-endpoint)
- [Licença](#licença)
- [Colaboradores](#colaboradores)

# Instalando

Com pnpm:

```bash
pnpm add infosimples-sdk
```

# Iniciando

[Pré-requisito - Criar um token API na InfoSimples](https://api.infosimples.com/administracao/tokens)

Usando a sintaxe **import**:

```typescript
import InfoSimples, { InfoSimplesClient } from 'infosimples-sdk';

const client: InfoSimplesClient = InfoSimples.connect({
  token: 'your-token',
});
```

# Documentação por Endpoint

Os exemplos de uso de cada endpoint (Receita Federal, Tribunais, Caixa, Portal da Transparência, Secretaria de Inspeção do Trabalho e OFAC) foram movidos para a [wiki do projeto](https://github.com/alanmatiasdev/infosimples-sdk/wiki), organizados por categoria:

- [Receita Federal](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Receita-Federal)
- [Tribunais](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Tribunais)
- [Caixa](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Caixa)
- [Portal da Transparência](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Portal-da-Transparencia)
- [Secretaria de Inspeção do Trabalho](https://github.com/alanmatiasdev/infosimples-sdk/wiki/Secretaria-de-Inspecao-do-Trabalho)
- [OFAC](https://github.com/alanmatiasdev/infosimples-sdk/wiki/OFAC)

# Licença

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/alanmatiasdev/infosimples-sdk/blob/master/LICENSE)

# Colaboradores

- [Alan Matias](https://github.com/alanmatiasdev)
