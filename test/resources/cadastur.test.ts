import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/cadastur', () => {
  it('prestadores() posts token + uf/cnpj to /cadastur/prestadores', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/cadastur/prestadores', {
        token: 'tok',
        uf: 'SP',
        cnpj: '12345678000199',
      })
      .reply(200, { resultado: [] });

    const client = connect({ token: 'tok' });
    const result = await client.cadastur.prestadores({
      uf: 'SP',
      cnpj: '12345678000199',
    });

    expect(result).toEqual({ resultado: [] });
    expect(scope.isDone()).toBe(true);
  });
});
