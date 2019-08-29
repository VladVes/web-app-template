import { post } from './base/index';
import { apiUrl } from './base/axios';

export default {
  setFiles: fileStream => post(`${apiUrl}/example/files`, fileStream),
};
