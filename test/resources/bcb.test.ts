import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/bcb', () => {
  it('cotacoes() posts token + data to /bcb/cotacoes', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/bcb/cotacoes', {
        token: 'tok',
        data: '2026-08-26',
      })
      .reply(200, { cotacoes: [] });

    const client = connect({ token: 'tok' });
    const result = await client.bcb.cotacoes({ data: '2026-08-26' });

    expect(result).toEqual({ cotacoes: [] });
    expect(scope.isDone()).toBe(true);
  });
});
