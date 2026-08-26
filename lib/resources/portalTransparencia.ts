import api from '../client/api';
import { IConnectOpts } from '../';
import {
  IServidorPublicoPayload,
  ICeisPayload,
  ICnepPayload,
  IAuxilioEmergencialPayload,
  IBolsaFamiliaPayload,
  ISeguroDefesoPayload,
  IRepassePayload,
} from './portalTransparenciaTypes';

const cepim = async (opts: IConnectOpts, { cnpj }: { cnpj: string }) =>
  await api.post('/portal-transparencia/cepim', { ...opts, cnpj });

const servidorPublico = async (
  opts: IConnectOpts,
  data: IServidorPublicoPayload,
) => await api.post('/portal-transparencia/servidor', { ...opts, ...data });

const ceaf = async (opts: IConnectOpts, { cpf }: { cpf: string }) =>
  await api.post('/portal-transparencia/ceaf', { ...opts, cpf });

const ceis = async (opts: IConnectOpts, data: ICeisPayload) =>
  await api.post('/portal-transparencia/ceis', { ...opts, ...data });

const cnep = async (opts: IConnectOpts, data: ICnepPayload) =>
  await api.post('/portal-transparencia/cnep', { ...opts, ...data });

const busca = async (opts: IConnectOpts, { query }: { query: string }) =>
  await api.post('/portal-transparencia/busca', { ...opts, query });

const auxilioEmergencial = async (
  opts: IConnectOpts,
  data: IAuxilioEmergencialPayload,
) => await api.post('/portal-transparencia/auxilio', { ...opts, ...data });

const bolsaFamilia = async (opts: IConnectOpts, data: IBolsaFamiliaPayload) =>
  await api.post('/portal-transparencia/bolsa', { ...opts, ...data });

const bpc = async (opts: IConnectOpts, { cpf }: { cpf: string }) =>
  await api.post('/portal-transparencia/bpc', { ...opts, cpf });

const convenios = async (
  opts: IConnectOpts,
  { convenente }: { convenente: string },
) => await api.post('/portal-transparencia/convenios', { ...opts, convenente });

const leniencia = async (opts: IConnectOpts, { cnpj }: { cnpj: string }) =>
  await api.post('/portal-transparencia/leniencia', { ...opts, cnpj });

const peti = async (opts: IConnectOpts, { cpf }: { cpf: string }) =>
  await api.post('/portal-transparencia/peti', { ...opts, cpf });

const repasse = async (opts: IConnectOpts, data: IRepassePayload) =>
  await api.post('/portal-transparencia/repasse', { ...opts, ...data });

const garantiaSafra = async (opts: IConnectOpts, { cpf }: { cpf: string }) =>
  await api.post('/portal-transparencia/safra', { ...opts, cpf });

const seguroDefeso = async (opts: IConnectOpts, data: ISeguroDefesoPayload) =>
  await api.post('/portal-transparencia/seguro', { ...opts, ...data });

export default {
  cepim: cepim as unknown as OmitFirstArg<typeof cepim>,
  servidorPublico: servidorPublico as unknown as OmitFirstArg<
    typeof servidorPublico
  >,
  ceaf: ceaf as unknown as OmitFirstArg<typeof ceaf>,
  ceis: ceis as unknown as OmitFirstArg<typeof ceis>,
  cnep: cnep as unknown as OmitFirstArg<typeof cnep>,
  busca: busca as unknown as OmitFirstArg<typeof busca>,
  auxilioEmergencial: auxilioEmergencial as unknown as OmitFirstArg<
    typeof auxilioEmergencial
  >,
  bolsaFamilia: bolsaFamilia as unknown as OmitFirstArg<typeof bolsaFamilia>,
  bpc: bpc as unknown as OmitFirstArg<typeof bpc>,
  convenios: convenios as unknown as OmitFirstArg<typeof convenios>,
  leniencia: leniencia as unknown as OmitFirstArg<typeof leniencia>,
  peti: peti as unknown as OmitFirstArg<typeof peti>,
  repasse: repasse as unknown as OmitFirstArg<typeof repasse>,
  garantiaSafra: garantiaSafra as unknown as OmitFirstArg<typeof garantiaSafra>,
  seguroDefeso: seguroDefeso as unknown as OmitFirstArg<typeof seguroDefeso>,
};
