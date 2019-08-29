import { connectRouter } from 'connected-react-router';
import { reducer as reduxFormReducer } from 'redux-form';
import history from '../browserHistory';
import modalReducer from '../../../shared/modal/redux/reducer';
import exampleReducer from '../../ExampleContrainer/redux/reducer';
import signUpReducer from '../../SignUpContainer/redux/reducer';
import signInReducer from '../../SignInContainer/redux/reducer';
import appReducer from './app/reducer';

export default {
  router: connectRouter(history),
  form: reduxFormReducer,
  modal: modalReducer,
  example: exampleReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  app: appReducer,
};
