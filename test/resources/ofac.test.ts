import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/ofac', () => {
  it('sancoes() posts token + params to /ofac/sancoes', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/ofac/sancoes', {
        token: 'tok',
        nome: 'John Doe',
      })
      .reply(200, { data: [] });

    const client = connect({ token: 'tok' });
    const result = await client.ofac.sancoes({ nome: 'John Doe' });

    expect(result).toEqual({ data: [] });
    expect(scope.isDone()).toBe(true);
  });
});
