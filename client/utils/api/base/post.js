import axios, { defaultParams } from './axios';

export default (url, body, params = { ...defaultParams }) => {
  return axios.post(url, body, params);
};
