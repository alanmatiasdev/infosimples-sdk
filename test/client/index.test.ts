import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect, { IConnectOpts } from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('client/index connect()', () => {
  it('throws when no token is provided', () => {
    expect(() => connect({} as IConnectOpts)).toThrow(
      'You must provide a token ',
    );
  });

  it('walks every resource group defined in lib/resources', () => {
    const client = connect({ token: 'my-token' });

    expect(Object.keys(client)).toEqual(
      expect.arrayContaining([
        'tribunais',
        'receitaFederal',
        'caixa',
        'portalTransparencia',
        'sit',
        'ofac',
      ]),
    );
  });

  it('binds opts (the token) into every nested resource method', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/ofac/sancoes', {
        token: 'my-token',
        nome: 'foo',
      })
      .reply(200, { data: [] });

    const client = connect({ token: 'my-token' });
    const result = await client.ofac.sancoes({ nome: 'foo' });

    expect(result).toEqual({ data: [] });
    expect(scope.isDone()).toBe(true);
  });
});
