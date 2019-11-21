import { connect } from 'react-redux';
import SignIn from '../components';
import { fetchSignIn } from '../actions';

export default connect(null, { fetchSignIn })(SignIn);
