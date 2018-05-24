import { createAction } from 'redux-actions';
import axios from 'axios';
const FETCH_BITCOIN_PRICE = 'FETCH_BITCOIN_PRICE';

const bitcoinPriceUrl = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/';

export const fetchBitcoinPrice = createAction(
  'FETCHING_BITCOIN_PRICE',
  () => async dispatch => {
    console.log('dispatching');
    const response = await axios.get(bitcoinPriceUrl);
    console.log('response', response);
    const price = response.data[0].price_usd;
    console.log('price', price);
    dispatch(fetchedBitcoinPrice(price));
  }
);

const fetchedBitcoinPrice = createAction(
  FETCH_BITCOIN_PRICE,
  (price) => ({ price })
);
