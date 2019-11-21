import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
  fetchBitcoinPriceRequest,
  fetchBitcoinPriceSuccess,
  fetchBitcoinPriceFailure,

  fetchTestRequest,
  fetchTestSuccess,
  fetchTestFailure,

  fetchSumRequest,
  fetchSumSuccess,
  fetchSumFailure,
} from '../actions/mainActions';
import linksReducer from './linksReducer';
import states from '../../../constants/states';

const bitcoinDefaultState = {
  price: '0',
  error: null,
  dataState: states.none,
};

const bitcoinReducer = handleActions(
  {
    [fetchBitcoinPriceRequest](state) {
      return {
        ...state,
        dataState: states.requested,
      };
    },
    [fetchBitcoinPriceSuccess](state, { payload }) {
      return {
        ...state,
        price: payload,
        dataState: states.successed,
        error: null,
      };
    },
    [fetchBitcoinPriceFailure](state, { payload }) {
      return {
        ...state,
        dataState: states.failed,
        error: payload,
      };
    },
  },
  bitcoinDefaultState,
);

const testDefaultState = {
  text: '',
  error: null,
  dataState: states.none,
};

const testReducer = handleActions(
  {
    [fetchTestRequest](state) {
      return {
        ...state,
        dataState: states.requested,
      };
    },
    [fetchTestSuccess](state, { payload }) {
      return {
        ...state,
        text: payload,
        dataState: states.successed,
        error: null,
      };
    },
    [fetchTestFailure](state, { payload }) {
      return {
        ...state,
        dataState: states.failed,
        error: payload,
      };
    },
  },
  testDefaultState,
);

const sumDefaultState = {
  value: 0,
  error: null,
  dataState: states.none,
};

const sumReducer = handleActions(
  {
    [fetchSumRequest](state) {
      return {
        ...state,
        dataState: states.requested,
      };
    },
    [fetchSumSuccess](state, { payload }) {
      return {
        ...state,
        value: payload,
        dataState: states.successed,
        error: null,
      };
    },
    [fetchSumFailure](state, { payload }) {
      return {
        ...state,
        dataState: states.failed,
        error: payload,
      };
    },
  },
  sumDefaultState,
);

export default combineReducers({
  bitcoin: bitcoinReducer,
  links: linksReducer,
  test: testReducer,
  sum: sumReducer,
});
