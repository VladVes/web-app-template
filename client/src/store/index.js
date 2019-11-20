import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import devStore from './configureStore.dev';
import prodStore from './configureStore.prod';
import rootReducer from './rootReducer';

const createStore = process.env.NODE_ENV === 'development' ? devStore : prodStore;

const store = createStore(
  combineReducers(rootReducer),
  [applyMiddleware(thunk)],
);

if (module.hot) {
  module.hot.accept('./rootReducer', () => {
    // eslint-disable-next-line global-require
    const nextRootReducer = require('./rootReducer');

    store.replaceReducer(nextRootReducer);
  });
}

export default store;
