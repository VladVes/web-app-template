import prodStore from './configureStore.prod';
import DevTools from '../common/componetns/DevTools';

export default (combinedReducer, middlewares) => prodStore(
  combinedReducer,
  [...middlewares, DevTools.instrument()],
);
