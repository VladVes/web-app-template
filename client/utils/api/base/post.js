import axios, { defaultParams } from './axios';

export default (url, body, params = { ...defaultParams, method: 'post' }) => {
  return axios(url, body, params);
};
