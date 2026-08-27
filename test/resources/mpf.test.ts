import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/mpf', () => {
  it('processos() posts token + query to /mpf/processos', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/mpf/processos', {
        token: 'tok',
        query: 'empresa exemplo',
      })
      .reply(200, { resultado: [] });

    const client = connect({ token: 'tok' });
    const result = await client.mpf.processos({ query: 'empresa exemplo' });

    expect(result).toEqual({ resultado: [] });
    expect(scope.isDone()).toBe(true);
  });
});
