import { createStore } from 'redux';
import reducers from './reducers';

export default () => {
  return createStore(
    reducers
    // compose( TODO: if middlwares - undefined or empty it results as error, fix required
    //   ...middlewares
    // )
  );
};
