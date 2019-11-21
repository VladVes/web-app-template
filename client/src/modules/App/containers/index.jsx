import { connect } from 'react-redux';
import Main from '../components';
import { fetchCurrentUser } from '../../../common/actions/user';
import states from '../../../constants/states';

const mapStateToProps = (state) => ({
  isUserDataLoaded: state.currentUser.dataState === states.successed,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);