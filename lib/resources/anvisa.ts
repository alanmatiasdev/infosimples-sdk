import api from '../client/api';
import { IConnectOpts } from '../';
import { IBularioEletronicoPayload, IProcessoPayload } from './anvisaTypes';

const bularioEletronico = async (
  opts: IConnectOpts,
  data: IBularioEletronicoPayload,
) => await api.post('/anvisa/bulario-eletronico', { ...opts, ...data });

const empresas = async (opts: IConnectOpts, { cnpj }: { cnpj: string }) =>
  await api.post('/anvisa/empresas', { ...opts, cnpj });

const processo = async (opts: IConnectOpts, data: IProcessoPayload) =>
  await api.post('/anvisa/processo', { ...opts, ...data });

export default {
  bularioEletronico: bularioEletronico as unknown as OmitFirstArg<
    typeof bularioEletronico
  >,
  empresas: empresas as unknown as OmitFirstArg<typeof empresas>,
  processo: processo as unknown as OmitFirstArg<typeof processo>,
};
