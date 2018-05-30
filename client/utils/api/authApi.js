/* eslint-disable no-unused-vars */
import { axios, get, post } from './base';
import { apiUrl } from './base/axios';

export default {
  signUp: credentials => post(`${apiUrl}/auth/signup`, credentials),
  signIn: credentials => post(`${apiUrl}/auth/signin`, credentials)
};
