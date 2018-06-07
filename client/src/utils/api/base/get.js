import axios, { defaultParams } from './axios';

export default (url, query, params = { ...defaultParams, method: 'get' }) => axios({ url, query, params });
