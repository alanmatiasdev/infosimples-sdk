import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/inpi', () => {
  it('marcasProcesso() posts token + numero_processo to /inpi/marcas-processo', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/inpi/marcas-processo', {
        token: 'tok',
        numero_processo: '900000000',
      })
      .reply(200, { resultado: [] });

    const client = connect({ token: 'tok' });
    const result = await client.inpi.marcasProcesso({
      numero_processo: '900000000',
    });

    expect(result).toEqual({ resultado: [] });
    expect(scope.isDone()).toBe(true);
  });
});
