import { connect } from 'react-redux';
import Main from './components/Main';
import { fetchCurrentUser } from '../../../common/actions/user';

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => ({
  fetchCurrentUser: () => dispatch(fetchCurrentUser()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Main);