import { handleActions } from 'redux-actions';
import {
  fetchSignUpRequest,
  fetchSignUpSuccess,
  fetchSignUpFailure,
} from '../actions';
import states from '../../../constants/states';

const defaultState = {
  error: null,
  dataState: states.none,
};

export default handleActions(
  {
    [fetchSignUpRequest](state) {
      return {
        ...state,
        dataState: states.requested,
      };
    },
    [fetchSignUpSuccess](state) {
      return {
        ...state,
        dataState: states.successed,
        error: null,
      };
    },
    [fetchSignUpFailure](state, { payload }) {
      return {
        ...state,
        dataState: states.failed,
        error: payload,
      };
    },
  },
  defaultState,
);
