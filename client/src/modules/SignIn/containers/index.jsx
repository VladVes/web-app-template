import { connect } from 'react-redux';
import SignInMain from '../components';
import { fetchSignIn } from '../actions';

export default connect(null, { fetchSignIn })(SignInMain);
