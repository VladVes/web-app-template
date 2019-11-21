import { connect } from 'react-redux';
import ExampleModal from '../components/ExampleModal';
import { showModal } from '../../../../common/actions/mainModal';


const mapStateToProps = () => ({});

const mapDispatchToProps = { showModal };

export default connect(mapStateToProps, mapDispatchToProps)(ExampleModal);
