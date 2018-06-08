import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import devStore from './configureStore.dev';
import prodStore from './configureStore.prod';
import rootReducer from './reducers';

const createStore = process.env.NODE_ENV === 'development' ? devStore : prodStore;

export default () => {
  const store = createStore(
    combineReducers(rootReducer),
    [applyMiddleware(thunk)],
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
