import api from '../client/api';
import { IConnectOpts } from '../';
import {
  IBaseDistribuicaoPayload,
  IInstalacoesSimpPayload,
  IPostosPayload,
  IRevendasPayload,
} from './anpTypes';

const baseDistribuicao = async (
  opts: IConnectOpts,
  data: IBaseDistribuicaoPayload,
) => await api.post('/anp/base-distribuicao', { ...opts, ...data });

const instalacoesSimp = async (
  opts: IConnectOpts,
  data: IInstalacoesSimpPayload,
) => await api.post('/anp/instalacoes-simp', { ...opts, ...data });

const postos = async (opts: IConnectOpts, data: IPostosPayload = {}) =>
  await api.post('/anp/postos', { ...opts, ...data });

const revendas = async (opts: IConnectOpts, data: IRevendasPayload = {}) =>
  await api.post('/anp/revendas', { ...opts, ...data });

export default {
  baseDistribuicao: baseDistribuicao as unknown as OmitFirstArg<
    typeof baseDistribuicao
  >,
  instalacoesSimp: instalacoesSimp as unknown as OmitFirstArg<
    typeof instalacoesSimp
  >,
  postos: postos as unknown as OmitFirstArg<typeof postos>,
  revendas: revendas as unknown as OmitFirstArg<typeof revendas>,
};
