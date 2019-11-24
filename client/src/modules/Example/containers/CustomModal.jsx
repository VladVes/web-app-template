import { connect } from 'react-redux';
import actions from '../../../common/actions';
import CustomExampleModal from '../components/ExampleModal/CustomModal';

const mapStateToProps = () => ({});

const mapDispatchToProps = { hideModal: actions.hideModal };

export default connect(mapStateToProps, mapDispatchToProps)(CustomExampleModal);
