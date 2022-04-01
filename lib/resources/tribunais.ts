import api from '../client/api';
import { ICertidaoTRF4ByCNPJ, ICertidaoTRF4ByCPF  } from './tribunaisTypes';

const trf4Certidao = (opts: any, data: ICertidaoTRF4ByCNPJ | ICertidaoTRF4ByCPF) => api.post('/trf4/certidao', { ...opts, ...data });

export default {
  trf4Certidao: trf4Certidao as OmitFirstArg<typeof trf4Certidao>,
};
