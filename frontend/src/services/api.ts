import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`
})

export const getRequest = async (endpoint: string) => {
  const res = await api.get(endpoint);

  return res.data;
}

export const postRequest = async (endpoint: string, body: any) => {
  const res = await api.post(endpoint, body);

  return res;
}

export const putRequest = async (endpoint: string, body: any) => {
  const res = await api.put(endpoint, body);

  return res;
}

export const deleteRequest = async (endpoint: string) => {
  await api.delete(endpoint);
}