import lightTheme from './light';
import darkTheme from './dark';

const themes = [lightTheme, darkTheme];
const defaultTheme = lightTheme;

export const calculateTheme = (theme) => {
  if (!theme) throw new Error(`Attempted to changed theme to ${typeof theme}: ${theme}`);
  const themeName = typeof theme === 'string' ? theme : theme.name;
  const calculatedTheme = themes.find(t => t.name === themeName);
  return calculatedTheme || defaultTheme;
};

// exporting available theme names (used in calculateTheme)
export default themes;
