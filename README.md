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
    - [Certidão negativa Cível e Criminal no TRF1](#certidão-negativa-cível-e-criminal-no-trf1)
    - [Certidão Eletrônica de Ações Trabalhistas (CEAT) TRT15](#certidão-eletrônica-de-ações-trabalhistas-ceat-trt15)
    - [Certidão de Quitação Eleitoral TSE](#certidão-de-quitação-eleitoral-tse)
    - [CNDT TST](#cndt-tst)
  - [Caixa](#caixa)
    - [Regularidade do Empregador (FGTS)](#regularidade-do-empregador-fgts)
  - [Portal da Transparência](#portal-da-transparência)
    - [Cadastro de Entidades Privadas sem Fins Lucrativos Impedidas (CEPIM)](#cadastro-de-entidades-privadas-sem-fins-lucrativos-impedidas-cepim)
    - [Servidor Público](#servidor-público)
    - [Cadastro de Expulsões da Administração Federal (CEAF)](#cadastro-de-expulsões-da-administração-federal-ceaf)
  - [Secretaria de Inspeção do Trabalho](#secretaria-de-inspeção-do-trabalho)
    - [Trabalho Escravo](#trabalho-escravo)
  - [OFAC](#ofac)
    - [Sanções](#sanções)
- [Licença](#licença)
- [Contribuidores](#contribuidores)

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

#### Certidão negativa Cível e Criminal no TRF1
Emite certidão negativa cível e criminal no portal do Tribunal Regional Federal da 1ª Região (AC, AM, AP, BA, DF, GO, MA, MG, MT , PA, PI, RO, RR e TO), TRF1.

``` typescript
client.tribunais.trf1Certidao({
  tipo: 'CIVEL',
  cpf: '102.909.451-94',
  orgao: '1_GRAU',
  considera_filiais: 0
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```
Alternativamente você pode usar o CNPJ para a busca. O nome e o tipo são campos obrigatórios.

#### Certidão Eletrônica de Ações Trabalhistas (CEAT) TRT15
Emite Certidão Eletrônica de Ações Trabalhistas (CEAT) no TRT15 (Tribunal Regional do Trabalho da 15ª Região).

``` typescript
client.tribunais.trt15Certidao({
  cpf: '102.909.451-94',
  considera_filiais: 0
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```
Alternativamente você pode usar o CNPJ para a busca.

#### Certidão de Quitação Eleitoral TSE
Emite certidão de quitação eleitoral de cidadão brasileiro junto à Justiça Eleitoral no portal do Tribunal Superior Eleitoral (TSE) do Brasil.

``` typescript
client.tribunais.tseCertidao({
  name: 'Ayla Camila Elisa da Costa',
  birthdate: '09/03/1972',
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```

#### CNDT TST
Retorna detalhes sobre a Certidão Negativa de Débitos Trabalhistas (CNDT) emitida pela Justiça do Trabalho (TST).

``` typescript
client.tribunais.tstCndt({
  cpf: '000.000.000-00',
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```
Alternativamente você pode usar o CNPJ para a busca.


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

#### Servidor Público
Consulta detalhamento de um servidor público no Portal da Transparência, incluindo dados do vínculo, ficha de remuneração e viagens a serviço.

``` typescript
client.portalTransparencia.servidorPublico({
  cpf: '000.000.000-00',
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```

#### Cadastro de Expulsões da Administração Federal (CEAF)
Consulta sanções no Portal da Transparência do tipo Cadastro de Expulsões da Administração Federal (CEAF), que reúne as penalidades expulsivas (demissão, cassação de aposentadoria e destituição de cargo em comissão ou função comissionada) aplicadas no âmbito do Poder Executivo Federal e da Câmara dos Deputados, a servidores civis, efetivos ou não.

``` typescript
client.portalTransparencia.ceaf({
  cpf: '000.000.000-00',
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```

#### Cadastro de Empresas Inidôneas e Suspensas (CEIS)
O Cadastro Nacional de Empresas Inidôneas e Suspensas (CEIS) apresenta a relação de empresas e pessoas físicas que sofreram sanções que implicaram a restrição de participar de licitações ou de celebrar contratos com a Administração Pública.

``` typescript
client.portalTransparencia.ceis({
  cpf: '000.000.000-00',
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```

## Secretaria de Inspeção do Trabalho 
#### Trabalho Escravo

Consulta se um CPF ou CNPJ está presente no cadastro de empregadores que tenham submetido trabalhadores a condições análogas à de escravo, organizada pela SIT (Secretaria de Inspeção do Trabalho). Esta é uma consulta offline baseada em uma lista publicada pela SIT de tempos em tempos.

``` typescript
client.sit.trabalhoEscravo({
  cnpj: '00.000.000/0000-00',
}).then((response) => {
  console.log(response)
}).catch((error) => {
  console.log(error)
});
```

## OFAC
#### Sanções

Pesquisa indivíduos e entidades presentes na lista de sanções da OFAC (Office of Foreign Assets Control traduzido para o português como "Agência de Controles de Ativos").

``` typescript
client.ofac.sancoes({
  query: 'American',
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