import api from '../client/api';
import { IConnectOpts } from '../';

const cepim = async (opts: IConnectOpts, { cnpj }: { cnpj: string }) => await api.post('/portal-transparencia/cepim', { ...opts, cnpj });

const servidorPublico = async (opts: IConnectOpts, { cpf }:  { cpf: string })=> await api.post('/portal-transparencia/servidor', { ...opts, cpf });

const ceaf = async (opts: IConnectOpts, { cpf }:  { cpf: string }) => await api.post('/portal-transparencia/ceaf', { ...opts, cpf });

const ceis = async (opts: IConnectOpts, { cnpj, cpf }: { cnpj: string, cpf: string }) => await api.post('/portal-transparencia/ceis', { ...opts, cnpj, cpf });

export default {
  cepim: cepim as unknown as OmitFirstArg<typeof cepim>,
  servidorPublico: servidorPublico as unknown as OmitFirstArg<typeof servidorPublico>,
  ceaf: ceaf as unknown as OmitFirstArg<typeof ceaf>,
  ceis: ceis as unknown as OmitFirstArg<typeof ceis>,
};