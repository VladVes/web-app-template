import { reducer as form } from 'redux-form';
import modal from '../common/reducers/mainModal';
import example from '../modules/ExampleModule/reducers';
// import signUp from '../modules/SignIn';
import signIn from '../modules/SignIn/reducers';
import currentUser from '../common/reducers/user';

export default {
  form,
  modal,
  example,
  signUp,
  signIn,
  currentUser,
};
