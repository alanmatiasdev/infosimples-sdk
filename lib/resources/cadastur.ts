import api from '../client/api';
import { IConnectOpts } from '../';

const prestadores = async (
  opts: IConnectOpts,
  { uf, cnpj }: { uf: string; cnpj: string },
) => await api.post('/cadastur/prestadores', { ...opts, uf, cnpj });

export default {
  prestadores: prestadores as unknown as OmitFirstArg<typeof prestadores>,
};
