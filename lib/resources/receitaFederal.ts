import api from '../client/api';
import { IConnectOpts } from '../';
import {
  CNPJOpts,
  PGFNPayload,
  PGFNSegundaViaPayload,
  PGFNSegundaViaListaPayload,
  PGFNNovaPayload,
  PGFNDevedoresPayload,
  ISituacaoFiscalPayload,
  IComprovantePagamentoPayload,
  IMeiPayload,
  INfseListagemPayload,
  INfseDetalhePayload,
  ISicalcDarfPayload,
  ISimeiDasnPayload,
  IMeiEmissaoGuiaPayload,
} from './receitaFederalTypes';

const cnpj = async (opts: IConnectOpts, data: CNPJOpts) =>
  await api.post('/receita-federal/cnpj', { ...opts, ...data });

const cpf = async (
  opts: IConnectOpts,
  { cpf, birthdate }: { cpf: string; birthdate: string },
) => await api.post('/receita-federal/cpf', { ...opts, cpf, birthdate });

const agendaTributaria = async (
  opts: IConnectOpts,
  { mes, ano }: { mes: string; ano: string },
) => await api.post('/receita-federal/agenda-tribut', { ...opts, mes, ano });

const cafir = async (opts: IConnectOpts, { cib }: { cib: string }) =>
  await api.post('/receita-federal/cafir', { ...opts, cib });

const comprovantePagamento = async (
  opts: IConnectOpts,
  data: IComprovantePagamentoPayload,
) => await api.post('/receita-federal/comprovante', { ...opts, ...data });

const cte = async (
  opts: IConnectOpts,
  data: { cte: string; pkcs12_cert?: string; pkcs12_pass?: string },
) => await api.post('/receita-federal/cte', { ...opts, ...data });

const irpf = async (
  opts: IConnectOpts,
  data: { cpf: string; birthdate: string; year?: string },
) => await api.post('/receita-federal/irpf', { ...opts, ...data });

const listarDas = async (
  opts: IConnectOpts,
  { cnpj, ano }: { cnpj: string; ano: string },
) => await api.post('/receita-federal/listar-das', { ...opts, cnpj, ano });

const mei = async (opts: IConnectOpts, data: IMeiPayload) =>
  await api.post('/receita-federal/mei', { ...opts, ...data });

const nfe = async (
  opts: IConnectOpts,
  data: { nfe: string; pkcs12_cert?: string; pkcs12_pass?: string },
) => await api.post('/receita-federal/nfe', { ...opts, ...data });

const nfse = async (opts: IConnectOpts, { chave }: { chave: string }) =>
  await api.post('/receita-federal/nfse', { ...opts, chave });

const nfseNotaEmitidaDetalhes = async (
  opts: IConnectOpts,
  data: INfseDetalhePayload,
) => await api.post('/receita-federal/nfse-emit-det', { ...opts, ...data });

const nfseNotasEmitidas = async (
  opts: IConnectOpts,
  data: INfseListagemPayload,
) => await api.post('/receita-federal/nfse-emitidas', { ...opts, ...data });

const nfseNotaRecebidaDetalhes = async (
  opts: IConnectOpts,
  data: INfseDetalhePayload,
) => await api.post('/receita-federal/nfse-rec-det', { ...opts, ...data });

const nfseNotasRecebidas = async (
  opts: IConnectOpts,
  data: INfseListagemPayload,
) => await api.post('/receita-federal/nfse-recebidas', { ...opts, ...data });

const nirf = async (
  opts: IConnectOpts,
  data: { cib?: string; nirf?: string },
) => await api.post('/receita-federal/nirf', { ...opts, ...data });

const perdcomp = async (
  opts: IConnectOpts,
  data: { cpf?: string; cnpj?: string; perdcomp?: string },
) => await api.post('/receita-federal/perdcomp', { ...opts, ...data });

const pgfn = async (opts: IConnectOpts, data: PGFNPayload) =>
  await api.post('/receita-federal/pgfn', { ...opts, ...data });

const pgfnSegundaVia = async (
  opts: IConnectOpts,
  data: PGFNSegundaViaPayload,
) => await api.post('/receita-federal/pgfn/2via', { ...opts, ...data });

const pgfnSegundaViaLista = async (
  opts: IConnectOpts,
  data: PGFNSegundaViaListaPayload,
) => await api.post('/receita-federal/pgfn/2via-list', { ...opts, ...data });

const pgfnDevedores = async (opts: IConnectOpts, data: PGFNDevedoresPayload) =>
  await api.post('/receita-federal/pgfn/devedores', { ...opts, ...data });

const pgfnNova = async (opts: IConnectOpts, data: PGFNNovaPayload) =>
  await api.post('/receita-federal/pgfn/nova', { ...opts, ...data });

const radar = async (
  opts: IConnectOpts,
  data: { cnpj?: string; cpf?: string },
) => await api.post('/receita-federal/radar', { ...opts, ...data });

const salCadastro = async (opts: IConnectOpts, { pis }: { pis: string }) =>
  await api.post('/receita-federal/sal/cadastro', { ...opts, pis });

const sicalcDarf = async (opts: IConnectOpts, data: ISicalcDarfPayload) =>
  await api.post('/receita-federal/sicalc/darf', { ...opts, ...data });

const simeiDasn = async (opts: IConnectOpts, data: ISimeiDasnPayload) =>
  await api.post('/receita-federal/simei-dasn', { ...opts, ...data });

const simeiMeiEmissaoGuia = async (
  opts: IConnectOpts,
  data: IMeiEmissaoGuiaPayload,
) => await api.post('/receita-federal/simei/mei/eg', { ...opts, ...data });

const simplesNacional = async (
  opts: IConnectOpts,
  { cnpj }: { cnpj: string },
) => await api.post('/receita-federal/simples', { ...opts, cnpj });

const simplesDas = async (
  opts: IConnectOpts,
  data: { cnpj: string; periodo?: string; data_pagamento?: string },
) => await api.post('/receita-federal/simples-das', { ...opts, ...data });

const simplesDasn = async (opts: IConnectOpts, { cnpj }: { cnpj: string }) =>
  await api.post('/receita-federal/simples-dasn', { ...opts, cnpj });

const simplesMeiEmissaoGuia = async (
  opts: IConnectOpts,
  data: IMeiEmissaoGuiaPayload,
) => await api.post('/receita-federal/simples/mei/eg', { ...opts, ...data });

const situacaoFiscal = async (
  opts: IConnectOpts,
  data: ISituacaoFiscalPayload,
) => await api.post('/receita-federal/situacao', { ...opts, ...data });

export default {
  cnpj: cnpj as unknown as OmitFirstArg<typeof cnpj>,
  cpf: cpf as unknown as OmitFirstArg<typeof cpf>,
  agendaTributaria: agendaTributaria as unknown as OmitFirstArg<
    typeof agendaTributaria
  >,
  cafir: cafir as unknown as OmitFirstArg<typeof cafir>,
  comprovantePagamento: comprovantePagamento as unknown as OmitFirstArg<
    typeof comprovantePagamento
  >,
  cte: cte as unknown as OmitFirstArg<typeof cte>,
  irpf: irpf as unknown as OmitFirstArg<typeof irpf>,
  listarDas: listarDas as unknown as OmitFirstArg<typeof listarDas>,
  mei: mei as unknown as OmitFirstArg<typeof mei>,
  nfe: nfe as unknown as OmitFirstArg<typeof nfe>,
  nfse: nfse as unknown as OmitFirstArg<typeof nfse>,
  nfseNotaEmitidaDetalhes: nfseNotaEmitidaDetalhes as unknown as OmitFirstArg<
    typeof nfseNotaEmitidaDetalhes
  >,
  nfseNotasEmitidas: nfseNotasEmitidas as unknown as OmitFirstArg<
    typeof nfseNotasEmitidas
  >,
  nfseNotaRecebidaDetalhes: nfseNotaRecebidaDetalhes as unknown as OmitFirstArg<
    typeof nfseNotaRecebidaDetalhes
  >,
  nfseNotasRecebidas: nfseNotasRecebidas as unknown as OmitFirstArg<
    typeof nfseNotasRecebidas
  >,
  nirf: nirf as unknown as OmitFirstArg<typeof nirf>,
  perdcomp: perdcomp as unknown as OmitFirstArg<typeof perdcomp>,
  pgfn: pgfn as unknown as OmitFirstArg<typeof pgfn>,
  pgfnSegundaVia: pgfnSegundaVia as unknown as OmitFirstArg<
    typeof pgfnSegundaVia
  >,
  pgfnSegundaViaLista: pgfnSegundaViaLista as unknown as OmitFirstArg<
    typeof pgfnSegundaViaLista
  >,
  pgfnDevedores: pgfnDevedores as unknown as OmitFirstArg<typeof pgfnDevedores>,
  pgfnNova: pgfnNova as unknown as OmitFirstArg<typeof pgfnNova>,
  radar: radar as unknown as OmitFirstArg<typeof radar>,
  salCadastro: salCadastro as unknown as OmitFirstArg<typeof salCadastro>,
  sicalcDarf: sicalcDarf as unknown as OmitFirstArg<typeof sicalcDarf>,
  simeiDasn: simeiDasn as unknown as OmitFirstArg<typeof simeiDasn>,
  simeiMeiEmissaoGuia: simeiMeiEmissaoGuia as unknown as OmitFirstArg<
    typeof simeiMeiEmissaoGuia
  >,
  simplesNacional: simplesNacional as unknown as OmitFirstArg<
    typeof simplesNacional
  >,
  simplesDas: simplesDas as unknown as OmitFirstArg<typeof simplesDas>,
  simplesDasn: simplesDasn as unknown as OmitFirstArg<typeof simplesDasn>,
  simplesMeiEmissaoGuia: simplesMeiEmissaoGuia as unknown as OmitFirstArg<
    typeof simplesMeiEmissaoGuia
  >,
  situacaoFiscal: situacaoFiscal as unknown as OmitFirstArg<
    typeof situacaoFiscal
  >,
};
