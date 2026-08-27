import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/onu', () => {
  it('sancoes() posts token + query to /onu/sancoes', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/onu/sancoes', {
        token: 'tok',
        query: 'John Doe',
      })
      .reply(200, { resultado: [] });

    const client = connect({ token: 'tok' });
    const result = await client.onu.sancoes({ query: 'John Doe' });

    expect(result).toEqual({ resultado: [] });
    expect(scope.isDone()).toBe(true);
  });
});
