import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import withSpinner from 'Shared/hocs/withSpinner';
import Links from './components/Links';
import { fetchLinks } from './redux/actions';

const LinksWithSpinner = withSpinner(Links);

class LinksContainer extends Component {
  static propTypes = {
    links: PropTypes.shape({
      link1: PropTypes.string.isRequired,
      link2: PropTypes.string.isRequired,
    }).isRequired,
    fetchLinks: PropTypes.func.isRequired,
    isFetching: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.fetchLinks();
  }

  // eslint-disable-next-line no-alert
  handleLinksFormSubmit = formValues => alert(formValues);

  render() {
    return (
      <LinksWithSpinner
        onSubmit={this.handleLinksFormSubmit}
        initialValues={this.props.links}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = state => ({
  links: state.example.links.values,
  isFetching: state.example.links.isFetching,
});

const mapDispatchToProps = { fetchLinks };

export default connect(mapStateToProps, mapDispatchToProps)(LinksContainer);
