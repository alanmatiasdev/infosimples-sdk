import api from '../client/api';
import { IConnectOpts } from '../';
import { CNPJOpts, PGFNPayload } from './receitaFederalTypes';

const cnpj = async (opts: IConnectOpts, data: CNPJOpts) => await api.post('/receita-federal/cnpj', { ...opts, ...data });

const pgfn = async (opts: IConnectOpts, data: PGFNPayload) => await api.post('/receita-federal/pgfn', { ...opts, ...data })

export default {
  cnpj: cnpj as unknown as OmitFirstArg<typeof cnpj>,
  pgfn: pgfn as unknown as OmitFirstArg<typeof pgfn>,
};
