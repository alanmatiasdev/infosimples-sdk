import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/portalTransparencia', () => {
  it('cepim() posts token + cnpj to /portal-transparencia/cepim', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/portal-transparencia/cepim', {
        token: 'tok',
        cnpj: '12345678000199',
      })
      .reply(200, { encontrado: false });

    const client = connect({ token: 'tok' });
    const result = await client.portalTransparencia.cepim({
      cnpj: '12345678000199',
    });

    expect(result).toEqual({ encontrado: false });
    expect(scope.isDone()).toBe(true);
  });
});
