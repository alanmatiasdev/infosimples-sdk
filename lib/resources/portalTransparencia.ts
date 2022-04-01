import api from '../client/api';
import { IConnectOpts } from '../';

const cepim = async (opts: IConnectOpts, { cnpj }: { cnpj: string }) => await api.post('/portal-transparencia/cepim', { ...opts, cnpj });

const servidorPublico = async (opts: IConnectOpts, { cpf }:  { cpf: string })=> await api.post('/portal-transparencia/servidor', { ...opts, cpf });

export default {
  cepim: cepim as unknown as OmitFirstArg<typeof cepim>,
  servidorPublico: servidorPublico as unknown as OmitFirstArg<typeof servidorPublico>,
};