import { handleActions } from 'redux-actions';
import {
  fetchSignUpRequest,
  fetchSignUpSuccess,
  fetchSignUpFailure,
} from '../actions';

const defaultState = {
  error: null,
  isFetching: false,
  done: false,
};

export default handleActions(
  {
    [fetchSignUpRequest](state) {
      return {
        ...state,
        isFetching: true,
        done: false,
      };
    },
    [fetchSignUpSuccess](state) {
      return {
        ...state,
        isFetching: false,
        error: null,
        done: true,
      };
    },
    [fetchSignUpFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
