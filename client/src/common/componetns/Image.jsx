import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FileProp from '../prop-types/FileProp';

export default class Image extends Component {
  static propTypes = {
    image: FileProp,
    defaultImagePath: PropTypes.string,
  };

  static defaultProps = {
    image: null,
    defaultImagePath: null,
  };

  getFileUrl = (image, defaultImage) => (image ? `/uploads/${image._id}` : defaultImage);

  render() {
    const { image, defaultImagePath, ...other } = this.props;
    if (!defaultImagePath && !(image && image._id)) return null;

    const url = this.getFileUrl(image, defaultImagePath);
    return (<img alt={url} src={url} {...other} />);
  }
}
