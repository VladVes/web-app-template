import { handleActions } from 'redux-actions';

import actions from '../actions';

const defaultState = {
  type: '',
  show: false,
  modalProps: null,
  loading: false,
  error: null,
};

export default handleActions(
  {
    [actions.showModalRequest](state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    [actions.hideModalRequest](state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    [actions.modalError](state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  defaultState,
);
