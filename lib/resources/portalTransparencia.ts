import api from '../client/api';
import { IConnectOpts } from '../';

const cepim = async (opts: IConnectOpts, { cnpj }: { cnpj: string }) => await api.post('/portal-transparencia/cepim', { ...opts, cnpj });

export default {
  cepim: cepim as unknown as OmitFirstArg<typeof cepim>,
};