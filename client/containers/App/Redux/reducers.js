import { reducer as reduxFormReducer } from 'redux-form';
import exampleReducer from '../../ExampleContrainer/redux/reducers';

export default {
  form: reduxFormReducer,
  example: exampleReducer
};
