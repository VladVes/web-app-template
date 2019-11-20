import { reducer as reduxFormReducer } from 'redux-form';
import modal from '../common/reducers/mainModal';
import exampleReducer from '../../ExampleContrainer/redux/reducer';
import signUpReducer from '../../SignUpContainer/redux/reducer';
import signInReducer from '../../SignInContainer/redux/reducer';
import currentUser from '../common/reducers/user';

export default {
  form: reduxFormReducer,
  modal,
  example: exampleReducer,
  signUp: signUpReducer,
  signIn: signInReducer,
  currentUser,
};
