import api from '../client/api';
import { IConnectOpts } from '../';

const sancoes = async (opts: IConnectOpts, { query }: { query: any }) => await api.post('/', { ...opts, query });

export default {
  sancoes: sancoes as unknown as OmitFirstArg<typeof sancoes>,
};