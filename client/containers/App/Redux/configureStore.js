// import devStore from './configureStore.dev';
// import prodStore from './configureStore.prod';

import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk-fsa';
import rootReducer from './reducers';

export default () => {
  const store = createStore(
    combineReducers(rootReducer),
    compose(
      applyMiddleware(thunk)
    )
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers');
      const finalReducer = { ...nextRootReducer, router: rootReducer };
      store.replaceReducer(combineReducers(finalReducer));
    });
  }

  return store;
};


// export default (params) => {
//   if (process.env.NODE_ENV === 'dev') {
//     return devStore(params);
//   }
//   return prodStore(params);
// };
