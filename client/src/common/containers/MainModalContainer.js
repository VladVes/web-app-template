import { connect } from 'react-redux';
import MainModal from '../componetns/MainModal';
import { hideModal } from '../actions/mainModal';

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = { hideModal };

export default connect(mapStateToProps, mapDispatchToProps)(MainModal);
