import { handleActions } from 'redux-actions';
import themes from '../../misc/theme';
import actions from '../actions';

const themeDefaultState = {
  currentTheme: themes[0], // { _id, name, theme: { themeProps } } // todo: localStorage
  availableThemes: themes,
  isFetching: false,
  fetchError: null,
};

export const changeTheme = (state, { payload }) => {
  const { newTheme } = payload;
  return {
    ...state,
    currentTheme: newTheme,
  };
};

export const themeReducer = handleActions({
  [actions.changeCurrentTheme]: changeTheme,
}, themeDefaultState);

export default themeReducer;
