import { createAction } from 'redux-actions';
import api from 'Utils/ApiClient';
import parseValidation from 'Utils/BackEndValidationParser';

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

export const fetchFilesRequest = createAction('FETCH_FILES_REQUEST');
export const fetchFilesSuccess = createAction('FETCH_FILES_SUCCESS');
export const fetchFilesFailure = createAction('FETCH_FILES_FAILURE');

export const fetchFiles = () => async (dispatch) => {
  try {
    dispatch(fetchFilesRequest());

    const response = await api.example.getFiles();

    dispatch(fetchFilesSuccess(response.data));
  } catch (error) {
    dispatch(fetchFilesFailure(error));
  }
};

export const uploadFiles = files => async (dispatch) => {
  try {
    dispatch(fetchFilesRequest());

    const formData = new FormData();

    Object.values(files).forEach((file) => {
      if (file._id) {
        formData.append('keepfiles[]', file._id);
      } else {
        formData.append('uploadfiles[]', file);
      }
    });

    const response = await api.example.setFiles(formData);

    dispatch(fetchFilesSuccess(response.data));
  } catch (error) {
    dispatch(fetchFilesFailure(error));
  }
};

export const postPersonData = personData => async () => {
  try {
    await api.example.postPersonData(personData);
  } catch (error) {
    if (error.response && error.response.status === 422) {
      // throws error upper if contains correct validation errors (not just status code)
      parseValidation(error.response.data.errors);
    }
  }
};
