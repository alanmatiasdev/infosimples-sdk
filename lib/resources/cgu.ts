import api from '../client/api';
import { IConnectOpts } from '../';
import { ICncTipo1Payload, ICncTipo2Payload } from './cguTypes';

const cncTipo1 = async (opts: IConnectOpts, data: ICncTipo1Payload = {}) =>
  await api.post('/cgu/cnc-tipo1', { ...opts, ...data });

const cncTipo2 = async (opts: IConnectOpts, data: ICncTipo2Payload) =>
  await api.post('/cgu/cnc-tipo2', { ...opts, ...data });

export default {
  cncTipo1: cncTipo1 as unknown as OmitFirstArg<typeof cncTipo1>,
  cncTipo2: cncTipo2 as unknown as OmitFirstArg<typeof cncTipo2>,
};
