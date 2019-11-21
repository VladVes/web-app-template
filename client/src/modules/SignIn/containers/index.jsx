import { connect } from 'react-redux';
import SignIn from '../components/SignIn';
import { fetchSignIn } from '../actions';

export default connect(null, { fetchSignIn })(SignIn);
