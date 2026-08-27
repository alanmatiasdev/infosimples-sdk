import api from '../client/api';
import { IConnectOpts } from '../';
import { ISancoesPayload } from './onuTypes';

const sancoes = async (opts: IConnectOpts, data: ISancoesPayload) =>
  await api.post('/onu/sancoes', { ...opts, ...data });

export default {
  sancoes: sancoes as unknown as OmitFirstArg<typeof sancoes>,
};
