import { createAction } from 'redux-actions';
import api from 'Utils/ApiClient';

export const fetchCurrentUserRequest = createAction('FETCH_CURRENT_USER_REQUEST');
export const fetchCurrentUserSuccess = createAction('FETCH_CURRENT_USER_SUCCESS');
export const fetchCurrentUserFailure = createAction('FETCH_CURRENT_USER_FAILURE');
export const clearCurrentUserSuccess = createAction('CLEAR_CURRENT_USER_SUCCESS');

export const clearCurrentUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch(clearCurrentUserSuccess());
};

export const fetchCurrentUser = () => async (dispatch) => {
  dispatch(fetchCurrentUserRequest());

  if (localStorage.getItem('token')) {
    try {
      const response = await api.user.getCurrent();
      const user = response.data;
      dispatch(fetchCurrentUserSuccess(user));
      localStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      dispatch(fetchCurrentUserFailure(e));
      dispatch(clearCurrentUser());
    }
  } else {
    // todo: examine this part
    // in case when 'token' missing, but 'user' exist we signing out
    dispatch(clearCurrentUser());
  }
};
