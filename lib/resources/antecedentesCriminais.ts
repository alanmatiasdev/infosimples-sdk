import api from '../client/api';
import { IConnectOpts } from '../';
import {
  IAntecedentesCriminaisMgPayload,
  IAntecedentesCriminaisPfEmitPayload,
  IAntecedentesCriminaisPfValPayload,
  IAntecedentesCriminaisSpPayload,
} from './antecedentesCriminaisTypes';

const pfEmit = async (
  opts: IConnectOpts,
  data: IAntecedentesCriminaisPfEmitPayload,
) => await api.post('/antecedentes-criminais/pf/emit', { ...opts, ...data });

const pfVal = async (
  opts: IConnectOpts,
  data: IAntecedentesCriminaisPfValPayload,
) => await api.post('/antecedentes-criminais/pf/val', { ...opts, ...data });

const mg = async (
  opts: IConnectOpts,
  data: IAntecedentesCriminaisMgPayload = {},
) => await api.post('/antecedentes-criminais/mg', { ...opts, ...data });

const sp = async (opts: IConnectOpts, data: IAntecedentesCriminaisSpPayload) =>
  await api.post('/antecedentes-criminais/sp', { ...opts, ...data });

export default {
  pfEmit: pfEmit as unknown as OmitFirstArg<typeof pfEmit>,
  pfVal: pfVal as unknown as OmitFirstArg<typeof pfVal>,
  mg: mg as unknown as OmitFirstArg<typeof mg>,
  sp: sp as unknown as OmitFirstArg<typeof sp>,
};
