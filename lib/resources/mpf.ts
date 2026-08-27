import api from '../client/api';
import { IConnectOpts } from '../';
import {
  IAmazoniaProtegePayload,
  ICertidaoNegativaPayload,
  IProcessosPayload,
} from './mpfTypes';

const amazoniaProtege = async (
  opts: IConnectOpts,
  data: IAmazoniaProtegePayload = {},
) => await api.post('/mpf/amazonia-protege', { ...opts, ...data });

const certidaoNegativa = async (
  opts: IConnectOpts,
  data: ICertidaoNegativaPayload = {},
) => await api.post('/mpf/certidao-negativa', { ...opts, ...data });

const processos = async (opts: IConnectOpts, data: IProcessosPayload) =>
  await api.post('/mpf/processos', { ...opts, ...data });

export default {
  amazoniaProtege: amazoniaProtege as unknown as OmitFirstArg<
    typeof amazoniaProtege
  >,
  certidaoNegativa: certidaoNegativa as unknown as OmitFirstArg<
    typeof certidaoNegativa
  >,
  processos: processos as unknown as OmitFirstArg<typeof processos>,
};
