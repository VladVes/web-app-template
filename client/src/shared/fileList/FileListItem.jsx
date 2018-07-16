import React from 'react';
import PropTypes from 'prop-types';
import { FileListItemWraper, FileListItemImage } from './styled/FileListItem';

const FileListItem = ({ file: { url, title }, onRemove, ...props }) => (
  <FileListItemWraper key={title}>
    {onRemove &&
      <button>×</button>
    }
    <FileListItemImage alt={title} src={url} height={props.height} />
    <div>{title}</div>
  </FileListItemWraper>
);

FileListItem.propTypes = {
  file: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  height: PropTypes.number,
  onRemove: PropTypes.func,
};


FileListItem.defaultProps = {
  height: 100,
  onRemove: null,
};

export default FileListItem;
