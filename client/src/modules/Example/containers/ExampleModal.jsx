import { connect } from 'react-redux';
import actions from '../../../common/actions';
import ExampleModal from '../components/ExampleModal';

const mapStateToProps = () => ({});

const mapDispatchToProps = { showModal: actions.showModal };

export default connect(mapStateToProps, mapDispatchToProps)(ExampleModal);
