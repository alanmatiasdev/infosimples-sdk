import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/anatel', () => {
  it('celularLegal() posts token + imei to /anatel/celular-legal', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/anatel/celular-legal', {
        token: 'tok',
        imei: '123456789012345',
      })
      .reply(200, { situacao: 'regular' });

    const client = connect({ token: 'tok' });
    const result = await client.anatel.celularLegal({
      imei: '123456789012345',
    });

    expect(result).toEqual({ situacao: 'regular' });
    expect(scope.isDone()).toBe(true);
  });
});
