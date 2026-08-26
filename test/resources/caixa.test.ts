import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/caixa', () => {
  it('regularidadeEmpregador() posts token + cnpj to /caixa/regularidade', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/caixa/regularidade', {
        token: 'tok',
        cnpj: '12345678000199',
      })
      .reply(200, { situacao: 'regular' });

    const client = connect({ token: 'tok' });
    const result = await client.caixa.regularidadeEmpregador({
      cnpj: '12345678000199',
    });

    expect(result).toEqual({ situacao: 'regular' });
    expect(scope.isDone()).toBe(true);
  });
});
