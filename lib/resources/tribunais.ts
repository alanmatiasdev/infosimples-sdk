import api from '../client/api';
import { IConnectOpts } from '../'
import { ICertidaoTRF4ByCNPJ, ICertidaoTRF4ByCPF, ICertidaoTRF1Payload  } from './tribunaisTypes';

const trf4Certidao = (opts: IConnectOpts, data: ICertidaoTRF4ByCNPJ | ICertidaoTRF4ByCPF) => api.post('/trf4/certidao', { ...opts, ...data });

const trf1Certidao = (opts: IConnectOpts, data: ICertidaoTRF1Payload) => api.post('/', { ...opts, ...data });

export default {
  trf4Certidao: trf4Certidao as unknown as OmitFirstArg<typeof trf4Certidao>,
  trf1Certidao: trf1Certidao as unknown as OmitFirstArg<typeof trf1Certidao>,
};
