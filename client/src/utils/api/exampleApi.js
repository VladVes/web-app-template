import { get, post } from './base';
import { apiUrl } from './base/axios';

export default {
  get: () => get(`${apiUrl}/example`),
  getSum: () => get(`${apiUrl}/example/sum`),
  getBitcoinPrice: () => get(`${apiUrl}/example/bitcoin`),
  getFiles: () => get(`${apiUrl}/example/files`),
  setFiles: fileStream => post(`${apiUrl}/example/files`, fileStream),
  postPersonData: postData => post(`${apiUrl}/example/personData`, postData),
};
