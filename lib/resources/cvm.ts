import api from '../client/api';
import { IConnectOpts } from '../';
import {
  IParticipantePayload,
  IProcessoAdministrativoPayload,
  ISancionadoresPayload,
} from './cvmTypes';

const participante = async (opts: IConnectOpts, data: IParticipantePayload) =>
  await api.post('/cvm/participante', { ...opts, ...data });

const processoAdministrativo = async (
  opts: IConnectOpts,
  data: IProcessoAdministrativoPayload,
) => await api.post('/cvm/processo-administrativo', { ...opts, ...data });

const sancionadores = async (opts: IConnectOpts, data: ISancionadoresPayload) =>
  await api.post('/cvm/sancionadores', { ...opts, ...data });

export default {
  participante: participante as unknown as OmitFirstArg<typeof participante>,
  processoAdministrativo: processoAdministrativo as unknown as OmitFirstArg<
    typeof processoAdministrativo
  >,
  sancionadores: sancionadores as unknown as OmitFirstArg<typeof sancionadores>,
};
