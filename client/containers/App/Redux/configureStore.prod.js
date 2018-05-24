import { createStore, compose } from 'redux';
import reducers from './reducers';

export default (middlewares) => {
  return createStore(
    reducers,
    compose(
      ...middlewares
    )
  );
};
