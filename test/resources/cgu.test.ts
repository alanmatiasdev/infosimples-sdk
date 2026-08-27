import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/cgu', () => {
  it('cncTipo2() posts token + cpf to /cgu/cnc-tipo2', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/cgu/cnc-tipo2', {
        token: 'tok',
        cpf: '12345678909',
      })
      .reply(200, { situacao: 'negativa' });

    const client = connect({ token: 'tok' });
    const result = await client.cgu.cncTipo2({ cpf: '12345678909' });

    expect(result).toEqual({ situacao: 'negativa' });
    expect(scope.isDone()).toBe(true);
  });
});
