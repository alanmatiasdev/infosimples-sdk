import api from '../client/api';
import { IConnectOpts } from '../'
import { ICertidaoTRF4ByCNPJ, ICertidaoTRF4ByCPF, ICertidaoTRF1Payload, ITSECertidaoPayload  } from './tribunaisTypes';

const trf4Certidao = async (opts: IConnectOpts, data: ICertidaoTRF4ByCNPJ | ICertidaoTRF4ByCPF) => await api.post('/trf4/certidao', { ...opts, ...data });

const trf1Certidao = async (opts: IConnectOpts, data: ICertidaoTRF1Payload) => await api.post('/', { ...opts, ...data });

const trt15Certidao = async (opts: IConnectOpts, { cnpj, cpf }: { cnpj?: string, cpf?: string })=> await api.post('/', { ...opts, cnpj, cpf })

const tseCertidao = async (opts: IConnectOpts, data: ITSECertidaoPayload) => await api.post('/tse/certidao', { ...opts, ...data })

export default {
  trf4Certidao: trf4Certidao as unknown as OmitFirstArg<typeof trf4Certidao>,
  trf1Certidao: trf1Certidao as unknown as OmitFirstArg<typeof trf1Certidao>,
  trt15Certidao: trt15Certidao as unknown as OmitFirstArg<typeof trt15Certidao>,
  tseCertidao: tseCertidao as unknown as OmitFirstArg<typeof tseCertidao>,
};
