import api from '../client/api';
import { IConnectOpts } from '../';

const sancoes = async (opts: IConnectOpts, params: any) => await api.post('/ofac/sancoes', { ...opts, ...params });

export default {
  sancoes: sancoes as unknown as OmitFirstArg<typeof sancoes>,
};