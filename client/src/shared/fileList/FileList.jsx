import React from 'react';
import PropTypes from 'prop-types';

const FileList = ({ files, itemComponent: Item, onItemRemove }) => (
  <div>
    {files.map((file, i) =>
      <Item key={file.id} file={file} onRemove={onItemRemove ? e => onItemRemove(e, i) : null} />)
    }
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
