import { connect } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';
import states from '../../../constants/states';

const mapStateToProps = state => ({
  isLogged: state.currentUser.dataState === states.successed,
  isFetching: state.currentUser.dataState === states.requested,
});

export default connect(mapStateToProps)(PrivateRoute);
