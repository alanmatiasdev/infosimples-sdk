import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import connect from '../../lib/client/index';

afterEach(() => {
  nock.cleanAll();
});

describe('resources/antecedentesCriminais', () => {
  it('pfEmit() posts token + nome/birthdate to /antecedentes-criminais/pf/emit', async () => {
    const scope = nock('https://api.infosimples.com')
      .post('/api/v2/consultas/antecedentes-criminais/pf/emit', {
        token: 'tok',
        nome: 'Fulano de Tal',
        birthdate: '1985-04-22',
      })
      .reply(200, { resultado: [] });

    const client = connect({ token: 'tok' });
    const result = await client.antecedentesCriminais.pfEmit({
      nome: 'Fulano de Tal',
      birthdate: '1985-04-22',
    });

    expect(result).toEqual({ resultado: [] });
    expect(scope.isDone()).toBe(true);
  });
});
