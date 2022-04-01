import api from '../client/api';
import { IConnectOpts } from '../';

const trabalhoEscravo = async (opts: IConnectOpts, { cnpj, cpf }: { cnpj: string, cpf: string }) => await api.post('/sit/trabalho-escravo', { ...opts, cnpj, cpf });

export default {
  trabalhoEscravo: trabalhoEscravo as unknown as OmitFirstArg<typeof trabalhoEscravo>,
};