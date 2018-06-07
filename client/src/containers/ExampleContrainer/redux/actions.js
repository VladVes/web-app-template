import { createAction } from 'redux-actions';
import axios from 'axios';

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
