import React from 'react';
import PropTypes from 'prop-types';
import CloseButton from 'Shared/styledComponents/CloseModalButton';
import { FileListItemWraper, FileListItemImage } from './styled/FileListItem';

const FileListItem = ({ file: { url, title, uploaded }, onRemove, ...props }) => (
  <FileListItemWraper key={title} uploaded={uploaded}>
    {onRemove &&
      <CloseButton onClick={onRemove} />
    }
    <FileListItemImage alt={title} src={url} height={props.height} />
    <div>{title}</div>
  </FileListItemWraper>
);

FileListItem.propTypes = {
  file: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    uploaded: PropTypes.bool,
  }).isRequired,
  height: PropTypes.number,
  onRemove: PropTypes.func,
};


FileListItem.defaultProps = {
  height: 100,
  onRemove: null,
};

export default FileListItem;
