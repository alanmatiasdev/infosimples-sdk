import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/tribunais', () => {
  it('trf4Certidao() posts token + payload to /tribunal/trf4/certidao', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/tribunal/trf4/certidao', {
        token: 'tok',
        nome: 'Empresa X',
        tipo: '01_CIVEL',
        cnpj: '12345678000199',
      })
      .reply(200, { certidao: 'negativa' });

    const client = connect({ token: 'tok' });
    const result = await client.tribunais.trf4Certidao({
      nome: 'Empresa X',
      tipo: '01_CIVEL',
      cnpj: '12345678000199',
    });

    expect(result).toEqual({ certidao: 'negativa' });
    expect(scope.isDone()).toBe(true);
  });
});
