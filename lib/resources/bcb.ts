import api from '../client/api';
import { IConnectOpts } from '../';
import { ICotacoesPayload, IValoresReceberPayload } from './bcbTypes';

const cotacoes = async (opts: IConnectOpts, data: ICotacoesPayload = {}) =>
  await api.post('/bcb/cotacoes', { ...opts, ...data });

const valoresReceber = async (
  opts: IConnectOpts,
  data: IValoresReceberPayload,
) => await api.post('/bcb/valores-receber', { ...opts, ...data });

export default {
  cotacoes: cotacoes as unknown as OmitFirstArg<typeof cotacoes>,
  valoresReceber: valoresReceber as unknown as OmitFirstArg<
    typeof valoresReceber
  >,
};
