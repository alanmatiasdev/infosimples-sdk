import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/anvisa', () => {
  it('empresas() posts token + cnpj to /anvisa/empresas', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/anvisa/empresas', {
        token: 'tok',
        cnpj: '12345678000199',
      })
      .reply(200, { situacao: 'ativo' });

    const client = connect({ token: 'tok' });
    const result = await client.anvisa.empresas({ cnpj: '12345678000199' });

    expect(result).toEqual({ situacao: 'ativo' });
    expect(scope.isDone()).toBe(true);
  });
});
