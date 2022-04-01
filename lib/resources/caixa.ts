import api from '../client/api';
import { IConnectOpts } from '../';

const regularidadeEmpregador = async (opts: IConnectOpts, { cnpj, cei }: {cnpj?: string, cei?: string}) => await api.post('/caixa/regularidade', { ...opts, cnpj, cei });

export default {
  regularidadeEmpregador: regularidadeEmpregador as unknown as OmitFirstArg<typeof regularidadeEmpregador>,
};