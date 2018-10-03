import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  static propTypes = {
    image: PropTypes.shape({ _id: PropTypes.string }).isRequired,
  };

  getFileUrl = id => `/uploads/${id}`;

  render() {
    const { image, ...other } = this.props;
    if (!image || !image._id) return null;
    const url = this.getFileUrl(image._id);
    return (<img alt={url} src={url} {...other} />);
  }
}
