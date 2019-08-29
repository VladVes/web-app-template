import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import themes from 'Shared/theme';
import {
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserFailure,
  clearCurrentUserSuccess,
  changeCurrentTheme,
  // changeCurrentLanguage,
} from './actions';

const userDefaultState = {
  currentUser: null,
  isFetching: false,
  fetchError: null,
  validationErrors: {},
};

const themeDefaultState = {
  currentTheme: themes[0], // { _id, name, theme: { themeProps } } // todo: localStorage
  availableThemes: themes,
  isFetching: false,
  fetchError: null,
};

const defaultRequestReducer = state => ({
  ...state,
  fetchError: false,
  isFetching: true,
});

const defaultErrorReducer = (state, { payload }) => {
  const { error, validationErrors } = payload;
  const resultState = { ...state };
  if (error) resultState.error = error;
  if (validationErrors) resultState.validationErrors = { ...state.validationErrors, ...validationErrors };
  return resultState;
};

// region user
const fetchUserSuccess = (state, { payload }) => {
  const { user } = payload;
  return {
    ...state,
    currentUser: user,
    isFetching: false,
    fetchError: null,
  };
};

const clearUserSuccess = state => ({
  ...state,
  currentUser: null,
  isFetching: false,
  fetchError: null,
});

// endregion

// region theme

export const changeTheme = (state, { payload }) => {
  const { newTheme } = payload;
  return {
    ...state,
    currentTheme: newTheme,
  };
};

// endregion


export const userReducer = handleActions({
  [fetchCurrentUserSuccess]: fetchUserSuccess,
  [clearCurrentUserSuccess]: clearUserSuccess,
  // default
  [fetchCurrentUserRequest]: defaultRequestReducer,
  [fetchCurrentUserFailure]: defaultErrorReducer,
}, userDefaultState);

export const themeReducer = handleActions({
  [changeCurrentTheme]: changeTheme,
}, themeDefaultState);

export default combineReducers({
  user: userReducer,
  theme: themeReducer,
});
