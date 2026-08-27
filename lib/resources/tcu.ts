import api from '../client/api';
import { IConnectOpts } from '../';
import {
  ICniPayload,
  ICnpPayload,
  IConsolidadaPjPayload,
  IInabilitadosPayload,
  IInidoneosPayload,
} from './tcuTypes';

const cni = async (opts: IConnectOpts, data: ICniPayload) =>
  await api.post('/tcu/cni', { ...opts, ...data });

const cnp = async (opts: IConnectOpts, data: ICnpPayload = {}) =>
  await api.post('/tcu/cnp', { ...opts, ...data });

const consolidadaPj = async (opts: IConnectOpts, data: IConsolidadaPjPayload) =>
  await api.post('/tcu/consolidada-pj', { ...opts, ...data });

const inabilitados = async (
  opts: IConnectOpts,
  data: IInabilitadosPayload = {},
) => await api.post('/tcu/inabilitados', { ...opts, ...data });

const inidoneos = async (opts: IConnectOpts, data: IInidoneosPayload = {}) =>
  await api.post('/tcu/inidoneos', { ...opts, ...data });

export default {
  cni: cni as unknown as OmitFirstArg<typeof cni>,
  cnp: cnp as unknown as OmitFirstArg<typeof cnp>,
  consolidadaPj: consolidadaPj as unknown as OmitFirstArg<typeof consolidadaPj>,
  inabilitados: inabilitados as unknown as OmitFirstArg<typeof inabilitados>,
  inidoneos: inidoneos as unknown as OmitFirstArg<typeof inidoneos>,
};
