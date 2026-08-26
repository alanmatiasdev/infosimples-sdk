import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/sit', () => {
  it('trabalhoEscravo() posts token + cnpj/cpf to /sit/trabalho-escravo', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/sit/trabalho-escravo', {
        token: 'tok',
        cnpj: '12345678000199',
        cpf: '12345678900',
      })
      .reply(200, { encontrado: false });

    const client = connect({ token: 'tok' });
    const result = await client.sit.trabalhoEscravo({
      cnpj: '12345678000199',
      cpf: '12345678900',
    });

    expect(result).toEqual({ encontrado: false });
    expect(scope.isDone()).toBe(true);
  });
});
