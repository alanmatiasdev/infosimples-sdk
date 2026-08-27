import api from '../client/api';
import { IConnectOpts } from '../';
import {
  ICepPayload,
  ICompletaCepPayload,
  IRastreamentoPayload,
  IRestricoesEntregaPayload,
} from './correiosTypes';

const cep = async (opts: IConnectOpts, data: ICepPayload) =>
  await api.post('/correios/cep', { ...opts, ...data });

const completaCep = async (opts: IConnectOpts, data: ICompletaCepPayload) =>
  await api.post('/correios/completa-cep', { ...opts, ...data });

const rastreamento = async (opts: IConnectOpts, data: IRastreamentoPayload) =>
  await api.post('/correios/rastreamento', { ...opts, ...data });

const restricoesEntrega = async (
  opts: IConnectOpts,
  data: IRestricoesEntregaPayload,
) => await api.post('/correios/restricoes-entrega', { ...opts, ...data });

export default {
  cep: cep as unknown as OmitFirstArg<typeof cep>,
  completaCep: completaCep as unknown as OmitFirstArg<typeof completaCep>,
  rastreamento: rastreamento as unknown as OmitFirstArg<typeof rastreamento>,
  restricoesEntrega: restricoesEntrega as unknown as OmitFirstArg<
    typeof restricoesEntrega
  >,
};
