import { connect } from 'react-redux';
import { hideModal } from '../../../common/actions/mainModal';
import SimpleExampleModal from '../components/ExampleModal/SimpleModal';

const mapStateToProps = () => ({});

const mapDispatchToProps = { hideModal };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleExampleModal);
