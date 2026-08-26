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
- [InfoSimples Exemplos](#infosimples-exemplos):
  - [Receita Federal](#receita-federal)
    - [Busca de empresas por CNPJ](#busca-de-empresas-por-cnpj)
    - [Busca de pessoa física por CPF](#busca-de-pessoa-física-por-cpf)
    - [Agenda Tributária](#agenda-tributária)
    - [Cafir](#cafir)
    - [Comprovante de Pagamento](#comprovante-de-pagamento)
    - [CTe](#cte)
    - [IRPF](#irpf)
    - [Simples (Listagem de Períodos para Emissão de DAS)](#simples-listagem-de-períodos-para-emissão-de-das)
    - [MEI](#mei)
    - [NFE](#nfe)
    - [NFS-e](#nfs-e)
    - [NFS-e / Notas Emitidas (Detalhes)](#nfs-e--notas-emitidas-detalhes)
    - [NFS-e / Notas Emitidas](#nfs-e--notas-emitidas)
    - [NFS-e / Notas Recebidas (Detalhes)](#nfs-e--notas-recebidas-detalhes)
    - [NFS-e / Notas Recebidas](#nfs-e--notas-recebidas)
    - [NIRF](#nirf)
    - [PER/DCOMP](#perdcomp)
    - [PGFN (CND Federal)](#pgfn-cnd-federal)
    - [PGFN (CND Federal) - Segunda Via](#pgfn-cnd-federal---segunda-via)
    - [PGFN (CND Federal) - Lista Segunda Via](#pgfn-cnd-federal---lista-segunda-via)
    - [PGFN / Lista de Devedores](#pgfn--lista-de-devedores)
    - [PGFN (CND Federal) - Nova](#pgfn-cnd-federal---nova)
    - [Radar (Habilitação Comércio Exterior)](#radar-habilitação-comércio-exterior)
    - [Sistema de Acréscimos Legais (SAL) / Dados Cadastrais](#sistema-de-acréscimos-legais-sal--dados-cadastrais)
    - [SICALC / Gerar DARF](#sicalc--gerar-darf)
    - [SIMEI (Declaração Anual)](#simei-declaração-anual)
    - [Simei / MEI / Emissão de Guia de Parcelamento](#simei--mei--emissão-de-guia-de-parcelamento)
    - [Simples Nacional](#simples-nacional)
    - [Simples (Emissão de DAS de MEI)](#simples-emissão-de-das-de-mei)
    - [Simples (DASN SIMEI)](#simples-dasn-simei)
    - [Simples / MEI / Emissão de Guia de Parcelamento](#simples--mei--emissão-de-guia-de-parcelamento)
    - [Situação Fiscal](#situação-fiscal)
  - [Busca em Tribunais](#busca-em-tribunais)
    - [Certidão negativa Cível e Criminal no TRF4](#certidão-negativa-cível-e-criminal-no-trf4)
    - [Certidão negativa Cível e Criminal no TRF1](#certidão-negativa-cível-e-criminal-no-trf1)
    - [Certidão Eletrônica de Ações Trabalhistas (CEAT) TRT15](#certidão-eletrônica-de-ações-trabalhistas-ceat-trt15)
    - [Certidão de Quitação Eleitoral TSE](#certidão-de-quitação-eleitoral-tse)
    - [Doadores e Fornecedores TSE](#doadores-e-fornecedores-tse)
    - [CNDT TST](#cndt-tst)
  - [Caixa](#caixa)
    - [Regularidade do Empregador (FGTS)](#regularidade-do-empregador-fgts)
  - [Portal da Transparência](#portal-da-transparência)
    - [Cadastro de Entidades Privadas sem Fins Lucrativos Impedidas (CEPIM)](#cadastro-de-entidades-privadas-sem-fins-lucrativos-impedidas-cepim)
    - [Servidor Público](#servidor-público)
    - [Cadastro de Expulsões da Administração Federal (CEAF)](#cadastro-de-expulsões-da-administração-federal-ceaf)
    - [Cadastro de Empresas Inidôneas e Suspensas (CEIS)](#cadastro-de-empresas-inidôneas-e-suspensas-ceis)
    - [Cadastro Nacional de Empresas Punidas (CNEP)](#cadastro-nacional-de-empresas-punidas-cnep)
    - [Busca](#busca)
    - [Auxílio Emergencial](#auxílio-emergencial)
    - [Bolsa Família](#bolsa-família)
    - [Benefício de Prestação Continuada (BPC)](#benefício-de-prestação-continuada-bpc)
    - [Convênios e Acordos](#convênios-e-acordos)
    - [Acordos de Leniência](#acordos-de-leniência)
    - [Programa de Erradicação do Trabalho Infantil (PETI)](#programa-de-erradicação-do-trabalho-infantil-peti)
    - [Repasse de Verba](#repasse-de-verba)
    - [Garantia-Safra](#garantia-safra)
    - [Seguro Defeso](#seguro-defeso)
  - [Secretaria de Inspeção do Trabalho](#secretaria-de-inspeção-do-trabalho)
    - [Trabalho Escravo](#trabalho-escravo)
    - [CAEPI](#caepi)
  - [OFAC](#ofac)
    - [Sanções](#sanções)
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

# InfoSimples Exemplos

## Receita Federal

#### Busca de empresas por CNPJ

```typescript
client.receitaFederal
  .cnpj({
    cnpj: '00.000.000/0000-00',
    origem: 'web',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

O campo origem é opcional.

#### Busca de pessoa física por CPF

```typescript
client.receitaFederal
  .cpf({
    cpf: '000.000.000-00',
    birthdate: '1985-04-22',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Agenda Tributária

```typescript
client.receitaFederal
  .agendaTributaria({
    mes: '4',
    ano: '2024',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Cafir

Consulta dados do comprovante de Cadastro de Imóveis Rurais (Cafir) através do Cadastro Imobiliário Brasileiro (CIB).

```typescript
client.receitaFederal
  .cafir({
    cib: '00000000000',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Comprovante de Pagamento

Consulta comprovantes de pagamento à Receita Federal, como DARFs, no portal de Serviços da Receita Federal.

```typescript
client.receitaFederal
  .comprovantePagamento({
    data_inicio: '2024-01-01',
    data_fim: '2024-12-31',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### CTe

Retorna todos os dados e eventos do Conhecimento de Transporte Eletrônico a partir da chave de acesso informada.

```typescript
client.receitaFederal
  .cte({
    cte: '00000000000000000000000000000000000000000000',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### IRPF

Consulta Restituições de Imposto de Renda na Receita Federal a partir do CPF, data de nascimento e ano informados.

```typescript
client.receitaFederal
  .irpf({
    cpf: '000.000.000-00',
    birthdate: '1985-04-22',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Simples (Listagem de Períodos para Emissão de DAS)

Lista os Documentos de Arrecadação do Simples Nacional (DAS) de um MEI optante pelo SIMEI, disponíveis para emissão no ano informado.

```typescript
client.receitaFederal
  .listarDas({
    cnpj: '00.000.000/0000-00',
    ano: '2024',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### MEI

Consulta e emite o Certificado da Condição do Microempreendedor Individual (CCMEI) no Portal do Empreendedor.

```typescript
client.receitaFederal
  .mei({
    cnpj: '00.000.000/0000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

Alternativamente você pode usar o CPF do proprietário para a busca.

#### NFE

Retorna os dados e eventos da Nota Fiscal Eletrônica a partir da chave de acesso informada.

```typescript
client.receitaFederal
  .nfe({
    nfe: '00000000000000000000000000000000000000000000',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### NFS-e

Consulta os dados de uma NFS-e por meio da chave de acesso informada.

```typescript
client.receitaFederal
  .nfse({
    chave: '00000000000000000000000000000000000000000000000',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### NFS-e / Notas Emitidas (Detalhes)

Retorna os dados, DANFS-e e XML de uma NFS-e emitida no Portal de Gestão NFS-e, por meio da chave de acesso da nota.

```typescript
client.receitaFederal
  .nfseNotaEmitidaDetalhes({
    chave: '00000000000000000000000000000000000000000000000',
    login_cnpj: '00.000.000/0000-00',
    login_senha: 'senha',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### NFS-e / Notas Emitidas

Consulta os dados de NFS-es emitidas no Portal de Gestão NFS-e, por meio do cadastro ou certificado digital.

```typescript
client.receitaFederal
  .nfseNotasEmitidas({
    login_cnpj: '00.000.000/0000-00',
    login_senha: 'senha',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### NFS-e / Notas Recebidas (Detalhes)

Retorna os dados, DANFS-e e XML de uma NFS-e recebida no Portal de Gestão NFS-e, por meio da chave de acesso da nota.

```typescript
client.receitaFederal
  .nfseNotaRecebidaDetalhes({
    chave: '00000000000000000000000000000000000000000000000',
    login_cnpj: '00.000.000/0000-00',
    login_senha: 'senha',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### NFS-e / Notas Recebidas

Consulta os dados de NFS-es recebidas no Portal de Gestão NFS-e, por meio do cadastro ou certificado digital.

```typescript
client.receitaFederal
  .nfseNotasRecebidas({
    login_cnpj: '00.000.000/0000-00',
    login_senha: 'senha',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### NIRF

Emite a Certidão de Débitos Relativos a Tributos Federais e à Dívida Ativa da União de Imóvel Rural através do Número do Imóvel na Receita Federal (NIRF).

```typescript
client.receitaFederal
  .nirf({
    nirf: '00000000000',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

Alternativamente você pode usar o CIB para a busca.

#### PER/DCOMP

Consulta pedidos PER/DCOMP (Pedido Eletrônico de Restituição, Ressarcimento ou Reembolso e Declaração de Compensação).

```typescript
client.receitaFederal
  .perdcomp({
    cpf: '000.000.000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### PGFN (CND Federal)

Emite a Certidão de Débitos Relativos a Créditos Tributários Federais e à Dívida Ativa da União a partir do número de CNPJ ou CPF.

```typescript
client.receitaFederal
  .pgfn({
    cpf: '000.000.000-00',
    birthdate: '1985-04-22',
    preferencia_emissao: '2via',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

Alternativamente você pode usar o CNPJ para a busca (sem birthdate). O campo preferencia_emissao é opcional.

#### PGFN (CND Federal) - Segunda Via

Emite a segunda via de uma Certidão de Débitos Relativos a Créditos Tributários Federais e à Dívida Ativa da União.

```typescript
client.receitaFederal
  .pgfnSegundaVia({
    cpf: '000.000.000-00',
    birthdate: '1985-04-22',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### PGFN (CND Federal) - Lista Segunda Via

Retorna uma lista com segunda via de certidões emitidas entre as datas de início e fim informadas.

```typescript
client.receitaFederal
  .pgfnSegundaViaLista({
    cpf: '000.000.000-00',
    birthdate: '1985-04-22',
    data_inicio: '2024-01-01',
    data_fim: '2024-12-31',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### PGFN / Lista de Devedores

Consulta os contribuintes inscritos em dívida ativa da União e do FGTS, na condição de devedor principal, corresponsável ou solidário.

```typescript
client.receitaFederal
  .pgfnDevedores({
    cnpj: '00.000.000/0000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### PGFN (CND Federal) - Nova

Emite uma nova Certidão de Débitos Relativos a Créditos Tributários Federais e à Dívida Ativa da União.

```typescript
client.receitaFederal
  .pgfnNova({
    cpf: '000.000.000-00',
    birthdate: '1985-04-22',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Radar (Habilitação Comércio Exterior)

Consulta a situação da habilitação para operar no Comércio Exterior.

```typescript
client.receitaFederal
  .radar({
    cnpj: '00.000.000/0000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Sistema de Acréscimos Legais (SAL) / Dados Cadastrais

Consulta se um número de PIS é válido através do Sistema de Acréscimos Legais (SAL).

```typescript
client.receitaFederal
  .salCadastro({
    pis: '00000000000',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### SICALC / Gerar DARF

Gera DARFs no site do SICALC da Receita Federal.

```typescript
client.receitaFederal
  .sicalcDarf({
    cnpj: '00.000.000/0000-00',
    valor_principal: '1234.56',
    periodo_apuracao: '04/2024',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### SIMEI (Declaração Anual)

Realiza a Declaração Anual do Simples Nacional (DASN) para Microempreendedor Individual (MEI).

```typescript
client.receitaFederal
  .simeiDasn({
    cnpj: '00.000.000/0000-00',
    tipo_declaracao: 'original',
    ano_calendario: '2024',
    receita_bruta_comercio: '1230.53',
    receita_bruta_servicos: '0.00',
    possui_empregado: '0',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Simei / MEI / Emissão de Guia de Parcelamento

Emite guias de Parcelamento Microempreendedor Individual na aba Simei no site da Receita Federal.

```typescript
client.receitaFederal
  .simeiMeiEmissaoGuia({
    cnpj: '00.000.000/0000-00',
    cpf: '000.000.000-00',
    codigo_acesso: 'codigo-de-acesso',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Simples Nacional

Consulta a situação atual do contribuinte no Simples Nacional e no SIMEI, os períodos anteriores de opção e os agendamentos/eventos futuros.

```typescript
client.receitaFederal
  .simplesNacional({
    cnpj: '00.000.000/0000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Simples (Emissão de DAS de MEI)

Emite os Documentos de Arrecadação do Simples Nacional (DAS) de um MEI optante pelo SIMEI.

```typescript
client.receitaFederal
  .simplesDas({
    cnpj: '00.000.000/0000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Simples (DASN SIMEI)

Verifica a situação da Declaração Anual do Simples Nacional (DASN) para Microempreendedor Individual (MEI).

```typescript
client.receitaFederal
  .simplesDasn({
    cnpj: '00.000.000/0000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Simples / MEI / Emissão de Guia de Parcelamento

Emite guias de Parcelamento Microempreendedor Individual no site da Receita Federal.

```typescript
client.receitaFederal
  .simplesMeiEmissaoGuia({
    cnpj: '00.000.000/0000-00',
    cpf: '000.000.000-00',
    codigo_acesso: 'codigo-de-acesso',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Situação Fiscal

Consulta informações cadastrais e pendências de uma empresa ou pessoa física no portal de Serviços da Receita Federal.

```typescript
client.receitaFederal
  .situacaoFiscal({
    login_cpf: '000.000.000-00',
    login_senha: 'senha',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Busca em Tribunais

#### Certidão negativa Cível e Criminal no TRF4

```typescript
client.tribunais
  .trf4Certidao({
    nome: 'Ayla Camila Elisa da Costa',
    tipo: '01_CIVEL',
    cpf: '102.909.451-94',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

Alternativamente você pode usar o CNPJ para a busca. O nome e o tipo são campos obrigatórios.

#### Certidão negativa Cível e Criminal no TRF1

Emite certidão negativa cível e criminal no portal do Tribunal Regional Federal da 1ª Região (AC, AM, AP, BA, DF, GO, MA, MG, MT , PA, PI, RO, RR e TO), TRF1.

```typescript
client.tribunais
  .trf1Certidao({
    tipo: 'CIVEL',
    cpf: '102.909.451-94',
    orgao: '1_GRAU',
    considera_filiais: 0,
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

Alternativamente você pode usar o CNPJ para a busca. O nome e o tipo são campos obrigatórios.

#### Certidão Eletrônica de Ações Trabalhistas (CEAT) TRT15

Emite Certidão Eletrônica de Ações Trabalhistas (CEAT) no TRT15 (Tribunal Regional do Trabalho da 15ª Região).

```typescript
client.tribunais
  .trt15Certidao({
    cpf: '102.909.451-94',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

Alternativamente você pode usar o CNPJ para a busca.

#### Certidão de Quitação Eleitoral TSE

Emite certidão de quitação eleitoral de cidadão brasileiro junto à Justiça Eleitoral no portal do Tribunal Superior Eleitoral (TSE) do Brasil.

```typescript
client.tribunais
  .tseCertidao({
    name: 'Ayla Camila Elisa da Costa',
    birthdate: '09/03/1972',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Doadores e Fornecedores TSE

Consulta Doadores e Fornecedores de Eleições Gerais ou Municipais desde 2002 no portal de Divulgação de Candidaturas e Contas Eleitorais do Tribunal Superior Eleitoral (TSE) do Brasil. Retorna até 10 doadores/fornecedores por pesquisa.

```typescript
client.tribunais
  .tseDoadoresFornecedores({
    nome: '000.000.000-00',
    ano: '2020',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### CNDT TST

Retorna detalhes sobre a Certidão Negativa de Débitos Trabalhistas (CNDT) emitida pela Justiça do Trabalho (TST).

```typescript
client.tribunais
  .tstCndt({
    cpf: '000.000.000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

Alternativamente você pode usar o CNPJ para a busca.

## Caixa

#### Regularidade do Empregador (FGTS)

Consulta a situação de regularidade do empregador e obtém os dados correspondentes ao Certificado de Regularidade do FGTS (CRF), Fundo de Garantia do Tempo de Serviço.

```typescript
client.caixa
  .regularidadeEmpregador({
    cnpj: '00.000.000/0000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Portal da Transparência

#### Cadastro de Entidades Privadas sem Fins Lucrativos Impedidas (CEPIM)

O Cadastro de Entidades Privadas Sem Fins Lucrativos Impedidas (CEPIM) apresenta a relação de entidades privadas sem fins lucrativos que estão impedidas de celebrar novos convênios, contratos de repasse ou termos de parceria com a Administração Pública Federal, em função de irregularidades não resolvidas em convênios, contratos de repasse ou termos de parceria firmados anteriormente.

```typescript
client.portalTransparencia
  .cepim({
    cnpj: '00.000.000/0000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Servidor Público

Consulta detalhamento de um servidor público no Portal da Transparência, incluindo dados do vínculo, ficha de remuneração e viagens a serviço.

```typescript
client.portalTransparencia
  .servidorPublico({
    cpf: '000.000.000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

Alternativamente você pode usar o nome para a busca.

#### Cadastro de Expulsões da Administração Federal (CEAF)

Consulta sanções no Portal da Transparência do tipo Cadastro de Expulsões da Administração Federal (CEAF), que reúne as penalidades expulsivas (demissão, cassação de aposentadoria e destituição de cargo em comissão ou função comissionada) aplicadas no âmbito do Poder Executivo Federal e da Câmara dos Deputados, a servidores civis, efetivos ou não.

```typescript
client.portalTransparencia
  .ceaf({
    cpf: '000.000.000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Cadastro de Empresas Inidôneas e Suspensas (CEIS)

O Cadastro Nacional de Empresas Inidôneas e Suspensas (CEIS) apresenta a relação de empresas e pessoas físicas que sofreram sanções que implicaram a restrição de participar de licitações ou de celebrar contratos com a Administração Pública.

```typescript
client.portalTransparencia
  .ceis({
    cpf: '000.000.000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

Alternativamente você pode usar o CNPJ para a busca.

#### Cadastro Nacional de Empresas Punidas (CNEP)

Consulta sanções no Portal da Transparência do tipo Cadastro Nacional de Empresas Punidas (CNEP), que contém a relação das empresas que sofreram qualquer das punições previstas na Lei Anticorrupção (Lei nº 12.846/2013).

```typescript
client.portalTransparencia
  .cnep({
    cnpj: '00.000.000/0000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

Alternativamente você pode usar o CPF para a busca.

#### Busca

Retorna os 100 primeiros resultados a partir do termo de busca enviado para o Portal da Transparência da Controladoria Geral da União (CGU).

```typescript
client.portalTransparencia
  .busca({
    query: 'termo de pesquisa',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Auxílio Emergencial

Retorna as 50 primeiras parcelas do Auxílio Emergencial a partir do CPF ou NIS informado, limitado aos últimos 12 meses.

```typescript
client.portalTransparencia
  .auxilioEmergencial({
    cpf: '000.000.000-00',
    data_inicio: '2021-01-01',
    data_fim: '2021-12-31',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Bolsa Família

Retorna as 50 primeiras parcelas de recebidos e sacados do Bolsa Família a partir do CPF ou NIS informado.

```typescript
client.portalTransparencia
  .bolsaFamilia({
    cpf: '000.000.000-00',
    data_inicio: '2021-01-01',
    data_fim: '2021-12-31',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Benefício de Prestação Continuada (BPC)

Consulta benefícios do tipo Benefício de Prestação Continuada (BPC), limitado a 50 parcelas.

```typescript
client.portalTransparencia
  .bpc({
    cpf: '000.000.000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Convênios e Acordos

Consulta detalhes de Convênios e Acordos, retornando os dados dos primeiros 50 convênios do convenente informado.

```typescript
client.portalTransparencia
  .convenios({
    convenente: '00.000.000/0000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Acordos de Leniência

Consulta sanções do tipo Detalhamento da Penalidade - Acordos de Leniência, com a relação das empresas que possuem acordo de leniência.

```typescript
client.portalTransparencia
  .leniencia({
    cnpj: '00.000.000/0000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Programa de Erradicação do Trabalho Infantil (PETI)

Consulta benefícios do tipo PETI, limitado a 50 resultados.

```typescript
client.portalTransparencia
  .peti({
    cpf: '000.000.000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Repasse de Verba

Obtém os repasses de verba feitos para o estado ou município informado.

```typescript
client.portalTransparencia
  .repasse({
    ano: '2021',
    localidade: 'São Paulo',
    tipo: 'municipio',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Garantia-Safra

Consulta benefícios do tipo Garantia-Safra, limitado a 50 parcelas.

```typescript
client.portalTransparencia
  .garantiaSafra({
    cpf: '000.000.000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### Seguro Defeso

Consulta benefícios do tipo Seguro Defeso, limitado a 50 parcelas na tabela de recebidos.

```typescript
client.portalTransparencia
  .seguroDefeso({
    cpf: '000.000.000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## Secretaria de Inspeção do Trabalho

#### Trabalho Escravo

Consulta se um CPF ou CNPJ está presente no cadastro de empregadores que tenham submetido trabalhadores a condições análogas à de escravo, organizada pela SIT (Secretaria de Inspeção do Trabalho). Esta é uma consulta offline baseada em uma lista publicada pela SIT de tempos em tempos.

```typescript
client.sit
  .trabalhoEscravo({
    cnpj: '00.000.000/0000-00',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

#### CAEPI

Consulta de Certificado de Aprovação de Equipamento de Proteção Individual (CAEPI) da Secretaria de Inspeção do Trabalho (SIT). Pode ser usada para verificar a validade de certificados de equipamentos de proteção individual.

```typescript
client.sit
  .caepi({
    ca: '00000',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

## OFAC

#### Sanções

Pesquisa indivíduos e entidades presentes na lista de sanções da OFAC (Office of Foreign Assets Control traduzido para o português como "Agência de Controles de Ativos").

```typescript
client.ofac
  .sancoes({
    query: 'American',
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
```

# Licença

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/alanmatiasdev/infosimples-sdk/blob/master/LICENSE)

# Colaboradores

- [Alan Matias](https://github.com/alanmatiasdev)
