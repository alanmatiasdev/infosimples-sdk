# InfoSimples SDK Node.JS 
> A forma mais fácil e rápida de integrar o InfoSimples na sua aplicação Node.JS.

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/bralandealmeida/infosimples-sdk/blob/master/LICENSE) [![TypeScript](https://badgen.net/badge/icon/typescript?icon=typescript&label)](https://typescriptlang.org) [![Npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://https://npmjs.com/) 

**Sumário**
- [Instalando](#instalando)
- [Iniciando](#iniciando)
- [InfoSimples Exemplos](#infosimples-exemplos):
  - [Receita Federal](#receita-federal)
    - [Busca de empresas por CNPJ](#busca-de-empresas-por-cnpj)
    - [PGFN (CND Federal)](#pgfn-cnd-federal)
  - [Busca em Tribunais](#busca-em-tribunais)
    - [Certidão negativa Cível e Criminal no TRF4](#certidão-negativa-cível-e-criminal-no-trf4)
  - [Caixa](#caixa)
    - [Regularidade do Empregador (FGTS)](#regularidade-do-empregador-fgts)
  - [Portal da Transparência](#portal-da-transparência)
    - [Cadastro de Entidades Privadas sem Fins Lucrativos Impedidas (CEPIM)](#cadastro-de-entidades-privadas-sem-fins-lucrativos-impedidas-cepim)
- [Licença](#licença)
- [Contribuidores](#contribuidores)

## Portal da Transparência
#### Cadastro de Entidades Privadas sem Fins Lucrativos Impedidas (CEPIM)


# Instalando

Com Yarn:

```bash
yarn add install infosimples-sdk
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

# InfoSimples Exemplos

## Receita Federal
#### Busca de empresas por CNPJ
``` typescript
client.receitaFederal.cnpj({
  cnpj: '00.000.000/0000-00',
  origem: 'web',
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```

O campo origem é opcional.

#### PGFN (CND Federal)
Emite a Certidão de Débitos Relativos a Créditos Tributários Federais e à Dívida Ativa da União a partir do número de CNPJ ou CPF.

``` typescript
client.receitaFederal.pgfn({
  cpf: '000.000.000-00',
  preferencia_emissao: '2via'
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```

Alternativamente você pode usar o CNPJ para a busca. O campo preferencia_emissao é opcional.

## Busca em Tribunais
#### Certidão negativa Cível e Criminal no TRF4
``` typescript
client.tribunais.trf4Certidao({
  nome: 'Ayla Camila Elisa da Costa',
  tipo: '01_CIVEL',
  cpf: '102.909.451-94'
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```
Alternativamente você pode usar o CNPJ para a busca. O nome e o tipo são campos obrigatórios.

## Caixa
#### Regularidade do Empregador (FGTS)
Consulta a situação de regularidade do empregador e obtém os dados correspondentes ao Certificado de Regularidade do FGTS (CRF), Fundo de Garantia do Tempo de Serviço.

``` typescript
client.caixa.regularidadeEmpregador({
  cnpj: '00.000.000/0000-00',
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```

## Portal da Transparência
#### Cadastro de Entidades Privadas sem Fins Lucrativos Impedidas (CEPIM)

O Cadastro de Entidades Privadas Sem Fins Lucrativos Impedidas (CEPIM) apresenta a relação de entidades privadas sem fins lucrativos que estão impedidas de celebrar novos convênios, contratos de repasse ou termos de parceria com a Administração Pública Federal, em função de irregularidades não resolvidas em convênios, contratos de repasse ou termos de parceria firmados anteriormente.

``` typescript
client.portalTransparencia.cepim({
  cnpj: '00.000.000/0000-00',
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```

# Licença
[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/bralandealmeida/infosimples-sdk/blob/master/LICENSE)

# Contribuidores
- [Alan Matias](https://github.com/bralandealmeida)