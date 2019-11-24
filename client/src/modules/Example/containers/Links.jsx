
import { connect } from 'react-redux';
import LinksMain from '../components/Links';
import { fetchLinks } from '../actions/links';

const mapStateToProps = state => ({
  links: state.example.links.values,
  isFetching: state.example.links.isFetching,
});

const mapDispatchToProps = { fetchLinks };

export default connect(mapStateToProps, mapDispatchToProps)(LinksMain);
