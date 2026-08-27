import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/anp', () => {
  it('baseDistribuicao() posts token + cnpj/tipo_instalacao to /anp/base-distribuicao', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/anp/base-distribuicao', {
        token: 'tok',
        cnpj: '12345678000199',
        tipo_instalacao: 'combustiveis',
      })
      .reply(200, { resultado: [] });

    const client = connect({ token: 'tok' });
    const result = await client.anp.baseDistribuicao({
      cnpj: '12345678000199',
      tipo_instalacao: 'combustiveis',
    });

    expect(result).toEqual({ resultado: [] });
    expect(scope.isDone()).toBe(true);
  });
});
