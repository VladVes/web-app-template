import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LinksWrapper from '../../containers/LinksWrapperContainer';
import withSpinner from '../../../../decorators/withSpinner';

const LinksWithSpinner = withSpinner(LinksWrapper);

class LinksMain extends Component {
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

  // eslint-disable-next-line
  handleLinksFormSubmit = formValues => console.log(formValues);

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

export default LinksMain;
