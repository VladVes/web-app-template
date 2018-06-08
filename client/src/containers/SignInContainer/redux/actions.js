import { createAction } from 'redux-actions';
import api from '../../../utils/ApiClient';

export const fetchSignInRequest = createAction('FETCH_SIGN_IN_REQUEST');
export const fetchSignInSuccess = createAction('FETCH_SIGN_IN_SUCCESS');
export const fetchSignInFailure = createAction('FETCH_SIGN_IN_FAILURE');

export const fetchSignIn = credentials => async (dispatch) => {
  try {
    dispatch(fetchSignInRequest());

    const response = await api.auth.signIn(credentials);
    const { token } = response.data;

    localStorage.setItem('token', token);

    dispatch(fetchSignInSuccess());
  } catch (error) {
    dispatch(fetchSignInFailure(error));
  }
};

export const fetchCurrentUserRequest = createAction('FETCH_CURRENT_USER_REQUEST');
export const fetchCurrentUserSuccess = createAction('FETCH_CURRENT_USER_SUCCESS');
export const fetchCurrentUserFailure = createAction('FETCH_CURRENT_USER_FAILURE');

export const fetchCurrentUser = () => async (dispatch) => {
  try {
    dispatch(fetchCurrentUserRequest());

    if (localStorage.getItem('token')) {
      setTimeout(async () => {
        const response = await api.user.getCurrent();

        const user = response.data;

        dispatch(fetchCurrentUserSuccess(user));
      }, 3000);
    } else {
      setTimeout(() => {
        dispatch(fetchCurrentUserSuccess(null));
      }, 3000);
    }
  } catch (error) {
    dispatch(fetchCurrentUserFailure(error));
  }
};
