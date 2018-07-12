import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';

export const fetchBitcoinPriceRequest = createAction('FETCH_BITCOIN_PRICE_REQUEST');
export const fetchBitcoinPriceSuccess = createAction('FETCH_BITCOIN_PRICE_SUCCESS');
export const fetchBitcoinPriceFailure = createAction('FETCH_BITCOIN_PRICE_FAILURE');

export const fetchBitcoinPrice = () => async (dispatch) => {
  try {
    dispatch(fetchBitcoinPriceRequest());

    const response = await api.example.getBitcoinPrice();
    const { price } = response.data;

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

export const uploadSingleFileRequest = createAction('UPLOAD_SINGLE_FILE_REQUEST');
export const uploadSingleFileSuccess = createAction('UPLOAD_SINGLE_FILE_SUCCESS');
export const uploadSingleFileFailure = createAction('UPLOAD_SINGLE_FILE_FAILURE');

export const uploadSingleFile = file => async (dispatch) => {
  try {
    dispatch(uploadSingleFileRequest());

    const formData = new FormData();
    formData.append('file', file);

    await api.example.uploadFile(formData);

    dispatch(uploadSingleFileSuccess());
  } catch (error) {
    dispatch(uploadSingleFileFailure(error));
  }
};
