import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FileList extends Component {
  static propTypes = {
    files: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
    })),
    itemComponent: PropTypes.node.isRequired,
    onItemRemove: PropTypes.func,
  };

  static defaultProps = {
    onItemRemove: null,
    files: [],
  };

  render() {
    const { files, itemComponent, onItemRemove } = this.props;
    return (
      <div>
        {files.map((file, i) => itemComponent({
          file,
          onRemove: onItemRemove ? () => onItemRemove(i) : null,
        }))}
      </div>
    );
  }
}
