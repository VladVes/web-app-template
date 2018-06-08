// import devStore from './configureStore.dev';
// import prodStore from './configureStore.prod';

import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { fetchCurrentUser } from '../../SignInContainer/redux/actions';

export default () => {
  const store = createStore(
    combineReducers(rootReducer),
    compose(applyMiddleware(thunk)),
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


// export default (params) => {
//   if (process.env.NODE_ENV === 'dev') {
//     return devStore(params);
//   }
//   return prodStore(params);
// };
