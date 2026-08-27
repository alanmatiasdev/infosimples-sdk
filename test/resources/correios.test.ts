import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/correios', () => {
  it('cep() posts token + cep to /correios/cep', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/correios/cep', {
        token: 'tok',
        cep: '01001000',
      })
      .reply(200, { resultado: [] });

    const client = connect({ token: 'tok' });
    const result = await client.correios.cep({ cep: '01001000' });

    expect(result).toEqual({ resultado: [] });
    expect(scope.isDone()).toBe(true);
  });
});
