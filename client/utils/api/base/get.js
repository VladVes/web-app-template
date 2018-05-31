import axios, { defaultParams } from './axios';

export default (url, query, params = { ...defaultParams, method: 'get' }) => {
  return axios({ url, query, params });
};
