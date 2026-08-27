import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/icij', () => {
  it('offshoreLeaks() posts token + query to /icij/offshore-leaks', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/icij/offshore-leaks', {
        token: 'tok',
        query: 'Acme Ltd',
      })
      .reply(200, { resultado: [] });

    const client = connect({ token: 'tok' });
    const result = await client.icij.offshoreLeaks({ query: 'Acme Ltd' });

    expect(result).toEqual({ resultado: [] });
    expect(scope.isDone()).toBe(true);
  });
});
