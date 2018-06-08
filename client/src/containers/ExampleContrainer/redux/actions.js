import { createAction } from 'redux-actions';
import axios from 'axios';
import api from '../../../utils/ApiClient';

const bitcoinPriceUrl = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/';

export const fetchBitcoinPriceRequest = createAction('FETCH_BITCOIN_PRICE_REQUEST');
export const fetchBitcoinPriceSuccess = createAction('FETCH_BITCOIN_PRICE_SUCCESS');
export const fetchBitcoinPriceFailure = createAction('FETCH_BITCOIN_PRICE_FAILURE');

export const fetchBitcoinPrice = () => async (dispatch) => {
  try {
    dispatch(fetchBitcoinPriceRequest());

    const response = await axios.get(bitcoinPriceUrl);
    const price = response.data[0].price_usd;

    dispatch(fetchBitcoinPriceSuccess(price));
  } catch (error) {
    dispatch(fetchBitcoinPriceFailure(error));
  }
};

export const fetchTestRequest = createAction('FETCH_TEST_REQUEST');
export const fetchTestSuccess = createAction('FETCH_TEST_SUCCESS');
export const fetchTestFailure = createAction('FETCH_TEST_FAILURE');

export const fetchTest = () => async (dispatch) => {
  try {
    dispatch(fetchTestRequest());

    const response = await api.example.get();
    const text = response.data.result;

    dispatch(fetchTestSuccess(text));
  } catch (error) {
    dispatch(fetchTestFailure(error));
  }
};

export const fetchSumRequest = createAction('FETCH_SUM_REQUEST');
export const fetchSumSuccess = createAction('FETCH_SUM_SUCCESS');
export const fetchSumFailure = createAction('FETCH_SUM_FAILURE');

export const fetchSum = () => async (dispatch) => {
  try {
    dispatch(fetchSumRequest());

    const response = await api.example.getSum();
    const value = response.data.sum;

    dispatch(fetchSumSuccess(value));
  } catch (error) {
    dispatch(fetchSumFailure(error));
  }
};
