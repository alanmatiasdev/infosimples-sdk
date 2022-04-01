import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.infosimples.com/api/v2/consultas',
});

const get = async (endpoint: string, config?: any) => {
  const response = await api.get(endpoint, config);
  return response.data;
};

const post = async (endpoint: string, data?: any, config?: any) => {
  const response = await api.post(endpoint, data, config);
  return response.data;
};

export default {
  get,
  post
};
