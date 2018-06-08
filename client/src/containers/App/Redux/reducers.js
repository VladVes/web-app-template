import { reducer as reduxFormReducer } from 'redux-form';
import exampleReducer from '../../ExampleContrainer/redux/reducer';
import signUpReducer from '../../SignUpContainer/redux/reducer';
import signInReducer from '../../SignInContainer/redux/signInReducer';
import currentUserReducer from '../../SignInContainer/redux/currentUserReducer';

export default {
  form: reduxFormReducer,
  example: exampleReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  currentUser: currentUserReducer,
};
