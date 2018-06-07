import axios from 'axios';

export const apiUrl = '/api/v1'; // todo: should constants end with '/' or not

// todo: add /api/version to axios defualt to use endpoints only?
export const defaultParams = {
  header: {},
};

export default axios; // todo: configurable
