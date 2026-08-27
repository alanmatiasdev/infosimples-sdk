import api from '../client/api';
import { IConnectOpts } from '../';
import {
  IImprobidadePayload,
  IMandadosPrisaoPayload,
  ISeeuProcessosPayload,
  IServentiasExtrajudiciaisPayload,
  IServentiasExtrajudListaPayload,
} from './cnjTypes';

const improbidade = async (
  opts: IConnectOpts,
  data: IImprobidadePayload = {},
) => await api.post('/cnj/improbidade', { ...opts, ...data });

const mandadosPrisao = async (
  opts: IConnectOpts,
  data: IMandadosPrisaoPayload = {},
) => await api.post('/cnj/mandados-prisao', { ...opts, ...data });

const serventiasExtrajudiciais = async (
  opts: IConnectOpts,
  data: IServentiasExtrajudiciaisPayload,
) => await api.post('/cnj/serventias-extrajudiciais', { ...opts, ...data });

const serventiasExtrajudLista = async (
  opts: IConnectOpts,
  data: IServentiasExtrajudListaPayload,
) => await api.post('/cnj/serventias-extrajud-lista', { ...opts, ...data });

const seeuProcessos = async (
  opts: IConnectOpts,
  data: ISeeuProcessosPayload = {},
) => await api.post('/cnj/seeu/processos', { ...opts, ...data });

export default {
  improbidade: improbidade as unknown as OmitFirstArg<typeof improbidade>,
  mandadosPrisao: mandadosPrisao as unknown as OmitFirstArg<
    typeof mandadosPrisao
  >,
  serventiasExtrajudiciais: serventiasExtrajudiciais as unknown as OmitFirstArg<
    typeof serventiasExtrajudiciais
  >,
  serventiasExtrajudLista: serventiasExtrajudLista as unknown as OmitFirstArg<
    typeof serventiasExtrajudLista
  >,
  seeuProcessos: seeuProcessos as unknown as OmitFirstArg<typeof seeuProcessos>,
};
