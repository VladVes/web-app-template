import { handleActions } from 'redux-actions';

import states from '../../../constants/states';
import {
  fetchLinksRequest,
  fetchLinksSuccess,
  fetchLinksFailure,
} from '../actions/linksActions';

const defaultState = {
  values: {
    link1: '',
    link2: '',
  },
  error: null,
  dataState: states.none,
};

export default handleActions(
  {
    [fetchLinksRequest](state) {
      return {
        ...state,
        dataState: states.requested,
      };
    },
    [fetchLinksSuccess](state, { payload }) {
      return {
        ...state,
        values: payload,
        dataState: states.successed,
        error: null,
      };
    },
    [fetchLinksFailure](state, { payload }) {
      return {
        ...state,
        dataState: states.failed,
        error: payload,
      };
    },
  },
  defaultState,
);
