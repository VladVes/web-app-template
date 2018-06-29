import { get, post } from './base';
import { apiUrl } from './base/axios';

export default {
  get: () => get(`${apiUrl}/example`),
  getSum: () => get(`${apiUrl}/example/sum`),
  getBitcoinPrice: () => get(`${apiUrl}/example/bitcoin`),
  uploadFile: fileStream => post(`${apiUrl}/example/file`, fileStream),
};
