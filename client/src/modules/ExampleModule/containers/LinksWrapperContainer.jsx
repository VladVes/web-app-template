import { connect } from 'react-redux';
import LinksWrapper from '../components/Links/LinksWrapper';
import { fetchLinks } from '../actions/linksActions';
import states from '../../../constants/states';

const mapStateToProps = state => ({
  links: state.example.links.values,
  isFetching: state.example.links.dataState === states.requested,
});

const mapDispatchToProps = { fetchLinks };

export default connect(mapStateToProps, mapDispatchToProps)(LinksWrapper);
