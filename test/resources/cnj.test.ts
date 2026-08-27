import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/cnj', () => {
  it('improbidade() posts token + cpf to /cnj/improbidade', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/cnj/improbidade', {
        token: 'tok',
        cpf: '12345678900',
      })
      .reply(200, { resultado: [] });

    const client = connect({ token: 'tok' });
    const result = await client.cnj.improbidade({ cpf: '12345678900' });

    expect(result).toEqual({ resultado: [] });
    expect(scope.isDone()).toBe(true);
  });
});
