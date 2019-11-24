import { connect } from 'react-redux';
import MainModal from '../componetns/MainModal';
import actions from '../actions';

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = { hideModal: actions.hideModal };

export default connect(mapStateToProps, mapDispatchToProps)(MainModal);
