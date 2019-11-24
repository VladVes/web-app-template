import { createAction } from 'redux-actions';
import { calculateTheme } from '../../misc/theme';

export const changeCurrentTheme = createAction('CHANGE_CURRENT_THEME');

// theme comes as a string
export const changeTheme = theme => (dispatch) => {
  const newTheme = calculateTheme(theme);
  dispatch(changeCurrentTheme({ newTheme }));
  localStorage.setItem('currentTheme', newTheme.name);
}