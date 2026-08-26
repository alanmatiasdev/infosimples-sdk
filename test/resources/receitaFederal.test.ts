import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/receitaFederal', () => {
  it('cnpj() posts token + payload to /receita-federal/cnpj', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/receita-federal/cnpj', {
        token: 'tok',
        cnpj: '12345678000199',
      })
      .reply(200, { razao_social: 'Empresa X' });

    const client = connect({ token: 'tok' });
    const result = await client.receitaFederal.cnpj({
      cnpj: '12345678000199',
    });

    expect(result).toEqual({ razao_social: 'Empresa X' });
    expect(scope.isDone()).toBe(true);
  });
});
