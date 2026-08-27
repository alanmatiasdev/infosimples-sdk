import api from '../client/api';
import { IConnectOpts } from '../';
import {
  IMarcasPayload,
  IMarcasProcessoPayload,
  IMarcasProcessoResumidaPayload,
  IMarcasTitularPayload,
  IPatentesPayload,
} from './inpiTypes';

const marcas = async (opts: IConnectOpts, data: IMarcasPayload) =>
  await api.post('/inpi/marcas', { ...opts, ...data });

const marcasProcesso = async (
  opts: IConnectOpts,
  data: IMarcasProcessoPayload,
) => await api.post('/inpi/marcas-processo', { ...opts, ...data });

const marcasProcessoResumida = async (
  opts: IConnectOpts,
  data: IMarcasProcessoResumidaPayload,
) => await api.post('/inpi/marcas-processo-resumida', { ...opts, ...data });

const marcasTitular = async (
  opts: IConnectOpts,
  data: IMarcasTitularPayload = {},
) => await api.post('/inpi/marcas-titular', { ...opts, ...data });

const patentes = async (opts: IConnectOpts, data: IPatentesPayload = {}) =>
  await api.post('/inpi/patentes', { ...opts, ...data });

export default {
  marcas: marcas as unknown as OmitFirstArg<typeof marcas>,
  marcasProcesso: marcasProcesso as unknown as OmitFirstArg<
    typeof marcasProcesso
  >,
  marcasProcessoResumida: marcasProcessoResumida as unknown as OmitFirstArg<
    typeof marcasProcessoResumida
  >,
  marcasTitular: marcasTitular as unknown as OmitFirstArg<typeof marcasTitular>,
  patentes: patentes as unknown as OmitFirstArg<typeof patentes>,
};
