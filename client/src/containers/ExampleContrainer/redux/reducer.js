import { handleActions } from 'redux-actions';
import {
  fetchBitcoinPriceRequest,
  fetchBitcoinPriceSuccess,
  fetchBitcoinPriceFailure
} from './actions';

const defaultState = {
  price: 0,
  error: null,
  isFetching: false
};

export default handleActions(
  {
    [fetchBitcoinPriceRequest](state) {
      return {
        ...state,
        isFetching: true
      };
    },
    [fetchBitcoinPriceSuccess](state, { payload }) {
      return {
        ...state,
        price: payload,
        isFetching: false,
        error: null
      };
    },
    [fetchBitcoinPriceFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    }
  },
  defaultState
);
