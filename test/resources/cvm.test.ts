import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/cvm', () => {
  it('participante() posts token + name/cpf/cnpj to /cvm/participante', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/cvm/participante', {
        token: 'tok',
        cpf: '12345678900',
      })
      .reply(200, { resultado: [] });

    const client = connect({ token: 'tok' });
    const result = await client.cvm.participante({ cpf: '12345678900' });

    expect(result).toEqual({ resultado: [] });
    expect(scope.isDone()).toBe(true);
  });
});
