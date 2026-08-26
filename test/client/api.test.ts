import { afterEach, describe, expect, it } from 'vitest';
import nock from 'nock';
import api from '../../lib/client/api';

const BASE_URL = 'https://api.infosimples.com';
const BASE_PATH = '/api/v2/consultas';

afterEach(() => {
  nock.cleanAll();
});

describe('client/api', () => {
  it('get() hits the configured baseURL and resolves with response.data', async () => {
    const scope = nock(BASE_URL)
      .get(`${BASE_PATH}/ping`)
      .reply(200, { ok: true });

    const data = await api.get('/ping');

    expect(data).toEqual({ ok: true });
    expect(scope.isDone()).toBe(true);
  });

  it('post() sends the body and resolves with response.data', async () => {
    const scope = nock(BASE_URL)
      .post(`${BASE_PATH}/ping`, { token: 'abc' })
      .reply(200, { result: 'success' });

    const data = await api.post('/ping', { token: 'abc' });

    expect(data).toEqual({ result: 'success' });
    expect(scope.isDone()).toBe(true);
  });
});
