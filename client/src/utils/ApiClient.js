import exampleApi from './api/exampleApi';
import authApi from './api/authApi';

// todo: make it function/class for adding flexibility? ex: api urls or headers or some axios params
// todo: should we use it as api.auth.signIn or export authApi and use authApi.signIn?
const api = {
  example: exampleApi,
  auth: authApi
};

export default api;
