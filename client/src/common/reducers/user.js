import { handleActions } from 'redux-actions';
import actions from '../actions';
import states from '../../constants/states';

const userDefaultState = {
  currentUser: null,
  fetchError: null,
  validationErrors: {},
  dataState: states.none,
};

const defaultRequestReducer = state => ({
  ...state,
  fetchError: false,
  dataState: states.requested,
});

const defaultErrorReducer = (state, { payload }) => {
  const { error, validationErrors } = payload;
  const resultState = { ...state, dataState: states.failed };
  if (error) resultState.error = error;
  if (validationErrors) resultState.validationErrors = { ...state.validationErrors, ...validationErrors };
  return resultState;
};

const fetchUserSuccess = (state, { payload }) => {
  const { user } = payload;
  return {
    ...state,
    currentUser: user,
    dataState: states.successed,
    fetchError: null,
  };
};

const clearUserSuccess = state => ({
  ...state,
  currentUser: null,
  dataState: states.none,
  fetchError: null,
});

export const userReducer = handleActions({
  [actions.fetchCurrentUserSuccess]: fetchUserSuccess,
  [actions.clearCurrentUserSuccess]: clearUserSuccess,
  // default
  [actions.fetchCurrentUserRequest]: defaultRequestReducer,
  [actions.fetchCurrentUserFailure]: defaultErrorReducer,
}, userDefaultState);

export default userReducer;
