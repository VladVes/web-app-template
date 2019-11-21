import { connect } from 'react-redux';
import { hideModal } from '../../../common/actions/mainModal';
import CustomExampleModal from '../components/ExampleModal/CustomModal';

const mapStateToProps = () => ({});

const mapDispatchToProps = { hideModal };

export default connect(mapStateToProps, mapDispatchToProps)(CustomExampleModal);
