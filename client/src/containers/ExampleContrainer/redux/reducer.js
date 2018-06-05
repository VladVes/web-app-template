import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchBitcoinPriceRequest,
  fetchBitcoinPriceSuccess,
  fetchBitcoinPriceFailure
} from './actions';
import linksReducer from '../containers/Links/redux/reducer';

const defaultState = {
  price: '0',
  error: null,
  isFetching: false
};

const bitcoinReducer = handleActions(
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

export default combineReducers({
  bitcoin: bitcoinReducer,
  links: linksReducer
});
