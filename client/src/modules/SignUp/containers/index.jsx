import { connect } from 'react-redux';
import SignUpMain from '../components/SignUp';
import { fetchSignUp } from '../actions';

const mapStateToProps = state => ({ isSigned: state.signUp.done });

export default connect(mapStateToProps, { fetchSignUp })(SignUpMain);
