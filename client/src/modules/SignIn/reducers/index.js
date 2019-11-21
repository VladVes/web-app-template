import { handleActions } from 'redux-actions';
import {
  fetchSignInRequest,
  fetchSignInSuccess,
  fetchSignInFailure,
} from '../actions';
import states from '../../../constants/states';

const defaultState = {
  error: null,
  dataState: states.none,
};

export default handleActions(
  {
    [fetchSignInRequest](state) {
      return {
        ...state,
        dataState: states.requested,
      };
    },
    [fetchSignInSuccess](state) {
      return {
        ...state,
        dataState: states.successed,
        error: null,
      };
    },
    [fetchSignInFailure](state, { payload }) {
      return {
        ...state,
        dataState: states.failed,
        error: payload,
      };
    },
  },
  defaultState,
);
