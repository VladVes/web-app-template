import React from 'react';
import PropTypes from 'prop-types';

const FileList = ({ files, itemComponent: Item, onItemRemove }) => (
  /* eslint-disable react/no-array-index-key */
  <div>
    {files.map((file, i) => <Item key={i} file={file} onRemove={onItemRemove ? () => onItemRemove(i) : null} />)}
  </div>
);

FileList.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
  })),
  itemComponent: PropTypes.func.isRequired,
  onItemRemove: PropTypes.func,
};

FileList.defaultProps = {
  onItemRemove: null,
  files: [],
};

export default FileList;
