import { connect } from 'react-redux';
import SignUpMain from '../components';
import { fetchSignUp } from '../actions';

export default connect(null, { fetchSignUp })(SignUpMain);
