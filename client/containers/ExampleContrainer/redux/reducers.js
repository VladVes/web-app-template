import { handleActions } from 'redux-actions';
import { fetchBitcoinPrice } from './actions';

const defaultState = {
  price: 0
};

export default handleActions(
  {
    [fetchBitcoinPrice](state = defaultState, action) {
      console.log('reducer data', action.payload.data);
      return {
        ...state,
        price: action.payload.price
      };
    }
  },
  defaultState
);
