import devStore from './configureStore.dev';
import prodStore from './configureStore.prod';

export default () => {
  if (process.env.NODE_ENV === 'dev') {
    return devStore();
  }
  return prodStore();
};
