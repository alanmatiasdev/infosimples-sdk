import api from '../client/api';
import { IConnectOpts } from '../';
import {
  IFretePisoMinimoPayload,
  IProdutosPerigososPayload,
  ISifamaBoleto2viaPayload,
  ISifamaConsultarMultasPayload,
  ISifamaDownloadAutoPayload,
  ISifamaListaAutosPayload,
  ITransportadorPayload,
  ITricPayload,
  IVeiculoPayload,
} from './anttTypes';

const fretePisoMinimo = async (
  opts: IConnectOpts,
  data: IFretePisoMinimoPayload,
) => await api.post('/antt/frete-piso-minimo', { ...opts, ...data });

const produtosPerigosos = async (
  opts: IConnectOpts,
  data: IProdutosPerigososPayload,
) => await api.post('/antt/produtos-perigosos', { ...opts, ...data });

const sifamaBoleto2via = async (
  opts: IConnectOpts,
  data: ISifamaBoleto2viaPayload,
) => await api.post('/antt/sifama/boleto-2via', { ...opts, ...data });

const sifamaConsultarMultas = async (
  opts: IConnectOpts,
  data: ISifamaConsultarMultasPayload,
) => await api.post('/antt/sifama/consultar-multas', { ...opts, ...data });

const sifamaDownloadAuto = async (
  opts: IConnectOpts,
  data: ISifamaDownloadAutoPayload,
) => await api.post('/antt/sifama/download-auto', { ...opts, ...data });

const sifamaListaAutos = async (
  opts: IConnectOpts,
  data: ISifamaListaAutosPayload,
) => await api.post('/antt/sifama/lista-autos', { ...opts, ...data });

const transportador = async (
  opts: IConnectOpts,
  data: ITransportadorPayload = {},
) => await api.post('/antt/transportador', { ...opts, ...data });

const tric = async (opts: IConnectOpts, data: ITricPayload) =>
  await api.post('/antt/tric', { ...opts, ...data });

const veiculo = async (opts: IConnectOpts, data: IVeiculoPayload = {}) =>
  await api.post('/antt/veiculo', { ...opts, ...data });

export default {
  fretePisoMinimo: fretePisoMinimo as unknown as OmitFirstArg<
    typeof fretePisoMinimo
  >,
  produtosPerigosos: produtosPerigosos as unknown as OmitFirstArg<
    typeof produtosPerigosos
  >,
  sifamaBoleto2via: sifamaBoleto2via as unknown as OmitFirstArg<
    typeof sifamaBoleto2via
  >,
  sifamaConsultarMultas: sifamaConsultarMultas as unknown as OmitFirstArg<
    typeof sifamaConsultarMultas
  >,
  sifamaDownloadAuto: sifamaDownloadAuto as unknown as OmitFirstArg<
    typeof sifamaDownloadAuto
  >,
  sifamaListaAutos: sifamaListaAutos as unknown as OmitFirstArg<
    typeof sifamaListaAutos
  >,
  transportador: transportador as unknown as OmitFirstArg<typeof transportador>,
  tric: tric as unknown as OmitFirstArg<typeof tric>,
  veiculo: veiculo as unknown as OmitFirstArg<typeof veiculo>,
};
