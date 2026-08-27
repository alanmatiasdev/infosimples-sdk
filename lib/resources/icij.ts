import api from '../client/api';
import { IConnectOpts } from '../';
import { IOffshoreLeaksPayload } from './icijTypes';

const offshoreLeaks = async (opts: IConnectOpts, data: IOffshoreLeaksPayload) =>
  await api.post('/icij/offshore-leaks', { ...opts, ...data });

export default {
  offshoreLeaks: offshoreLeaks as unknown as OmitFirstArg<typeof offshoreLeaks>,
};
