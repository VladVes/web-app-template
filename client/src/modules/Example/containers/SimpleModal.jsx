import { connect } from 'react-redux';
import SimpleExampleModal from '../components/ExampleModal/SimpleModal';
import actions from '../../../common/actions';


const mapStateToProps = () => ({});

const mapDispatchToProps = { hideModal: actions.hideModal };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleExampleModal);
