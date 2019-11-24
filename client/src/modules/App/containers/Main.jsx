import { connect } from 'react-redux';
import Main from '../components/Main';
import actions from '../../../common/actions';
import states from '../../../constants/states';

const mapStateToProps = state => ({
  user: state.user,
  isUserFetching: state.user.dataState === states.requested,
  theme: state.theme,
});
const mapDispatchToProps = {
  fetchCurrentUser: actions.fetchCurrentUser,
  logOutUser: actions.clearCurrentUser,
  setTheme: actions.changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
