import axios from 'axios';

export const apiUrl = '/api/v1';

export const defaultParams = {
  headers: { Authorization: localStorage.getItem('token') },
};

export default axios;
