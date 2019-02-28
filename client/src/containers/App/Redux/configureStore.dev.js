import prodStore from './configureStore.prod';

/* eslint-disable no-underscore-dangle  */
export default (combinedReducer, middlewares) => prodStore(
  combinedReducer,
  [...middlewares, (window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()),
  ],
);
/* eslint-enable */
