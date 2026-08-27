import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/antt', () => {
  it('transportador() posts token + cpf/cnpj/rntrc to /antt/transportador', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/antt/transportador', {
        token: 'tok',
        cnpj: '12345678000199',
      })
      .reply(200, { resultado: [] });

    const client = connect({ token: 'tok' });
    const result = await client.antt.transportador({ cnpj: '12345678000199' });

    expect(result).toEqual({ resultado: [] });
    expect(scope.isDone()).toBe(true);
  });
});
