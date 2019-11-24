import { connectRouter } from 'connected-react-router';
import { reducer as reduxFormReducer } from 'redux-form';
import history from '../utils/browserHistory';
import modalReducer from '../common/reducers/mainModal';
import exampleReducer from '../modules/Example/reducers';
import signUpReducer from '../modules/SignUp/reducers';
import signInReducer from '../modules/SignIn/reducers';
import user from '../common/reducers/user';
import theme from '../common/reducers/theme';

export default {
  user,
  theme,
  router: connectRouter(history),
  form: reduxFormReducer,
  modal: modalReducer,
  example: exampleReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
};
