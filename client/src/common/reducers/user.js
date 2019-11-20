import { handleActions } from 'redux-actions';
import states from '../../constants/states';
import {
  fetchCurrentUserRequest,
  fetchCurrentUserSuccess,
  fetchCurrentUserFailure,
} from '../actions/user';

const defaultState = {
  data: null,
  error: null,
  dataState: states.none,
};

export default handleActions(
  {
    [fetchCurrentUserRequest](state) {
      return {
        ...state,
        dataState: states.requested,
      };
    },
    [fetchCurrentUserSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        dataState: states.successed,
        error: null,
      };
    },
    [fetchCurrentUserFailure](state, { payload }) {
      return {
        ...state,
        dataState: states.failed,
        error: payload,
      };
    },
  },
  defaultState,
);
