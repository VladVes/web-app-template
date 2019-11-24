import { createAction } from 'redux-actions';
import { push } from 'react-router-redux';
import api from 'Utils/ApiClient';
import commonActions from '../../../common/actions';

export const fetchSignInRequest = createAction('FETCH_SIGN_IN_REQUEST');
export const fetchSignInSuccess = createAction('FETCH_SIGN_IN_SUCCESS');
export const fetchSignInFailure = createAction('FETCH_SIGN_IN_FAILURE');

// todo: rename to signIn
export const fetchSignIn = credentials => async (dispatch) => {
  try {
    dispatch(fetchSignInRequest());

    const response = await api.auth.signIn(credentials);
    const { token } = response.data;

    localStorage.setItem('token', token);
    commonActions.fetchCurrentUser();

    dispatch(fetchSignInSuccess());
    dispatch(push(''));
  } catch (error) {
    dispatch(fetchSignInFailure(error));
  }
};
