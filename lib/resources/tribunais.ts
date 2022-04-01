import api from '../client/api';

const trf4Certidao = (opts: any, data: any) => api.post('/trf4/certidao', { ...opts, ...data });

export default {
  trf4Certidao: trf4Certidao as OmitFirstArg<typeof trf4Certidao>,
};
