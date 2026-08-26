import api from '../client/api';
import { IConnectOpts } from '../';

const trabalhoEscravo = async (
  opts: IConnectOpts,
  { cnpj, cpf }: { cnpj?: string; cpf?: string },
) => await api.post('/sit/trabalho-escravo', { ...opts, cnpj, cpf });

const caepi = async (opts: IConnectOpts, { ca }: { ca: string }) =>
  await api.post('/sit/caepi', { ...opts, ca });

export default {
  trabalhoEscravo: trabalhoEscravo as unknown as OmitFirstArg<
    typeof trabalhoEscravo
  >,
  caepi: caepi as unknown as OmitFirstArg<typeof caepi>,
};
