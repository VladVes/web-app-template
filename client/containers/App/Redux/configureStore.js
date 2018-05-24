import devStore from './configureStore.dev';
import prodStore from './configureStore.prod';

export default (params) => {
  if (process.env.NODE_ENV === 'dev') {
    return devStore(params);
  }
  return prodStore(params);
};
