import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import devStore from './configureStore.dev';
import prodStore from './configureStore.prod';
import rootReducer from './reducers';
import { fetchCurrentUser } from './actions';

const createStore = process.env.NODE_ENV === 'development' ? devStore : prodStore;

export default (history) => {
  const store = createStore(
    combineReducers(rootReducer),
    [applyMiddleware(thunk, routerMiddleware(history))],
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./reducers');

      store.replaceReducer(nextRootReducer);
    });
  }

  store.dispatch(fetchCurrentUser());

  return store;
};
