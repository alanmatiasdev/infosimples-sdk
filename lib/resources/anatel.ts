import api from '../client/api';
import { IConnectOpts } from '../';

const celularLegal = async (opts: IConnectOpts, { imei }: { imei: string }) =>
  await api.post('/anatel/celular-legal', { ...opts, imei });

export default {
  celularLegal: celularLegal as unknown as OmitFirstArg<typeof celularLegal>,
};
