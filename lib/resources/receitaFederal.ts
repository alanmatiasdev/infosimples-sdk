import api from '../client/api';
import { IConnectOpts } from '../';
import { CNPJOpts } from './receitaFederalTypes';

const cnpj = async (opts: IConnectOpts, data: CNPJOpts) => await api.post('/receita-federal/cnpj', { ...opts, ...data });

export default {
  cnpj: cnpj as unknown as OmitFirstArg<typeof cnpj>,
};
