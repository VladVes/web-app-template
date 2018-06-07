import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default middlewares => createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    ...middlewares,
  ),
);
